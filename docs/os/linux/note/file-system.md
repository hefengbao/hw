# 文件系统

运行如下命令可查看文件系统的说明：

```shell
man hier 
```

![](https://hefengbao.github.io/assets/images/202403211641779.png)
## /bin 和 /sbin

`bin` 是`Binary`的缩写，存放着可执行文件或可执行文件的链接（类似快捷方式）

![](https://hefengbao.github.io/assets/8ug/202405101931101.webp)

`cp`,`chmod`,`cat`等常用命令都在这里。注意不要被图标上的 TXT 字样误导了，Linux 不按后缀识别文件类型，`/bin` 目录中的文件都是可执行的二进制文件，而不是文本文件。

与`/bin`类似的是`/sbin`目录，System Binary 的缩写，这里存放的命令可以对系统配置进行操作。普通用户可能可以使用这里的命令查看某些系统状态，但是如果想更改配置，就需要`sudo`授权或者切换成超级用户。

![](https://hefengbao.github.io/assets/8ug/202405101934978.webp)

可以看到一些熟悉的命令，比如`ifconfig`,`iptables`。普通用户可以使用`ifconfig`查看网卡状态，但是想配置网卡信息，就需要授权了。

## /boot

![](https://hefengbao.github.io/assets/8ug/202405101935035.webp)

**这里存放系统启动需要的文件**，你可以看到`grub`文件夹，它是常见的开机引导程序。我们不应该乱动这里的文件。

## /dev

`dev`是`device`的缩写，这里存放着所有的设备文件。在 Linux 中，所有东西都是以文件的形式存在的，包括硬件设备。

比如说，`sda`,`sdb`就是我电脑上的两块硬盘，后面的数字是硬盘分区：

![](https://hefengbao.github.io/assets/8ug/202405101938892.webp)

鼠标、键盘等等设备也都可以在这里找到。

## /etc

这个目录经常使用，存放很多程序的配置信息，比如包管理工具 `apt`：

![](https://hefengbao.github.io/assets/8ug/202405101939792.webp)

在`/etc/apt`中就存放着对应的配置，比如说镜像列表（我配置的阿里云镜像）：

![](https://hefengbao.github.io/assets/8ug/202405101940866.webp)

如果你要修改一些系统程序的配置，十有八九要到`etc`目录下寻找。

## /lib

`lib`是 `Library` 的缩写，包含 `bin` 和 `sbin` 中可执行文件的依赖，类似于 `Windows` 系统中存放`dll`文件的库。

也可能出现`lib32`或`lib64`这样的目录，和`li`b差不多，只是操作系统位数不同而已。

## /media

这里会有一个以你用户名命名的文件夹，里面是自动挂载的设备，比如 U 盘，移动硬盘，网络设备等。

比如说我在电脑上插入一个 U 盘，系统会把 U 盘自动给我挂载到`/media/fdl`这个文件夹里（我的用户名是 fdl），如果我要访问 U 盘的内容，就可以在那里找到。

## /mnt

这也是和设备挂载相关的一个文件夹，一般是空文件夹。`media`文件夹是系统自动挂载设备的地方，这里是你手动挂载设备的地方。

比如说，刚才我们在dev中看到了一大堆设备，你想打开某些设备看看里面的内容，就可以通过命令把设备挂载到`mnt`目录进行操作。

不过一般来说，现在的操作系统已经很聪明了，像挂载设备的操作几乎都不用你手动做，系统应该帮你自动挂载到`media`目录了。

## /opt

`opt`是 `Option` 的缩写，这个文件夹的使用比较随意，一般来说我们自己在浏览器上下载的软件，安装在这里比较好。当然，包管理工具下载的软件也可能被存放在这里。

## /proc

proc是process的缩写，这里存放的是全部**正在运行程序的状态信息**。

![](https://hefengbao.github.io/assets/8ug/202405101944887.webp)

你会发现`/proc`里面有一大堆数字命名的文件夹，这个数字其实是` Process ID（PID`），文件夹里又有很多文件。

前面说过，Linux 中一切都以文件形式储存，类似`/dev`，这里的文件也不是真正的文件，而是程序和内核交流的一些信息。比如说我们可以查看当前操作系统的版本，或者查看 CPU 的状态：

![](https://hefengbao.github.io/assets/8ug/202405101945648.webp)

## /root

这是超级用户的家目录，普通用户需要授权才能访问。

区别一下 `root` 用户和根目录的区别哈，`roo`t 用户就是 Linux 系统的超级用户（Super User），而根目录是指 `/` 目录，整个文件系统的「根部」。

## /run 和 /sys

用来存储某些程序的运行时信息和系统需要的一些信息。比如说下面这个路径有一个名为 brightness 的文件：

```shell
sudo vim /sys/devices/pci0000:00/
    0000:00:02.0/drm/card0/card0-eDP-1/
    intel_backlight/brightness
```

里面存储着一个数字，是你的显卡亮度，你修改这个数字，屏幕亮度就会随之变化。

需要注意的是，这两个位置的数据都存储在内存中，所以一旦重启，`/run`和`/sys`目录的信息就会丢失，所以不要试图在这里存放任何文件。

## /srv

`srv`是`service`的缩写，主要用来存放服务数据。

对于桌面版 Linux 系统，这个文件夹一般是空的，但是对于 Linux 服务器，Web 服务或者 FTP 文件服务的资源可以存放在这里。

## /tmp

`tmp`是`temporary` 的缩写，存储一些程序的**临时文件**。

## /usr

`usr`是 `Universal System Resource` 的缩写，这里存放的是一些非系统必须的资源，比如用户安装的应用程序。

`/usr`和`/usr/local`目录中又含有`bin`和`sbin`目录，也是存放可执行文件（命令），但和根目录的`bin`和`sbin`不同的是，这里大都是用户使用的工具，而非系统必须使用的。

比如说`/usr/bin`中含有我通过包管理工具安装的应用程序 Chrome 浏览器和 goldendict 字典的可执行文件：

![](https://hefengbao.github.io/assets/8ug/202405101949378.webp)

值得一提的是，如果使用 Linux 桌面版，有时候在桌面找不到应用程序的快捷方式，就需要在`/usr/share/applications`中手动配置桌面图标文件：

![](https://hefengbao.github.io/assets/8ug/202405101950230.webp)

## /var

`var`是`variable`的缩写，这个名字是历史遗留的，现在该目录最主要的作用是**存储日志（log）信息**，比如说程序崩溃，防火墙检测到异常等等信息都会记录在这里。

## /home

最后说`home`目录，这是普通用户的家目录。在桌面版的 Linux 系统中，用户的家目录会有下载、视频、音乐、桌面等文件夹，这些没啥可说的，我们说一些比较重要的隐藏文件夹（Linux 中名称以.开头就是隐藏文件）。

![](https://hefengbao.github.io/assets/8ug/202405101952054.webp)

其中`.cache`文件夹存储应用缓存数据，`.config`文件夹存储了一部分应用程序的配置，比如说我的 Chrome 浏览器配置就是那里面。但是还有一部分应用程序并不把配置储存在`.config`文件夹，而是自己创建一个隐藏文件夹，存放自己的配置文件等等信息，比如你可以看到 Intellij 的配置文件就不在`.config`中。

最后说`.local`文件夹，有点像`/usr/local`，里面也有`bin`文件夹，也是存放可执行文件的。比如说我的 python pip 以及 `pip` 安装的一些工具，都存放在`~/.local/bin`目录中。但是，存在这里的文件，只有该用户才能使用。


这就是为什么，有时候普通用户可以使用的命令，用 `sudo` 或者超级用户却被告知找不到该命令。因为有的命令是特定用户家目录里的，仅被添加到了该用户的`PATH`环境变量里，只有他可以直接用。你超级用户想用当然可以，但是得写全绝对路径才行。

参考：

https://mp.weixin.qq.com/s/5bkjrnWsIcBOgIW-er0eOQ

https://mp.weixin.qq.com/s/R2b6zOAe6P0hI0aMpG6kUw

https://blog.csdn.net/qq_38486203/article/details/120352971

https://www.cnblogs.com/clovershell/p/10370314.html
