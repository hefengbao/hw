# Ubuntu 服务器配置 LEMP 环境

### 1、准备
更新、安装下载源：
```bash
# Update Package List
apt update

# Update System Packages
apt -y upgrade

# Install Some PPAs

apt install -y software-properties-common curl

apt-add-repository ppa:chris-lea/redis-server -y
apt-add-repository ppa:ondrej/php -y

# Update Package Lists
apt update
```

### 2、安装 Nginx

#### 2.1 安装

```bash
apt install  nginx
```

#### 2.2 配置

#####  2.2.1 在 `/etc/nginx/nginx.conf` 文件的第一行查看 Nginx 用户：

```
vi /etc/nginx/nginx.conf
```

##### 2.2.2 修改用户和组

> PHP7 默认的用户和组是 `www-data`;
> 如果 Nginx 的用户名也是 `www-data`， 则不用修改；
> 否则，修改为 `www-data`.

##### 2.2.3 重启 Nginx

```
service nginx restart
```

### 3、安装 Mysql

```bash
apt install mysql-server php7.4-mysql 
```

安装过程中有提示设置 `root` 密码。

### 4、安装 php

#### 4.1 安装 php

```bash
apt install php7.4-fpm php7.4-cli php7.4-dev
```

#### 安装 php 扩展

 根据需要添加 php 扩展

```
apt install php7.4-gd  php7.4-curl  php7.4-memcached  php7.4-imap php7.4-mbstring php7.4-xml

#安装 redis
apt install  redis-server

sudo apt install php-libsodium
sudo apt install php7.3-mcrypt //暂时没有
```

查看安装的 php 扩展

```bash
php -m
```

#### 4.2 配置 php

打开 `php.ini` 配置文件：

```bash
vi /etc/php/7.4/fpm/php.ini
```

如下改动有待商榷？？？

找到 `cgi.fix_pathinfo` 选项，去掉注释，然后将指设置为0：

```
cgi.fix_pathinfo = 0;
```

https://www.php.net/manual/zh/install.unix.nginx.php

https://www.yuque.com/crazyzard/gp4crq/iecwo1



重启 `php7.4-fpm`:

```bash
service php7.4-fpm restart
```

### php 版本切换
```
update-alternatives --config php
```

#### 参考：
[settler/amd64.sh at master · laravel/settler (github.com)](https://github.com/laravel/settler/blob/master/scripts/amd64.sh)

https://learnku.com/articles/44900