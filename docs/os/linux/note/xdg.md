# XDG基本目录规范

- `$HOME/.config`是如果没有`$XDG_CONFIG_HOME`存在，用于存放每个用户的配置文件的位置。
- `$HOME/.cache`是如果没有`$XDG_CACHE_HOME`存在，用于存放每个用户的缓存文件的位置。
- `$HOME/.local/share`是如果没有`$XDG_DATA_HOME`存在，用于存放每个用户的数据文件的位置。

Windows用户可能会发现，这与微软自Windows NT 4版本以来的情况相似（尽管名称在6.0版本中有所改变）：

- `%USERPROFILE%/AppData/Local/`，也被称为`%LOCALAPPDATA%` — 存放此计算机的每个用户数据文件的位置
- `%USERPROFILE%/AppData/Roaming/`，也被称为`%APPDATA%` — 存放漫游用户可以从多台计算机访问的每个用户数据文件的位置
- `%USERPROFILE%/AppData/Local/Temp/`，也被称为`%TEMP%` — 存放每个用户临时文件的位置

这个概念是每个用户的文件可以是（除了其他很多东西之外）_应用程序数据文件_（特定于计算机或漫游），_应用程序配置文件_，_缓存文件_和_临时文件_，应用程序将它们放在以这些特定目录为根的子目录中。

（MacOS有一个类似的系统，用户在`/var/folders`下获得独立的每个用户“用户本地”子目录，其中包含用于缓存和临时文件的`C`和`T`子目录。）

正如Arch用户所指出的，有一些“点”文件和目录已经成为几个应用程序常用的，并且在可预见的未来不太可能与XDG达成一致，例如`$HOME/.ssh`和`$HOME/.netrc`。

[🔗](https://dev59.com/unix/aEHGoIgBc1ULPQZFNZzo)

## 资料

[XDG Base Directory Specification](https://specifications.freedesktop.org/basedir/latest/)

[XDG基本目录规范 | DeepinWiki](https://wiki.deepin.org/zh/03_%E6%8A%80%E6%9C%AF%E8%A7%84%E8%8C%83/02_XDG%E8%A7%84%E8%8C%83/XDG%E5%9F%BA%E6%9C%AC%E7%9B%AE%E5%BD%95%E8%A7%84%E8%8C%83)