## 磁盘大小

```bash
df -h
```

```bash
df -hl
```


## 虚拟机磁盘分区及挂载

### 硬盘信息

列出所有块设备，包括未分区或未挂载的硬盘：

```bash
lsblk
```

```bash
NAME                      MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS
loop0                       7:0    0 66.8M  1 loop /snap/core24/1643
loop1                       7:1    0  1.5M  1 loop /snap/hwctl/123
loop2                       7:2    0 50.1M  1 loop /snap/snapd/27710
loop3                       7:3    0 32.5M  1 loop /snap/snapd/28332
loop4                       7:4    0  1.5M  1 loop /snap/hwctl/131
loop5                       7:5    0 66.8M  1 loop /snap/core24/2307
sda                         8:0    0  100G  0 disk 
├─sda1                      8:1    0    1M  0 part 
├─sda2                      8:2    0    2G  0 part /boot
└─sda3                      8:3    0   98G  0 part 
  └─ubuntu--vg-ubuntu--lv 252:0    0   49G  0 lvm  /
sdb                         8:16   0  200G  0 disk 
sr0                        11:0    1 1024M  0 rom  
```

### 解析
#### 1. loop 设备：snap 软件包镜像

```text
loop0  66.8M  /snap/core24/1643
loop1   1.5M  /snap/hwctl/123
loop2  50.1M  /snap/snapd/27710
loop3  32.5M  /snap/snapd/28332
loop4   1.5M  /snap/hwctl/131
loop5  66.8M  /snap/core24/2307
```

这些是 Ubuntu Snap 使用的只读 loop 镜像设备，不是真实物理磁盘。

- `core24`：Snap 基础运行时，有 `1643`、`2307` 两个版本。
- `snapd`：Snap 守护程序，有 `27710`、`28332` 两个版本。
- `hwctl`：某个硬件控制相关 snap，有 `123`、`131` 两个版本。
- 同时存在两个版本通常是 Snap 保留旧版本用于回滚，一般可忽略。
- `RO=1` 表示只读，符合 snap squashfs 镜像特性。

#### 2. sda：第一块磁盘，100G

```
sda      100G disk
├─sda1     1M part
├─sda2     2G part /boot
└─sda3    98G part
  └─ubuntu--vg-ubuntu--lv 49G lvm /
```

解析：
- `sda`：100G 系统盘。
- `sda1`：1M 分区，未挂载。通常是 BIOS Boot 分区，用于 GRUB 在 GPT 磁盘上启动。
- `sda2`：2G，挂载到 `/boot`，存放内核和启动文件。
- `sda3`：98G，是 LVM 物理卷所在分区。
- `ubuntu--vg-ubuntu--lv`：LVM 逻辑卷，大小 49G，挂载为根目录 `/`。

关键点：

> `sda3` 有 98G，但根逻辑卷 `/` 只有 49G，说明 LVM 卷组 `ubuntu-vg` 中很可能还有约 49G 空间未分配给根逻辑卷。  
> 这不是磁盘坏或丢失，而是 LVM 尚未扩容。

可以用以下命令确认：

```bash
sudo pvs
sudo vgs
sudo lvs
df -h /
```

如果确认卷组有剩余空间，可以扩容根逻辑卷和文件系统。但扩容命令取决于文件系统类型，例如 ext4 用 `resize2fs`，xfs 用 `xfs_growfs`，不要盲目执行。

#### 3. sdb：第二块磁盘，200G

```text
sdb      200G disk
```

- 是一块 200G 磁盘。
- 当前没有分区、没有文件系统、没有挂载、也没有加入 LVM。
- 基本处于完全未使用状态。

可用于：

- 新建分区挂载；
- 加入 LVM 扩容；
- 做数据盘；
- 做备份盘等。

#### 4. sr0：光驱/虚拟光驱

```text
sr0      1024M rom
```

- 光驱或虚拟 CD/DVD/ISO 设备。
- 1G 左右，只读。
- 通常无影响。

#### 总体结论

这台机器大致是：

|设备|容量|用途|
|---|---|---|
|sda|100G|系统盘|
|sda1|1M|BIOS Boot/启动相关|
|sda2|2G|`/boot`|
|sda3|98G|LVM 物理卷|
|ubuntu-vg-ubuntu-lv|49G|根目录 `/`|
|sdb|200G|未使用|
|loop0-5|小容量|Snap 只读镜像|
|sr0|1024M|光驱/ISO|

重点：

1. `/` 根分区当前是 49G，`sda3` 是 98G，LVM 中可能还有约 49G 未分配。
2. `sdb` 200G 完全空闲。
3. loop 设备是 snap 镜像，正常现象。
4. 若磁盘空间紧张，优先检查 LVM 剩余空间，再考虑使用 `sdb`。

### sda3 挂载到 `/` 根 

#### 🔍 第一步：确认剩余空间与文件系统类型

首先，确认卷组中确实有可用空间，并查明根分区的文件系统类型，因为这决定了后续用哪个扩容命令。

```bash
# 查看逻辑卷、卷组和物理卷的详细信息
sudo vgs
sudo lvs
sudo pvs
```

在 `vgs` 的输出中，关注 **`VFree`** 列，它显示了卷组中尚未分配的空闲空间。根据你的情况，这里应该会显示约 **49G**。

接着，确认文件系统类型：

```bash
df -hT /
```

查看输出中的 `Type` 列。Ubuntu 22.04 及更新版本的根分区通常默认是 **`ext4`**，但也有可能是 `xfs`。

#### ⚙️ 第二步：扩展逻辑卷 (Logical Volume)

使用 `lvextend` 命令，将卷组中**所有**的剩余空间（`+100%FREE`）都分配给根逻辑卷 `/dev/ubuntu-vg/ubuntu-lv`。

```bash
sudo lvextend -l +100%FREE /dev/ubuntu-vg/ubuntu-lv
```

命令执行后，可以再次运行 `sudo lvs`，应该能看到 `ubuntu-lv` 的 `LSize` 从 49G 左右增加到了约 98G。

#### 📈 第三步：扩展文件系统 (Filesystem)

逻辑卷扩容后，上层的文件系统还不能立即识别新增空间，需要手动扩展。**请根据第一步中查到的文件系统类型执行对应命令**。

**情况 A：如果你的文件系统是 `ext4`（最常见）**

```bash
sudo resize2fs /dev/ubuntu-vg/ubuntu-lv
```

`resize2fs` 命令专门用于调整 ext2/ext3/ext4 文件系统的大小。

**情况 B：如果你的文件系统是 `xfs`**

```bash
sudo xfs_growfs /
```

`xfs_growfs` 命令需要以**挂载点**作为参数，对于根分区来说就是 `/`。

#### ✅ 第四步：验证扩容结果

最后，使用 `df -h` 命令确认根分区 `/` 的容量和可用空间已经增加。

```bash
df -h /

```

此时，`Size` 列应该会显示从原来的 49G 增长到了约 98G。

### 把 sdb 挂载到 `/` 根

### ⚠️ 操作前务必注意

任何分区和 LVM 操作都有风险，**强烈建议先备份重要数据**。同时，请再次确认你的根目录确实在 LVM 上（从你之前的 `lsblk` 输出来看是 `ubuntu--vg-ubuntu--lv`，这是典型的 Ubuntu LVM 配置）。

#### 🛠️ 第一步：确认磁盘与卷组状态

首先，确认 `sdb` 完全空闲，并且你当前的卷组（VG）名称和根逻辑卷（LV）路径。

```bash
# 1. 确认 sdb 没有分区和文件系统
lsblk /dev/sdb
# 2. 确认卷组名称 (VG) 和逻辑卷路径 (LV)
sudo vgs
sudo lvs
```

从你之前的输出可知：

- 卷组名称：**`ubuntu-vg`**
- 根逻辑卷路径：**`/dev/ubuntu-vg/ubuntu-lv`**

#### 🔧 第二步：将 sdb 做成 LVM 物理卷 (PV)

LVM 需要先将底层磁盘初始化为物理卷（Physical Volume），才能加入存储池。

```bash
# 清除 sdb 上可能存在的旧文件系统签名（如果这是一块全新的或确认无数据的盘）
sudo wipefs -a /dev/sdb
# 将整块磁盘创建为物理卷
sudo pvcreate /dev/sdb
```

`pvcreate` 会将 `/dev/sdb` 标记为可供 LVM 使用的物理设备。

#### 🔗 第三步：将新物理卷加入现有卷组 (VG)

这一步把 `sdb` 的 200G 空间**并入**你已有的存储池 `ubuntu-vg` 中。

```bash
sudo vgextend ubuntu-vg /dev/sdb
```

执行后，`ubuntu-vg` 卷组的可用空间（`VFree`）就会增加约 200G。

#### 📈 第四步：扩展根逻辑卷 (LV)

现在卷组有了新空间，用它来扩展根目录所在的逻辑卷。`-l +100%FREE` 表示将卷组中**所有**剩余空闲空间都分配给这个逻辑卷。

```bash
sudo lvextend -l +100%FREE /dev/ubuntu-vg/ubuntu-lv
```

这一步将 `/dev/ubuntu-vg/ubuntu-lv` 这个逻辑卷扩大了。

#### 📂 第五步：扩展文件系统

逻辑卷变大后，其上的文件系统还需要被“撑开”才能识别新空间。**请根据你根目录的文件系统类型选择命令**。

先用 `df -hT /` 查看 `Type` 列：

- **如果显示 `ext4`（Ubuntu 最常见）**：
```bash
sudo resize2fs /dev/ubuntu-vg/ubuntu-lv
```

- **如果显示 `xfs`**： 
```bash
sudo xfs_growfs /
```

注意 `xfs_growfs` 的参数是**挂载点** `/`，而不是设备路径。

#### ✅ 第六步：验证结果

最后，确认根分区的容量已经增加。

```bash
df -h /
```
`Size` 列现在应该显示根目录的总大小已经将 `sdb` 的 200G 大致合并进来了（具体数值取决于元数据开销）。

#### 💡 另一种选择：将 sdb 作为独立目录挂载

如果你的目的并非扩大根目录本身，而是想单独拥有一块 200G 的高速存储空间，那么可以走“独立挂载”路线：

1. 在 `sdb` 上创建文件系统（如 `sudo mkfs.ext4 /dev/sdb`）。
    
2. 创建一个挂载点目录（如 `sudo mkdir /data`）。
    
3. 将 `sdb` 挂载上去（`sudo mount /dev/sdb /data`）。
    
4. 为了开机自动挂载，需要将设备 UUID 和挂载点写入 `/etc/fstab`。
    

这种方式下，`sdb` 的空间是**独立**的，不会增加 `df -h /` 显示的根分区大小，但 `/data` 目录可以自由使用这 200G 空间。
