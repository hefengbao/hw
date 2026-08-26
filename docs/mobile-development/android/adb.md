# ADB命令

## 一、基础与全局 - 服务、设备状态与通用操作

| 命令名称    | 描述| 示例 (Example)|
| --------------------------------- | -------------------------------- | ---------------------------------------------------------- |
| `adb version`   | 显示 adb 客户端版本号  | 输出：Android Debug Bridge version 1.0.41   |
| `adb help` | 显示 adb 帮助信息    | `adb help ] adb-help.txt`|
| `adb devices`   | 列出已连接设备及其状态（device/offline） | 输出：List of devices attached / emulator-5554 device |
| `adb devices -l`| 列出设备并显示限定符（型号/传输方式）信息    | 输出：emulator-5554 device product:sdk_gphone64 model:Pixel_6 |
| `adb get-serialno`| 获取当前设备的序列号| 输出：emulator-5554 |
| `adb get-state` | 获取设备状态：device、offline 或 unknown  | 输出：device（其他可能值：offline / bootloader）    |
| `adb wait-for-device`| 阻塞等待设备上线后再执行后续命令 | `adb wait-for-device shell getprop sys.boot_completed`|
| `adb start-server`| 启动 adb 后台服务进程  | 输出：daemon started successfully   |
| `adb kill-server` | 停止 adb 后台服务进程  | `adb kill-server && adb start-server`    |
| `adb reconnect` | 重新连接所有设备| 输出：reconnecting emulator-5554 [device]   |
| `adb reconnect device`    | 重新连接当前设备| 输出：done（由设备端主动断开重连） |
| `adb reconnect offline`   | 重置所有离线设备连接| 输出：reconnecting offline devices  |
| `adb status-window`| 连续输出设备连接状态变化   | 输出：state: device（持续刷新直到手动中断）|
| `adb keygen [file]`| 生成 adb 公钥/私钥对（公钥自动存为 [file].pub） | `adb keygen my_adbkey`   |
| `adb get-devpath` | 输出当前设备的设备路径（device path） | 输出：usb:1-3（无法获取时输出 unknown） |
| `adb pair [host]:[port] [[code]]` | 通过无线方式配对设备（Android 11+）  | `adb pair 192.168.1.10:37105 123456`|

## 二、网络连接 - Wi-Fi、TCP/IP 与无线调试


| 命令名称  | 描述    | 示例 (Example)   |
| ------------------------------- | ------------------------------- | ------------------------------------------------ |
| `adb connect [host]:[port]`| 通过 TCP/IP 连接指定设备| `adb connect 192.168.1.10:5555`|
| `adb disconnect`| 断开所有 TCP/IP 连接| 输出：disconnected everything|
| `adb disconnect [host]:[port]`  | 断开指定的 TCP/IP 连接 | `adb disconnect 192.168.1.10:5555`|
| `adb usb`| 切换回 USB 连接模式  | 输出：restarting in USB mode |
| `adb tcpip [port]` | 重启 adbd 并监听指定 TCP 端口（需先 USB 连接） | `adb tcpip 5555`|
| `adb forward [local] [remote]`  | 建立端口转发（如 tcp:6100 tcp:7100）| `adb forward tcp:8080 tcp:8080`|
| `adb forward --list`    | 列出当前所有端口转发规则  | 输出：emulator-5554 tcp:8080 tcp:8080|
| `adb forward --remove [local]`  | 移除指定的端口转发| `adb forward --remove tcp:8080`|
| `adb forward --remove-all` | 移除所有端口转发 | `adb forward --remove-all && adb forward --list` |
| `adb reverse [remote] [local]`  | 建立反向端口转发（设备访问电脑端口） | `adb reverse tcp:3000 tcp:3000`|
| `adb reverse --list`    | 列出当前所有反向端口转发  | 输出：(reverse) tcp:3000 tcp:3000 |
| `adb reverse --remove [remote]` | 移除指定的反向端口转发   | `adb reverse --remove tcp:3000`|
| `adb reverse --remove-all` | 移除所有反向端口转发    | `adb reverse --remove-all && adb reverse --list` |
| `adb ppp [tty] [[params]]` | 通过 USB 建立 PPP 拨号连接 | `adb ppp dev:/dev/omap_csmi_tty1 nodetach`|

## 三、应用管理 - 安装、卸载、启动与权限


| 命令名称 | 描述| 示例 (Example)    |
| ---------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------- |
| `adb install [apk]` **注意** | 安装 APK 到设备| `adb install app-debug.apk`    |
| `adb install -r [apk]` **注意**  | 覆盖安装并保留应用数据| `adb install -r app-release.apk`|
| `adb install -t [apk]` **注意**  | 允许安装测试包（testOnly） | `adb install -t app-debug.apk` |
| `adb install -d [apk]` **注意**  | 允许降级安装到更低版本| `adb install -d app-v1.0.apk`  |
| `adb install -g [apk]` **注意**  | 安装并自动授予所有运行时权限    | `adb install -g app-debug.apk` |
| `adb install -l [apk]` **注意**  | 以 forward lock（转发锁定）方式安装，旧特性，新版 Android 已废弃 | `adb install -l app-debug.apk` |
| `adb install-multiple [a1] [a2] ...` **注意** | 安装 split APK（多 APK 组合）    | `adb install-multiple base.apk split_config.arm64_v8a.apk`|
| `adb uninstall [pkg]` **高危**   | 卸载指定包名的应用 | `adb uninstall com.example.demo`|
| `adb uninstall -k [pkg]` **高危** | 卸载但保留应用数据与缓存 | `adb uninstall -k com.example.demo`    |
| `adb shell pm list packages` | 列出设备上的全部应用包名 | `adb shell pm list packages -e`|
| `adb shell pm list packages -s`| 仅列出系统应用   | 输出：package:com.android.settings|
| `adb shell pm list packages -3`| 仅列出第三方应用  | 输出：package:com.tencent.mm |
| `adb shell pm list packages [filter]`  | 按关键字过滤包名  | `adb shell pm list packages tencent`   |
| `adb shell pm list packages -f`| 显示包名及其 APK 安装路径   | 输出：package:/data/app/~~xx==/base.apk=com.example.demo    |
| `adb shell pm path [pkg]`    | 显示指定应用的 APK 路径    | `adb shell pm path com.tencent.mm`|
| `adb shell pm dump [pkg]`    | 输出指定应用的详细信息| `adb shell pm dump com.example.demo`   |
| `adb shell pm clear [pkg]` **高危** | 清除应用数据与缓存（应用回到初装状态）| `adb shell pm clear com.example.demo`  |
| `adb shell pm enable [pkg]` **注意** | 启用应用或组件   | `adb shell pm enable com.example.demo` |
| `adb shell pm disable [pkg]` **高危** | 禁用应用或组件（需 root；非 root 请改用 disable-user）| `adb shell su -c 'pm disable com.example.demo'`|
| `adb shell pm disable-user [pkg]` **高危** | 为指定用户禁用应用（免 root，图标消失、数据保留） | `adb shell pm disable-user --user 0 com.android.browser` |
| `adb shell pm grant [pkg] [perm]` **注意** | 授予应用某权限（如 android.permission.CAMERA）| `adb shell pm grant com.example.demo android.permission.CAMERA`  |
| `adb shell pm revoke [pkg] [perm]` **高危** | 撤销应用的某权限  | `adb shell pm revoke com.example.demo android.permission.CAMERA` |
| `adb shell pm uninstall [pkg]` **高危**    | 在 shell 内卸载应用| `adb shell pm uninstall com.example.demo` |
| `adb shell pm install -r [apk]`| 在 shell 内覆盖安装应用   | `adb shell pm install -r /data/local/tmp/app.apk`|
| `adb shell pm set-install-location [loc]` **注意** | 设置默认安装位置（0 自动/1 内部/2 外部）  | `adb shell pm set-install-location 2`  |
| `adb shell pm get-install-location`    | 获取当前默认安装位置| 输出：0[auto]（1=internal，2=external） |

## 四、文件传输 - push / pull 与设备文件操作


| 命令名称    | 描述 | 示例 (Example)|
| ----------------------------------------- | ------------------------- | ------------------------------------------------------------ |
| `adb push [local] [remote]`| 从电脑推送文件/目录到设备| `adb push demo.mp4 /sdcard/Movies/`|
| `adb pull [remote]`| 从设备拉取文件到电脑当前目录    | `adb pull /sdcard/shot.png`|
| `adb pull [remote] [local]`| 从设备拉取文件到指定本地路径    | `adb pull /sdcard/shot.png D:\temp\`|
| `adb shell ls`  | 列出目录内容  | `adb shell ls /sdcard/Download`    |
| `adb shell ls -l`| 详细列表（含权限、所有者、大小）  | `adb shell ls -l /sdcard/DCIM/Camera` |
| `adb shell cd [path]`   | 切换工作目录（仅在同一条 shell 命令内有效） | `adb shell 'cd /sdcard/Download; ls'` |
| `adb shell pwd` | 显示当前工作目录| 输出：/（adb shell 默认工作目录为根目录） |
| `adb shell cp [src] [dst]`| 复制文件或目录 | `adb shell cp /sdcard/a.txt /sdcard/b.txt` |
| `adb shell mv [src] [dst]`| 移动或重命名文件| `adb shell mv /sdcard/a.txt /sdcard/Download/`|
| `adb shell rm [path]` **高危** | 删除文件    | `adb shell rm /sdcard/shot.png`    |
| `adb shell rm -r [path]` **高危** | 递归删除目录及其内容| `adb shell rm -r /sdcard/temp`|
| `adb shell mkdir [path]`| 创建目录    | `adb shell mkdir /sdcard/temp`|
| `adb shell touch [file]`| 创建空文件或更新时间戳| `adb shell touch /sdcard/test.txt` |
| `adb shell cat [file]`  | 查看文件文本内容| `adb shell cat /proc/cpuinfo` |
| `adb shell echo [text]` | 输出文本；写入设备文件须给整条命令加引号 | `adb shell "echo hello ] /sdcard/a.txt"`   |
| `adb shell find [path] -name [pattern]`   | 按名称查找文件 | `adb shell find /sdcard -name '*.apk'`|
| `adb shell chmod [mode] [file]` **注意** | 修改文件权限位 | `adb shell chmod 755 /data/local/tmp/run.sh` |
| `adb shell chown [user]:[group] [file]` **注意** | 修改文件所有者（需 root）   | `adb shell su -c 'chown shell:shell /data/local/tmp/run.sh'` |
| `adb shell df`  | 显示磁盘分区使用量 | `adb shell df -h /data`    |
| `adb shell du [path]`   | 显示目录占用的空间大小| `adb shell du -sh /sdcard/Download`|

## 五、截屏与录屏 - 屏幕抓取与视频录制


| 命令名称| 描述 | 示例 (Example)|
| -------------------------------------------------- | ---------------------------- | ------------------------------------------------------------ |
| `adb shell screencap [file]`| 截取屏幕并保存到设备（如 /sdcard/sc.png） | `adb shell screencap /sdcard/shot.png`|
| `adb exec-out screencap -p ] shot.png`| 截屏并直接保存到电脑（不写设备存储）   | `adb exec-out screencap -p ] D:\screen_01.png`|
| `adb shell screenrecord [file]`  | 录屏保存为 mp4（默认最长 3 分钟） | `adb shell screenrecord /sdcard/demo.mp4`  |
| `adb shell screenrecord --time-limit [s] [file]`   | 指定录屏时长（秒）  | `adb shell screenrecord --time-limit 30 /sdcard/demo.mp4`    |
| `adb shell screenrecord --size 1280x720 [file]`    | 指定录屏分辨率    | `adb shell screenrecord --size 1280x720 /sdcard/demo.mp4`    |
| `adb shell screenrecord --bit-rate 6000000 [file]` | 指定录屏码率（bps）| `adb shell screenrecord --bit-rate 6000000 /sdcard/demo.mp4` |
| `adb shell screenrecord --bugreport [file]`| 录屏同时附加错误报告数据 | `adb shell screenrecord --bugreport /sdcard/demo.mp4`|

## 六、输入与模拟 - 按键、文本与手势模拟


| 命令名称    | 描述 | 示例 (Example)    |
| -------------------------------------------------------- | ------------------------- | ------------------------------------------------- |
| `adb shell input tap [x] [y]` **注意** | 模拟点击屏幕坐标| `adb shell input tap 540 1200`  |
| `adb shell input swipe [x1] [y1] [x2] [y2]` **注意**    | 模拟从一点滑动到另一点| `adb shell input swipe 540 1600 540 400`  |
| `adb shell input swipe [x1] [y1] [x2] [y2] [ms]` **注意** | 模拟长按（指定持续时间毫秒）    | `adb shell input swipe 540 1600 540 400 300` |
| `adb shell input text [text]` **注意** | 输入文本（不支持中文，需 ASCII）| `adb shell input text hello123` |
| `adb shell input keyevent [code]` **注意**    | 发送按键事件（可用数字码或 KEYCODE 常量） | `adb shell input keyevent 26`   |
| `adb shell input keyevent KEYCODE_HOME`| 模拟按下 HOME 键| 说明：等价于 adb shell input keyevent 3 |
| `adb shell input keyevent KEYCODE_BACK`| 模拟按下返回键 | 说明：等价于 adb shell input keyevent 4 |
| `adb shell input keyevent KEYCODE_POWER` **注意** | 模拟按下电源键 | 说明：等价于 adb shell input keyevent 26|
| `adb shell input keyevent KEYCODE_VOLUME_UP`| 模拟音量加   | 说明：等价于 adb shell input keyevent 24|
| `adb shell input keyevent KEYCODE_VOLUME_DOWN`   | 模拟音量减   | 说明：等价于 adb shell input keyevent 25|
| `adb shell input roll [dx] [dy]` **注意** | 模拟轨迹球滚动 | `adb shell input roll 0 -50`    |
| `adb shell input draganddrop [x1] [y1] [x2] [y2] [ms]` **注意** | 模拟拖放操作  | `adb shell input draganddrop 300 800 700 800 500` |
| `adb shell getevent`   | 实时输出输入设备的原始事件| `adb shell getevent /dev/input/event2`    |
| `adb shell getevent -l`| 以可读标签形式输出输入事件| 输出：EV_KEY KEY_POWER DOWN|

## 七、进程与系统 - 进程、CPU、内存与系统属性


| 命令名称   | 描述       | 示例 (Example)          |
| ------------------------------------------------ | -------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `adb shell ps` | 列出进程（默认仅当前 shell 用户的进程） | 说明：默认看不到应用进程，需用 ps -A |
| `adb shell ps -A` | 列出系统全部进程 | `adb shell "ps -A \| grep u0_a"`  |
| `adb shell top`| 实时显示进程 CPU/内存占用 | `adb shell top -n 1`  |
| `adb shell kill [pid]` | 结束指定 PID 的进程  | `adb shell kill 12345`|
| `adb shell am start -n [pkg]/[act]` | 启动指定应用的 Activity| `adb shell am start -n com.example.demo/.MainActivity`    |
| `adb shell am start -a [action] -d [data]`| 通过 Intent 动作与数据启动（如打开网址）| `adb shell am start -a android.intent.action.VIEW -d https://www.baidu.com` |
| `adb shell am start -W [pkg]/[act]` | 启动 Activity 并等待其启动完成 | `adb shell am start -W com.example.demo/.MainActivity`    |
| `adb shell am startservice` **注意**  | 启动 Service（Android 8+ 受后台限制，前台服务用 am start-foreground-service） | `adb shell am startservice -n com.example.demo/.SyncService`|
| `adb shell am broadcast -a [action]` **注意**   | 发送广播（可带额外参数）  | `adb shell am broadcast -a com.example.ACTION_SYNC`|
| `adb shell am force-stop [pkg]` **注意** | 强制停止指定应用 | `adb shell am force-stop com.tencent.mm`  |
| `adb shell am kill [pkg]` **注意**    | 结束应用的后台进程| `adb shell am kill com.example.demo` |
| `adb shell am kill-all` **注意** | 结束所有后台进程 | 说明：仅杀后台进程，前台应用不受影响    |
| `adb shell am restart` **注意** | 软重启用户空间（重启 zygote 及全部应用进程，需 root）    | `adb shell su -c 'am restart'`    |
| `adb shell am force-stop com.android.systemui` **高危** | 重启系统界面 SystemUI（状态栏/导航栏，免 root） | 说明：SystemUI 为常驻应用，杀掉后由系统自动拉起，状态栏会闪一下 |

## 八、日志与调试 - logcat 与实时调试信息


| 命令名称| 描述| 示例 (Example) |
| -------------------------------------------- | -------------------------- | --------------------------------------------------- |
| `adb logcat`| 实时输出系统日志 | `adb logcat ] logcat.txt` |
| `adb logcat -c`    | 清除日志缓冲区  | `adb logcat -c && adb logcat`|
| `adb logcat -d`    | 转储当前日志后退出| `adb logcat -d ] snapshot.txt`    |
| `adb logcat *:E`   | 仅显示 Error 及以上级别日志  | `adb logcat *:E -v time`  |
| `adb logcat -s [tag]` | 按标签（tag）过滤日志| `adb logcat -s MyTag`|
| `adb logcat -v time`| 显示带时间戳的日志| `adb logcat -v threadtime`|
| `adb logcat -f [file]`| 将日志输出到设备文件 | `adb logcat -f /sdcard/log.txt`   |
| `adb bugreport`    | 生成完整的系统 bug 报告（zip 包） | `adb bugreport bugreport.zip`|
| `adb shell dumpsys`| 转储所有系统服务的状态信息 | `adb shell dumpsys ] dumpsys.txt` |
| `adb shell dumpsys battery`| 查看电池与充电信息| `adb shell "dumpsys battery \| grep level"` |
| `adb shell dumpsys meminfo [pkg]`    | 查看指定应用的内存占用| `adb shell dumpsys meminfo com.tencent.mm`  |
| `adb shell dumpsys activity top`| 查看当前栈顶的 Activity   | `adb shell "dumpsys activity top \| grep ACTIVITY"` |
| `adb shell dumpsys package [pkg]`    | 查看应用的包信息 | `adb shell dumpsys package com.example.demo`|
| `adb shell service list`   | 列出系统可用的服务| `adb shell "service list \| grep window"`   |
| `adb shell getprop`| 列出全部系统属性 | `adb shell "getprop \| grep product"`|
| `adb shell getprop [key]`  | 读取指定的系统属性| `adb shell getprop ro.product.model`|
| `adb shell getprop ro.build.version.release` | 读取 Android 系统版本号   | 输出：14（即 Android 14）|
| `adb shell setprop [key] [value]` **高危**  | 设置系统属性（重启后失效；多数系统属性需 root） | `adb shell setprop log.tag.MyTag DEBUG`|

## 九、设置与属性 - 系统设置与全局属性


| 命令名称| 描述  | 示例 (Example)                               |
| ---------------------------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------ |
| `adb shell settings list [namespace]`| 列出设置项（system/global/secure）   | `adb shell settings list system`           |
| `adb shell settings get [namespace] [key]`   | 读取某项设置的值    | `adb shell settings get system screen_brightness` |
| `adb shell settings put [namespace] [key] [value]` **注意** | 修改某项设置（如息屏时间、自动旋转）    | `adb shell settings put system screen_brightness 200`  |
| `adb shell settings delete [namespace] [key]` **注意** | 删除某项设置 | `adb shell settings delete system screen_brightness`   |
| `adb shell content query --uri [uri]`| 查询 ContentProvider 中的数据| `adb shell content query --uri content://settings/system` |
| `adb shell content insert --uri [uri] ...` **注意** | 向 ContentProvider 插入数据| `adb shell content insert --uri content://settings/system --bind name:s:my_key --bind value:s:1` |
| `adb shell content delete --uri [uri]` **高危** | 从 ContentProvider 删除数据| `adb shell content delete --uri content://settings/system/my_key` |
| `adb shell uiautomator dump`| 转储当前界面的 UI 层次结构（XML）  | `adb shell uiautomator dump /sdcard/ui.xml`|
| `adb shell wm size`| 显示当前屏幕分辨率   | 输出：Physical size: 1080x2340（若曾改过分辨率会追加 Override size: 一行） |
| `adb shell wm size 1080x1920` **注意**    | 临时修改屏幕分辨率   | `adb shell wm size reset`                  |
| `adb shell wm density`| 显示当前屏幕 DPI  | 输出：Physical density: 440（若曾改过 DPI 会追加 Override density: 一行）    |
| `adb shell wm density 480` **注意** | 临时修改屏幕 DPI  | `adb shell wm density reset`               |
| `adb shell wm overscan 0,0,0,0` **注意**  | 设置/重置显示边距（Android 11 起已移除该命令） | 说明：Android 10 及以下可用；Android 11+ 返回 unknown command: overscan   |
| `adb shell cmd [svc] [args]`| 调用系统服务命令（如 cmd wifi）  | `adb shell cmd wifi status`                |
| `adb shell cmd package list`| 以 cmd 方式列出已安装包| `adb shell cmd package list packages -3`   |

## 十、重启与刷写 - 重启、Recovery 与 Bootloader


| 命令名称| 描述 | 示例 (Example)             |
| -------------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------ |
| `adb reboot` **注意** | 正常重启设备    | `adb -s emulator-5554 reboot` |
| `adb reboot userspace` **注意**   | 软重启：只重启用户空间进程（init/zygote/应用），不重启内核 · Android 11~14 | 说明：需 getprop init.userspace_reboot.is_supported 返回 1，否则命令失败；Android 15 起已移除该功能 |
| `adb reboot bootloader` **高危**  | 重启到 Bootloader 模式 | `adb reboot bootloader && fastboot devices`  |
| `adb reboot recovery` **高危**    | 重启到 Recovery 模式   | 说明：进入后可用 adb sideload 侧载 OTA；返回系统执行 adb reboot|
| `adb reboot sideload` **高危**    | 重启到 Sideload（侧载）模式| `adb reboot sideload && adb sideload update.zip`|
| `adb reboot fastboot` **高危**    | 重启到 Fastboot 模式（部分设备支持）   | 说明：进入 fastbootd（用户空间 fastboot，可刷动态分区），与 bootloader 的 fastboot 不同|
| `adb sideload [ota.zip]` **高危** | 在 recovery 中刷入 OTA 更新包    | `adb sideload update-ota.zip` |

## 十一、备份与恢复（已弃用） - 已弃用的数据备份命令


| 命令名称 | 描述 | 示例 (Example)|
| -------------------------------------- | --------------------------------- | ------------------------------------ |
| `adb backup -apk -all -f [file].ab`    | 备份全部应用及数据（Android 12+ 默认不再备份应用数据） | `adb backup -apk -all -f backup.ab`  |
| `adb backup -apk -shared -f [file].ab` | 备份含共享存储内容（Android 12+ 默认不再备份应用数据） | `adb backup -apk -shared -f full.ab` |
| `adb restore [file].ab` **注意** | 从备份文件恢复（Android 12+ 可备份内容已大幅受限）   | `adb restore backup.ab` |

## 十二、高级调试 - root、remount 与底层调试


| 命令名称    | 描述| 示例 (Example)              |
| ------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `adb root` **注意**    | 以 root 权限重启 adbd（仅 userdebug/eng 工程版或已 root 设备） | 输出：restarting adbd as root；零售正式版返回 adbd cannot run as root in production builds |
| `adb unroot` **注意**  | 把 adbd 退回普通 shell 权限（adb root 的反操作）   | 输出：restarting adbd as non root |
| `adb remount` **高危** | 将 /system、/vendor 等系统分区重新挂载为可读写（需先 adb root）    | `adb root && adb remount` |
| `adb disable-verity` **高危**  | 关闭 dm-verity 分区校验，让 remount 真正生效（需已解锁 Bootloader，重启后生效） | `adb root && adb disable-verity && adb reboot`|
| `adb enable-verity` **注意**   | 重新开启 dm-verity 校验，恢复系统完整性保护（重启后生效）    | `adb root && adb enable-verity && adb reboot` |
| `adb shell monkey -p [pkg] [count]` **注意** | 对应用进行随机压力测试（指定事件数）    | `adb shell monkey -p com.example.demo 500`    |
| `adb shell monkey -p [pkg] --throttle 500 1000` **注意** | 限速压力测试（每事件间隔 500ms）   | `adb shell monkey -p com.example.demo --throttle 500 1000`    |
| `adb jdwp` | 列出支持 JDWP 调试的进程 PID   | 输出：8899（当前可调试进程的 PID 列表）  |
| `adb forward tcp:12345 jdwp:[pid]`| 将本地端口转发到 JDWP 进程以附加调试器| `adb forward tcp:12345 jdwp:8899`|
| `adb shell sqlite3 [db] [query]` **高危** | 直接对 SQLite 数据库执行查询（需权限/二进制）   | `adb shell sqlite3 /data/data/com.example/databases/app.db '.tables'`   |
| `adb shell am profile start [pkg] [file]` | 启动方法性能分析并写入文件 | `adb shell am profile start com.example.demo /sdcard/trace.trace`|
| `adb shell am profile stop [pkg]` | 停止性能分析 | `adb shell am profile stop com.example.demo`  |
| `adb shell dumpsys gfxinfo [pkg]` | 查看应用渲染性能（帧耗时） | `adb shell dumpsys gfxinfo com.example.demo`  |
| `adb shell getevent -p` | 列出输入设备及其支持的事件类型| `adb shell getevent -p /dev/input/event0`|

[🔗](https://www.fuwa.org/tools/adb-commands.html)