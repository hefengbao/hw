# Docker 镜像

##  镜像源

[dongyubin/DockerHub: 2025年12月更新，目前国内可用Docker镜像源汇总，DockerHub国内镜像加速列表，🚀DockerHub镜像加速器](https://github.com/dongyubin/DockerHub)

## 错误解决方案

Docker 拉取镜像可能遇到如下错误：

```shell
 ✘ plugin_daemon Error Get "https://registry-1.docker.io/v2/": net/http: request canceled while waiting for connection (Client.Timeout exceeded while awaiting head...                     15.2s
 ✘ db Error            Get "https://registry-1.docker.io/v2/": net/http: request canceled while waiting for connection (Client.Timeout exceeded while awaiting headers)                    15.2s
 ✘ ssrf_proxy Error    Get "https://registry-1.docker.io/v2/": net/http: request canceled while waiting for connection (Client.Timeout exceeded while awaiting headers...                  15.2s
 ✘ weaviate Error      Get "https://registry-1.docker.io/v2/": net/http: request canceled while waiting for connection (Client.Timeout exceeded while awaiting headers)                    15.2s
 ✘ redis Error         Get "https://registry-1.docker.io/v2/": net/http: request canceled while waiting for connection (Client.Timeout exceeded while awaiting headers)                    15.2s
 ✘ sandbox Error       Get "https://registry-1.docker.io/v2/": net/http: request canceled while waiting for connection (Client.Timeout exceeded while awaiting headers) 
```

解决办法：

Ubuntu：编辑 `/etc/docker/daemon.json`

Windows 系统编辑 `C:\Users\UserName\.docker\deamon.json`

添加 `registry-mirrors`:

```
{
    "registry-mirrors": [
        "https://docker.m.daocloud.io/",
        "https://huecker.io/",
        "https://dockerhub.timeweb.cloud",
        "https://noohub.ru/",
        "https://dockerproxy.com",
        "https://docker.mirrors.ustc.edu.cn",
        "https://docker.nju.edu.cn",
        "https://xx4bwyg2.mirror.aliyuncs.com",
        "http://f1361db2.m.daocloud.io",
        "https://registry.docker-cn.com",
        "http://hub-mirror.c.163.com",
        "https://docker.mirrors.ustc.edu.cn"
  ]
}  
```

然后重启 Docker 服务。

Ubuntu： 

```shell
sudo systemctl restart docker
```

Windows 在右下角的托盘找到 Docker 图标，右键点击即可看到重启选项。


https://juejin.cn/post/7469764901370347539

https://mp.weixin.qq.com/s/304kiYO11G4-s-WliwtEJw