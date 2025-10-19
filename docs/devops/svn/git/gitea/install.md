# 安装

## 使用二进制文件安装

下载所需文件：

```shell
wget https://dl.gitea.com/gitea/1.24.2/gitea-1.24.2-linux-amd64

wget https://dl.gitea.com/gitea/1.24.2/gitea-1.24.2-linux-amd64.asc
```

赋予执行权限：

```shell
chmod +x gitea-1.24.2-linux-amd64
```

校验文件：

```shell
gpg --keyserver keys.openpgp.org --recv 7C9E68152594688862D62AF62D9AE806EC1592E2
gpg --verify gitea-1.24.2-linux-amd64.asc gitea-1.24.2-linux-amd64
```

创建用户（推荐使用名称 `git`）：

```shell
sudo adduser \  
--system \  
--shell /bin/bash \  
--gecos 'Git Version Control' \  
--group \  
--disabled-password \  
--home /home/git \  
git
```

创建工作路径：

```shell
mkdir -p /var/lib/gitea/{custom,data,log}
chown -R git:git /var/lib/gitea/
chmod -R 750 /var/lib/gitea/
mkdir /etc/gitea
chown root:git /etc/gitea
chmod 770 /etc/gitea
```


```shell
export GITEA_WORK_DIR=/var/lib/gitea/
```

```shell
cp gitea-1.24.2-linux-amd64 /usr/local/bin/gitea
```


```shell
sudo vim /etc/systemd/system/gitea.service
```

添加内容（根据实际情况做修改）：

```shell
[Unit]
Description=Gitea (Git with a cup of tea)
After=network.target
###
# Don't forget to add the database service dependencies
###
#
#Wants=mysql.service
#After=mysql.service
#
#Wants=mariadb.service
#After=mariadb.service
#
#Wants=postgresql.service
#After=postgresql.service
#
#Wants=memcached.service
#After=memcached.service
#
#Wants=redis.service
#After=redis.service
#
###
# If using socket activation for main http/s
###
#
#After=gitea.main.socket
#Requires=gitea.main.socket
#
###
# (You can also provide gitea an http fallback and/or ssh socket too)
#
# An example of /etc/systemd/system/gitea.main.socket
###
##
## [Unit]
## Description=Gitea Web Socket
## PartOf=gitea.service
##
## [Socket]
## Service=gitea.service
## ListenStream=<some_port>
## NoDelay=true
##
## [Install]
## WantedBy=sockets.target
##
###

[Service]
# Uncomment the next line if you have repos with lots of files and get a HTTP 500 error because of that
# LimitNOFILE=524288:524288
RestartSec=2s
Type=simple
User=git
Group=git
WorkingDirectory=/var/lib/gitea/
# If using Unix socket: tells systemd to create the /run/gitea folder, which will contain the gitea.sock file
# (manually creating /run/gitea doesn't work, because it would not persist across reboots)
#RuntimeDirectory=gitea
ExecStart=/usr/local/bin/gitea web --config /etc/gitea/app.ini
Restart=always
Environment=USER=git HOME=/home/git GITEA_WORK_DIR=/var/lib/gitea
# If you install Git to directory prefix other than default PATH (which happens
# for example if you install other versions of Git side-to-side with
# distribution version), uncomment below line and add that prefix to PATH
# Don't forget to place git-lfs binary on the PATH below if you want to enable
# Git LFS support
#Environment=PATH=/path/to/git/bin:/bin:/sbin:/usr/bin:/usr/sbin
# If you want to bind Gitea to a port below 1024, uncomment
# the two values below, or use socket activation to pass Gitea its ports as above
###
#CapabilityBoundingSet=CAP_NET_BIND_SERVICE
#AmbientCapabilities=CAP_NET_BIND_SERVICE
###
# In some cases, when using CapabilityBoundingSet and AmbientCapabilities option, you may want to
# set the following value to false to allow capabilities to be applied on gitea process. The following
# value if set to true sandboxes gitea service and prevent any processes from running with privileges
# in the host user namespace.
###
#PrivateUsers=false
###

[Install]
WantedBy=multi-user.target
```


```shell
sudo systemctl enable gitea  
sudo systemctl start gitea
```


访问 `http://127.0.0.1:3000` (IP 地址根据实际修改) 完成安装。

收缩权限：

```shell
chmod 750 /etc/gitea
chmod 640 /etc/gitea/app.ini
```

生成全局密钥（不然，修改用户信息等会报错）：

```shell
gitea generate secret SECRET_KEY
```


参考文档：

[使用二进制文件安装 | Gitea Documentation](https://docs.gitea.com/zh-cn/installation/install-from-binary)

