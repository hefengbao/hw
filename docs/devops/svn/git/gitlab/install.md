# Ubuntu 安装 gitlab

*这里选用的是社区版（ce）*

参考官方资料：https://about.gitlab.com/installation/#ubuntu?version=ce

1、安装和配置需要的依赖

```
sudo apt-get update
sudo apt-get install -y curl openssh-server ca-certificates
```

```
sudo apt-get install -y postfix
```

2、添加 GitLab  包并安装

```
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh | sudo bash
```

如果下载太慢，参考 https://blog.csdn.net/qingchunweiliang/article/details/53869601  改用国内镜像。

```
sudo EXTERNAL_URL="http://gitlab.example.com" apt-get install gitlab-ce
```

`EXTERNAL_URL` 是访问地址(域名或 ip)，可以在这里填写，也可以在安装成功后修改：

```
sudo apt-get install gitlab-ce
```

```
sudo vi /etc/gitlab/gitlab.rb
```

修改  `external_url`, 比如修改为 `192.168.1.10:10000`,  这里添加了端口，也要修改 gitlab 自带的 Nginx 服务器监听的端口：

```
sudo su
cd /var/opt/gitlab/nginx/conf/
vi gitlab-http.conf
```

修改：

```
listen *:10000
```

```
gitlab-ctl reconfigure
gitlab-ctl restart
```

在浏览器访问 `http://192.168.1.10:10000`, 会跳转到修改修改 `root` 密码界面，修改密码，然后用 `root` 帐号登录。

手动修改 `root` 密码：

参考 https://blog.csdn.net/yin138/article/details/51394868 。

```
gitlab-rails console production
```

```
user = User.where(id: 1).first

user.password=12345678

user.password_confirmation=12345678

user.email='admin@example.com'

user.save!

quit
```

*密码长度最少为 8 为，如果含有字符，需要用引号引起来。至于密码中含有字符，用引号包含，引号算不算密码的一部分，没尝试！*



https://blog.csdn.net/dhweicheng/article/details/99712957  



### 卸载：

[Complete uninstall gitlab-ce from ubuntu 14 - GitLab CI/CD - GitLab Forum](https://forum.gitlab.com/t/complete-uninstall-gitlab-ce-from-ubuntu-14/6232)  

###  `gitlab-ctl reconfigure`卡在 `ruby_block[wait for redis service socket] action run` :

https://blog.csdn.net/OldDirverHelpMe/article/details/106536972  

### 修改数据存储目录：

https://docs.gitlab.com/omnibus/settings/configuration.html#storing-git-data-in-an-alternative-directory



`/var/opt/gitlab/prometheus` ,占用的空间非常大

[Gitlab磁盘空间问题 针对Prometheus](https://blog.csdn.net/johnchensz/article/details/106414335)