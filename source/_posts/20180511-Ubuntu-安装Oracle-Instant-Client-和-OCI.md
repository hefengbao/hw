---
title: Ubuntu 安装Oracle Instant Client 和 OCI
date: 2018-05-11 21:37:14
updated: 2021-06-14 11:06:00
tags: 
- oracle
categories: 
- Database
- Oracle
permalink: ubuntu-install-oracle-instant-client-and-oci.html
---
高版本需要安装 `glibc  2.14` 及以上版本

[glibc的安装配置_glibc环境变量](https://blog.csdn.net/mengzhongsuiyi521/article/details/88432237)



## ZIP 文件安装

在官网 http://www.oracle.com/technetwork/topics/linuxx86-64soft-092277.html 下载：Instant Client Package - Basic 和 Instant Client Package - SDK ，我选的版本是Version 21.1.0.0.0，下载 zip 格式的， 由于需要登录，所以最好在桌面电脑下载好，然后上传到 Ubuntu 服务器。我上传到 `/opt/oracle` 目录，在下载页面的底端，有安装的文档，我也把我安装的过程写出来：

1、解压：

使用 `unzip` 命令，可通过 `sudo apt-get install unzip` 安装。

```
unzip instantclient-basic-linux.x64-21.1.0.0.0.zip
unzip instantclient-sdk-linux.x64-12.2.0.1.0.zip 
```

解压到的目录是 `/opt/oracle`

2、创建适合的软连接

`libclntsh.so`，`libocci.so` 这两文件已经有了，但是发现会报错，删除后，建立软连接：
```
cd /instantclient_21_1
ln -s libclntsh.so.21.1 libclntsh.so
ln -s libocci.so.21.1 libocci.so
```

3、安装 oci8

一点准备：

```
apt-get install make  //为了后面的编译软件使用
apt-get install php-pear  //为了得到 pecl 这个程序
apt-get install php7.4-dev  //为了得到 phpize 这个程序
```

运行 `sudo pecl install oci8-2.2.0` 命令,

{% img /images/201805/11/1/e2vIPWrMtb.png %}

出现如上界面，按提示输入：

```
instantclient,/opt/oracle/
```

回车，不出意外，会安装成功。

{% img /images/201805/11/1/e39NyR8ksO.png %}

按提示，把 `extension=oci8.so` 添加到 `/etc/php/7.4/fpm/php.ini ` 和 `/etc/php/7.4/cli/php.ini ` 中，可通过 `php -m` 或 `echo phpinfo()` 查看。

---

## 遇到的问题：

{% img /images/20210614110423.png %}

{% img /images/20210614110607.png %}

把缺失的文件拷贝到相应目录即可。

{% img /images/20210614111039.png %}

参考：

http://pecl.php.net/package/oci8