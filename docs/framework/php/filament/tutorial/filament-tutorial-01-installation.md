# Filament 入门：安装

## 创建项目

```shell
composer create-project laravel/laravel filament-demo

cd filament-demo
```

## 安装 filament

```shell
composer require filament/filament:"^3.1" -W
```

## 创建面板（Panel）

```php
php artisan filament:install --panels
```

按默认选项即可。

创建了 `app/Providers/Filament/AdminPanelProvider.php` （命名规则是创建面板时输入的 ID 首字母大写 + PanelProvider 组成）,默认会加入 `config/app.php` 中的 `providers` 数组中，如果没有加入成功，则需要手动加入。 

## 创建用户

需要先运行 `php artisan migrate` 创建数据表。

```php
php artisan make:filament-user
```

## 运行项目

```shell
php artisan serve
```

访问 `http://127.0.0.1:8001/admin` 。

基本的安装完成。

## 其他

按文档操作即可。

###  发布配置

```shell
php artisan vendor:publish --tag=filament-config
```

### 发布翻译

```shell
php artisan vendor:publish --tag=filament-panels-translations

php artisan vendor:publish --tag=filament-actions-translations
 
php artisan vendor:publish --tag=filament-forms-translations
 
php artisan vendor:publish --tag=filament-notifications-translations
 
php artisan vendor:publish --tag=filament-tables-translations
 
php artisan vendor:publish --tag=filament-translations
```

参考：https://filamentphp.com/docs/3.x/panels/installation

代码： [https://github.com/hefengbao/filament-demo](https://github.com/hefengbao/filament-demo)
