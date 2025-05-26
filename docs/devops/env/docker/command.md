# Docker 命令

## 查看所有正在运行容器

```shell
docker ps 
```

## 查看所有容器

```shell
docker ps -a
```

## 查看所有容器ID

```shell
docker ps -a -q
```

## 停止某个一个容器

```shell
docker stop containerId // containerId 是容器的ID
```

## 停止所有容器

```shell
docker stop $(docker ps -a -q) 
```

## 删除所有容器

```shell
docker  rm $(docker ps -a -q)
```

