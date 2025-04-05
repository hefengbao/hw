# 包管理


打包格式和工具：

| 操作系统 | 格式       | 工具                          |
| -------- | ---------- | ----------------------------- |
| Debian   | .deb       | apt, apt-cache, apt-get, dpkg |
| Ubuntu   | .deb       | apt, apt-cache, apt-get, dpkg |
| CentOS   | .rpm       | yum                           |
| Fedora   | .rpm       | dnf                           |
| FreeBSD  | Ports, txz | make, pkg                     |



更新包列表：

| 系统             | 命令                       |
| ---------------- | -------------------------- |
| Debian / Ubuntu  | sudo apt-get update        |
|                  | sudo apt update            |
| CentOS           | yum check-update           |
| Fedora           | dnf check-update           |
| FreeBSD Packages | sudo pkg update            |
| FreeBSD Ports    | sudo portsnap fetch update |



更新已安装的包：

| 系统             | 命令                                                         | 说明                                                         |
| ---------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Debian / Ubuntu  | sudo apt-get upgrade                                         | 只更新已安装的包                                             |
|                  | sudo apt-get dist-upgrade                                    | 可能会增加或删除包以满足新的依赖                             |
|                  | sudo apt upgrade                                             | 同 apt-get upgrade                                           |
|                  | sduo apt full-upgrade                                        | 同 apt-get dist-upgrade                                      |
| CentOS           | sudo yum update                                              |                                                              |
| Fedora           | sudo dnf upgrade                                             |                                                              |
| FreeBSD Packages | sudo pkg upgrade                                             |                                                              |
| FreeBSD Ports    | less /usr/ports/UPDATING                                     | 使用 less 来查看 ports 的更新提示（使用上下光标键滚动，按 q 退出） |
|                  | cd /usr/ports/ports-mgmt/portmaster && sudo make install && sudo portmaster -a | 安装 portmaster 然后使用它更新已安装的 ports                 |



搜索某个包：

| 系统             | 命令                                           | 说明                     |
| ---------------- | ---------------------------------------------- | ------------------------ |
| Debian / Ubuntu  | apt-cache search search_string                 |                          |
|                  | apt search search_string                       |                          |
| CentOS           | yum search search_string                       |                          |
|                  | yum search all search_string                   | 搜索所有的字段，包括描述 |
| Fedora           | dnf search search_string                       |                          |
|                  | dnf search all search_string                   |                          |
|                  |                                                |                          |
| FreeBSD Packages | pkg search search_string                       |                          |
|                  | pkg search -f search_string                    |                          |
|                  | pkg search -D  search_string                   |                          |
| FreeBSD Ports    | cd /usr/ports && make search name=package      |                          |
|                  | cd /usr/ports && make search key=search_string |                          |



查看某个软件包的信息：

| 系统             | 命令                                         | 说明                     |
| ---------------- | -------------------------------------------- | ------------------------ |
| Debian / Ubuntu  | apt-cache show package                       | 显示有关报的本地缓存信息 |
|                  | apt show package                             |                          |
|                  | dpkg -s package                              | 显示包的当前安装状态     |
| CentOS           | yum info package                             |                          |
|                  | yum deeplist package                         | 列出包的依赖             |
| Fedora           | dnf info package                             |                          |
|                  | dnf repoquery --requires package             | 列出包的依赖             |
| FreeBSD Packages | pkg info package                             | 显示已安装的包的信息     |
| FreeBSD Ports    | cd /usr/ports/category/port && cat pkg-descr |                          |



安装：

`install`



删除一个或多个已安装的包：

| 系统             | 命令                                         | 说明 |
| ---------------- | -------------------------------------------- | ---- |
| Debian / Ubuntu  | sudo apt-get remove package                  |      |
|                  | sudo apt remove package                      |      |
|                  | sudo apt-get autoremove                      |      |
| CentOS           | sudo yum remove package                      |      |
| Fedora           | sudo dnf erase package                       |      |
| FreeBSD Packages | sudo pkg delete package                      |      |
|                  | sudo pkg autoremove                          |      |
| FreeBSD Ports    | sudo pkg delete package                      |      |
|                  | cd /usr/ports/path_to_port && make deinstall |      |

