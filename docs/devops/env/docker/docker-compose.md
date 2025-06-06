# Docker Compose 详解

## 一、什么是 Docker Compose？

Docker Compose 是一个用于**定义和运行多容器 Docker 应用**的工具。通过一个 YAML 文件（`docker-compose.yml`）描述所有服务、网络、卷等配置，只需一条命令即可启动整个应用栈。

## 二、核心概念

1. **服务 (Service)**  
   - 一个容器实例（如 Web 服务器、数据库）。
   - 在 `docker-compose.yml` 中定义为 `services` 下的一个节点。

2. **项目 (Project)**  
   - 一组关联服务的集合，默认以当前目录名命名（可通过 `-p` 指定）。

3. **配置文件 (`docker-compose.yml`)**  
   - YAML 格式的文件，定义服务、网络、卷等。

## 三、核心优势

1. **一键启停**：`docker compose up` / `down`
2. **环境隔离**：每个项目独立网络/卷
3. **配置即代码**：版本化管理基础设施
4. **高效协作**：团队共享同一配置

## 四、安装 Docker Compose

```bash
# Linux 安装 (需先安装 Docker Engine)
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# 验证安装
docker-compose --version
```

> 注：新版 Docker Desktop 已内置 Compose（命令为 `docker compose`）。

## 五、`docker-compose.yml` 文件详解

```yaml
version: "3.9"  # 指定 Compose 版本（需匹配 Docker 引擎）

services:
  web:  # 服务名称
    image: nginx:alpine  # 使用镜像
    build: ./app  # 或基于 Dockerfile 构建
    ports:
      - "80:80"  # 端口映射 (主机:容器)
    volumes:
      - ./data:/var/www/html  # 卷挂载 (主机:容器)
    environment:
      - DEBUG=1  # 环境变量
    depends_on:  # 依赖顺序
      - db

  db:
    image: postgres:15
    volumes:
      - db_data:/var/lib/postgresql/data  # 命名卷

volumes:  # 声明命名卷
  db_data:
```

## 六、常用命令

| 命令                           | 说明                |
| ---------------------------- | ----------------- |
| `docker compose up`          | 启动所有服务（后台加 `-d`）  |
| `docker compose down`        | 停止并删除容器、网络        |
| `docker compose ps`          | 查看运行中的容器          |
| `docker compose logs`        | 查看日志（加 `-f` 实时跟踪） |
| `docker compose build`       | 重新构建镜像            |
| `docker compose exec web sh` | 进入 web 容器终端       |
| `docker compose pull`        | 拉取服务的最新镜像         |


## 七、典型工作流

1. 定义 `Dockerfile`（描述单个容器环境）
2. 编写 `docker-compose.yml`（编排多服务）
3. 启动应用：
   ```bash
   docker compose up -d --build
   ```
4. 访问应用：`http://localhost`
5. 停止清理：
   ```bash
   docker compose down -v  # -v 删除关联卷
   ```


## 八、高级特性

1. **环境变量文件**  
   使用 `.env` 文件定义变量：
   ```env
   DB_PASSWORD=secret
   ```
   在 Compose 文件中引用：
   ```yaml
   environment:
     - DB_PASSWORD=${DB_PASSWORD}
   ```

2. **多环境配置**  
   通过 `-f` 指定不同配置文件：
   ```bash
   docker compose -f docker-compose.prod.yml up
   ```

3. **健康检查**  
   确保依赖服务就绪：
   ```yaml
   healthcheck:
     test: ["CMD", "curl", "-f", "http://localhost"]
     interval: 30s
     timeout: 10s
     retries: 3
   ```

4. **水平扩展**  
   运行多个服务实例：
   ```bash
   docker compose up -d --scale web=3
   ```

## 九、实战案例：部署 WordPress

```yaml
version: "3.9"

services:
  db:
    image: mysql:8.0
    volumes:
      - db_data:/var/lib/mysql
    environment:
      MYSQL_ROOT_PASSWORD: rootpass
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wpuser
      MYSQL_PASSWORD: wppass

  wordpress:
    image: wordpress:latest
    ports:
      - "8000:80"
    environment:
      WORDPRESS_DB_HOST: db
      WORDPRESS_DB_USER: wpuser
      WORDPRESS_DB_PASSWORD: wppass
    depends_on:
      - db

volumes:
  db_data:
```

启动命令：

```bash
docker compose up -d
```

访问 `http://localhost:8000` 完成安装。

## 十、最佳实践

1. **版本控制**：将 `docker-compose.yml` 纳入 Git 管理
2. **最小权限原则**：避免使用 `root` 用户运行容器
3. **资源限制**：为服务配置 CPU/内存限制
   ```yaml
   deploy:
     resources:
       limits:
         cpus: "0.5"
         memory: 512M
   ```
4. **日志管理**：使用 `json-file` 或第三方日志驱动
5. **定期更新**：检查镜像版本安全更新

> 官方文档：[https://docs.docker.com/compose/](https://docs.docker.com/compose/)

通过 Docker Compose，您可以用声明式的方式管理复杂应用，显著提升开发部署效率！