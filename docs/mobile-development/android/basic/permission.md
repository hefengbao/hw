# 权限

| 权限                                                        | 名称              | 描述                                                     | 操作  |
| --------------------------------------------------------- | --------------- | ------------------------------------------------------ | --- |
| `android.permission.CAMERA`                               | **相机**          | 允许应用使用相机拍摄照片和录制视频，需要运行时用户授权。                           |     |
| `android.permission.RECORD_AUDIO`                         | **录音/麦克风**      | 允许应用通过麦克风录制音频，适用于语音输入、通话录音等功能。                         |     |
| `android.permission.ACCESS_FINE_LOCATION`                 | **精确位置**        | 允许应用获取基于GPS或网络的精确地理位置信息。                               |     |
| `android.permission.ACCESS_COARSE_LOCATION`               | **大致位置**        | 允许应用获取基于Wi-Fi或蜂窝网络的粗略位置信息。                             |     |
| `android.permission.ACCESS_BACKGROUND_LOCATION`           | **后台位置**        | 应用在后台运行时也能访问位置信息，需同时请求前台位置权限。                          |     |
| `android.permission.READ_EXTERNAL_STORAGE`                | **读取外部存储**      | 允许应用读取外部存储中的文件（照片、文档等）。                                |     |
| `android.permission.WRITE_EXTERNAL_STORAGE`               | **写入外部存储**      | 允许应用修改/删除外部存储中的内容。Android 10+ 需分区存储适配。                 |     |
| `android.permission.MANAGE_EXTERNAL_STORAGE`              | **管理所有文件**      | 授予对所有共享存储的广泛访问权限（需特殊声明）。                               |     |
| `android.permission.READ_PHONE_STATE`                     | **读取手机状态**      | 允许访问设备的电话功能，例如IMEI、网络信息等。                              |     |
| `android.permission.CALL_PHONE`                           | **拨打电话**        | 允许应用直接拨打电话，无需跳转拨号盘。                                    |     |
| `android.permission.READ_CALL_LOG`                        | **读取通话记录**      | 允许应用读取用户的通话记录列表。                                       |     |
| `android.permission.WRITE_CALL_LOG`                       | **编辑通话记录**      | 允许应用写入或修改通话记录。                                         |     |
| `android.permission.ADD_VOICEMAIL`                        | **添加语音邮件**      | 允许应用向系统中添加语音邮件。                                        |     |
| `android.permission.USE_SIP`                              | **使用SIP服务**     | 允许应用使用SIP（会话初始化协议）进行网络电话。                              |     |
| `android.permission.READ_CONTACTS`                        | **读取联系人**       | 读取设备中存储的联系人信息。                                         |     |
| `android.permission.WRITE_CONTACTS`                       | **编辑联系人**       | 允许应用修改或删除联系人数据。                                        |     |
| `android.permission.GET_ACCOUNTS`                         | **获取账户列表**      | 允许应用访问设备上的账户列表。                                        |     |
| `android.permission.READ_CALENDAR`                        | **读取日历**        | 读取用户日历数据。                                              |     |
| `android.permission.WRITE_CALENDAR`                       | **编辑日历**        | 添加/修改/删除日历事件。                                          |     |
| `android.permission.SEND_SMS`                             | **发送短信**        | 允许应用发送SMS短信。                                           |     |
| `android.permission.RECEIVE_SMS`                          | **接收短信**        | 允许应用接收和处理SMS短信。                                        |     |
| `android.permission.READ_SMS`                             | **读取短信**        | 允许应用读取手机短信。                                            |     |
| `android.permission.RECEIVE_MMS`                          | **接收彩信**        | 允许应用接收MMS彩信。                                           |     |
| `android.permission.ACTIVITY_RECOGNITION`                 | **活动识别**        | 允许识别用户运动状态(计步、骑车等)。                                    |     |
| `android.permission.BODY_SENSORS`                         | **身体传感器**       | 访问心率计、温度计等身体传感器数据。                                     |     |
| `android.permission.BLUETOOTH`                            | **蓝牙连接**        | 允许应用连接蓝牙设备（传统蓝牙权限）。                                    |     |
| `android.permission.BLUETOOTH_SCAN`                       | **蓝牙扫描**        | Android 12+ 扫描蓝牙设备，需运行时授权。                             |     |
| `android.permission.BLUETOOTH_ADVERTISE`                  | **蓝牙广播**        | 使设备可被其他蓝牙设备发现。                                         |     |
| `android.permission.BLUETOOTH_CONNECT`                    | **蓝牙连接管理**      | 连接已配对的蓝牙设备。                                            |     |
| `android.permission.NEARBY_WIFI_DEVICES`                  | **附近Wi-Fi设备**   | Android 13+ 扫描附近Wi-Fi设备，无需位置权限。                        |     |
| `android.permission.POST_NOTIFICATIONS`                   | **发送通知**        | Android 13+ 需单独授权，允许应用推送通知。                            |     |
| `android.permission.SYSTEM_ALERT_WINDOW`                  | **悬浮窗**         | 允许应用在其他应用上层显示窗口(需特殊申请)。                                |     |
| `android.permission.REQUEST_INSTALL_PACKAGES`             | **安装未知应用**      | 允许应用请求安装APK包。                                          |     |
| `android.permission.QUERY_ALL_PACKAGES`                   | **查询已安装应用**     | 获取设备上安装的所有应用列表。                                        |     |
| `android.permission.ACCESS_WIFI_STATE`                    | **Wi-Fi状态**     | 获取Wi-Fi网络状态和信息。                                        |     |
| `android.permission.CHANGE_WIFI_STATE`                    | **修改Wi-Fi**     | 启用/禁用Wi-Fi或更改配置。                                       |     |
| `android.permission.INTERNET`                             | **网络访问**        | 普通权限，允许应用使用网络。                                         |     |
| `android.permission.VIBRATE`                              | **振动**          | 控制设备振动。                                                |     |
| `android.permission.WAKE_LOCK`                            | **唤醒锁**         | 防止设备休眠，保持屏幕或CPU唤醒。                                     |     |
| `android.permission.FOREGROUND_SERVICE`                   | **前台服务**        | 允许应用启动前台服务，显示常驻通知。                                     |     |
| `android.permission.HIGH_SAMPLING_RATE_SENSORS`           | **高采样率传感器**     | 访问高达200Hz以上的传感器数据。                                     |     |
| `android.permission.READ_MEDIA_IMAGES`                    | **读取媒体图片**      | Android 13+ 允许应用访问设备上的图片和照片（替代 READ_EXTERNAL_STORAGE）。 |     |
| `android.permission.READ_MEDIA_VIDEO`                     | **读取媒体视频**      | Android 13+ 允许应用访问设备上的视频文件（替代 READ_EXTERNAL_STORAGE）。  |     |
| `android.permission.READ_MEDIA_AUDIO`                     | **读取媒体音频**      | Android 13+ 允许应用访问设备上的音频文件（替代 READ_EXTERNAL_STORAGE）。  |     |
| `android.permission.READ_MEDIA_VISUAL_USER_SELECTED`      | **部分媒体访问**      | Android 14+ 允许应用访问用户明确选择的照片和视频，不包括所有媒体文件。              |     |
| `android.permission.BODY_SENSORS_BACKGROUND`              | **后台传感器**       | Android 14+ 允许应用在后台访问身体传感器数据，如心率、血压等。                  |     |
| `android.permission.SCHEDULE_EXACT_ALARM`                 | **精确闹钟调度**      | Android 12+ 允许应用安排精确时间的闹钟（需用户授权）。                      |     |
| `android.permission.USE_EXACT_ALARM`                      | **使用精确闹钟**      | Android 13+ 应用已获得安排精确闹钟的授权（系统预授权）。                     |     |
| `android.permission.NFC`                                  | **NFC通信**       | 允许应用与NFC标签和设备进行交互通信。                                   |     |
| `android.permission.NFC_HOST_CARD_EMULATION`              | **NFC卡模拟**      | 允许应用实现HCE（主机卡模拟）功能，模拟NFC智能卡。                           |     |
| `android.permission.NFC_PREFERRED_PAYMENT_INFO`           | **NFC支付信息**     | 允许应用访问NFC支付的偏好设置信息。                                    |     |
| `android.permission.NFC_TRANSACTION_EVENT`                | **NFC交易事件**     | 允许应用接收NFC交易完成的事件通知。                                    |     |
| `android.permission.RECEIVE_WAP_PUSH`                     | **接收WAP推送**     | 允许应用接收WAP推送消息。                                         |     |
| `android.permission.BROADCAST_STICKY`                     | **粘性广播**        | 允许应用发送粘性广播（已废弃，Android 13+不再允许非系统应用使用）。                |     |
| `android.permission.WRITE_SETTINGS`                       | **修改系统设置**      | 允许应用修改系统设置（如音量、亮度等），需特殊授权界面确认。                         |     |
| `android.permission.ACCESS_NETWORK_STATE`                 | **网络状态**        | 允许应用获取网络连接状态信息。                                        |     |
| `android.permission.CHANGE_NETWORK_STATE`                 | **修改网络状态**      | 允许应用修改网络连接状态，如启用/禁用移动数据。                               |     |
| `android.permission.ACCESS_CHECKIN_PROPERTIES`            | **访问设备属性**      | 允许应用读取/写入设备登记属性（普通权限）。                                 |     |
| `android.permission.MODIFY_PHONE_STATE`                   | **修改手机状态**      | 允许应用修改电话状态，如开关飞行模式（仅系统应用可申请）。                          |     |
| `android.permission.READ_PRECISE_PHONE_STATE`             | **精确手机状态**      | Android 14+ 允许应用读取精确的手机状态，包括呼叫和连接状态。                   |     |
| `android.permission.READ_SOCIAL_STREAM`                   | **读取社交动态**      | 允许应用读取用户的社交网络动态信息。                                     |     |
| `android.permission.WRITE_SOCIAL_STREAM`                  | **写入社交动态**      | 允许应用写入用户的社交网络动态信息。                                     |     |
| `android.permission.READ_USER_DICTIONARY`                 | **读取用户词典**      | 允许应用读取用户添加的词汇到系统词典。                                    |     |
| `android.permission.WRITE_USER_DICTIONARY`                | **写入用户词典**      | 允许应用向系统词典添加词汇。                                         |     |
| `android.permission.SET_WALLPAPER`                        | **设置壁纸**        | 允许应用设置桌面壁纸。                                            |     |
| `android.permission.SET_WALLPAPER_HINTS`                  | **设置壁纸提示**      | 允许应用设置壁纸尺寸提示。                                          |     |
| `android.permission.SET_TIME_ZONE`                        | **设置时区**        | 允许应用设置系统时区。                                            |     |
| `android.permission.SET_ANIMATION_SCALE`                  | **设置动画缩放**      | 允许应用修改动画缩放系数（普通权限）。                                    |     |
| `android.permission.DISABLE_KEYGUARD`                     | **禁用锁屏**        | 允许应用禁用键盘锁（锁屏密码）。                                       |     |
| `android.permission.MANAGE_ACCOUNTS`                      | **管理账户**        | 允许应用管理设备上的账户（如添加/删除账户）。                                |     |
| `android.permission.AUTHENTICATE_ACCOUNTS`                | **认证账户**        | 允许应用使用账户认证器（普通权限）。                                     |     |
| `android.permission.GET_PACKAGE_SIZE`                     | **获取应用大小**      | 允许应用获取任何应用的数据和缓存大小。                                    |     |
| `android.permission.REORDER_TASKS`                        | **重新排序任务**      | 允许应用改变应用在最近任务列表中的顺序。                                   |     |
| `android.permission.CHANGE_CONFIGURATION`                 | **修改配置**        | 允许应用修改当前配置，如本地化和字体大小。                                  |     |
| `android.permission.RESTART_PACKAGES`                     | **重启应用**        | 允许应用重启其他应用（已废弃，使用 Force Stop 替代）。                      |     |
| `android.permission.KILL_BACKGROUND_PROCESSES`            | **结束后台进程**      | 允许应用结束后台运行的应用进程。                                       |     |
| `android.permission.RUN_IN_BACKGROUND`                    | **后台运行**        | 允许应用在后台持续运行（普通权限）。                                     |     |
| `android.permission.RECEIVE_BOOT_COMPLETED`               | **开机启动**        | 允许应用在系统启动完成后自动运行。                                      |     |
| `android.permission.FORCE_STOP_PACKAGES`                  | **强制停止应用**      | 允许应用强制停止其他应用（仅系统应用可申请）。                                |     |
| `android.permission.DELETE_CACHE_FILES`                   | **删除缓存文件**      | 允许应用删除其他应用的缓存文件（仅系统应用可申请）。                             |     |
| `android.permission.DELETE_PACKAGES`                      | **卸载应用**        | 允许应用卸载其他应用（仅系统应用可申请）。                                  |     |
| `android.permission.INSTALL_PACKAGES`                     | **安装应用**        | 允许应用安装/更新应用包（仅系统应用可申请）。                                |     |
| `android.permission.UPDATE_PACKAGES_WITHOUT_USER_ACTION`  | **静默更新**        | 允许应用静默更新其他应用（无需用户确认）。                                  |     |
| `android.permission.BATTERY_STATS`                        | **电池统计**        | 允许应用收集电池使用统计数据（仅系统应用可申请）。                              |     |
| `android.permission.BLUETOOTH_PRIVILEGED`                 | **蓝牙特权**        | 允许应用执行蓝牙配对和连接操作（仅系统应用可申请）。                             |     |
| `android.permission.PROCESS_OUTGOING_CALLS`               | **处理外拨电话**      | 允许应用查看、监视和阻止外拨电话号码。                                    |     |
| `android.permission.ANSWER_PHONE_CALLS`                   | **接听电话**        | Android 8.0+ 允许应用自动接听来电。                               |     |
| `android.permission.READ_PHONE_NUMBERS`                   | **读取电话号码**      | Android 8.0+ 允许应用读取设备关联的电话号码。                          |     |
| `android.permission.CAPTURE_AUDIO_OUTPUT`                 | **捕获音频输出**      | 允许应用捕获音频输出进行混音（仅系统应用可申请）。                              |     |
| `android.permission.CAPTURE_VIDEO_OUTPUT`                 | **捕获视频输出**      | 允许应用捕获视频输出（仅系统应用可申请）。                                  |     |
| `android.permission.CAMERA_OPEN_CLOSE_LISTENER`           | **摄像头开关监听**     | Android 14+ 允许应用监听摄像头开启和关闭状态。                          |     |
| `android.permission.MICROPHONE_MUTE`                      | **麦克风静音**       | Android 12+ 允许应用控制设备麦克风的静音状态。                          |     |
| `android.permission.RECORD_AUDIO_HOTWORD`                 | **热词录音**        | 允许应用在检测到热词时录制音频（仅系统应用可申请）。                             |     |
| `android.permission.LOCATION_HARDWARE`                    | **位置硬件**        | 允许应用使用硬件定位功能（仅系统应用可申请）。                                |     |
| `android.permission.TEST_DANGEROUS_PRIVILEGES`            | **测试危险权限**      | 允许应用获取测试用的危险权限（仅系统应用可申请）。                              |     |
| `android.permission.USAGE_STATS`                          | **使用情况统计**      | 允许应用收集应用使用统计数据（需特殊授权界面）。                               |     |
| `android.permission.PACKAGE_USAGE_STATS`                  | **应用使用统计**      | 允许应用收集详细的应用使用数据（仅系统应用可申请）。                             |     |
| `android.permission.DUMP`                                 | **系统诊断**        | 允许应用从系统服务获取转储信息（仅系统应用可申请）。                             |     |
| `android.permission.PACKAGE_VERIFICATION_AGENT`           | **应用验证**        | 允许应用作为包验证器（仅系统应用可申请）。                                  |     |
| `android.permission.SMS_FINANCIAL_TRANSACTION`            | **金融短信**        | 允许应用读取和监控金融相关的短信（仅运营商应用可申请）。                           |     |
| `android.permission.WRITE_GSERVICES`                      | **写入GServices** | 允许应用修改Google服务配置（仅系统应用可申请）。                            |     |
| `android.permission.MOUNT_FORMAT_FILESYSTEMS`             | **格式化文件系统**     | 允许应用格式化可移动存储的文件系统（仅系统应用可申请）。                           |     |
| `android.permission.MOUNT_UNMOUNT_FILESYSTEMS`            | **挂载文件系统**      | 允许应用挂载/卸载外部文件系统（仅系统应用可申请）。                             |     |
| `android.permission.ASEC_ACCESS`                          | **访问加密存储**      | 允许应用访问加密存储（ASEC）信息（仅系统应用可申请）。                          |     |
| `android.permission.ASEC_CREATE`                          | **创建加密存储**      | 允许应用创建加密存储（ASEC）（仅系统应用可申请）。                            |     |
| `android.permission.ASEC_DESTROY`                         | **销毁加密存储**      | 允许应用销毁加密存储（ASEC）（仅系统应用可申请）。                            |     |
| `android.permission.ASEC_MOUNT_UNMOUNT`                   | **挂载加密存储**      | 允许应用挂载/卸载加密存储（ASEC）（仅系统应用可申请）。                         |     |
| `android.permission.ASEC_RENAME`                          | **重命名加密存储**     | 允许应用重命名加密存储（ASEC）（仅系统应用可申请）。                           |     |
| `android.permission.FOREGROUND_SERVICE_CAMERA`            | **前台相机服务**      | Android 14+ 允许应用在前台服务中使用相机。                            |     |
| `android.permission.FOREGROUND_SERVICE_CONNECTED_DEVICE`  | **前台设备服务**      | Android 14+ 允许应用在前台服务中连接外部设备。                          |     |
| `android.permission.FOREGROUND_SERVICE_DATA_SYNC`         | **前台数据同步**      | Android 14+ 允许应用在前台服务中执行数据同步操作。                        |     |
| `android.permission.FOREGROUND_SERVICE_HEALTH`            | **前台健康服务**      | Android 14+ 允许应用在前台服务中访问健康数据。                          |     |
| `android.permission.FOREGROUND_SERVICE_LOCATION`          | **前台位置服务**      | Android 14+ 允许应用在前台服务中使用位置信息。                          |     |
| `android.permission.FOREGROUND_SERVICE_MEDIA_PLAYBACK`    | **前台媒体播放**      | Android 14+ 允许应用在前台服务中播放媒体。                            |     |
| `android.permission.FOREGROUND_SERVICE_MICROPHONE`        | **前台麦克风服务**     | Android 14+ 允许应用在前台服务中使用麦克风。                           |     |
| `android.permission.FOREGROUND_SERVICE_PHONE_CALL`        | **前台通话服务**      | Android 14+ 允许应用在前台服务中进行通话。                            |     |
| `android.permission.FOREGROUND_SERVICE_SPECIAL_USE`       | **前台特殊用途**      | Android 14+ 允许应用在前台服务中进行特殊用途的操作。                       |     |
| `android.permission.REQUEST_PASSWORD_COMPLEXITY`          | **密码复杂度**       | Android 14+ 允许应用请求设备密码的复杂度要求。                          |     |
| `android.permission.CONFIRM_FULL_SCREEN_INTENT`           | **确认全屏意图**      | Android 14+ 允许应用请求全屏显示的确认界面。                           |     |
| `android.permission.SHOW_FULL_SCREEN_INTENT`              | **显示全屏意图**      | 允许应用显示全屏意图通知（如来电、闹钟），需用户确认。                            |     |
| `android.permission.BIND_ACCESSIBILITY_SERVICE`           | **绑定无障碍服务**     | 允许应用绑定系统无障碍服务（需在AndroidManifest声明）。                    |     |
| `android.permission.BIND_AUTOFILL_SERVICE`                | **绑定自动填充**      | 允许应用绑定系统自动填充服务（需在AndroidManifest声明）。                   |     |
| `android.permission.BIND_CARRIER_MESSAGING_SERVICE`       | **绑定运营商消息**     | 允许应用绑定运营商消息服务（已废弃，使用 BIND_CARRIER_SERVICES）。           |     |
| `android.permission.BIND_CARRIER_SERVICES`                | **绑定运营商服务**     | 允许应用绑定运营商授权的系统服务。                                      |     |
| `android.permission.BIND_CHOOSER_TARGET_SERVICE`          | **绑定分享目标**      | 允许应用绑定分享选择器目标服务（已废弃）。                                  |     |
| `android.permission.BIND_CONDITION_PROVIDER_SERVICE`      | **绑定条件提供**      | 允许应用绑定系统条件提供程序服务（需在AndroidManifest声明）。                 |     |
| `android.permission.BIND_CONTROLS`                        | **绑定控制**        | 允许应用绑定系统壁纸控制服务（需在AndroidManifest声明）。                   |     |
| `android.permission.BIND_DEVICE_ADMIN`                    | **绑定设备管理**      | 允许应用绑定设备管理服务（需在AndroidManifest声明）。                     |     |
| `android.permission.BIND_DREAM_SERVICE`                   | **绑定梦境服务**      | 允许应用绑定系统梦境/屏幕保护服务（需在AndroidManifest声明）。                |     |
| `android.permission.BIND_INCALL_SERVICE`                  | **绑定通话服务**      | 允许应用绑定系统通话服务（需在AndroidManifest声明）。                     |     |
| `android.permission.BIND_INPUT_METHOD`                    | **绑定输入法**       | 允许应用绑定系统输入法服务（需在AndroidManifest声明）。                    |     |
| `android.permission.BIND_MIDI_DEVICE_SERVICE`             | **绑定MIDI设备**    | 允许应用绑定系统MIDI设备服务（需在AndroidManifest声明）。                 |     |
| `android.permission.BIND_NFC_SERVICE`                     | **绑定NFC服务**     | 允许应用绑定系统NFC服务（需在AndroidManifest声明）。                    |     |
| `android.permission.BIND_NOTIFICATION_LISTENER_SERVICE`   | **绑定通知监听**      | 允许应用绑定系统通知监听服务（需在AndroidManifest声明）。                   |     |
| `android.permission.BIND_PRINT_SERVICE`                   | **绑定打印服务**      | 允许应用绑定系统打印服务（需在AndroidManifest声明）。                     |     |
| `android.permission.BIND_SCREENING_SERVICE`               | **绑定筛选服务**      | 允许应用绑定系统通话筛选服务（需在AndroidManifest声明）。                   |     |
| `android.permission.BIND_TELECOM_CONNECTION_SERVICE`      | **绑定通话连接**      | 允许应用绑定系统通话连接服务（需在AndroidManifest声明）。                   |     |
| `android.permission.BIND_TEXT_SERVICE`                    | **绑定文本服务**      | 允许应用绑定系统文本服务（需在AndroidManifest声明）。                     |     |
| `android.permission.BIND_TV_INPUT`                        | **绑定电视输入**      | 允许应用绑定系统TV输入服务（需在AndroidManifest声明）。                   |     |
| `android.permission.BIND_VISUAL_INTERRUPTION_SERVICE`     | **绑定视觉中断**      | 允许应用绑定系统视觉中断服务（需在AndroidManifest声明）。                   |     |
| `android.permission.BIND_VOICE_INTERACTION_SERVICE`       | **绑定语音交互**      | 允许应用绑定系统语音交互服务（需在AndroidManifest声明）。                   |     |
| `android.permission.BIND_VPN_SERVICE`                     | **绑定VPN服务**     | 允许应用绑定系统VPN服务（需在AndroidManifest声明）。                    |     |
| `android.permission.BIND_VR_LISTENER_SERVICE`             | **绑定VR监听**      | 允许应用绑定系统VR监听器服务（需在AndroidManifest声明）。                  |     |
| `android.permission.BIND_WALLPAPER`                       | **绑定壁纸**        | 允许应用绑定系统壁纸服务（需在AndroidManifest声明）。                     |     |
| `android.permission.MANAGE_MEDIA`                         | **管理媒体**        | Android 11+ 允许应用在用户授权后修改或删除媒体文件。                       |     |
| `android.permission.MANAGE_APP_TOKENS`                    | **管理应用令牌**      | 允许应用管理应用窗口令牌（仅系统应用可申请）。                                |     |
| `android.permission.MANAGE_IPSEC_TUNNELS`                 | **管理IPSec隧道**   | 允许应用管理IPSec隧道（仅系统应用可申请）。                               |     |
| `android.permission.MASTER_CLEAR`                         | **恢复出厂设置**      | 允许应用执行恢复出厂设置（仅系统应用可申请）。                                |     |
| `android.permission.NET_ADMIN`                            | **网络管理**        | 允许应用管理系统网络（仅系统应用可申请）。                                  |     |
| `android.permission.NFC_BEAM`                             | **NFC beaming** | 允许应用使用Android Beam发送数据（已废弃，Android Q+不再支持）。            |     |
| `android.permission.GLOBAL_SEARCH`                        | **全局搜索**        | 允许应用作为全局搜索提供程序（仅系统应用可申请）。                              |     |
| `android.permission.LOADER_USAGE_STATS`                   | **加载器使用统计**     | 允许应用收集应用加载器使用数据（仅系统应用可申请）。                             |     |
| `android.permission.POST_NOTIFICATIONS_IN_BACKGROUND`     | **后台发送通知**      | Android 15+ 允许应用在后台状态下发送通知，需单独授权。                      |     |
| `android.permission.ACCESS_NOTIFICATION_POLICY`           | **通知策略访问**      | Android 15+ 允许应用访问和修改通知策略设置。                           |     |
| `android.permission.RECEIVE_WIFI_EVENTS`                  | **接收WiFi事件**    | Android 15+ 允许应用接收WiFi连接状态变化事件通知。                      |     |
| `android.permission.MANAGE_ON_DEVICE_CONTACTS`            | **管理本地联系人**     | Android 15+ 允许应用管理设备上存储的本地联系人数据。                       |     |
| `android.permission.CAMERA_AUDIO_SYNC`                    | **相机音频同步**      | Android 15+ 允许应用在录制视频时同步控制相机和音频设备。                     |     |
| `android.permission.READ_DEVICE_IDENTIFIERS`              | **读取设备标识符**     | Android 15+ 允许应用读取设备的唯一标识符信息。                          |     |
| `android.permission.ACCESS_SENSORS_EXTRAS`                | **访问额外传感器**     | Android 15+ 允许应用访问额外的传感器数据，如环境光传感器的扩展信息。               |     |
| `android.permission.FOREGROUND_SERVICE_WATCH_DOG`         | **前台服务看门狗**     | Android 15+ 允许应用监控前台服务的健康状态，自动重启异常服务。                  |     |
| `android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS` | **请求忽略电池优化**    | 允许应用请求豁免电池优化限制，保持后台运行能力。                               |     |
| `android.permission.ACCESS_MEDIA_LOCATION`                | **访问媒体位置信息**    | 允许应用读取媒体文件中的地理位置元数据（如照片拍摄地点）。                          |     |
| `android.permission.ACCESS_BLUETOOTH_MAP`                 | **蓝牙MAP访问**     | Android 15+ 允许应用访问蓝牙消息访问配置文件(MAP)功能。                   |     |
| `android.permission.CONTROL_BLUETOOTH_PRIVILEGED`         | **蓝牙特权控制**      | Android 15+ 允许应用执行蓝牙高级操作，如配对和连接管理。                     |     |
| `android.permission.BIND_APPWIDGET`                       | **绑定桌面小部件**     | 允许应用绑定桌面小部件服务。                                         |     |
| `android.permission.BIND_CAR_APP_SERVICE`                 | **绑定车载应用服务**    | Android Auto相关服务绑定权限。                                  |     |
| `android.permission.BIND_COMPANION_DEVICE_SERVICE`        | **绑定伴侣设备服务**    | 允许应用绑定智能手表等配套设备服务。                                     |     |
| `android.permission.BIND_CONVERSATION_SERVICE`            | **绑定对话服务**      | 允许应用绑定支持对话消息的服务。                                       |     |
| `android.permission.BIND_DOCUMENTS_PROVIDER`              | **绑定文档提供程序**    | 允许应用绑定文档访问服务（需在AndroidManifest声明）。                     |     |
| `android.permission.BIND_INLINE_SUGGESTION_SERVICE`       | **绑定内联建议服务**    | 允许应用绑定搜索建议服务。                                          |     |
| `android.permission.BIND_REMOTE_DISPLAY`                  | **绑定远程显示**      | 允许应用绑定投屏/远程显示服务。                                       |     |
| `android.permission.BIND_SEARCH_SERVICE`                  | **绑定搜索服务**      | 允许应用绑定全局搜索服务。                                          |     |
| `android.permission.BIND_VOICE_TRIGGER`                   | **绑定语音触发器**     | 允许应用绑定语音唤醒服务。                                          |     |
| `android.permission.MODIFY_AUDIO_SETTINGS`                | **修改音频设置**      | 允许应用控制音量、铃声等音频设置。                                      |     |
| `android.permission.TRANSMIT_IR`                          | **红外传输**        | 允许应用使用设备红外发射器。                                         |     |
| `android.permission.MANAGE_OWN_CALLS`                     | **管理自有通话**      | 允许应用管理自己发起的通话。                                         |     |
| `android.permission.MEDIA_CONTENT_CONTROL`                | **媒体内容控制**      | 允许应用控制媒体播放内容。                                          |     |
| `android.permission.ACCESS_WIMAX_STATE`                   | **WiMAX状态**     | 允许应用获取WiMAX网络状态信息。                                     |     |
| `android.permission.CHANGE_WIMAX_STATE`                   | **修改WiMAX状态**   | 允许应用控制WiMAX网络开关。                                       |     |
| `android.permission.CONTROL_LOCATION_UPDATES`             | **控制位置更新**      | 允许应用管理位置更新频率（仅系统应用可申请）。                                |     |
| `android.permission.READ_SYNC_SETTINGS`                   | **读取同步设置**      | 允许应用获取账户同步配置信息。                                        |     |
| `android.permission.WRITE_SYNC_SETTINGS`                  | **写入同步设置**      | 允许应用修改账户同步配置。                                          |     |
| `android.permission.READ_SYNC_STATS`                      | **读取同步统计**      | 允许应用获取同步状态统计信息。                                        |     |
| `android.permission.MANAGE_CREDENTIALS`                   | **管理凭据**        | 允许应用管理系统凭据存储（仅系统应用可申请）。                                |     |
| `android.permission.FLASH_CONTROL`                        | **闪光灯控制**       | 允许应用直接控制设备闪光灯。                                         |     |
| `android.permission.ACCESS_UCE`                           | **访问UCE**       | 允许应用访问用户体验改善数据。                                        |     |
| `android.permission.STATUS_BAR`                           | **状态栏控制**       | 允许应用修改状态栏行为（仅系统应用可申请）。                                 |     |
| `android.permission.NETWORK_SETUP_WIZARD`                 | **网络设置向导**      | 允许应用引导用户进行网络配置。                                        |     |
| `android.permission.USE_FULL_SCREEN_INTENT`               | **使用全屏意图**      | 允许应用触发全屏通知意图。                                          |     |
| `android.permission.BIND_ASSISTANT_SERVICE`               | **绑定辅助服务**      | 允许应用绑定智能助理服务。                                          |     |
| `android.permission.BIND_CAPTIONING_SERVICE`              | **绑定字幕服务**      | 允许应用绑定字幕服务（需在AndroidManifest声明）。                       |     |
| `android.permission.BIND_SPEECH_RECOGNIZER`               | **绑定语音识别器**     | 允许应用绑定语音识别服务。                                          |     |
| `android.permission.DISPLAY_OVER_OTHER_APPS`              | **悬浮窗显示**       | 允许应用在其他应用上层显示窗口。                                       |     |
| `android.permission.PROJECT_MEDIA`                        | **投影媒体**        | 允许应用将媒体投射到外部设备。                                        |     |
| `android.permission.ACCESS_ALL_DOWNLOADS`                 | **访问所有下载文件**    | Android 14+ 允许应用读取所有下载文件。                              |     |
| `android.permission.CALL_COMPANION_APP`                   | **通话伴侣应用**      | Android 15+ 支持通话伴侣应用功能。                                |     |
| `android.permission.ACCESS_KEYGUARD_SECURE_STORAGE`       | **访问锁屏安全存储**    | 允许应用访问锁屏安全存储数据（仅系统应用可申请）。                              |     |
| `android.permission.CONTROL_KEYGUARD`                     | **控制锁屏**        | 允许应用控制锁屏行为（仅系统应用可申请）。                                  |     |
| `android.permission.INJECT_EVENTS`                        | **注入事件**        | 允许应用注入输入事件（仅系统应用可申请）。                                  |     |
| `android.permission.READ_LOGS`                            | **读取日志**        | 允许应用读取系统日志（仅系统应用可申请）。                                  |     |
| `android.permission.SET_WALLPAPER_COMPONENT`              | **设置壁纸组件**      | 允许应用设置壁纸组件。                                            |     |
[🔗](https://www.fuwa.org/tools/android-manifest.html)

