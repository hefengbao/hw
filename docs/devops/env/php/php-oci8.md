# 安装 php-oci8

以下演示 Ubuntu server 安装 php-oci8

## 1. 安装系统依赖

``` bash
sudo apt update
sudo apt install -y php-dev php-pear build-essential unzip wget libaio1t64
```

``` bash
sudo ln -s /usr/lib/x86_64-linux-gnu/libaio.so.1t64 /usr/lib/x86_64-linux-gnu/libaio.so.1
```

## 2. 下载并解压 Oracle Instant Client

你需要 **Basic** 和 **SDK** 两个 ZIP 包。Basic 提供运行库，SDK 提供编译 OCI8 所需的头文件。

从 Oracle 官方下载页获取 Linux x86-64 的 ZIP 包： https://www.oracle.com/database/technologies/instant-client/linux-x86-64-downloads.html

``` bash
cd /tmp
# 下载 Basic 和 SDK
wget https://download.oracle.com/otn_software/linux/instantclient/2326400/instantclient-basic-linux.x64-23.26.4.0.0.zip

wget https://download.oracle.com/otn_software/linux/instantclient/2326400/instantclient-sdk-linux.x64-23.26.4.0.0.zip

# 解压到 /opt/oracle
sudo mkdir -p /opt/oracle
sudo unzip -o instantclient-basic-linux.x64-*.zip -d /opt/oracle
sudo unzip -o instantclient-sdk-linux.x64-*.zip -d /opt/oracle

# 确认解压后的目录名（通常形如 instantclient_23_26）
ls /opt/oracle/
```

## 3. 配置系统级动态库路径

让 `ldconfig` 知道 Instant Client 库的位置，这是编译和基础运行的前提。

``` bash
# 假设解压目录为 /opt/oracle/instantclient_23_26
echo "/opt/oracle/instantclient_23_26" | sudo tee /etc/ld.so.conf.d/oracle-instantclient.conf
sudo ldconfig
```

## 4. 安装 PHP OCI8 扩展（通过 PECL）

PECL 在编译 OCI8 时会询问 Instant Client 路径，需通过管道传入 `instantclient,<路径>`。

``` bash
echo 'instantclient,/opt/oracle/instantclient_23_26' | sudo pecl install oci8
```

参考：[PECL :: Package :: oci8](https://pecl.php.net/package/oci8)

```
Use 'pecl install oci8' to install for PHP 8.2, PHP 8.3, PHP 8.4 and PHP 8.5.  
  
Use 'pecl install oci8-3.2.1' to install for PHP 8.1.  
  
Use 'pecl install oci8-3.0.1' to install for PHP 8.0.  
  
Use 'pecl install oci8-2.2.0' to install for PHP 7.
```

编译完成后，启用扩展：

``` shell
echo "extension=oci8.so" | sudo tee /etc/php/8.4/mods-available/oci8.ini
sudo phpenmod oci8
```

## 5. 关键一步：为 PHP 运行时设置 `LD_LIBRARY_PATH`

**这是最容易遗漏、导致“连接静默失败”的环节。** `ldconfig` 主要影响编译期和系统级链接，但 PHP-FPM、Apache 等进程在**运行时**仍可能无法继承正确的库搜索路径。必须显式设置 `LD_LIBRARY_PATH`。

#### 如果使用 PHP-FPM

通过 systemd drop-in 为 `php8.3-fpm` 服务注入环境变量：

``` bash
sudo mkdir -p /etc/systemd/system/php8.4-fpm.service.d
sudo tee /etc/systemd/system/php8.4-fpm.service.d/oracle-instantclient.conf <<'EOF'
[Service]
Environment=LD_LIBRARY_PATH=/opt/oracle/instantclient_23_26
EOF
sudo systemctl daemon-reload
sudo systemctl restart php8.4-fpm
```

#### 如果使用 Apache + mod_php

编辑 Apache 的环境变量文件：

``` bash
echo 'export LD_LIBRARY_PATH=/opt/oracle/instantclient_23_26:$LD_LIBRARY_PATH' | sudo tee -a /etc/apache2/envvars
sudo systemctl restart apache2
```

## 6. 验证安装

**检查 OCI8 是否加载**：

``` bash
php -m | grep oci8
```

**检查运行时是否能解析到 Instant Client 库**：

``` bash
ldd $(php-config --extension-dir)/oci8.so | grep libclntsh
```

期望看到 `libclntsh.so` 指向 `/opt/oracle/instantclient_23_26/` 下的实际文件。

示例：

``` bash
libclntsh.so.23.1 => /opt/oracle/instantclient_23_26/libclntsh.so.23.1 (0x00007087aca00000)
libclntshcore.so.23.1 => /opt/oracle/instantclient_23_26/libclntshcore.so.23.1 (0x00007087ab400000)
```

