---
title: Ubuntu 安装 composer
date: 2020-11-25 12:02:45
updated: 2020-11-25 12:02:45
tags: composer
categories: 
- 工具
- Composer
permalink: ubuntu-install-composer.html
---

```
sudo apt update
sudo apt install wget php-cli php-zip unzip
```

```
wget -O composer-setup.php https://getcomposer.org/installer
```

```
sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer
```



[如何在 Ubuntu 20.04 上安装和使用 Composer - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/149309514)

参考：

[Packagist / Composer 中国全量镜像 (phpcomposer.com)](https://pkg.phpcomposer.com/#how-to-install-composer)

