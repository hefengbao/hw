# 常用操作命令

## 1.卸载

`gitlab-ctl uninstall`

## 2.默认配置文件目录

`/etc/gitlab/gitlab.rb`

## 3.查看版本

`cat /opt/gitlab/embedded/service/gitlab-rails/VERSION`

## 4.检查gitlab状态

`gitlab-rake gitlab:check SANITIZE=true --trace`

`gitlab-rake gitlab:check`

`gitlab-rake gitlab:check SANITIZE=true`


## 5.查看日志

`gitlab-ctl tail`

## 6.数据库关系升级

`gitlab-rake db:migrate`

## 7.清理缓存

`gitlab-rake cache:clear`

## 8.升级数据库命令

`gitlab-ctl pg-upgrade`

## 9.启停服务管理

`gitlab-ctl start`# 启动所有 gitlab 组件

`gitlab-ctl stop` # 停止所有 gitlab 组件

`gitlab-ctl stop postgresql` # 停止所有 gitlab postgresql 组件

`gitlab-ctl stop unicorn`# 停止相关数据连接服务

`gitlab-ctl stop sidekiq`

`gitlab-ctl restart`# 重启所有 gitlab 组件：

`gitlab-ctl restart gitlab-workhorse` # 重启所有 gitlab gitlab-workhorse 组件：

`gitlab-ctl status` # 查看服务状态

`gitlab-ctl reconfigure` # 生成配置启动服务

## 10.日志查看

`gitlab-ctl tail` # 查看日志

`gitlab-ctl tail redis` # 检查redis的日志

`gitlab-ctl tail postgresql` # 检查postgresql的日志

`gitlab-ctl tail gitlab-workhorse` # 检查gitlab-workhorse的日志

`gitlab-ctl tail logrotate` # 检查logrotate的日志

`gitlab-ctl tail nginx` # 检查nginx的日志

`gitlab-ctl tail sidekiq` # 检查sidekiq的日志

`gitlab-ctl tail unicorn` # 检查unicorn的日志

## 11.重置管理员密码

`gitlab-rails console production` #使用rails工具打开终端

`user = User.where(id: 1).first` #查询用户的email，用户名，密码等信息，id:1 表示root账号

`user.password = '新密码'` #重新设置密码

`user.password_confirmation = '新密码'`

`user.save!` #保存密码

`user = User.where(id: 1).first`#完整的操作ruby脚本

`user.password = '新密码'`

`user.password_confirmation = '新密码'`

`user.save!`

## 12.备份

`gitlab_rails['backup_path'] = '/mnt/backups'`#修改/etc/gitlab/gitlab.rb来修改默认存放备份文件的目录

`gitlab-rake gitlab:backup:create`

`crontab -e` #通过crontab使用备份命令实现自动备份

```shell
# 每天2点备份gitlab数据 选一个即可

0 2 * * * /usr/bin/gitlab-rake gitlab:backup:create

# 或

0 2 * * * /opt/gitlab/bin/gitlab-rake gitlab:backup:create
```


备份保留七天，设置只保存最近7天的备份，编辑`/etc/gitlab/gitlab.rb` 配置文件，找到如下代码，删除注释 ,保存

```shell
gitlab_rails['backup_keep_time'] = 604800
```