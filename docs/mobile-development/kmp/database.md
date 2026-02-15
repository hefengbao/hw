# 数据库
## Room

在开发过程中修改 Entity 导致数据库结构发生变化，如果没有增加版本号，则会出现如下报错

```shell
java.lang.IllegalStateException: **Room cannot verify** the data integrity. Looks like you’ve changed schema but forgot to update the version number. You can simply fix this by increasing the version number
```

如果是 Android 开发测试，卸载 App 重新运行就可以了。但是开发  KMP 项目，运行 jvm ，没有卸载的选项。解决办法，手动删除数据库文件，一般在如下目录:

C:\Users\用户\AppData\Local\Temp


参考：

[为 KMP 设置 Room 数据库  |  Kotlin  |  Android Developers](https://developer.android.google.cn/kotlin/multiplatform/room?hl=zh-cn#database-instantiation)

[Room setup in Kotlin Multiplatform (KMP) with Koin - droidcon](https://www.droidcon.com/2025/02/14/room-setup-in-kotlin-multiplatform-kmp-with-koin/)