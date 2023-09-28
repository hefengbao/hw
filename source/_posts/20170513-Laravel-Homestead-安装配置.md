---
title: Laravel Homestead 安装配置
date: 2017-05-13 12:41:34
updated: 2019-03-29 18:45:06
tags: 
- laravel
- homestead
categories: 
- PHP
- Laravel
permalink: laravel-homestead-installing.html
---
### 1、安装 VirtualBox, Vagrant,git

下载 [VirtualBox](https://www.virtualbox.org/wiki/Downloads)、 [Vagrant](https://www.vagrantup.com/downloads.html)、[git](https://git-scm.com)，并安装。

### 2、安装 Homestead Vagrant Box

用如下命令直接下载安装：

```bash
vagrant box add laravel/homestead
```

上述方法安装不成功，可在百度网盘（链接：https://pan.baidu.com/s/1lA6TV2l9mwOIz2a1Yz5r3A 
提取码：6irb )  获取已下载好的 Homestead Vagrant Box，安装方法看下面：

### 3、安装 Homestead

安装：

```bash
cd ~
git clone https://github.com/laravel/homestead.git Homestead
```

由于 Homestead 的 `master` 分支并不是稳定分支，你应该检出已经标签过的稳定版本。你可以在  [Github Release Page ](https://github.com/laravel/homestead/releases) 找到最新的稳定版本:

```bash
cd Homestead

git checkout -b v5.3.2
```

如果需要安装下载好的 box,在 `Homestead` 目录，新建 `metadata.json` 文件，内容如下： 

```
{
    "name": "laravel/homestead",
    "versions":
    [
        {
            "version": "2.0.0",
            "providers": [
                {
                  "name": "virtualbox",
                  "url": "E:/homestead/2.0/virtualbox.box"
                }
            ]
        }
    ]
}
```

`url`根据自己的实际目录修改。

然后用如下命令添加：

```
vagrant box add metadata.json
```

查看已安装的 box:

```
vagrant box list
```

初始化：

```bash
// Mac / Linux...
bash init.sh

// Windows...
init.bat
```

### 4、配置

1) 生成SSH Key:

用  `git bash`  运行命令生成：

```bash
#引号中的信息自行修改
ssh-keygen -t rsa -C "xxxx@xxxx" 
```

2) 配置共享文件夹

打开  `Homestead.yaml` 文件（C:\Users\用户名\Homestead 或 C:\Users\用户名\.homestead目录下）:

```
folders:
    - map: ~/Code
      to: /home/vagrant/Code
    - map: D:/phpweb/test
      to: /home/vagrant/Code/test
```

复制原文件中的内容修改即可(注意对齐、空格等)

3) 配置Nginx站点

打开 `Homestead.yaml` 文件:

```
sites:
    - map: homestead.app
      to: /home/vagrant/Code/Laravel/public
    - map: test.app
      to: /home/vagrant/Code/test/public
```

4) 修改 `hosts` 文件：

添加如下内容：

```
192.168.10.10  test.app
```

5) 修改数据库配置：

编修对应项目的 `.env` 文件：

```
DB_DATABASE=homestead
DB_USERNAME=homestead
DB_PASSWORD=secret
```

### 5、测试、使用

1) 启动 Vagrant Box

```
# 进入 Homestead 目录
cd Homestead
#启动
vagrant up
```

2) 打开浏览器,访问 test.app, 若正常显示 Laravel 欢迎页，则配置成功。

3)  通过 SSH 连接虚拟主机

```bash
vagrant ssh
```

项目列表：

```bash
ls
```