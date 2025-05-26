# Filament 入门：资源（Resource）

资源（Resource）是 Filament 中实现业务逻辑的地方。通过 `php artisan make:filament-resource` 命令创建，示例：

```shell
php artisan make:filament-resource AdminUser
```

查看 `app/Filament/Admin/Resources/AdminUserResource.php` 文件：

```php
class AdminUserResource extends Resource
{
    protected static ?string $model = AdminUser::class;
		
		...
}
```

可以看到，默认情况下 `php artisan make:filament-resource AdminUser` 中的 `AdminUser` 指定为模型，即资源和模型是对应的，当然，创建了资源后，也可以重新指定所要对应的模型。

运行系统：

```
php artisan serve
```

访问 `http://127.0.0.1:8000/admin` ,登陆后查看

新建的资源已经添加到了左侧导航。

一些可能的配置：

```php
class AdminUserResource extends Resource
{
    protected static ?string $modelLabel = '管理员'; // 模型标签
    protected static ?string $pluralModelLabel = '管理员';  // 复数模型标签
    protected static ?string $navigationLabel = null; // 导航标签,默认为null,此时使用$pluralModelLabel，当时能是""
    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack'; // 导航标签
}
```

除了 `AdminUserResource.php` 外，还有三个 Page : `CreateAdminUser.php`、`EditAdminUser.php`、`ListAdminUser.php`, 分别是创建、编辑、和列表，需要添加到 `AdminUserResource` 的 `getPages` 方法中才能生效，默认已添加，如果不需要某个功能，注释掉即可。

```php
class AdminUserResource extends Resource
{
    public static function getPages(): array
    {
        return [
            'index' => Pages\ListAdminUsers::route('/'),
            'create' => Pages\CreateAdminUser::route('/create'),
            'edit' => Pages\EditAdminUser::route('/{record}/edit'),
        ];
    }
}
```

