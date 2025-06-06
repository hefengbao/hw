# Composer 安装使用

Composer - A Dependency Manager for PHP（PHP的依赖管理器）。

官网：

https://getcomposer.org/

PHP 包需发布到 `https://packagist.org/`。


## 安装

Windows 系统直接下载安装即可 [https://getcomposer.org/Composer-Setup.exe](https://getcomposer.org/Composer-Setup.exe) 。前提是安装了 `PHP`。

Ubuntu 系统：

```shell
cd ~

curl -sS https://getcomposer.org/installer | php

mv composer.phar /usr/local/bin/composer
```

## 基本使用

对常用的框架如 `Laravel` 等，composer 所需的配置文件 `composer.json` 已在更目录添加，要做的往往是安装所依赖的包：

```shell
composer install

//或者

composer update
```

如果不使用框架，完全从零开始搭建项目，创建项目目录，比如 `demo`, 进入目录打开 Shell, 运行 `composer init` 命令,一步一步操作即可，示例如下：

```bash

  Welcome to the Composer config generator



This command will guide you through creating your composer.json config.

Package name (<vendor>/<name>) [bao/demo]: hefengbao/demo
Description []: composer init 示例
Author [n to skip]: hefengbao
Minimum Stability []:
Package Type (e.g. library, project, metapackage, composer-plugin) []: project
License []: MIT

Define your dependencies.

Would you like to define your dependencies (require) interactively [yes]?
Search for a package:
Would you like to define your dev dependencies (require-dev) interactively [yes]?
Search for a package:
Add PSR-4 autoload mapping? Maps namespace "Hefengbao\Demo" to the entered relative path. [src/, n to skip]:

{
    "name": "hefengbao/demo",
    "description": "composer init 示例",
    "type": "project",
    "license": "MIT",
    "autoload": {
        "psr-4": {
            "Hefengbao\\Demo\\": "src/"
        }
    },
    "authors": [
        {
            "name": "hefengbao"
        }
    ],
    "require": {}
}

Do you confirm generation [yes]?
Generating autoload files
Generated autoload files
PSR-4 autoloading configured. Use "namespace Hefengbao\Demo;" in src/
Include the Composer autoloader with: require 'vendor/autoload.php';
```

## 安装依赖

例如项目需要依赖 PHP 的日期时间处理包 `Carbon`， 在 [https://packagist.org](https://packagist.org) 上搜索 `nesbot/carbon`：

```shell
composer require nesbot/carbon
```

查看 `composer.json` 的 `require` 项，已添加 `"nesbot/carbon": "*"`：

```json
{
    "name": "hefengbao/demo",
    "description": "composer init 示例",
    "type": "project",
    "license": "MIT",
    "autoload": {
        "psr-4": {
            "Hefengbao\\Demo\\": "src/"
        }
    },
    "authors": [
        {
            "name": "hefengbao"
        }
    ],
    "require": {
        "nesbot/carbon": "*"
    }
}

```

默认是使用最新版本，有时由于兼容问题，需要指定特定版本：

```shell
 composer require nesbot/carbon:"3.*"
```

参考 https://blog.csdn.net/u011383596/article/details/119429833 了解更多。

如果只在开发环境使用，`pestphp/pest` 是一个 php 测试框架， 通过 `--dev` 参数指定只在开发环境加载：

```shell
composer require pestphp/pest --dev
```

## 其他

可在 `composer.json` 文件添加如下配置，那么 `require` 中的项会排序：

```json
"config": {
    "sort-packages": true
}
```


[你生产环境的 Composer 是这样吗？ | Laravel China 社区 (learnku.com)](https://learnku.com/articles/26343)