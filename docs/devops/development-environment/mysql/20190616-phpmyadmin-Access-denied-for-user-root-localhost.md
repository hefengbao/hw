---
title: phpmyadmin #1698 - Access denied for user 'root'@'localhost'
date: 2019-06-16 19:15:56
updated: 2019-06-16 19:15:56
tags: mysql
categories: 
- Database
- MySQL
permalink: phpmyadmin-1698-access-denied-for-user-root-localhost.html
---

`sudo mysql` 可直接登入 mysql.

~~Ubuntu 系统，通过命令 `sudo apt install mysql-server` 安装了 mysql, 在 Bash 界面可以免密码登录，原因是 `root` 密码为空，修改 `root` 密码，网上找到的方法：~~

```shell
UPDATE mysql.user SET authentication_string = PASSWORD('123456'), password_expired = 'N' WHERE User = 'root' AND Host = 'localhost';

flush privileges;
```



~~但是，任然可以免密码登录：~~

{% img /images/2019061601.png %}

配置了 phpmyadmin, 登录则出现的错误是：

```shell
#1698 - Access denied for user 'root'@'localhost'
```

继续搜， 看到这个 <https://blog.csdn.net/david_sheep/article/details/82698709>，自己试了下，果真如此

{% img /images/2019061602.png %}

按如下修改密码：

```shell
UPDATE mysql.user SET authentication_string = PASSWORD('123456'), password_expired = 'N', plugin = 'mysql_native_password' WHERE User = 'root' AND Host = 'localhost';
```

