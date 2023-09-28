---
title: 已删除的包 在运行 package:discover 命令时出现 Class not found 错误？
date: 2018-07-06 10:09:51
updated: 2019-03-29 22:22:16
tags: laravel
categories: 
- PHP
- Laravel
permalink: package-discover-class-not-found-N3c5HDIQ.html
---
用 `spatie/laravel-permission` 替换 `zizaco/entrust` 做权限管理，把代码同步到服务器，我通过 `composer install` 命令移除了 `zizaco/entrust`  ，然后运行到最后出现如下错误：

```
> Illuminate\Foundation\ComposerScripts::postAutoloadDump
> php artisan package:discover

In ProviderRepository.php line 208:

  Class 'Zizaco\Entrust\EntrustServiceProvider' not found  
```

原因：
我之前运行了 `php artisan config:cache` 命令做优化，缓存导致的~

解决：

```
php artisan config:clear

composer install
```