---
title: Homestead & WSL 2 - Windows 10
date: 2021-09-01 15:59:48
updated: 2021-09-01 15:59:48
tags: 
- wsl
- homestead
categories: PHP
permalink: homestead-wsl2-20210901.html

---

安装 `wsl 2`, 参考 [在 Windows 10 上安装 WSL | Microsoft Docs](https://docs.microsoft.com/zh-cn/windows/wsl/install-win10)

打开 PowerShell, 

```
git clone https://github.com/laravel/homestead.git Homestead // 默认安装目录 C:\Users\用户名自行修改\Homestead

cd .\Homestead\

git checkout release

wsl  // 进入wsl, Ubuntu 虚拟机

cd /mnt/c/Users/用户名自行修改/Homestead

sudo -E bin/wsl-init
```

等待安装完成。

回到自己的电脑主机，进入 `C:\Users\用户名自行修改\Homestead` 目录， 修改 `Homestead.yaml`文件：

```
wsl_sites:
    -   map: laravel.test
        to: /mnt/c/Users/halo/Code/laravel/public
```

进入 wsl 虚拟机：

```
cd /mnt/c/Users/用户名自行修改/Homestead

./bin/homestead wsl:create-sites
```

通过 `ifconifg` 获取虚拟机 ip, 配置本机 `hosts` 文件， 参考 [Homestead |《Laravel 8 中文文档 8.x》| Laravel China 社区 (learnku.com)](https://learnku.com/docs/laravel/8.x/homestead/9357#f0e283)

参考：

[Homestead & WSL 2 - Windows 10 · Issue #1484 · laravel/homestead (github.com)](https://github.com/laravel/homestead/issues/1484)
