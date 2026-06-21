# binlog

在 MySQL 中，日志文件可能会占用大量存储空间，尤其是二进制日志（Binlog）和一般日志文件（如 .log 文件）。为了确保数据库的正常运行和存储空间的有效利用，定期清理这些日志文件是非常重要的。

## 手动删除日志文件

首先，可以手动删除 MySQL 的日志文件。以下是具体步骤：

- **查看当前的 Binlog 文件**：

```shell
show binary logs;
```

- **查看正在使用的日志文件**：
- 
```shell
show master status;
```

- **删除特定的 Binlog 文件**：
 
```shell
PURGE BINARY LOGS TO 'binlog.022390'
```

即删除 binlog.000005 之前的。

- **删除早于特定时间点的 Binlog 文件**：

```shell
PURGE BINARY LOGS BEFORE 'YYYY-MM-DD HH:MM:SS';

PURGE BINARY LOGS BEFORE DATE_SUB(NOW(), INTERVAL 7 DAY);
```

通过这些命令，可以手动删除不再需要的日志文件，从而释放存储空间。


## 自动清理日志文件

为了避免手动清理日志文件的麻烦，可以配置 MySQL 自动清理日志文件。以下是具体步骤：

- **编辑 MySQL 配置文件**： 在 _my.cnf_ 或 _my.ini_ 文件中添加以下配置：

```shell

[mysqld]

expire_logs_days = 10 # 设置 Binlog 日志过期时间，单位为天

max_binlog_size = 1024M # 设置单个 Binlog 文件的最大大小
```


- **重启 MySQL 服务器**：

```shell
sudo systemctl restart mysql
```

- **动态修改配置**： 如果不想重启 MySQL，可以通过以下命令动态修改配置：
- 
```shell
set global expire_logs_days = 10;
```

通过这些配置，可以让 MySQL 自动清理过期的日志文件，从而保持存储空间的有效利用。

检查自动清理配置

可以通过以下命令检查自动清理相关的系统变量：

```shell
SHOW VARIABLES LIKE 'expire_logs_days';

SHOW VARIABLES LIKE 'max_binlog_size';
```


如果 _expire_logs_days_  和  _max_binlog_size_  的值都设置为非零且合理的数值，那么自动清理功能应该是开启的。

通过上述方法，可以有效地管理和清理 MySQL 的日志文件，确保数据库的正常运行和存储空间的有效利用。