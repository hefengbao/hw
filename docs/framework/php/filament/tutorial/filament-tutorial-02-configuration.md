# Filament 入门：配置

## 初始配置

虽然通过 `php artisan vendor:publish --tag=filament-config` 发布了配置文件，但是 `config/filament.php` 中的配置项乏善可陈，主要的配置在 PanelProvide 中设置，创建的 `AdminPanelProvider` 中，初始有如下内容：

```php
class AdminPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->default()
            ->id('admin') // 运行 php artisan filament:install --panels 时设置的 ID,可自行修改
            ->path('admin') // 路由前缀，可自行修改
            ->login() // 登录页面
            ->colors([
                'primary' => Color::Amber, // 主色调
            ])
            ->discoverResources(in: app_path('Filament/Resources'), for: 'App\\Filament\\Resources') // 资源（Resource）目录，app/Filament/Resources
            ->discoverPages(in: app_path('Filament/Pages'), for: 'App\\Filament\\Pages') // 页面（Page）目录, app/Filament/Pages
            ->pages([ // 框架提供的默认页面
                Pages\Dashboard::class,
            ])
            ->discoverWidgets(in: app_path('Filament/Widgets'), for: 'App\\Filament\\Widgets') // 小部件（Widget）目录，app/Filament/Widgets
            ->widgets([ // 框架提供的默认小部件
                Widgets\AccountWidget::class,
                Widgets\FilamentInfoWidget::class,
            ])
            ->middleware([
                ...
            ])
            ->authMiddleware([
                ...
            ]);
    }
}
```

![](https://www.8ug.icu/storage/upload/images/20231216/OWVvhXKiO9cTbj7rui3vUdi1rIPKmHl9vamzNcRB.png)

## 可配置项

1. `brandName(?string name)` 系统名称，传入一个字符串
2. `brandLogo()` 系统 Logo,传入 logo 路径
3. `brandLogoHeight()` Logo 高度
4. `registration()` 注册页面，可传入自定义的注册页面（Page）作为参数
5. `passwordReset()` 找回密码页面，可传入自定义的找回密码页面（Page）作为参数
6. `emailVerification()` 发送邮箱验证邮件页面，可传入自定义的邮箱验证页面（Page）作为参数
7. `sidebarCollapsibleOnDesktop()`  桌面端浏览器访问时折叠侧导航栏，但是会显示导航图标
8. `sidebarFullyCollapsibleOnDesktop()` 完全折叠侧导航栏

## 创建其他面板（Panel）

有时管理员界面与普通用户界面分开，可以创建新的面板（例如 app），有两种方法：

1. 使用 `php artisan filament:install --panels` 命令
2. 使用 `php artisan make:filament-panel app` 命令

可以看下 `appProviders/Filament/AppPanelProvider.php` 文件：

```php
class AppPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->id('app')
            ->path('app')
            ->colors([
                'primary' => Color::Amber,
            ])
            ->discoverResources(in: app_path('Filament/App/Resources'), for: 'App\\Filament\\App\\Resources')
            ->discoverPages(in: app_path('Filament/App/Pages'), for: 'App\\Filament\\App\\Pages')
            ->pages([
                Pages\Dashboard::class,
            ])
            ->discoverWidgets(in: app_path('Filament/App/Widgets'), for: 'App\\Filament\\App\\Widgets')
            ->widgets([
                ...
            ])
            ->middleware([
                ...
            ])
            ->authMiddleware([
                ...
            ]);
    }
}
```

重点关注一下 `discoverResources` 、`discoverPages` 、`discoverWidgets` 三个配置项和 `AdminPanelProvider.php` 的区别， 会发现多了一层目录结构。如果有多个面板（Panel）,那么也可以修改一下 `AdminPanelProvider.php` 中这三项的值，以便更好的组织目录结构。

`AdminPanelProvider.php` 配置后的示例：

```php
class AdminPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->default()
            ->id('admin') // 运行 php artisan filament:install --panels 时设置的 ID,可自行修改
            ->path('admin') // 路由前缀，可自行修改
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
                ...
            ])
            ->authMiddleware([
                Authenticate::class,
            ]);
    }
}
```

代码：[https://github.com/hefengbao/filament-demo](https://github.com/hefengbao/filament-demo)