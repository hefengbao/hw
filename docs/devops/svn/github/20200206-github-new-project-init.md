# Github 新建项目初始化


## Git 全局设置

```
git config --global user.name ""
git config --global user.email ""
```

## 新建空项目

```
git clone http://127.0.0.1/bao/test.git
cd meeting
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master
```

## 已有项目添加到 Github

```
cd existing_folder
git init
git remote add origin http://github.com/hefengbao/test.git
git pull origin main
git add .
git commit -m "初始化项目"
git push --set-upstream origin main
```

## 修改仓库源

```
cd existing_repo
git remote rename origin old-origin
git remote add origin http://github.com/hefengbao/test.git
git push -u origin --all
git push -u origin --tags
```
