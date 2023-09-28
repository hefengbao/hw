---
title: 'Learning Laravel: 02-环境搭建'
tags: laravel
categories: Laravel
permalink: learning-laravel-software-20211222.html
---

> 操作系统： WIndows 10

## 一、Homestead

## 二、Sail

[Docker](https://www.docker.com/get-started)

![](https://hefengbao.github.io/assets/images/20220225095922.png)

![](https://hefengbao.github.io/assets/images/20220225100438.png)

![](https://hefengbao.github.io/assets/images/20220225101925.png)~~~~

`C:\Users\<UserName>` 目录下新建  ` .wslconfig`, 编辑内容：

```
[wsl2]
memory=4GB #内存大小，自行调整
swap=0
localhostForwarding=true
processors=4 #核数，自行调整
```

三、

### 一、安装 `git`:

下载 [Git ](https://git-scm.com/) 并安装。

安装成功后，顺便生成 `ssh 公钥`，打开 `Git Bash`, 运行命令：

```bash
ssh-keygen -o
```

### 二、 安装 `VirtualBox`:

下载  [Oracle VM VirtualBox](https://www.virtualbox.org/wiki/Downloads) 并安装。

### 三、安装 `vagrant`:

下载  [Vagrant](https://www.vagrantup.com/downloads) 并安装， 需重启电脑。

### 四、安装 `homestead`:
