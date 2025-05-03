# 时间

查看时间：

```
date -R
```

修改为 UTC 时间：  

```
ln -sf /usr/share/zoneinfo/UTC /etc/localtime
```

```
timedatectl set-timezone Asia/Shanghai
```

https://www.cnblogs.com/zhi-leaf/p/6282301.html
