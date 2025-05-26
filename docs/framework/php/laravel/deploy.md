# 部署

## 优化 composer 加载

```shell
composer install --no-dev --prefer-dist --prefer-stable
```

```
1. `composer dump-autoload --optimize`:
   - `composer dump-autoload`：这个命令会重新生成Composer的自动加载映射。在Laravel等PHP项目中，当你安装或更新依赖时，
      Composer会自动创建或更新一个`autoload.php`文件，以及一个`vendor/composer`目录，这些文件和目录包含了类和接口的自动加载信息。
   - `--optimize`：这个选项会优化自动加载的生成过程，减少自动加载文件的数量，从而加快自动加载的速度。这在生产环境中特别有用，因为它可以提高应用程序的启动速度。
2. `composer install --no-dev --prefer-dist --prefer-stable`:
   - `composer install`：这个命令会根据`composer.json`文件中定义的依赖，安装所需的库。
   - `--no-dev`：这个选项指示Composer只安装运行应用程序所需的依赖，而不包括开发时使用的依赖（如测试框架、代码分析工具等）。
      这通常用于生产环境，因为开发依赖在生产环境中不需要。
   - `--prefer-dist`：这个选项告诉Composer优先从远程仓库下载压缩包（"dist"），而不是克隆整个源代码仓库。这可以加快安装速度，并且减少磁盘空间的使用。
   - `--prefer-stable`：这个选项让Composer在安装依赖时优先选择稳定的版本，而不是预发布或开发中的版本。这有助于确保生产环境中的稳定性。

```

## 缓存

```shell
php artisan config:cache

php artisan route:cache

php artisan view:cache
```

## 目录权限

Ubuntu 系统安装的 nginx 默认使用 `www-data` 用户组，加入项目目录为 `/var/www/html/laravel`。

```shell
cd /var/www/html/laravel
```

设置用户、用户组：

```shell
sudo chown -R $USER:www-data .
```

设置目录、文件读写权限，所有目录设置为 755，所有文件设置为 664：

```shell
sudo find . -type f -exec chmod 664 {} \;   
sudo find . -type d -exec chmod 775 {} \;
```

缓存目录授予读写权限：

```shell
sudo chgrp -R www-data storage bootstrap/cache
sudo chmod -R ug+rwx storage bootstrap/cache
```


## 定时任务

配置示例：

```
sudo crontab -u www-data -e * * * * * php /path/to/one/artisan schedule:run >> /dev/null 2>&1
```



参考：

https://learnku.com/laravel/t/62112

https://learnku.com/docs/laravel-and-react/9.x/envoy/12687