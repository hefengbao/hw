# 统计代码行数

有时在申报一些申请时，需要提供项目代码的行数，今天发现了个不错的工具，做个记录。

使用的工具是 [cloc](https://github.com/AlDanial/cloc) 一个开源的项目，提供多平台支持。

我用 wsl 安装：

```shell
sudo apt install cloc 
```

统计一个 Android 项目的代码行数：

运行命令 :

```shell
wsl cloc . --exclude-dir=build,.idea,schemas
```

![](https://hefengbao.github.io/assets/images/202411141711801.png)


参考：

https://segmentfault.com/a/1190000020344884

https://www.cnblogs.com/joy99/p/18035909

