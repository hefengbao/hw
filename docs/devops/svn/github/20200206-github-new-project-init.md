# Github 新建项目初始化

### Command line instructions

You can also upload existing files from your computer using the instructions below.

##### Git global setup

```
git config --global user.name ""
git config --global user.email ""
```

##### Create a new repository

```
git clone http://127.0.0.1/bao/test.git
cd meeting
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master
```

##### Push an existing folder

```
cd existing_folder
git init
git remote add origin http://127.0.0.1/bao/test.git
git add .
git commit -m "Initial commit"
git push -u origin master
```

##### Push an existing Git repository

```
cd existing_repo
git remote rename origin old-origin
git remote add origin http://127.0.0.1/bao/test.git
git push -u origin --all
git push -u origin --tags
```
