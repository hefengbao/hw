# wsl & vscode 搭建 php 开发环境
## WSL 安装参考：

[安装 WSL | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows/wsl/install)

以管理员身份打开 `Windows PowerShell`:

```shell
wsl --install
```

过了有一段时间，但是进度条不增长，重启电脑😂。（不清楚是不是我同时在安装其他软件的缘故？）

打开 `Windows PowerShell`, 运行如下命令：
```shell
 wsl --list --online
```

列出所有可用的 Linux 分发版本。

然后打开 `MicroSoft Store`, 搜索自己想要的下载的版本，下载完成后，点击打开，设置账号密码即可。

同时可以在  `MicroSoft Store` 搜索安装 `Windows Terminal`, `PowerShell`。外观界面会好看许多, 在 `Windows Terminal` 中可以方便的打开安装的 Linux 系统。

## 设置 WSL 开发环境

https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-vscode

### PHP

```
composer global require friendsofphp/php-cs-fixer
```

```bash
ln -s /home/{用户名}/.composer/vendor/bin/php-cs-fixer /usr/bin
```



### MySQL

```
sudo mysql
```

```shell
create user 'bao'@'%'  identified  by 'Bao2020';
grant all privileges on *.* to 'bao'@'%' with grant option;
```

参考：

https://docs.microsoft.com/zh-cn/windows/wsl/tutorials/wsl-database

https://www.cnblogs.com/keme/p/10288168.html



### Nodejs

```
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
```

```
sudo apt-get install -y nodejs
```

```
//查看版本号
node -v
npm -v
```

可能遇到的问题：
1、`dpkg: error processing archive /var/cache/apt/archives/nodejs_16.17.0-deb-1nodesource1_amd64.deb`:

```shell
dpkg: error processing archive /var/cache/apt/archives/nodejs_16.17.0-deb-1nodesource1_amd64.deb (--unpack):
 trying to overwrite '/usr/include/node/common.gypi', which is also in package libnode-dev 12.22.9~dfsg-1ubuntu3
dpkg-deb: error: paste subprocess was killed by signal (Broken pipe)
Errors were encountered while processing:
 /var/cache/apt/archives/nodejs_16.17.0-deb-1nodesource1_amd64.deb
E: Sub-process /usr/bin/dpkg returned an error code (1)
```

解决办法：

```shell
 sudo dpkg -i --force-overwrite  /var/cache/apt/archives/nodejs_16.17.0-deb-1nodesource1_amd64.deb
```


### 停止 WSL:
```
wsl --shutdown
```

### Powerline

文档： https://docs.microsoft.com/zh-cn/windows/terminal/tutorials/powerline-setup

https://ohmyposh.dev/docs/installation

```powershell
Import-Module : 无法加载文件 C:\Users\hefengbao\Documents\WindowsPowerShell\Modules\posh-git\0.7.3\posh-git.psm1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/![img](file:///C:\Users\hefengbao\AppData\Roaming\Tencent\QQTempSys\[5UQ[BL(6~BS2JV6W}N6[%S.png)go.microsoft.com/fwlink/?LinkI
D=135170 中的 about_Execution_Policies。
```



以管理员身份运行 `powershell`:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
```

```shell
package golang.org/x/crypto/ssh/terminal: unrecognized import path "golang.org/x/crypto/ssh/terminal" (https fetch: Get https://golang.org/x/crypto/ssh/terminal?go-get=1: dial tcp 216.239.37.1:443: i/o timeout)
package golang.org/x/sys/unix: unrecognized import path "golang.org/x/sys/unix" (https fetch: Get https://golang.org/x/sys/unix?go-get=1: dial tcp 216.239.37.1:443: i/o timeout)
package golang.org/x/text/width: unrecognized import path "golang.org/x/text/width" (https fetch: Get https://golang.org/x/text/width?go-get=1: dial tcp 216.239.37.1:443: i/o timeout)
```

添加代理， 参考 `https://goproxy.io/zh/`：

```shell
sudo go env -w GO111MODULE=on
sudo go env -w GOPROXY=https://goproxy.io,direct
```

 Ubuntu 安装字体 https://www.cnblogs.com/picaso/p/3356292.html

https://blog.csdn.net/cunfuteng7334/article/details/109050492

## VS Code:

### Terminal 字体：

添加 `Cascadia Code PL`

## 可能遇到的问题：

1、我在安装 `php7.4-fpm` 时出现：

```
invoke-rc.d: could not determine current runlevel
```

参考 https://github.com/microsoft/WSL/issues/1761

```bash
sudo su
export RUNLEVEL=1
//然后
apt install php7.4-fpm
```
