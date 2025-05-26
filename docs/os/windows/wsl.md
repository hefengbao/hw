# WSL

## 安装

以管理员身份运行 `Windows PowerShell`，运行命令 `wls --install`，参考文档 [使用 WSL 在 Windows 上安装 Linux](https://learn.microsoft.com/zh-cn/windows/wsl/install)：
			
![](./src/202308/FD3t54hU0ttnSqteAKB2JTYBQ8EPtFyVS5qSdIFO.png)

重启电脑后，正常情况会打开如下界面（如果没有弹出，点击左下角 Windows 图标,在最近添加中点击 Ubuntu）：

![](./src/202308/I2td2NP3LC5lpprbUOEuupEIDOPCU8ADZnNO842q.png)

设置用户名、密码：

![](./src/202308/sY5MJcRSP6v1A2v9YltrolxKgi6Tj0acouAINpLF.png)

在 MicroSoft Store 中下载安装 Windows Terminal：

![](./src/202308/HLsys5IbnnKeWgmSP7CykZpk522WUkVbQSEAeFkY.png)

按照提示设置默认终端：

![](./src/202308/KBikTGgn17pnV0AQTt6m1daLicelIM4x3RQ05Wr3.png)

![](./src/202308/5GJrLeuRKdHRQ3gyLBDpjn8xXhehHa8mqDsWGTIS.png)

在 Windows Terminal 中打开 wsl 子系统 Ubuntu：

![](./src/202308/Augb5YGiz5kpHbdzUmyHQb8gZ23lv4vqutCRX2Xm.png)

![](./src/202308/mOgVxGL78O6ROlZ0JQBUQ8doUhkj8zOAkrdwJSvY.png)

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
