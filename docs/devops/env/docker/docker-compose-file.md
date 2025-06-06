# Docker Compose 配置项详解

Docker Compose YAML 文件是定义多容器应用的核心配置文件，以下是完整配置项的详细解析：

## 一、文件结构概览

```yaml
version: "3.8"  # 必须为首行

services:   # 容器服务定义
  web:      # 服务1
    image: nginx
  db:       # 服务2
    image: postgres

volumes:    # 存储卷定义
networks:   # 网络定义
configs:    # 配置对象（Swarm模式）
secrets:    # 敏感数据（Swarm模式）
```

## 二、顶级配置项

| 配置项          | 说明             | 示例                               |
| ------------ | -------------- | -------------------------------- |
| **version**  | Compose 文件格式版本 | `"3.8"`                          |
| **services** | 定义所有容器服务       | 见下文详解                            |
| **volumes**  | 持久化数据卷配置       | `db_data: driver: local`         |
| **networks** | 自定义网络配置        | `frontend: driver: bridge`       |
| **configs**  | 配置文件管理         | `nginx_conf: file: ./nginx.conf` |
| **secrets**  | 敏感数据管理         | `db_password: file: db_pass.txt` |
| **x-***      | 自定义扩展字段        | `x-custom: value`                |

## 三、services 服务配置详解

### 1. 基础配置

```yaml
services:
  webapp:
    image: nginx:1.23-alpine  # 使用镜像
    container_name: my-nginx  # 自定义容器名
    hostname: web01           # 容器主机名
    restart: always           # 重启策略(no, always, on-failure)
```

### 2. 构建配置

```yaml
services:
  app:
    build:
      context: ./app      # 构建上下文路径
      dockerfile: Dockerfile-prod  # 自定义Dockerfile
      args:               # 构建参数
        NODE_ENV: production
      cache_from:         # 缓存来源
        - alpine:latest
```

### 3. 依赖与启动顺序

```yaml
services:
  web:
    depends_on:
      db:                 # 依赖服务
        condition: service_healthy  # 健康检查通过后启动
      redis:
    links:                # 传统容器链接
      - db:database
```

### 4. 网络配置

```yaml
services:
  api:
    networks:             # 加入网络
      - frontend
      - backend
    ports:                # 端口映射
      - "8080:80"
      - "443:443/tcp"     # 指定协议
    expose:               # 暴露端口(不发布到主机)
      - "3000"
```

### 5. 数据卷配置

```yaml
services:
  db:
    volumes:
      - /var/lib/mysql                # 匿名卷
      - ./data:/app/data              # 绑定挂载
      - db_data:/var/lib/postgres     # 命名卷
      - config:/etc/nginx:ro          # 只读挂载
    tmpfs:                # 内存文件系统
      - /tmp
```

### 6. 环境与配置

```yaml
services:
  app:
    env_file:             # 环境变量文件
      - .env
    environment:          # 直接设置环境变量
      - DEBUG=1
      - API_KEY
    configs:              # 配置文件挂载
      - source: nginx_conf
        target: /etc/nginx/nginx.conf
```

### 7. 资源限制

```yaml
services:
  worker:
    deploy:              # 资源限制(也适用于单机)
      resources:
        limits:
          cpus: '0.50'
          memory: 512M
        reservations:
          memory: 256M
```

### 8. 运行控制

```yaml
services:
  job:
    command: ["npm", "start"]  # 覆盖启动命令
    entrypoint: /entrypoint.sh  # 覆盖入口点
    user: "1000:1000"          # 运行用户
    working_dir: /app/code     # 工作目录
    domainname: example.com
```

### 9. 健康检查

```yaml
services:
  db:
    healthcheck:
      test: ["CMD", "pg_isready", "-U", "postgres"]
      interval: 10s
      timeout: 5s
      retries: 3
      start_period: 30s
```

### 10. 标签与元数据

```yaml
services:
  web:
    labels:               # 容器标签
      - "com.example.description=Web server"
      - "traefik.enable=true"
    logging:              # 日志配置
      driver: json-file
      options:
        max-size: "200k"
        max-file: "10"
```

## 四、volumes 卷配置

```yaml
volumes:
  db_data:                # 命名卷
    driver: local
    driver_opts:           # 驱动参数
      type: nfs
      o: addr=192.168.1.100,rw
      device: ":/path/to/share"
    labels:                # 卷标签
      - "backup=daily"
  cache:                  # 外部卷
    external: true
    name: legacy_cache
```

## 五、networks 网络配置

```yaml
networks:
  frontend:               # 自定义网络
    driver: bridge
    driver_opts: 
      com.docker.network.bridge.name: br-front
    ipam:                 # IP地址管理
      driver: default
      config:
        - subnet: "172.28.0.0/16"
  database:
    internal: true        # 内部网络(不暴露到宿主机)
    attachable: true      # 允许其他容器加入
    name: custom_net      # 自定义网络名称
```

## 六、configs & secrets (Swarm 模式)

```yaml
configs:
  nginx_config:           # 配置文件定义
    file: ./nginx.conf
    name: nginx_v3

secrets:
  db_password:            # 密钥定义
    file: db_pass.txt
    name: postgres_pwd

services:
  web:
    configs:              # 挂载配置文件
      - source: nginx_config
        target: /etc/nginx/conf.d/app.conf
    secrets:              # 挂载密钥
      - source: db_password
        target: /run/secrets/db_pass
```

## 七、扩展字段 (x-)

```yaml
x-env: &common-env        # 定义锚点
  TZ: Asia/Shanghai
  LANG: en_US.UTF-8

services:
  app1:
    environment:
      <<: *common-env     # 引用锚点
      APP_NAME: "service1"
  
  app2:
    environment:
      <<: *common-env
      APP_NAME: "service2"
```

## 八、最佳实践配置示例

```yaml
version: "3.8"

services:
  frontend:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./static:/usr/share/nginx/html:ro
    networks:
      - public
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost"]
      interval: 30s

  backend:
    build: ./backend
    environment:
      - DB_HOST=db
      - REDIS_HOST=redis
    depends_on:
      db:
        condition: service_healthy
      redis:
    networks:
      - public
      - private

  db:
    image: postgres:15
    volumes:
      - db_data:/var/lib/postgresql/data
    environment:
      POSTGRES_PASSWORD_FILE: /run/secrets/db_pass
    secrets:
      - db_pass
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 10s

  redis:
    image: redis:alpine
    command: redis-server --save 60 1 --loglevel warning
    volumes:
      - redis_data:/data

volumes:
  db_data:
  redis_data:

networks:
  public:
    driver: bridge
  private:
    internal: true

secrets:
  db_pass:
    file: ./secrets/db_password.txt
```

## 九、重要注意事项

1. **版本兼容性**：
   - 版本 3.x 需要 Docker Engine 18.06+
   - 使用 `docker compose version` 查看兼容性

2. **环境变量优先级**：
   ```bash
   命令行变量 > .env文件 > 环境变量 > Compose文件
   ```

3. **多文件组合**：
   ```bash
   docker compose -f docker-compose.yml -f docker-compose.prod.yml up
   ```

4. **配置覆盖规则**：
   - 后加载的文件覆盖前文件的配置
   - 数组类型配置项会合并

> 官方文档：[Compose 文件参考](https://docs.docker.com/compose/compose-file/)

通过合理配置这些选项，可实现：
- ✅ 复杂应用的容器编排
- ✅ 跨环境一致性
- ✅ 资源精细控制
- ✅ 安全的密钥管理
- ✅ 高效的多服务协作