# Linux crontab 定时任务

### crontab 的格式：
分 时 月 星期 要运行的命令

. 第 1 列分钟：0 ~ 59
. 第 2 列小时：0 ~ 23
. 第 3 列日：1 ~ 31
. 第 4 列月：1 ~ 12
. 第 5 列星期：0 ~ 7 （0 和 7 表示星期天）
. 第 6 列要运行的命令

--

## 常用命令

```
crontab -u 用户名 //设定某个用户的crond服务，一般root用户需要这个参数

crontab -l //列出某个用户crond服务的详细内容

crontab -r //删除某个用户的crond服务

crontab -e //编辑某个用户的crond服务
```

例：root用户要查看自己的详细crond服务内容，命令： `crontab -u root -l`

## crontab file的格式

crontab文件中的行是由 6 个字段组成，不同的字段间用空格或 tab 分隔。前 5 个字段指定命令要运行的时间，第六个字段指定要实行的字符串。

| 字段     | 1        | 2        | 3        | 4        | 5        | 6        |
| -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| 含义     | 分钟     | 小时     | 日期       | 月份 | 星期几 | 要执行的任务|
| 取值     |(0 - 59)  |(0 - 23)  |(1 - 31)   | (1 - 12)| (0 - 6) 0 表示星期日| | 

crontab语法格式中的特殊符号含义:

| 符号 | 含义	| 示例	| 等价表示 |
| -------- | -------- | -------- | -------- |
|*	|任意值	 |* * * * * *	 |每一分钟             |
|-	|数值范围	|1-10 * * * *	|第 1 至 10 分钟       |
|,	|值列表	 |1,10 * * *	 |第 1 分钟和第 10 分钟  |
|/	|步长值	 |*/10 * * *	 |每10分钟一班           |

示例：

Laravel 的 Scheduler， 每分钟执行一次：

```shell
* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
```

crontab的使用者权限记录在下面两个文件内:

```
/etc/cron.deny //文件内的用户不允许使用
/etc/cron.allow //文件内的用户允许使用
/var/spool/cron/ //是所有用户的crontab文件
```

## 工具

[Crontab Generator](https://crontab-generator.org/)

## 库

[https://github.com/datasert/cronjs](https://github.com/datasert/cronjs)
