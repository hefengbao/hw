---
title: phpmyadmin 连接 mysql 8
date: 2020-04-06 14:56:21
updated: 2020-04-06 14:56:21
tags: 
- phpmyadmin
categories: 
- Database
- MySQL
permalink: phpmyadmin-connect-to-mysql8.html
---

phpmyadmin 连接 mysql 8 数据库，出现如下错误：

```shell
 mysqli_real_connect(): The server requested authentication method unknown to the client [caching_sha2_password]
 mysqli_real_connect(): (HY000/2054): The server requested authentication method unknown to the client
```



安装  `php7.4`, 或者按网上的方法，修改 mysql 的加密方式。 

