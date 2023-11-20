---
title: >-
  Erroneous data format for unserializing 'Symfony Component Routing
  CompiledRoute'
date: 2020-04-04 13:31:21
updated: 2020-04-04 13:31:21
tags: laravel
categories: 
- PHP 
- Laravel
permalink: Erroneous-data-format-for-unserializing-Symfony-Component-Routing-CompiledRoute.html
---



运行 `php artisan route:cache` 出现如下错误：

```
ErrorException
Erroneous data format for unserializing 'Symfony\Component\Routing\CompiledRoute'
```

{% img /images/2020040401.jpg %}

运行其他一些命令也会出现如上错误，

删除 `bootstap/cache/route.php` 文件。