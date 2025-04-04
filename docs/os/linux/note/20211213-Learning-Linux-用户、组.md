---
title: 'Learning Linux: 用户、组'
date: 2021-12-13 16:27:35
tags: linux
categories: Linux
permalink: learning-linux-user-group-20211213.html
---

## 添加用户

**命令 : useradd**

语法 : useradd [-u UID] [-g GID] [-d HOME] [-M] [-s]

> ‘-u’ 自定义UID
> ‘-g’ 使其属于已经存在的某个组，后面可以跟组id, 也可以跟组名
> ‘-d’ 自定义用户的家目录
> ‘-M’ 不建立家目录
> 
> '-m' 建立家目录
> 
> ‘-s’ 自定义shell

```
sudo useradd -m -s /bin/bash  bao
```

## 删除用户

**命令 : userdel**

语法 : userdel [-r] username

> ‘-r’ 选项的作用只有一个，就是删除账户的时候连带账户的家目录一起删除。

## 添加用户组

**命令 : groupadd**

语法 : groupadd [-g GID] groupname

> “-g” 选项可以自定义gid

```shell
groupadd grouptest

// 或者 -g 指定 gid
groupadd -g 511 grouptest
```

## 删除用户组

**命令 : groupdel**

```shell
groupdel grouptest
```

如果该用户组中有用户，则不能删除。

## 用户添加到组

命令如下：

sudo usermod -aG 用户组名 用户名

例子：

```
sudo usermod -aG sudo bao
```

其中a:表示添加，G：指定组名

## 创建/修改一个用户的密码

**命令 : passwd**

语法 : passwd [username]

> “passwd” 后面不加username则是修改当前账户的密码。

## 查看所有用户、用户组、密码：

```shell
cat /etc/passwd
cat /etc/group
cat /etc/shadow  //加密
```
