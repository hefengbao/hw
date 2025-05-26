# Linux: 用户、组

## 添加用户

**命令 : useradd**

语法 : useradd [-u UID] [-g GID] [-d HOME] [-M] [-s]

> ‘-u’ 自定义UID
> ‘-g’ 使其属于已经存在的某个组，后面可以跟组id, 也可以跟组名
> ‘-d’ 自定义用户的家目录
> ‘-M’ 不建立家目录
> 
> '-m' 建立家目录
> 
> ‘-s’ 自定义shell

```
sudo useradd -m -s /bin/bash  bao
```

## 删除用户

**命令 : userdel**

语法 : userdel [-r] username

> ‘-r’ 选项的作用只有一个，就是删除账户的时候连带账户的家目录一起删除。

## 添加用户组

**命令 : groupadd**

语法 : groupadd [-g GID] groupname

> “-g” 选项可以自定义gid

```shell
groupadd grouptest

// 或者 -g 指定 gid
groupadd -g 511 grouptest
```

## 删除用户组

**命令 : groupdel**

```shell
groupdel grouptest
```

如果该用户组中有用户，则不能删除。

## 用户添加到组

命令如下：

sudo usermod -aG 用户组名 用户名

例子：

```
sudo usermod -aG sudo bao
```

其中a:表示添加，G：指定组名

## 创建/修改一个用户的密码

**命令 : passwd**

语法 : passwd [username]

> “passwd” 后面不加username则是修改当前账户的密码。

## 查看所有用户、用户组、密码：

```shell
cat /etc/passwd
cat /etc/group
cat /etc/shadow  //加密
```

--

## 查看当前用户

可使用的命令： `who`、`whoami`、`w`

```bash
bao@QAZ:/home$ who
bao      pts/1        2024-08-18 15:09
bao@QAZ:/home$ whoami
bao
bao@QAZ:/home$ w
 15:35:25 up 25 min,  1 user,  load average: 0.00, 0.02, 0.02
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
bao      pts/1    -                15:09   25:36   0.03s  0.02s -bash
```

## 查看所有用户

```bash
cat /etc/passwd
```

## 查看当前登录系统的所有用户

```bash
users
```

## 创建用户（adduser）

有两个命令 `useradd` 和 `adduser` 可用。下面演示创建一个用户 `test`:

### `useradd`

```bash
sudo useradd -m test
```

添加 `-m` 参数，在 `/home` 目录下同步创建同名的用户文件夹， 即 `/home/test/`,反之则不会。

初始化用户密码：

```bash
sudo passwd test
```

查看用户是否创建成功：

```bash
cat /etc/passwd
```

结果：

```bash
test:x:1001:1001::/home/test:/bin/sh
```

`useradd` 的可选参数：

```bash
-c     指定一段注释性描述。
-d     目录 指定用户主目录，如果此目录不存在，则同时使用-m选项，可以创建主目录。
-g     用户组 指定用户所属的用户组。
-G     用户组，用户组 指定用户所属的附加组。
-s     Shell文件 指定用户的登录Shell。
-u     指定UID
```

`passwd` 命令可选参数：

```bash
-d        清空密码
-l        锁定
-u        解锁
-S        查看锁定状态
```


### `adduser`

```bash
sudo adduser test
```

输出结果：

```bash
bao@QAZ:/home$ sudo adduser test
Adding user `test' ...
Adding new group `test' (1001) ...
Adding new user `test' (1001) with group `test' ...
Creating home directory `/home/test' ...
Copying files from `/etc/skel' ...
New password:
Retype new password:
passwd: password updated successfully
Changing the user information for test
Enter the new value, or press ENTER for the default
        Full Name []: Test
        Room Number []:
        Work Phone []:
        Home Phone []:
        Other []:
Is the information correct? [Y/n] y
```

可以看到，`adduser` 命令会同步创建用户 `test`、用户组 `test`、用户文件夹`/home/test` 并初始化密码，方便不少。

运行 `cat /etc/passwd` 命令可看到添加的用户信息：

```bash
test:x:1001:1001:Test,,,:/home/test:/bin/bash
```

上述信息的格式为：

`用户名 ：密码占位符 ：UID  ：GID ： 备注标识信息 ：用户主目录 ：用户登录启动的shell `

表示一个用户名为 "test" 的用户，其 UID 为 1001，所属组 GID 为 1001，全名为 "Test"，主目录为 "/home/test"，登录后启动的 shell 为 "/bin/bash"。x 是密码占位符，实际加密存储在 `/etc/shadow` 文件中。

## 切换用户

```bash
su test
```

## 删除用户（deluser）
 
有两个可用命令 `userdel` 和 `deluser`

### `userdel`

```bash
sudo userdel -r test
```

添加 `-r` 参数，同步删除 `/home` 目录的同名用户文件夹。

### `deluser`

```bash
sudo deluser -r  test
```

## 添加用户组

```bash
 sudo groupadd test
```

查看：

```bash
cat /etc/group | grep test
```

## 删除用户组

```bash
 sudo groupdel test
```


加入 `sudo` 组：

```bash
sudo usermod -aG sudo test
```


参考：

https://blog.csdn.net/jxjdhdnd/article/details/135522572