## 基础模型

### OSI

OSI 模型，全称为开放系统互连参考模型（Open System Interconnect），是由国际标准化组织（ISO）和国际电报电话咨询委员会（CCITT）联合制定

::: info 网络互连的七层框架
- 物理层（Physical Layer）
- 数据链路层（Data Link Layer）
- 网络层（Network Layer）
- 传输层（Transport Layer）
- 会话层（Session Layer）
- 表示层（Presentation Layer）
- 应用层（Application Layer）
:::

![](./src/protocol-01.png)

### TCP/IP

TCP/IP 模型是一种网络通信协议模型，由传输控制协议（TCP）和互联网协议（IP）组成

::: info 5 层 TCP/IP 模型
- 物理层（Physical Layer）
- 数据链路层（Data Link Layer）
- 网络层（Network Layer）
- 传输层（Transport Layer）
- 应用层（Application Layer）

即：将 OSI 模型的 `应用层、表示层、会话层` 合并成了一个 `应用层`
:::

![](./src/protocol-02.png)

层级与设备及常见的协议，如图

![](./src/protocol-03.png)

## 通信协议

### TCP

传输控制协议（Transmission Control Protocol），是 [TCP/IP模型](#tcp-ip) 中的传输层协议之一

::: info 关于TCP
- 特点：它是一种面向连接的协议，需要进行三次握手来建立连接
- 优劣：虽然这种机制确保了数据的稳定传输，但它会产生较大的延迟
- 场景：常用于文件传输、网页浏览、电子邮件等
:::

### UDP
用户数据报协议（User Datagram Protocol），是 [TCP/IP模型](#tcp-ip) 中的传输层协议之一

::: info 关于UDP
- 特点：它为应用程序提供了一种无需建立连接，就可以发送封装的 IP 数据包的方法
- 优劣：虽然效率高，但是稳定性并不强
- 场景：常用于音频、视频、实时游戏等
:::
### HTTP

超文本传输协议(Hypertext Transfer Protocol)，缩写：HTTP

::: info 关于HTTP
- 特点：基于 [TCP协议](#tcp) ，用于从Web服务器传输超文本到本地浏览器的传送协议，是一种是无状态协议，使用cookie和session开管理。最新的版本为 HTTP/3 ，采用基于 [UDP协议的QUIC](#quic)
- 优劣：使用明文不加密；无法验证数据完整性；不验证身份
- 场景：HTML 文件、图片文件、查询结果等
:::

### HTTPS

超文本传输安全协议(Hypertext Transfer Protocol Secure)，缩写：HTTPS

::: info 关于HTPS
- 特点：基于 [TCP协议](#tcp) ，它在 HTTP 下增加了 [SSL/TLS协议](#tls) ，提供了数据加密、完整性校验和身份验证
- 优劣：资源消耗大，由于加解密处理消耗更多的CPU和内存资源
- 端口区别：HTTP默认的端口号为80；HTTPS的端口号为443
:::
### QUIC

谷歌公司开发的一种全新的传输协议，全称：quick

::: info 关于QUIC
- 特点：基于 [UDP协议](#udp)，可实现可靠传输、快速握手、拥塞控制、加密等功能
- 优劣：连接建立速度快、可以多路复用、头部压缩；但现有的网络设施兼容支持差
- 场景：被广泛运用到 HTTP/3 中
:::
  
### WS

WebSocket是一种在单个TCP连接上进行全双工通信的协议，简称：WS

::: info 关于WS
- 特点：基于 [TCP协议](#tcp)，使用HTTP协议进行握手，使用TCP协议进行传输
- 优劣：更高的实时性；但的兼容性差、占用较多服务器资源、数据完整性和安全性有待提升
:::

### SSH

安全外壳协议(Secure Shell Protocol)，简称：SSH

::: info 关于SSH
- 特点：基于 [TCP/IP协议](#tcp-ip) 应用层上的加密的网络传输协议
- 优劣：数据加密传输、防止身份伪造；加解密会增加延迟，不支持硬件加速
- 场景：常用于远程登录系统、隧道传输或端口转发
:::

---

### KCP

KCP以浪费 10%-20% 的带宽的代价，换取平均延迟降低 30%-40% 的传输效果

仓库：[https://github.com/skywind3000/kcp](https://github.com/skywind3000/kcp)

::: info 对比 TCP
TCP保证数据准确交付，UDP保证数据快速到达

KCP则是两种协议的一个折中，在力求在保证可靠性的情况下提高传输速度
:::

### mKCP

mKCP是一个基于 UDP 的流式传输协议，由 KCP 协议修改而来，可以按顺序传输任意的数据流

::: info 对比TCP
mKCP 同样也是牺牲带宽来降低延迟，传输同样的内容，mKCP 一般比 TCP 消耗更多的流量
:::

### KCPTUN[​](https://yiov.top/gfw/protocol.html#kcptun)

Kcptun 基于 KCP 协议的 UDP 隧道，它可以将 TCP 流转换为 KCP+UDP 流

仓库：[https://github.com/xtaci/kcptun](https://github.com/xtaci/kcptun)

## 安全协议
### TLS

传输层安全性协议(Transport Layer Security)，缩写：TLS

::: info 关于SSL
TLS的前身就是安全套接层（SSL，Secure Sockets Layer）
- 特点：基于 [TCP/IP协议](https://yiov.top/gfw/protocol.html#tcp-ip) 上实现的一种安全协议，采用公开密钥技术
- 优劣：密码算法过时，容易被破解，现已用TLS代替

SSL不使用了，浏览器却还是SSL证书

- 浏览器中使用的数字证书（Digital Certificate），早期是SSL
- 但后来由于安全问题已经废弃，如今使用的都是TLS，也称：SSL/TLS 证书
:::

::: info 关于TLS
- 特点：基于 [TCP/IP协议](https://yiov.top/gfw/protocol.html#tcp-ip) 上实现的一种安全协议
- 优劣：加密、数据完整性、身份认证；加解密会消耗CPU资源
:::

---

### XTLS[​](https://yiov.top/gfw/protocol.html#xtls)

由 [Project X Community](https://github.com/XTLS/) 开发并维护，基于 [TLS 1.3](l#tls) 开发的网络代理工具

::: info 关于XTLS
- 特点：使用 [TLS 1.3 协议](https://yiov.top/gfw/protocol.html#tls) 握手，[TCP协议](https://yiov.top/gfw/protocol.html#tcp) 进行传输
- 优劣：通过混淆、伪装和流量控制等技术，增加了网络流量的隐蔽性和安全性；但可能会减慢通信速度
:::

## 代理协议

### HTTP(S)

HTTP 代理协议是一种基于 [HTTP协议](#http) 的特定协议，用于实现代理服务器

::: info 关于HTTP代理协议
- 特点：它允许客户端通过一个中间服务器来访问其他服务器上的资源
- 优劣：提高网速、隐藏真实IP；但增加了带宽消耗，数据可能被篡改或泄露
- 区别：HTTP协议，用于传输数据；HTTP代理协议，用于代理
:::

---

Socks5

防火墙安全会话转换协议(Protocol for sessions traversal across firewall securely)，简称 socks，最新的版本为：socks5

::: info关于 Socks5
- 特点：基于 [TCP/IP协议](#tcp-ip)，用于客户端与外网服务器之间通讯的中间传递
- 优劣：速度比 HTTP 快，但数据是明文没有加密，需配合 SSL/TLS 进行加密
:::

### Shadowsocks

一种基于 [Socks5代理](#socks5) 方式的加密传输协议，中文名影梭，简称：SS

官网：[https://shadowsocks.org/](https://shadowsocks.org/)

仓库：[https://github.com/shadowsocks/shadowsocks-rust](https://github.com/shadowsocks/shadowsocks-rust)

客户端：[安卓端](https://github.com/shadowsocks/shadowsocks-android/releases)丨[PC端](https://github.com/shadowsocks/shadowsocks-windows/releases)丨[Mac端](https://github.com/shadowsocks/ShadowsocksX-NG/releases/)

### ShadowsocksR

在 [Shadowsocks](#shadowsocks) 的 [Socks5](#socks5) 基础上添加了混淆协议，简称：SSR

客户端：[安卓端](https://github.com/shadowsocksrr/shadowsocksr-android/releases)丨[PC端](https://github.com/shadowsocksr-rm/shadowsocksr-csharp/releases)

### VMess(V2Ray)

在 [Shadowsocks](#shadowsocks) 被封杀后，V2Ray成立，VMess协议是其专属的加密通讯协议

官网：[https://www.v2ray.com/](https://www.v2ray.com/)

仓库：[https://github.com/v2ray/v2ray-core](https://github.com/v2ray/v2ray-core)

V2Ray 现在已经是 Project V 项目的核心工具，而 Project V 是一个平台

::: info 关于VMess
全称 Virtual Machine Encryption Security Service，简称VMess，它是一种基于TLS的网络传输协议，用于建立安全的TCP和UDP连接

支持协议：
- Blackhole(出站协议)
- Dokodemo-door(入站协议)
- Freedom(出站协议)
- HTTP(HTTP代理协议)
- MTProto(telegram专用协议)
- Shadowsocks(梯子协议，不支持SSR)
- Socks(传统代理协议)
- VMess(v2ray专用加密传输协议)
- Vless(xray协议)
:::

### Trojan

利用 [TLS](#tls) 加密方式的协议，全称为Trojan-GFW，2019年沿用至今，是目前最成功的科学上网伪装技术之一

官网：[https://trojan-gfw.github.io/trojan/](https://trojan-gfw.github.io/trojan/)

仓库：[https://github.com/trojan-gfw/trojan](https://github.com/trojan-gfw/trojan)

::: info 简介
- 原理：Trojan通过监听443端口，模仿互联网上最常见的 HTTPS 协议，把合法的Trojan代理数据伪装成正常的 HTTPS 通信，并真正地完整完成的TLS 握手，以诱骗GFW认为它就是 HTTPS，从而不被识别，但无法配合CDN使用。
- 对比：Trojan是V2Ray的 [WS](#ws)+[TLS](#tls) 模式的精简版，速度比V2Ray更快，伪装比V2Ray更逼真，更难以被GFW识别
:::

### Trojan-Go

Trojan-Go 兼容原版 Trojan 的绝大多数功能，2020年沿用至今

官网：[https://p4gefau1t.github.io/trojan-go/](https://p4gefau1t.github.io/trojan-go/)

仓库：[https://github.com/p4gefau1t/trojan-go](https://github.com/p4gefau1t/trojan-go)

::: info 新特性
- WebSocket 传输支持，以实现 CDN 流量中转（基于 WebSocket over TLS）和对抗 GFW 中间人攻击
- 支持对用户更友好的 YAML 配置文件格式
- 自定义路由模块，可实现国内外分流 / 广告屏蔽等功能
:::

### ShadowTLS[​](https://yiov.top/gfw/protocol.html#shadowtls)

一个可以使用别人的受信证书的 TLS 伪装代理

官网：[https://www.ihcblog.com/a-better-tls-obfs-proxy/](https://www.ihcblog.com/a-better-tls-obfs-proxy/)

仓库：[https://github.com/ihciah/shadow-tls](https://github.com/ihciah/shadow-tls)

::: info 对比Trojan
它和 trojan 的表现类似，但它在做真实 TLS 握手的同时，可以直接使用别人的受信证书（如某些大公司或机构的域名）,而不需要自己签发证书

当直接使用浏览器打开时，可以正常显示对应可信域名的网页内容
:::

### VLESS(Xray)

Xray是 [V2ray](#vmess-v2ray) 的升级版，包含V2ray所有协议，以及新的VLESS协议

仓库：[https://github.com/XTLS/Xray-core](https://github.com/XTLS/Xray-core)

XrayR:[基于Xray的后端框架](https://github.com/XrayR-project/XrayR)

::: info 历史进程

- 2020年11月，因为开源许可证等原因 [@XTLS](https://github.com/XTLS) 被V2Ray社区从V2ray core移除，[@XTLS](https://github.com/XTLS) 和 [@rprx](https://github.com/RPRX) 另行组建了 [Project X](https://github.com/XTLS/) 组织，开发了基于V2Ray的派生版本Xray
:::

::: info 关于VLESS
简介：VLESS 是一个无状态的轻量传输协议，最突出的就是它可以配合 [XTLS](https://yiov.top/gfw/protocol.html#xtls) 进行数据加密，效果更好、性能更强

优势：在使用 TLS 的情况下，VLess 协议比 VMess 速度更快，性能更好，因为 VLess 不会对数据进行加解密
:::

### Hysteria2

Hysteria 2 基于经过修改的 [QUIC协议](#quic) ，简称hy2

官网：[https://v2.hysteria.network/zh/](https://v2.hysteria.network/zh/)

仓库：[https://github.com/apernet/hysteria](https://github.com/apernet/hysteria)

::: info 关于hy2
- 特点：伪装成标准的 HTTP/3 流量，有很强的的防封锁能力；但是无法套CDN
:::

### mieru[​](https://yiov.top/gfw/protocol.html#mieru)

mieru【見える】是一款安全的、无流量特征、难以主动探测的，基于 TCP 或 UDP 协议的 socks5 / HTTP / HTTPS 网络代理软件

仓库：[https://github.com/enfein/mieru](https://github.com/enfein/mieru)

::: info 关于mieru
- 原理：mieru 的翻墙原理与 shadowsocks / v2ray 等软件类似，在客户端和墙外的代理服务器之间建立一个加密的通道。GFW 不能破解加密传输的信息，无法判定你最终访问的网址，因此只能选择放行
- 特性：实现客户端和代理服务器之间所有传输内容的完整加密
:::

### naive

消除了客户端的tls指纹和tls-in-tls特征

仓库：[https://github.com/klzgrad/naiveproxy/](https://github.com/klzgrad/naiveproxy/)

::: info 历史进程
- NaiveProxy，挪威语叫NaïveProxy，翻译成中文：天真的代理
- 2019年底由klzgrad大神开发的一种突破GFW网络审查的新型科学上网代理技术，它使用Chrome的网络堆栈来伪装流量，具有较强的抗审查能力和较低的可检测性，重用Chrome网络堆栈是确保性能和安全性的最佳实践
:::

::: info 对比Trojan
Trojan最大的优点就是伪装成互联网最常见的HTTPS流量，而NaiveProxy最大的优势不仅伪装成 HTTP/2 的流量

而且使用互联网最常用的浏览器Chrome网络堆栈的指纹，更加难以被识别，而且这些也是Go语言模仿不了的
:::

### Brook

Brook 是一个高效的 Socks5 代理软件，官方支持Windows、Linux、MacOS、IOS、Android、树莓派等设备

官网：[https://brook.app/](https://brook.app/)

仓库：[https://github.com/txthinking/brook](https://github.com/txthinking/brook)

::: info 支持协议
Brook（自主研发新版）、Stream Brook（旧版）协议、Shadowsocks 协议、SOCKS5 协议等
:::


参考：

[常见的协议/代理协议](https://yiov.top/gfw/protocol.html)
