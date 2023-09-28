---
title: php artisan route:list  Call to undefined function Yajra\Pdo\oci_connect()
date: 2017-07-06 09:28:50
updated: 2019-03-30 15:50:40
tags: laravel
categories: 
- PHP
- Laravel
permalink: call-to-undefined-function-Yajra-Pdo-oci-connect.html
---
Laravel 框架中用 yajra/laravel-oci8 链接 Oracle 数据库，查询数据没问题，但是当运行 `php artisan route:list` 命令时会报错：

```
C:\wamp64\www\stat2>php artisan route:list

  [Symfony\Component\Debug\Exception\FatalThrowableError]
  Call to undefined function Yajra\Pdo\oci_connect()

```

** 原因： ** CLI 模式下没有开启 `oci8` 扩展

我在 Windows 上用 WAMPServer 配置的 PHP 开发环境。

在浏览器中访问 `http://localhost/?phpinfo=1` ，可找到如下内容：

```
Configuration File (php.ini) Path	C:\Windows
Loaded Configuration File	C:\wamp64\bin\apache\apache2.4.23\bin\php.ini
```

加载的配置文件是`C:\wamp64\bin\apache\apache2.4.23\bin\php.ini`

CLI模式下：

```bash
C:\wamp64\www\stat2>php --ini
Configuration File (php.ini) Path: C:\Windows
Loaded Configuration File:         C:\wamp64\bin\php\php7.0.10\php.ini
Scan for additional .ini files in: (none)
Additional .ini files parsed:      (none)
```

加载的配置文件是 ` C:\wamp64\bin\php\php7.0.10\php.ini`

打开两个文件可发先它们开启的扩展是不一样的

** 解决办法： **

在 ` C:\wamp64\bin\php\php7.0.10\php.ini` 文件中开启 `oci8` 扩展

```
extension=php_oci8_12c.dll
;如果需要使用PDO
extension=php_pdo_oci.dll
```