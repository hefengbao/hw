# pip

## 安装包

```shell
pip install package_name==desired_version
```

示例：

```shell
pip install requests==2.23.0
```

## 更新包

```python
pip install --upgrade package_name
```

## requirements.txt

对于从 Github  登录克隆（下载）下来的项目，总不能一个一个文件去找要安装那些依赖吧，必须得借用工具。

```shell
pip install pipreqs
```

可以全局安装。

在项目根目录下运行：

```shell
pipreqs . --encoding=utf8 --force
```

安装所有依赖：

```shell
pip install -r requirements.txt
```

