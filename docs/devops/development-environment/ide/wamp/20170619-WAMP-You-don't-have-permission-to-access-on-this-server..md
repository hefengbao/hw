---
title: WAMP： You don't have permission to access on this server.
date: 2017-06-19 17:14:09
updated: 2019-03-30 10:08:41
tags: WAMP
categories: 
- DevOps
- WAMP
permalink: wamp-403.html
---
新安装的 `WAMP` ,在其他电脑访问时，会出现 `403`错误：

```
Forbidden 
You don't have permission to access on this server.
```

解决办法：

在安装目录 `盘符:\wamp64\bin\apache\apache2.4.23\conf\extra` 中找到 `httpd-vhosts.conf`文件：

```
VirtualHost *:80>
	ServerName localhost
	DocumentRoot d:/wamp64/www
	<Directory  "d:/wamp64/www/">
		Options +Indexes +Includes +FollowSymLinks +MultiViews
		AllowOverride All
		Require local
	</Directory>
</VirtualHost>
```

修改为：

```
VirtualHost *:80>
	ServerName localhost
	DocumentRoot d:/wamp64/www
	<Directory  "d:/wamp64/www/">
		Options +Indexes +Includes +FollowSymLinks +MultiViews
		AllowOverride All
		Require all granted
	</Directory>
</VirtualHost>
```