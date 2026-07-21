# PHP

[FrankenPHP：现代 PHP 应用服务器](https://frankenphp.dev/cn/)

## 安装

- [Ubuntu 服务器配置 LEMP 环境](https://hefengbao.github.io/blog/20170418-ubuntu-install-lemp)
- [Windows10 搭建 php 环境](https://hefengbao.github.io/blog/20200206-windows-10-php-env)
- [Ubuntu 安装 PHP 的 PDO_OCI 扩展](https://hefengbao.github.io/blog/20200410-intall-php-pdo-oci-extension-on-ubuntu)
- [PHP Opcache](https://hefengbao.github.io/blog/20211013-php-opcache-01)

## 使用

- [如何通过 PHP-FPM 配置 Nginx 与 PHP 协同工作](https://hefengbao.github.io/blog/20241206-how-to-configure-nginx-to-work-with-php-via-php-fpm)

## Q & A

- [ErrorException  : symlink(): Input/output error](https://hefengbao.github.io/blog/20200115-ErrorException-symlink-Input-output-error)

- Repository 'https://ppa.launchpadcontent.net/ondrej/php/ubuntu noble InRelease' changed its 'Label' value from 'PPA for PHP' to 'Use https://packages.sury.org/php/ instead'

``` shell
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php.list
```

移除 `/etc/apt/sources.list.d/` 目录下包含 `ondrej/php` 或 `ppa.launchpadcontent.net` 的 `.list` 文件
## Composer

### Usage

- [Composer 安装使用](./composer/learn-composer)

### Q & A

- [composer update: Discard changes [y,n,v,d,s,?]?](https://hefengbao.github.io/blog/20200103-composer-update-discard-changes-ynvds)
- [proc_open(): fork failed - Cannot allocate memory](https://hefengbao.github.io/blog/20200103-proc_open-fork-failed%20-cannot-allocate-memory)
## PIE

[Home :: Documentation :: PIE Documentation](https://php.github.io/pie/#docs/index)
## WAMPServer

### Usage

- [WAMPServer为Laravel项目配置alias](https://hefengbao.github.io/blog//20180412-wampserver-add-alias-for-laravel-programe)
- [WAMPServer之Apache日志分割](https://hefengbao.github.io/blog/20180813-wampserver-apche-logs-setting)

### Q & A

- [WAMP: You don\'t have permission to access on this server](https://hefengbao.github.io/blog/20170619-wamp-403)