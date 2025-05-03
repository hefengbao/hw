# Git 基础

文档说明
`<>` 表示【需替换的项】
`[]`表示【非必填项】
`|` 表示【或】
工作树（工作区），索引（暂存区），Git 目录（HEAD） 三词含义参照 Git 官网

初始配置
```shell
git config --global user.name [<username>] 配置用户名

git config --global user.email [<email>] 配置邮箱

git config --global core.editor [<vim>] 配置编辑器
```

创建项目
```shell
git clone <options> 克隆远程仓库

git init [project] 初始化本地项目

```

添加
```shell
git add <file> 添加文件到暂存区

git commit -m <commit notes> 将暂存区的内容提交到 HEAD

git commit -am <commit notes> 将 add 和 commit 合并操作

git commit --amend -m <commit notes> 将 add 和 commit 合并操作且合并到上次 commit

```

显示
```shell
git status 显示状态

git diff [HEAD] 显示差异

git log 显示日志

git show <commit> 显示某个 commit 的详细内容

git blame <file> 显示文件每行的 commit 信息
```

撤回
```shell
git restore <file> 撤回工作区的修改

git restore --staged <file> 将已提交到暂存区的修改撤回工作区

git reset [--mixed] <commit> 将当前版本撤回到某个 commit，保留工作区的修改

git reset --soft <commit> 将当前版本撤回到某个 commit, 保留工作区和暂存区的修改

git reset --hard <commit> 将当前版本撤回到某一个 commit，不保留工作区的修改

git rm <file> 将文件从工作区和暂存区删除

git mv <file> 将文件从工作区和暂存区移动或改名

git clean -df 从工作区删除未跟踪的文件
```

分支
```shell
git branch [--list] 显示所有分支

git branch -a 显示远程分支

git branch <branch> 创建分支

git branch -d|-D <branch> 删除分支

git branch -m <newbranch> 重命名当前分支

git switch <branch> 切换到已有分支

git switch -c <branch> 创建并切换分支

git merge <branch> 将某个分支合并到当前分支

git tag <tagname> 给当前分支打标签

git stash 将工作区的更改存储到脏工作目录中

git stash apply 将脏工作目录中的数据恢复到工作区（不会删除脏工作目录保存的数据）

git stash drop 将脏工作目录中的数据删除

git stash pop 将脏工作目录中的数据恢复工作区并删除脏数据
```

远程
```shell
git remote [-v] 显示远程库

git remote show <origin> 显示某个远程库的信息

git remote add <origin> <url> 添加远程库链接

git remote rm <origin> 删除远程库链接

git remote rename <oldname> <newname> 重命名远程库

git pull [<origin><branch>] 拉取远程库到本地库

git push [-u <origin> <master>] 将本地库推送到远程库

git push origin --delete <branch>|git push origin :crazy-experiment 删除远程分支

git fetch 从远程库获取到本地库

```

帮助
```shell
git help <command> 显示某个命令的详细使用文档

git <command> -h 显示某个命令的使用说明
```

checkout
该命令职责不明确，不建议使用；

```shell
git checkout <file> 丢弃工作区的修改

git checkout -f 强制丢弃工作区和暂存区的修改

git checkout <branch> 切换分支

git checkout -b <branch> 创建并切换分支
```


[Git速查表 | Laravel China 社区 (learnku.com)](https://learnku.com/articles/68324)


[当工作遇到GIT，看这篇就够了！ - SegmentFault 思否](https://segmentfault.com/a/1190000040450097)

[Git Commit 日志风格指南 | LeanCloud 开放资源](https://open.leancloud.cn/git-commit-message/)

[Git - Book (git-scm.com)](http://git-scm.com/book/zh/v2)

[Learn Git Branching](https://learngitbranching.js.org/?locale=zh_CN)

[GitHub Flavored Markdown Spec](https://github.github.com/gfm/)

[Set up Git - GitHub Docs](https://docs.github.com/en/get-started/quickstart/set-up-git)