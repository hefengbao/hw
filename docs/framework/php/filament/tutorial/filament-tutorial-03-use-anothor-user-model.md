# Filament 入门：替换默认的 User 用户模型

Filament 默认使用 `app/Models/User.php` 作为用户模型，在某些场景下，我们可能想要把管理员和其他用户分开管理，接下来的文章将演示如何配置其他用户模型。

新建 `AdminUser` 模型和数据库迁移文件。

```shell
php artisan make:model AdminUser -m
```

编辑 `xxxx_xx_xx_xxxxxx_create_admin_users_table.php`:

```php
public function up(): void
{
	Schema::create('admin_users', function (Blueprint $table) {
			$table->id();
			$table->string('name');
			$table->string('email');
			$table->string('password');
			$table->string('role')->nullable();
			$table->rememberToken();
			$table->timestamps();
	});
}
```

```php
php artisan migrate
```

修改 `app/Models/AdminUser.php` :

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class AdminUser extends Authenticatable
{
    use HasFactory;

    protected $fillable = ['name', 'email', 'password'];
}

```

编辑 `app/config/auth.php`:

```php
<?php

return [

    'guards' => [
        'web' => [
            'driver' => 'session',
            'provider' => 'users',
        ],

        'admin' => [
            'driver' => 'session',
            'provider' => 'admin_users',
        ],
    ],

    'providers' => [
        'users' => [
            'driver' => 'eloquent',
            'model' => App\Models\User::class,
        ],

        'admin_users' => [
            'driver' => 'eloquent',
            'model' => App\Models\AdminUser::class,
        ],
    ],
];

```

主要是添加 `admin` guard。

修改 `app/Provides/Filament/AdminPanelProver.php`, 使用 `authGuard()` 方法指定 guard 为 `admin` 即可，一个配置示例：

```php
class AdminPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->default()
            ->id('admin') // 运行 php artisan filament:install --panels 时设置的 ID,可自行修改
            ->path('admin') // 路由前缀，可自行修改
            ->authGuard('admin')
            ->brandName('FilamentDemo') // 系统名称
            ->brandLogo(null) // Logo 路径
            ->brandLogoHeight(null) // Logo 高度
            ->login() // 登录页面
            ->registration() // 注册页面
            ->passwordReset() // 找回密码
            ->emailVerification() // 验证邮箱
            //->sidebarCollapsibleOnDesktop() // 桌面端浏览器访问时折叠侧导航栏，但是会显示导航图标
            ->sidebarFullyCollapsibleOnDesktop() // 完全折叠侧导航栏
            ->colors([
                'primary' => Color::Amber, // 主色调
            ])
            ->discoverResources(in: app_path('Filament/Admin/Resources'), for: 'App\\Filament\\Admin\\Resources') // 资源（Resource）目录，app/Filament/Resources
            ->discoverPages(in: app_path('Filament/Admin/Pages'), for: 'App\\Filament\\Admin\\Pages') // 页面（Page）目录, app/Filament/Pages
            ->pages([ // 框架提供的默认页面
                Pages\Dashboard::class,
            ])
            ->discoverWidgets(in: app_path('Filament/Admin/Widgets'), for: 'App\\Filament\\Admin\\Widgets') // 小部件（Widget）目录，app/Filament/Widgets
            ->widgets([ // 框架提供的默认小部件
                Widgets\AccountWidget::class,
                Widgets\FilamentInfoWidget::class,
            ])
            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                VerifyCsrfToken::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
            ])
            ->authMiddleware([
                Authenticate::class,
            ]);
    }
}
```

当前 `AdminPanelProvider` 是默认服务提供者（是在这里`$panel->default()` 配置的），因此可以通过 `php artisan make:filament-user` 向 `admin_users` 表中填充数据。
