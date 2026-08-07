# Run

有时候从 Github 上下载的一些 KMP 项目，种种原因，desktop 的运行配置可能不能正常使用：

![](./images/ScreenShot_2026-08-07_151713_409.png)

查找 `compose.desktop` 在那个模块配置的：

![](./images/ScreenShot_2026-08-07_152017_094.png)

在 `settings.gradle.kts` 查看该模块注册的名称：

![](./images/ScreenShot_2026-08-07_152206_461.png)

那么可以通过如下命令运行：

```sehll
./gradlew :sample:run
```

![](./images/ScreenShot_2026-08-07_152432_757.png)