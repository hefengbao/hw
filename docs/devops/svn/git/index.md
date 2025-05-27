# Git 基础

## 加入 git 管理

### 1.新项目

```shell
git init

git add .

git commit -m "init"

git branch -M main

git remote add origin 你的github仓库地址

git pull origin main --allow-unrelated-histories

git push -u origin main


git push
```

### 2.已有项目

```shell
git remote add 你的github仓库地址

git branch -M main

git push -u origin main
```

## 克隆（clone）

> 把远程服务器项目复制到本机

```shell
git clone git@github.com:hefengbao/jingmo.git
```

重新设置项目名称

```shell
git clone git@github.com:hefengbao/jingmo.git xx
```

## 拉取（pull）

> 获取远程服务器最新代码

```shell
git pull
```

指定分支

```shell
git pull origin develop
```

## 分支（ branch）

1. 创建分支

```shell
git branch feature_x
```

切换到 `feature_x` 分支：

```shell
git checkout feature_x
```

创建分支并切换到新建的分支：

```shell
git checkout -b feature_x
```

2. 拉取远程分支并创建本地分支

```shell
git checkout -b feature_x origin/feature_x
```

这种方式需要远程分支 `feature_x` 存在才可以。

3. 建立当前分支与远程分支的映射关系

```shell
git branch -u origin/feature_x
```

或者

```shell
git branch --set-upstream-to origin/feature_x
```

4. 撤销本地分支与远程分支的映射关系

```shell
git branch --unset-upstream
```

5. 查看本地分支

```shell
git branch
```

6. 查看远程分支

```shell
git branch -r
```

7. 查看本地和远程分支

```shell
git branch -a
```

8. 切换本地分支

```shell
git checkout 分支名称
```

9. 删除本地分支

```shell
git branch -d 分支名称
```

10. 把其他分支合并到当前分支

```shell
git merge 其他分支名称
```

11. 查看哪些分支已被并入当前分支

```shell
git branch --merged
```

一般前面没有标星的分支可以通过 `git branch -d bootstrap-ui` 命令删除。

12. 查看哪些分支没有合并到当前分支

```shell
git branch --no-merged
```

13. 查看各个分支最后一个提交对象的信息

```shell
git branch -v
```

14. 重命名本地分支

```shell
git branch -m 当前的名称  想要的分支名
```

15. 删除远程分支

```shell
git push origin -d 要删除的远程分支名称
```

## 状态（status）

```shell
git status
```

- Changes not staged for commit
  > 表示得大概就是工作区有该内容，但是缓存区没有，需要我们 `git add`

- Changes to be committed
  > 一般而言，这个时候，文件放在缓存区了，我们需要 `git commit`

- nothing to commit, working tree clean
  > 这个时候，我们将本地的代码推送到远端即可 `git push`


## 添加（add）

把当前所有修改添加到下次提交中：

```shell
git add .
```

把对某个文件(文件夹)的修改添加到下次提交中：

```shell
git add -p <file>
git add <file>
git add <folder>
```

## Commit

把修改提交到本地仓库

```shell
git commit -m 'message here'
```

修改上次提交
*请勿修改已发布的提交记录!*

```shell
git commit --amend
```

[Git 提交信息规范化](https://xie.infoq.cn/article/dffa8c4efd68796bc526639ee)

## 提交（push）

> 把自己最新代码提交到远程服务器

```shell
git push -u origin master
```

或者

```shell
git push --set-upstream origin master
```

## Stash

把当前分支中未提交的修改移动到其他分支：

```shell
git stash
git checkout branch2
git stash pop
```

将 stashed changes 应用到当前分支：

```shell
git stash apply
```

删除最新一次的 stashed changes：

```shell
git stash drop
```

## Fetch

## Rebase

## Reset

https://juejin.cn/post/7071780876501123085
 
## 远程服务器（remote）

查看远程服务器信息

```shell
git remote -v
```

设置（重置）远程服务器地址

```shell
git remote set-url origin git@github.com:hefengbao/jingmo.git
```


## 配置（config）

- 列出当前配置

```shell
git config --list	
```

- 列出 Repository 配置

```shell
git config --local --list
```

- 列出全局配置

```shell
git config --global --list
```

- 列出系统配置

```shell
git config --system --list
```

- 配置用户名

```shell
git config --global user.name "your name"
```

或者只为当前项目配置

```shell
git config user.name "your name"
```

- 配置邮箱

```shell
git config --global user.email "me@example.com"
```

或者只为当前项目配置

```shell
git config user.email "me@example.com"
```

## Git 的一些概念

### 版本库`.git`

- 当我们使用 git 管理文件时，比如 `git init` 时，这个时候，会多一个 `.git` 文件，我们把这个文件称之为版本库。
- `.git` 文件另外一个作用就是它在创建的时候，会自动创建 `main` 分支，并且将 `HEAD` 指针指向 `main` 分支。

### 工作区

- 本地项目存放文件的位置

### 暂存区 (Index/Stage)

- 顾名思义就是暂时存放文件的地方，通过是通过 `add` 命令将工作区的文件添加到缓冲区

### 本地仓库（Repository）

- 通常情况下，我们使用 `commit` 命令可以将暂存区的文件添加到本地仓库
- 通常而言，`HEAD` 指针指向的就是 `main` 分支

### 远程仓库（Remote）

- 举个例子，当我们使用 GitHub 托管我们项目时，它就是一个远程仓库。
- 通常我们使用 `clone` 命令将远程仓库代码拷贝下来，本地代码更新后，通过 `push` 命令推送给远程仓库。

参考：
https://juejin.cn/post/6869519303864123399

资料：

[Learn Git Branching - 动画演示](https://learngitbranching.js.org/?locale=zh_CN)

[stash, reset --soft, cherry-pick, revert, relog](https://juejin.cn/post/7071780876501123085)

[Git 聊天入门](https://wkevin.github.io/GitChat/gitchat.html)


[最常见的 Git 错误都有哪些，如何解决它们？](https://my.oschina.net/javayou/blog/3081401)

[12 个 Git 的使用技巧！](https://www.oschina.net/translate/12-git-tips-gits-12th-birthday)

[Git忽略提交规则 - .gitignore配置运维总结](https://www.cnblogs.com/kevingrace/p/5690241.html)

[Git rebase 用法小结](https://www.jianshu.com/p/4a8f4af4e803)

[腾讯是如何使用 Git 的 ？](https://mp.weixin.qq.com/s/a1Eral_n4NfksDCE7ZeN5g)

[Gitflow工作流程](https://www.cnblogs.com/jeffery-zou/p/10280167.html)