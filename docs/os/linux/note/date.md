# 时间

## 查看时间

```
date -R
```

## 修改时区  

```
ln -sf /usr/share/zoneinfo/UTC /etc/localtime
```

```
timedatectl set-timezone Asia/Shanghai
```

## 手动设置时间

```shell
date -s "2025-09-01 18:30:50"
```

```shell
hwclock --systohc
```