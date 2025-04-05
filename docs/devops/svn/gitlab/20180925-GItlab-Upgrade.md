# GItlab Upgrade


错误：

 `It seems you are upgrading from 10.x version series to 11.x series.`

 解决：

 先升级到 10.x 的最后一个版本，然后再升级到 11.x 版本。

 ```
 sudo gitlab-rake gitlab:backup:create STRATEGY=copy
 ```

 ```
 sudo apt-get update && sudo apt-get install gitlab-ce=10.8.7-ce.0
 ```

 ```
 sudo apt-get update && sudo apt-get install gitlab-ce
 ```

 ```
 sudo gitlab-ctl reconfigure

sudo gitlab-ctl restart
 ```


 参考：
 
 ## Upgrade paths[](https://docs.gitlab.com/ee/update/index.html#upgrade-paths 

 https://about.gitlab.com/update/#ubuntu
 https://forum.gitlab.com/t/upgrading-gitlab-from-7-x-to-8-x/3008/12

gitlab releases:

https://gitlab.com/gitlab-org/gitlab/-/releases



[Upgrading GitLab | GitLab](https://docs.gitlab.com/ee/update/index.html#upgrade-paths)