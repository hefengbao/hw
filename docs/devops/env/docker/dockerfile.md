# Dockerfile 详解：构建容器镜像的蓝图

## 一、什么是 Dockerfile？

Dockerfile 是一个**纯文本文件**，包含一系列用于自动化构建 Docker 镜像的指令。它定义了：
- 基础操作系统环境
- 应用程序依赖
- 配置文件
- 运行时环境
- 启动命令

## 二、核心指令详解

| 指令                | 说明                 | 示例                                                         |
| ----------------- | ------------------ | ---------------------------------------------------------- |
| **`FROM`**        | 指定基础镜像（必须为第一条指令）   | `FROM ubuntu:22.04`                                        |
| **`RUN`**         | 执行命令创建新镜像层         | `RUN apt-get update && apt-get install -y curl`            |
| **`COPY`**        | 复制本地文件到镜像          | `COPY ./app /usr/src/app`                                  |
| **`ADD`**         | 类似 COPY，支持 URL 和解压 | `ADD https://example.com/file.tar.gz /tmp/`                |
| **`CMD`**         | 容器启动时的默认命令         | `CMD ["python", "app.py"]`                                 |
| **`ENTRYPOINT`**  | 容器的主程序（不可被覆盖）      | `ENTRYPOINT ["nginx", "-g", "daemon off;"]`                |
| **`ENV`**         | 设置环境变量             | `ENV NODE_ENV=production`                                  |
| **`ARG`**         | 构建时传递的变量           | `ARG VERSION=latest`                                       |
| **`WORKDIR`**     | 设置工作目录             | `WORKDIR /app`                                             |
| **`EXPOSE`**      | 声明容器端口             | `EXPOSE 8080`                                              |
| **`USER`**        | 指定运行用户             | `USER node`                                                |
| **`VOLUME`**      | 创建挂载点              | `VOLUME /data`                                             |
| **`HEALTHCHECK`** | 容器健康检查             | `HEALTHCHECK --interval=30s CMD curl -f http://localhost/` |
## 三、构建过程解析

1. **分层构建**：每条指令创建一个只读层
2. **联合文件系统**：各层叠加形成最终镜像
3. **构建缓存**：未修改的指令复用缓存层

```bash
# 构建镜像（-t 指定标签，. 表示当前目录为构建上下文）
docker build -t my-app:1.0 .

# 查看构建历史
docker history my-app:1.0
```

## 四、最佳实践

1. **选择合适的基础镜像**
   ```dockerfile
   # 推荐使用官方轻量镜像
   FROM python:3.11-slim
   ```

2. **优化构建缓存**
   ```dockerfile
   # 先复制依赖文件（变化频率低）
   COPY requirements.txt .
   RUN pip install -r requirements.txt
   
   # 再复制代码（变化频率高）
   COPY . .
   ```

3. **减少镜像层数**
   ```dockerfile
   # 合并多条RUN命令
   RUN apt-get update \
       && apt-get install -y --no-install-recommends \
          git \
          curl \
       && rm -rf /var/lib/apt/lists/*
   ```

4. **避免以 root 运行**
   ```dockerfile
   RUN groupadd -r appuser && useradd -r -g appuser appuser
   USER appuser
   ```

5. **清理无用文件**
   ```dockerfile
   RUN apt-get purge -y --auto-remove $buildDeps \
       && rm -rf /tmp/*
   ```

6. **使用 .dockerignore**
   ```gitignore
   # 忽略不必要的文件
   .git
   node_modules
   *.log
   Dockerfile
   ```

## 五、多阶段构建

分离构建环境和运行环境，减小镜像体积：
```dockerfile
# 阶段1：构建环境
FROM golang:1.20 AS builder
WORKDIR /go/src/app
COPY . .
RUN go build -o /go/bin/app

# 阶段2：运行环境
FROM alpine:latest
COPY --from=builder /go/bin/app /usr/local/bin/app
CMD ["app"]
```

## 六、ARG 与 ENV 对比

| |`ARG`|`ENV`|
|---|---|---|
|作用域|构建阶段|构建阶段 + 容器运行时|
|覆盖方式|`docker build --build-arg`|`docker run -e`|
|示例|`ARG APP_VERSION=1.0`|`ENV API_HOST=api.example.com`|
## 七、CMD 与 ENTRYPOINT 协作

| 组合方式                                          | 效果         |
| --------------------------------------------- | ---------- |
| `CMD ["executable", "param"]`                 | 默认可执行命令    |
| `ENTRYPOINT ["executable"]` + `CMD ["param"]` | 固定主程序+可变参数 |
| `ENTRYPOINT ["executable", "param"]`          | 完全固定命令     |

```dockerfile
# 示例：允许覆盖启动参数
ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]
```

## 八、完整示例：Node.js 应用

```dockerfile
# 阶段1：构建
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# 阶段2：运行
FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./
USER node
EXPOSE 3000
CMD ["node", "dist/main.js"]
```

## 九、调试技巧

1. 进入失败容器：
   ```bash
   docker run -it --entrypoint=sh my-image
   ```
2. 检查文件系统：
   ```bash
   docker create --name temp my-image
   docker export temp | tar tvf -
   ```
3. 查看构建过程：
   ```bash
   docker build --progress=plain .
   ```

## 十、安全实践

1. 定期更新基础镜像
2. 扫描镜像漏洞：
   ```bash
   docker scan my-image
   ```
3. 使用内容信任：
   ```bash
   export DOCKER_CONTENT_TRUST=1
   ```
4. 最小权限原则：
   ```dockerfile
   RUN chown -R appuser:appuser /app \
       && chmod -R 550 /app
   ```

> 官方文档：[https://docs.docker.com/engine/reference/builder/](https://docs.docker.com/engine/reference/builder/)

通过 Dockerfile 可以实现：
✅ 可重复的构建过程
✅ 版本控制的镜像定义
✅ 安全可控的部署单元
✅ 高效的CI/CD流水线