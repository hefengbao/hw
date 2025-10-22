# ufw


```shell
sudo ufw enable
```

```shell
sudo ufw status
```

## Nginx

内置配置：

- `Nginx HTTP`: 仅开启  80 端口 (regular HTTP)
- `Nginx HTTPS`: 仅开启 443 端口 (HTTPS)
- `Nginx Full`: 同时开启 80 和 443 端口

例如开启 80 端口：

```shell
sudo ufw allow 'Nginx HTTP'
```

开启 80 和 443 端口

```shell
sudo ufw allow 'Nginx Full'
```