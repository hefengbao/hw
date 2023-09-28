---
title: Setup is unable to find the "ifconfig" program on your machine
date: 2017-10-01 17:17:10
updated: 2019-03-29 22:06:05
tags: ubuntu
categories: 
- Linux
- Ubuntu
permalink: setup-is-unable-to-find-the-ifconfig-program-on-your-machine.html
---
VMware 安装 Ubuntu,之后安装 VMware Tools ,安装过程中可能遇到如下提示：

`Setup is unable to find the "ifconfig" program on your machine.  Please make sure it is installed.  Do you want to specify the location of this program by hand? [yes]`

输入 `yes` ，按 `Enter` 键确认，或直接 按 `Enter` 键，则会有如下提示：

`What is the location of the "ifconfig" program on your machine? `

按 `Enter` 键,会有如下提示:

` The answer "" is invalid.  It must be the complete name of a binary file.`
不能正常安装。

输入 `no` ，按 `Enter` 键，则会有如下提示：

`Unable to continue.
Execution aborted.
`
直接退出安装。

** 解决办法 :**

运行以下命令安装 `ifconfig` ：

```
sudo apt install net-tools
```

然后再次安装 VMware Tools  即可。