# 释放表空间

1. 使用 ALTER TABLE 重建表

对于 InnoDB 表，可以使用 _ALTER TABLE_ 命令来重建表，从而达到优化的效果。

**示例：**

```shell
ALTER TABLE test_table ENGINE=InnoDB;
```

2. 使用 ANALYZE TABLE 分析表

你也可以使用 _ANALYZE TABLE_ 命令来更新表的索引统计信息。

**示例：**

```shell
ANALYZE TABLE test_table;
```