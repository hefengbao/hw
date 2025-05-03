#WSL

## 安装

官方文档 [安装 WSL | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows/wsl/install)
## 遇到的错误


![](./src/20210615102952.png)

启动 `wsl ubuntu` 出现如下错误：

```
参考的对象类型不支持尝试的操作。

[已退出进程，代码为 4294967295]
```

 

解决：

在管理员模式下运行如下命令，并重启电脑即可：

```
netsh winsock reset
```

参考：

[🔗](https://www.cnblogs.com/fanqisoft/p/13028976.html)
