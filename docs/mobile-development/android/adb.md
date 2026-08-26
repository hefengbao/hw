# ADB命令

## 一、基础与全局 - 服务、设备状态与通用操作

| 命令名称                              | 描述                               | 示例 (Example)                                               | 操作  |
| --------------------------------- | -------------------------------- | ---------------------------------------------------------- | --- |
| `adb version`                     | 显示 adb 客户端版本号                    | 输出：Android Debug Bridge version 1.0.41                     |     |
| `adb help`                        | 显示 adb 帮助信息                      | `adb help > adb-help.txt`                                  |     |
| `adb devices`                     | 列出已连接设备及其状态（device/offline�?     | 输出：List of devices attached / emulator-5554 device         |     |
| `adb devices -l`                  | 列出设备并显示限定符（型�?传输方式）信�?           | 输出：emulator-5554 device product:sdk_gphone64 model:Pixel_6 |     |
| `adb get-serialno`                | 获取当前设备的序列号                       | 输出：emulator-5554                                           |     |
| `adb get-state`                   | 获取设备状态：device、offline �?unknown  | 输出：device（其他可能值：offline / bootloader�?                     |     |
| `adb wait-for-device`             | 阻塞等待设备上线后再执行后续命令                 | `adb wait-for-device shell getprop sys.boot_completed`     |     |
| `adb start-server`                | 启动 adb 后台服务进程                    | 输出：daemon started successfully                             |     |
| `adb kill-server`                 | 停止 adb 后台服务进程                    | `adb kill-server && adb start-server`                      |     |
| `adb reconnect`                   | 重新连接所有设�?                        | 输出：reconnecting emulator-5554 [device]                     |     |
| `adb reconnect device`            | 重新连接当前设备                         | 输出：done（由设备端主动断开重连�?                                       |     |
| `adb reconnect offline`           | 重置所有离线设备连�?                      | 输出：reconnecting offline devices                            |     |
| `adb status-window`               | 连续输出设备连接状态变�?                    | 输出：state: device（持续刷新直到手动中断）                               |     |
| `adb keygen &lt;file&gt;`               | 生成 adb 公钥/私钥对（公钥自动存为 &lt;file&gt;.pub�?| `adb keygen my_adbkey`                                     |     |
| `adb get-devpath`                 | 输出当前设备的设备路径（device path�?        | 输出：usb:1-3（无法获取时输出 unknown�?                               |     |
| `adb pair &lt;host&gt;:&lt;port&gt; [&lt;code&gt;]` | 通过无线方式配对设备（Android 11+�?         | `adb pair 192.168.1.10:37105 123456`                       |     |
|                                   |                                  |                                                            |     |

## 二、网络连接�? Wi-Fi、TCP/IP 与无线调�?

| 命令名称                            | 描述                              | 示例 (Example)                                     | 操作  |
| ------------------------------- | ------------------------------- | ------------------------------------------------ | --- |
| `adb connect &lt;host&gt;:&lt;port&gt;`     | 通过 TCP/IP 连接指定设备                | `adb connect 192.168.1.10:5555`                  |     |
| `adb disconnect`                | 断开所�?TCP/IP 连接                  | 输出：disconnected everything                       |     |
| `adb disconnect &lt;host&gt;:&lt;port&gt;`  | 断开指定�?TCP/IP 连接                 | `adb disconnect 192.168.1.10:5555`               |     |
| `adb usb`                       | 切换�?USB 连接模式                    | 输出：restarting in USB mode                        |     |
| `adb tcpip &lt;port&gt;`              | 重启 adbd 并监听指�?TCP 端口（需�?USB 连接�?| `adb tcpip 5555`                                 |     |
| `adb forward &lt;local&gt; &lt;remote&gt;`  | 建立端口转发（如 tcp:6100 tcp:7100�?    | `adb forward tcp:8080 tcp:8080`                  |     |
| `adb forward --list`            | 列出当前所有端口转发规�?                   | 输出：emulator-5554 tcp:8080 tcp:8080               |     |
| `adb forward --remove &lt;local&gt;`  | 移除指定的端口转�?                      | `adb forward --remove tcp:8080`                  |     |
| `adb forward --remove-all`      | 移除所有端口转�?                       | `adb forward --remove-all && adb forward --list` |     |
| `adb reverse &lt;remote&gt; &lt;local&gt;`  | 建立反向端口转发（设备访问电脑端口）              | `adb reverse tcp:3000 tcp:3000`                  |     |
| `adb reverse --list`            | 列出当前所有反向端口转�?                   | 输出�?reverse) tcp:3000 tcp:3000                   |     |
| `adb reverse --remove &lt;remote&gt;` | 移除指定的反向端口转�?                    | `adb reverse --remove tcp:3000`                  |     |
| `adb reverse --remove-all`      | 移除所有反向端口转�?                     | `adb reverse --remove-all && adb reverse --list` |     |
| `adb ppp &lt;tty&gt; [&lt;params&gt;]`      | 通过 USB 建立 PPP 拨号连接              | `adb ppp dev:/dev/omap_csmi_tty1 nodetach`       |     |

## 三、应用管理�? 安装、卸载、启动与权限


| 命令名称                                           | 描述                                          | 示例 (Example)                                                     | 操作  |
| ---------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------- | --- |
| `adb install &lt;apk&gt;` **注意**                       | 安装 APK 到设�?                                 | `adb install app-debug.apk`                                      |     |
| `adb install -r &lt;apk&gt;` **注意**                    | 覆盖安装并保留应用数�?                                | `adb install -r app-release.apk`                                 |     |
| `adb install -t &lt;apk&gt;` **注意**                    | 允许安装测试包（testOnly�?                          | `adb install -t app-debug.apk`                                   |     |
| `adb install -d &lt;apk&gt;` **注意**                    | 允许降级安装到更低版�?                                | `adb install -d app-v1.0.apk`                                    |     |
| `adb install -g &lt;apk&gt;` **注意**                    | 安装并自动授予所有运行时权限                              | `adb install -g app-debug.apk`                                   |     |
| `adb install -l &lt;apk&gt;` **注意**                    | �?forward lock（转发锁定）方式安装，旧特性，新版 Android 已废�?| `adb install -l app-debug.apk`                                   |     |
| `adb install-multiple &lt;a1&gt; &lt;a2&gt; ...` **注意**      | 安装 split APK（多 APK 组合�?                     | `adb install-multiple base.apk split_config.arm64_v8a.apk`       |     |
| `adb uninstall &lt;pkg&gt;` **高危**                     | 卸载指定包名的应�?                                  | `adb uninstall com.example.demo`                                 |     |
| `adb uninstall -k &lt;pkg&gt;` **高危**                  | 卸载但保留应用数据与缓存                                | `adb uninstall -k com.example.demo`                              |     |
| `adb shell pm list packages`                   | 列出设备上的全部应用包名                                | `adb shell pm list packages -e`                                  |     |
| `adb shell pm list packages -s`                | 仅列出系统应�?                                    | 输出：package:com.android.settings                                  |     |
| `adb shell pm list packages -3`                | 仅列出第三方应用                                    | 输出：package:com.tencent.mm                                        |     |
| `adb shell pm list packages &lt;filter&gt;`          | 按关键字过滤包名                                    | `adb shell pm list packages tencent`                             |     |
| `adb shell pm list packages -f`                | 显示包名及其 APK 安装路径                             | 输出：package:/data/app/~~xx==/base.apk=com.example.demo            |     |
| `adb shell pm path &lt;pkg&gt;`                      | 显示指定应用�?APK 路径                              | `adb shell pm path com.tencent.mm`                               |     |
| `adb shell pm dump &lt;pkg&gt;`                      | 输出指定应用的详细信�?                                | `adb shell pm dump com.example.demo`                             |     |
| `adb shell pm clear &lt;pkg&gt;` **高危**                | 清除应用数据与缓存（应用回到初装状态）                         | `adb shell pm clear com.example.demo`                            |     |
| `adb shell pm enable &lt;pkg&gt;` **注意**               | 启用应用或组�?                                    | `adb shell pm enable com.example.demo`                           |     |
| `adb shell pm disable &lt;pkg&gt;` **高危**              | 禁用应用或组件（需 root；非 root 请改�?disable-user�?    | `adb shell su -c 'pm disable com.example.demo'`                  |     |
| `adb shell pm disable-user &lt;pkg&gt;` **高危**         | 为指定用户禁用应用（�?root，图标消失、数据保留）                 | `adb shell pm disable-user --user 0 com.android.browser`         |     |
| `adb shell pm grant &lt;pkg&gt; &lt;perm&gt;` **注意**         | 授予应用某权限（�?android.permission.CAMERA�?       | `adb shell pm grant com.example.demo android.permission.CAMERA`  |     |
| `adb shell pm revoke &lt;pkg&gt; &lt;perm&gt;` **高危**        | 撤销应用的某权限                                    | `adb shell pm revoke com.example.demo android.permission.CAMERA` |     |
| `adb shell pm uninstall &lt;pkg&gt;` **高危**            | �?shell 内卸载应�?                              | `adb shell pm uninstall com.example.demo`                        |     |
| `adb shell pm install -r &lt;apk&gt;`                | �?shell 内覆盖安装应�?                            | `adb shell pm install -r /data/local/tmp/app.apk`                |     |
| `adb shell pm set-install-location &lt;loc&gt;` **注意** | 设置默认安装位置�? 自动/1 内部/2 外部�?                   | `adb shell pm set-install-location 2`                            |     |
| `adb shell pm get-install-location`            | 获取当前默认安装位置                                  | 输出�?[auto]�?=internal�?=external�?                               |     |

## 四、文件传输�? push / pull 与设备文件操�?

| 命令名称                                      | 描述                        | 示例 (Example)                                                 | 操作  |
| ----------------------------------------- | ------------------------- | ------------------------------------------------------------ | --- |
| `adb push &lt;local&gt; &lt;remote&gt;`               | 从电脑推送文�?目录到设�?            | `adb push demo.mp4 /sdcard/Movies/`                          |     |
| `adb pull &lt;remote&gt;`                       | 从设备拉取文件到电脑当前目录            | `adb pull /sdcard/shot.png`                                  |     |
| `adb pull &lt;remote&gt; &lt;local&gt;`               | 从设备拉取文件到指定本地路径            | `adb pull /sdcard/shot.png D:\temp\`                         |     |
| `adb shell ls`                            | 列出目录内容                    | `adb shell ls /sdcard/Download`                              |     |
| `adb shell ls -l`                         | 详细列表（含权限、所有者、大小）          | `adb shell ls -l /sdcard/DCIM/Camera`                        |     |
| `adb shell cd &lt;path&gt;`                     | 切换工作目录（仅在同一�?shell 命令内有效） | `adb shell 'cd /sdcard/Download; ls'`                        |     |
| `adb shell pwd`                           | 显示当前工作目录                  | 输出�?（adb shell 默认工作目录为根目录�?                                  |     |
| `adb shell cp &lt;src&gt; &lt;dst&gt;`                | 复制文件或目�?                  | `adb shell cp /sdcard/a.txt /sdcard/b.txt`                   |     |
| `adb shell mv &lt;src&gt; &lt;dst&gt;`                | 移动或重命名文件                  | `adb shell mv /sdcard/a.txt /sdcard/Download/`               |     |
| `adb shell rm &lt;path&gt;` **高危**                   | 删除文件                      | `adb shell rm /sdcard/shot.png`                              |     |
| `adb shell rm -r &lt;path&gt;` **高危**                | 递归删除目录及其内容                | `adb shell rm -r /sdcard/temp`                               |     |
| `adb shell mkdir &lt;path&gt;`                  | 创建目录                      | `adb shell mkdir /sdcard/temp`                               |     |
| `adb shell touch &lt;file&gt;`                  | 创建空文件或更新时间�?              | `adb shell touch /sdcard/test.txt`                           |     |
| `adb shell cat &lt;file&gt;`                    | 查看文件文本内容                  | `adb shell cat /proc/cpuinfo`                                |     |
| `adb shell echo &lt;text&gt;`                   | 输出文本；写入设备文件须给整条命令加引号      | `adb shell "echo hello > /sdcard/a.txt"`                     |     |
| `adb shell find &lt;path&gt; -name &lt;pattern&gt;`   | 按名称查找文�?                  | `adb shell find /sdcard -name '*.apk'`                       |     |
| `adb shell chmod &lt;mode&gt; &lt;file&gt;` **注意**         | 修改文件权限�?                  | `adb shell chmod 755 /data/local/tmp/run.sh`                 |     |
| `adb shell chown &lt;user&gt;:&lt;group&gt; &lt;file&gt;` **注意** | 修改文件所有者（需 root�?          | `adb shell su -c 'chown shell:shell /data/local/tmp/run.sh'` |     |
| `adb shell df`                            | 显示磁盘分区使用�?                | `adb shell df -h /data`                                      |     |
| `adb shell du &lt;path&gt;`                     | 显示目录占用的空间大�?              | `adb shell du -sh /sdcard/Download`                          |     |

## 五、截屏与录屏 - 屏幕抓取与视频录�?

| 命令名称                                               | 描述                           | 示例 (Example)                                                 | 操作  |
| -------------------------------------------------- | ---------------------------- | ------------------------------------------------------------ | --- |
| `adb shell screencap &lt;file&gt;`                       | 截取屏幕并保存到设备（如 /sdcard/sc.png�?| `adb shell screencap /sdcard/shot.png`                       |     |
| `adb exec-out screencap -p > shot.png`             | 截屏并直接保存到电脑（不写设备存储）           | `adb exec-out screencap -p > D:\screen_01.png`               |     |
| `adb shell screenrecord &lt;file&gt;`                    | 录屏保存�?mp4（默认最�?3 分钟�?        | `adb shell screenrecord /sdcard/demo.mp4`                    |     |
| `adb shell screenrecord --time-limit &lt;s&gt; &lt;file&gt;`   | 指定录屏时长（秒�?                   | `adb shell screenrecord --time-limit 30 /sdcard/demo.mp4`    |     |
| `adb shell screenrecord --size 1280x720 &lt;file&gt;`    | 指定录屏分辨�?                     | `adb shell screenrecord --size 1280x720 /sdcard/demo.mp4`    |     |
| `adb shell screenrecord --bit-rate 6000000 &lt;file&gt;` | 指定录屏码率（bps�?                 | `adb shell screenrecord --bit-rate 6000000 /sdcard/demo.mp4` |     |
| `adb shell screenrecord --bugreport &lt;file&gt;`        | 录屏同时附加错误报告数据                 | `adb shell screenrecord --bugreport /sdcard/demo.mp4`        |     |

## 六、输入与模拟 - 按键、文本与手势模拟


| 命令名称                                                     | 描述                        | 示例 (Example)                                      | 操作  |
| -------------------------------------------------------- | ------------------------- | ------------------------------------------------- | --- |
| `adb shell input tap &lt;x&gt; &lt;y&gt;` **注意**                          | 模拟点击屏幕坐标                  | `adb shell input tap 540 1200`                    |     |
| `adb shell input swipe &lt;x1&gt; &lt;y1&gt; &lt;x2&gt; &lt;y2&gt;` **注意**            | 模拟从一点滑动到另一�?              | `adb shell input swipe 540 1600 540 400`          |     |
| `adb shell input swipe &lt;x1&gt; &lt;y1&gt; &lt;x2&gt; &lt;y2&gt; &lt;ms&gt;` **注意**       | 模拟长按（指定持续时间毫秒）            | `adb shell input swipe 540 1600 540 400 300`      |     |
| `adb shell input text &lt;text&gt;` **注意**                          | 输入文本（不支持中文，需 ASCII�?      | `adb shell input text hello123`                   |     |
| `adb shell input keyevent &lt;code&gt;` **注意**                      | 发送按键事件（可用数字码或 KEYCODE 常量�?| `adb shell input keyevent 26`                     |     |
| `adb shell input keyevent KEYCODE_HOME`                  | 模拟按下 HOME �?              | 说明：等价于 adb shell input keyevent 3                 |     |
| `adb shell input keyevent KEYCODE_BACK`                  | 模拟按下返回�?                  | 说明：等价于 adb shell input keyevent 4                 |     |
| `adb shell input keyevent KEYCODE_POWER` **注意**               | 模拟按下电源�?                  | 说明：等价于 adb shell input keyevent 26                |     |
| `adb shell input keyevent KEYCODE_VOLUME_UP`             | 模拟音量�?                    | 说明：等价于 adb shell input keyevent 24                |     |
| `adb shell input keyevent KEYCODE_VOLUME_DOWN`           | 模拟音量�?                    | 说明：等价于 adb shell input keyevent 25                |     |
| `adb shell input roll &lt;dx&gt; &lt;dy&gt;` **注意**                       | 模拟轨迹球滚�?                  | `adb shell input roll 0 -50`                      |     |
| `adb shell input draganddrop &lt;x1&gt; &lt;y1&gt; &lt;x2&gt; &lt;y2&gt; &lt;ms&gt;` **注意** | 模拟拖放操作                    | `adb shell input draganddrop 300 800 700 800 500` |     |
| `adb shell getevent`                                     | 实时输出输入设备的原始事�?            | `adb shell getevent /dev/input/event2`            |     |
| `adb shell getevent -l`                                  | 以可读标签形式输出输入事�?            | 输出：EV_KEY KEY_POWER DOWN                          |     |

## 七、进程与系统 - 进程、CPU、内存与系统属�?

| 命令名称                                             | 描述                                                             | 示例 (Example)                                                                | 操作  |
| ------------------------------------------------ | -------------------------------------------------------------- | --------------------------------------------------------------------------- | --- |
| `adb shell ps`                                   | 列出进程（默认仅当前 shell 用户的进程）                                        | 说明：默认看不到应用进程，需�?ps -A                                                       |     |
| `adb shell ps -A`                                | 列出系统全部进程                                                       | `adb shell "ps -A \| grep u0_a"`                                            |     |
| `adb shell top`                                  | 实时显示进程 CPU/内存占用                                                | `adb shell top -n 1`                                                        |     |
| `adb shell kill &lt;pid&gt;`                           | 结束指定 PID 的进�?                                                  | `adb shell kill 12345`                                                      |     |
| `adb shell am start -n &lt;pkg&gt;/&lt;act&gt;`              | 启动指定应用�?Activity                                               | `adb shell am start -n com.example.demo/.MainActivity`                      |     |
| `adb shell am start -a &lt;action&gt; -d &lt;data&gt;`       | 通过 Intent 动作与数据启动（如打开网址�?                                      | `adb shell am start -a android.intent.action.VIEW -d https://www.baidu.com` |     |
| `adb shell am start -W &lt;pkg&gt;/&lt;act&gt;`              | 启动 Activity 并等待其启动完成                                           | `adb shell am start -W com.example.demo/.MainActivity`                      |     |
| `adb shell am startservice` **注意**                    | 启动 Service（Android 8+ 受后台限制，前台服务�?am start-foreground-service�?| `adb shell am startservice -n com.example.demo/.SyncService`                |     |
| `adb shell am broadcast -a &lt;action&gt;` **注意**           | 发送广播（可带额外参数�?                                                  | `adb shell am broadcast -a com.example.ACTION_SYNC`                         |     |
| `adb shell am force-stop &lt;pkg&gt;` **注意**                | 强制停止指定应用                                                       | `adb shell am force-stop com.tencent.mm`                                    |     |
| `adb shell am kill &lt;pkg&gt;` **注意**                      | 结束应用的后台进�?                                                     | `adb shell am kill com.example.demo`                                        |     |
| `adb shell am kill-all` **注意**                        | 结束所有后台进�?                                                      | 说明：仅杀后台进程，前台应用不受影�?                                                         |     |
| `adb shell am restart` **注意**                         | 软重启用户空间（重启 zygote 及全部应用进程，需 root�?                             | `adb shell su -c 'am restart'`                                              |     |
| `adb shell am force-stop com.android.systemui` **高危** | 重启系统界面 SystemUI（状态栏/导航栏，�?root�?                               | 说明：SystemUI 为常驻应用，杀掉后由系统自动拉起，状态栏会闪一�?                                       |     |

## 八、日志与调试 - logcat 与实时调试信�?

| 命令名称                                         | 描述                         | 示例 (Example)                                        | 操作  |
| -------------------------------------------- | -------------------------- | --------------------------------------------------- | --- |
| `adb logcat`                                 | 实时输出系统日志                   | `adb logcat > logcat.txt`                           |     |
| `adb logcat -c`                              | 清除日志缓冲�?                   | `adb logcat -c && adb logcat`                       |     |
| `adb logcat -d`                              | 转储当前日志后退�?                 | `adb logcat -d > snapshot.txt`                      |     |
| `adb logcat *:E`                             | 仅显�?Error 及以上级别日�?         | `adb logcat *:E -v time`                            |     |
| `adb logcat -s &lt;tag&gt;`                        | 按标签（tag）过滤日�?              | `adb logcat -s MyTag`                               |     |
| `adb logcat -v time`                         | 显示带时间戳的日�?                 | `adb logcat -v threadtime`                          |     |
| `adb logcat -f &lt;file&gt;`                       | 将日志输出到设备文件                 | `adb logcat -f /sdcard/log.txt`                     |     |
| `adb bugreport`                              | 生成完整的系�?bug 报告（zip 包）      | `adb bugreport bugreport.zip`                       |     |
| `adb shell dumpsys`                          | 转储所有系统服务的状态信�?             | `adb shell dumpsys > dumpsys.txt`                   |     |
| `adb shell dumpsys battery`                  | 查看电池与充电信�?                 | `adb shell "dumpsys battery \| grep level"`         |     |
| `adb shell dumpsys meminfo &lt;pkg&gt;`            | 查看指定应用的内存占�?               | `adb shell dumpsys meminfo com.tencent.mm`          |     |
| `adb shell dumpsys activity top`             | 查看当前栈顶�?Activity           | `adb shell "dumpsys activity top \| grep ACTIVITY"` |     |
| `adb shell dumpsys package &lt;pkg&gt;`            | 查看应用的包信息                   | `adb shell dumpsys package com.example.demo`        |     |
| `adb shell service list`                     | 列出系统可用的服�?                 | `adb shell "service list \| grep window"`           |     |
| `adb shell getprop`                          | 列出全部系统属�?                  | `adb shell "getprop \| grep product"`               |     |
| `adb shell getprop &lt;key&gt;`                    | 读取指定的系统属�?                 | `adb shell getprop ro.product.model`                |     |
| `adb shell getprop ro.build.version.release` | 读取 Android 系统版本�?          | 输出�?4（即 Android 14�?                                |     |
| `adb shell setprop &lt;key&gt; &lt;value&gt;` **高危**          | 设置系统属性（重启后失效；多数系统属性需 root�?| `adb shell setprop log.tag.MyTag DEBUG`             |     |

## 九、设置与属性�? 系统设置与全局属�?

| 命令名称                                                 | 描述                            | 示例 (Example)                                                                                     | 操作  |
| ---------------------------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------ | --- |
| `adb shell settings list &lt;namespace&gt;`                | 列出设置项（system/global/secure�?  | `adb shell settings list system`                                                                 |     |
| `adb shell settings get &lt;namespace&gt; &lt;key&gt;`           | 读取某项设置的�?                     | `adb shell settings get system screen_brightness`                                                |     |
| `adb shell settings put &lt;namespace&gt; &lt;key&gt; &lt;value&gt;` **注意** | 修改某项设置（如息屏时间、自动旋转）            | `adb shell settings put system screen_brightness 200`                                            |     |
| `adb shell settings delete &lt;namespace&gt; &lt;key&gt;` **注意**      | 删除某项设置                        | `adb shell settings delete system screen_brightness`                                             |     |
| `adb shell content query --uri &lt;uri&gt;`                | 查询 ContentProvider 中的数据       | `adb shell content query --uri content://settings/system`                                        |     |
| `adb shell content insert --uri &lt;uri&gt; ...` **注意**         | �?ContentProvider 插入数据        | `adb shell content insert --uri content://settings/system --bind name:s:my_key --bind value:s:1` |     |
| `adb shell content delete --uri &lt;uri&gt;` **高危**             | �?ContentProvider 删除数据        | `adb shell content delete --uri content://settings/system/my_key`                                |     |
| `adb shell uiautomator dump`                         | 转储当前界面�?UI 层次结构（XML�?         | `adb shell uiautomator dump /sdcard/ui.xml`                                                      |     |
| `adb shell wm size`                                  | 显示当前屏幕分辨�?                    | 输出：Physical size: 1080x2340（若曾改过分辨率会追�?Override size: 一行）                                        |     |
| `adb shell wm size 1080x1920` **注意**                      | 临时修改屏幕分辨�?                    | `adb shell wm size reset`                                                                        |     |
| `adb shell wm density`                               | 显示当前屏幕 DPI                    | 输出：Physical density: 440（若曾改�?DPI 会追�?Override density: 一行）                                      |     |
| `adb shell wm density 480` **注意**                         | 临时修改屏幕 DPI                    | `adb shell wm density reset`                                                                     |     |
| `adb shell wm overscan 0,0,0,0` **注意**                    | 设置/重置显示边距（Android 11 起已移除该命令） | 说明：Android 10 及以下可用；Android 11+ 返回 unknown command: overscan                                     |     |
| `adb shell cmd &lt;svc&gt; &lt;args&gt;`                         | 调用系统服务命令（如 cmd wifi�?         | `adb shell cmd wifi status`                                                                      |     |
| `adb shell cmd package list`                         | �?cmd 方式列出已安装包                | `adb shell cmd package list packages -3`                                                         |     |

## 十、重启与刷写 - 重启、Recovery �?Bootloader


| 命令名称                       | 描述                                                  | 示例 (Example)                                                                   | 操作  |
| -------------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------ | --- |
| `adb reboot` **注意**             | 正常重启设备                                              | `adb -s emulator-5554 reboot`                                                  |     |
| `adb reboot userspace` **注意**   | 软重启：只重启用户空间进程（init/zygote/应用），不重启内�?· Android 11~14 | 说明：需 getprop init.userspace_reboot.is_supported 返回 1，否则命令失败；Android 15 起已移除该功�?|     |
| `adb reboot bootloader` **高危**  | 重启�?Bootloader 模式                                   | `adb reboot bootloader && fastboot devices`                                    |     |
| `adb reboot recovery` **高危**    | 重启�?Recovery 模式                                     | 说明：进入后可用 adb sideload 侧载 OTA；返回系统执�?adb reboot                                 |     |
| `adb reboot sideload` **高危**    | 重启�?Sideload（侧载）模式                                  | `adb reboot sideload && adb sideload update.zip`                               |     |
| `adb reboot fastboot` **高危**    | 重启�?Fastboot 模式（部分设备支持）                             | 说明：进�?fastbootd（用户空�?fastboot，可刷动态分区），与 bootloader �?fastboot 不同               |     |
| `adb sideload &lt;ota.zip&gt;` **高危** | �?recovery 中刷�?OTA 更新�?                             | `adb sideload update-ota.zip`                                                  |     |

## 十一、备份与恢复（已弃用）�? 已弃用的数据备份命令


| 命令名称                                   | 描述                                | 示例 (Example)                         | 操作  |
| -------------------------------------- | --------------------------------- | ------------------------------------ | --- |
| `adb backup -apk -all -f &lt;file&gt;.ab`    | 备份全部应用及数据（Android 12+ 默认不再备份应用数据�?| `adb backup -apk -all -f backup.ab`  |     |
| `adb backup -apk -shared -f &lt;file&gt;.ab` | 备份含共享存储内容（Android 12+ 默认不再备份应用数据�?| `adb backup -apk -shared -f full.ab` |     |
| `adb restore &lt;file&gt;.ab` **注意**              | 从备份文件恢复（Android 12+ 可备份内容已大幅受限�?  | `adb restore backup.ab`              |     |

## 十二、高级调试�? root、remount 与底层调�?

| 命令名称                                              | 描述                                                      | 示例 (Example)                                                                    | 操作  |
| ------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------- | --- |
| `adb root` **注意**                                      | �?root 权限重启 adbd（仅 userdebug/eng 工程版或�?root 设备�?        | 输出：restarting adbd as root；零售正式版返回 adbd cannot run as root in production builds |     |
| `adb unroot` **注意**                                    | �?adbd 退回普�?shell 权限（adb root 的反操作�?                    | 输出：restarting adbd as non root                                                  |     |
| `adb remount` **高危**                                   | �?/system�?vendor 等系统分区重新挂载为可读写（需�?adb root�?           | `adb root && adb remount`                                                       |     |
| `adb disable-verity` **高危**                            | 关闭 dm-verity 分区校验，让 remount 真正生效（需已解�?Bootloader，重启后生效�?| `adb root && adb disable-verity && adb reboot`                                  |     |
| `adb enable-verity` **注意**                             | 重新开�?dm-verity 校验，恢复系统完整性保护（重启后生效）                      | `adb root && adb enable-verity && adb reboot`                                   |     |
| `adb shell monkey -p &lt;pkg&gt; &lt;count&gt;` **注意**             | 对应用进行随机压力测试（指定事件数）                                      | `adb shell monkey -p com.example.demo 500`                                      |     |
| `adb shell monkey -p &lt;pkg&gt; --throttle 500 1000` **注意** | 限速压力测试（每事件间�?500ms�?                                    | `adb shell monkey -p com.example.demo --throttle 500 1000`                      |     |
| `adb jdwp`                                        | 列出支持 JDWP 调试的进�?PID                                     | 输出�?899（当前可调试进程�?PID 列表�?                                                       |     |
| `adb forward tcp:12345 jdwp:&lt;pid&gt;`                | 将本地端口转发到 JDWP 进程以附加调试器                                  | `adb forward tcp:12345 jdwp:8899`                                               |     |
| `adb shell sqlite3 &lt;db&gt; &lt;query&gt;` **高危**                | 直接�?SQLite 数据库执行查询（需权限/二进制）                             | `adb shell sqlite3 /data/data/com.example/databases/app.db '.tables'`           |     |
| `adb shell am profile start &lt;pkg&gt; &lt;file&gt;`         | 启动方法性能分析并写入文�?                                          | `adb shell am profile start com.example.demo /sdcard/trace.trace`               |     |
| `adb shell am profile stop &lt;pkg&gt;`                 | 停止性能分析                                                  | `adb shell am profile stop com.example.demo`                                    |     |
| `adb shell dumpsys gfxinfo &lt;pkg&gt;`                 | 查看应用渲染性能（帧耗时�?                                          | `adb shell dumpsys gfxinfo com.example.demo`                                    |     |
| `adb shell getevent -p`                           | 列出输入设备及其支持的事件类�?                                        | `adb shell getevent -p /dev/input/event0`                                       |     |

[🔗](https://www.fuwa.org/tools/adb-commands.html)