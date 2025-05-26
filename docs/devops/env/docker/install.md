
## Windows 安装

官网下载 [Docker](https://www.docker.com/)

修改镜像保存位置，点击右上角设置（⚙）：

![](./src/20250415144854.png)

## Ubuntu

在 Ubuntu 22.04 LTS 上使用 Docker 官方源安装 Docker。

### 1. 准备

```shell
sudo apt update
sudo apt install apt-transport-https ca-certificates curl gnupg lsb-release
```

### 2. 安装 Docker 官方 GPG Key

```shell
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

### 3. 安装 Docker 源

```shell
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

更新源列表：

```shell
sudo apt update
```

### 4. 安装 Docker

```shell
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

`docker-ce`: Docker 引擎

`docker-ce-cli`: Docker 命令行工具

`containerd.io`: 管理容器生命周期的容器运行时

`docker-buildx-plugin`: 一个CLI插件，通过许多新功能扩展了Docker构建。

`docker-compose-plugin`: 一个配置管理插件，通过编写文件来编排Docker容器的创建和管理。

查看 Docker 服务的状态：

```shell
sudo systemctl is-active docker
```

### 5. 验证

```shell
sudo docker run hello-world
```

### 6. 设置非 root 用户运行 Docker 命令

添加用户到 docker 组：

```shell
sudo usermod -aG docker ${USER}
```

### Ubuntu 安装 Docker Desktop

```shell
sudo apt update
sudo apt install ca-certificates curl gnupg lsb-release
```

```shell
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

```shell
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

```shell
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

在 [Install Docker Desktop on Ubuntu](https://docs.docker.com/desktop/setup/install/linux/ubuntu/) 下载最新的"DEB package"

```shell
sudo apt install ./Downloads/docker-desktop-amd64.deb
```



参考：

https://linuxiac.com/install-docker-on-ubuntu/

https://linuxiac.com/how-to-install-docker-desktop-on-ubuntu-22-04-lts/