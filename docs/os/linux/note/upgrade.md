# 升级

## 更新到最新状态

```bash
sudo apt update
sudo apt upgrade -y
sudo apt dist-upgrade -y
sudo apt autoremove --purge -y
sudo apt clean
```

## 跨版本升级

这是真正意义上的“系统版本”升级。在开始前，请务必**备份所有重要数据**，并建议在操作过程中保持电源连接稳定。

### 第 1 步：做好升级前的万全准备

首先，必须将当前的 22.04 系统更新到最新状态，这是成功升级的必要前提。请执行**情况一**中的所有命令，并确保系统已重启。

### 第 2 步：确认升级策略

Ubuntu 的系统升级行为由配置文件控制。请运行以下命令，确认 `Prompt` 设置为 `lts`，这样系统只会升级到下一个长期支持版本。

```bash
cat /etc/update-manager/release-upgrades
```

如果输出为 Prompt=lts`，则无需更改。如果为 `Prompt=normal` 或其它值，你可以使用 `sudo nano /etc/update-manager/release-upgrades` 手动编辑文件，将 `Prompt` 行修改为 `Prompt=lts`，然后保存退出。

### 第 3 步：安装/确认升级工具

`update-manager-core` 是执行版本升级的核心工具，通常已预装，但可以再次确认。

```bash
sudo apt install update-manager-core -y
```
### 第 4 步：执行升级命令

运行以下命令，启动交互式升级流程：

```bash
sudo do-release-upgrade
```

如果上述命令提示“**No new release found**”（未找到新版本），这通常意味着升级通道尚未开放，或者你的系统配置需要微调。此时，可以尝试以下方法：

- **方法A（强制检测）**：使用 `-d` 参数强制检测开发版（Developer）升级，这在 LTS 版本发布初期常被使用。
```bash
 sudo do-release-upgrade -d
``` 
- **方法B（检查配置）**：再次确认 `/etc/update-manager/release-upgrades` 文件中的 `Prompt=lts` 是否正确设置且未被注释。

### 第 5 步：遵循屏幕提示完成升级

`do-release-upgrade` 是一个交互式过程，终端会显示大量信息并请求你确认。请注意以下几点：

- **SSH 连接风险**：如果你是通过 SSH 远程升级，系统会提示将在另一个端口启动一个备用 SSH 守护进程，以防主进程中断导致失联。通常选择“继续”即可。

- **配置文件变更**：升级过程中，系统会询问如何处理已修改的配置文件。通常建议保留当前版本（默认选项），除非你明确知道需要采用软件包维护者的新版本。

- **不可中断**：在最终确认开始升级后，**切勿关闭终端或重启电脑**，直到流程全部结束。

### 第 6 步：重启并验证

升级完成后，系统会提示你重启。你可以用以下命令验证版本：

```bash
lsb_release -a
```