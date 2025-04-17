# 日期和时间

Python 有几个用于处理日期和时间的内置模块。以下是其中一些最常用的模块

- datetime 模块：Python datetime 模块提供了用于处理日期和时间的 类。它包括 `datetime`、`date`、 `time` 和 `timedelta` 等类，可用于表示和操作日期、时间和持续时间。

- time 模块：此模块提供了用于处理与时间相关的函数，例如获取当前时间、等待一段时间以及在时间表示之间转换。

- calendar 模块：此模块提供了用于处理日历的函数，例如获取月份中的天数、确定给定日期的星期几以及以各种方式格式化日期。

- dateutil 模块：此模块提供了用于处理日期和时间的附加功能，包括从字符串解析日期和时间、处理时区以及使用日期和时间执行算术运算。

## 日期时间（Datetime）

Python 的内置`datetime`模块用于处理日期和时间。常见的 datetime 格式：

1. **YYYY-MM-DD**：年份、月份和日期，用连字符分隔。
2. **YYYY/MM/DD**：年份、月份和日期，用斜杠分隔。
3. **MM/DD/YYYY**：月份、日期和年份，用斜杠分隔。
4. **DD-MM-YYYY**：日期、月份和年份，用连字符分隔。
5. **DD/MM/YYYY**：日期、月份和年份，用斜杠分隔。
6. **YYYY-MM-DD HH:MM:SS**：年份、月份和日期，用连字符分隔，后跟小时、分钟和秒，用冒号分隔。
7. **YYYY-MM-DD HH:MM:SS.mmmmmm**：年份、月份和日期，用连字符分隔，后跟小时、分钟和秒，用冒号分隔，微秒用点分隔。

```python
from datetime import datetime

current_datetime = datetime.now()

print(current_datetime)
```

打印内容示例：

```shell
2025-04-14 14:26:21.399215
```

可知默认 `datetime` 对象的格式是 `YYYY-MM-DD HH:MM:SS.mmmmmm` 。

### date()

`date()` 函数获取当前的日期。

```python
from datetime import datetime

current_datetime = datetime.now()

current_date = current_datetime.date()

print(current_date)
```

打印内容示例：

```shell
2025-04-14
```

### time()

`time()` 函数获去当前时间。

```python
from datetime import datetime

current_datetime = datetime.now()

current_time = current_datetime.time()  

print(current_time)
```

打印内容示例：

```shell
14:30:17.520586
```

### year, month, day, hour, minute, second, microsecond

`year` 属性获取当前年份。

`month` 属性获取当前月份。

`day` 属性获取当前月份中的天数。

`hour` 属性获取小时数。

`minute` 属性获取分钟数。

`second` 属性获取秒数。

`microsecond` 属性获取微秒数。

```python
from datetime import datetime

current_datetime = datetime.now()

print(current_datetime)

current_year = current_datetime.year

print(current_year)

current_month = current_datetime.month

print(current_month)

current_day = current_datetime.day

print(current_day)

current_hour = current_datetime.hour

print(current_hour)

current_minute = current_datetime.minute

print(current_minute)

current_second = current_datetime.second

print(current_second)

current_microsecond = current_datetime.microsecond

print(current_microsecond)

```

打印内容示例：

```shell
2025-04-14 14:39:31.936340
2025
4
14
14
39
31
936340
```

### date  类

在 Python 中，`date` 模块不是一个独立的模块。但是，`datetime` 模块提供了一个 date 类，用于处理日期。

```python
from datetime import date

my_date = date(2025, 4, 9)

print(my_date) 

```

打印内容：

```shell
2025-04-09
```

```python
from datetime import date

my_date = date(2025, 4, 9)

year = my_date.year

month = my_date.month

day = my_date.day

print(year, month, day) 
                                                                                          
打印内容：

```shell
2025 4 9
```

### today()

`today()` 函数获取今天的日期。

```python
from datetime import datetime, date  

t1 = datetime.today()

print(t1)
  
t2 = date.today()

print(t2)
```

打印内容示例：

```shell
2025-04-14 15:05:26.194774
2025-04-14
```

### timedelta  类

`timedelta` 类表示两个日期时间对象之间的差异。

以下示例获取昨天日期：

```python
from datetime import date, timedelta

today = date.today() 

yesterday = today - timedelta(days=1) 

print(yesterday)
```

打印内容示例：

```shell
2025-04-13
```
## fromtimestamp()

`fromtimestamp()` 函数将时间戳转换为 Python 中的 `date` 对象。

```python
from datetime import date, datetime, time

timestamp = 1744369678

converted_date = date.fromtimestamp(timestamp)

print(converted_date)
```

打印内容:

```shell
2025-04-11
```

### timestamp()

以使用 `timestamp()` 方法将 Python `datetime` 对象转换为纪元时间（即自 1970 年 1 月 1 日 00:00:00 UTC 以来经过的秒数）。

```python
from datetime import datetime

current_datetime = datetime.now()

current_timestamp = int(current_datetime.timestamp())

print(current_timestamp)
```

打印内容示例:

```python
1744615124
```
### strptime()

`strptime()` 函数把表示日期和时间的字符串（str）解析为（`p`arse）解析为 datetime 对象，所以format 参数需要匹配字符串。

```python
from datetime import date, datetime, time

date_string = "2025.4.11"  

parsed_datetime = datetime.strptime(date_string, "%Y.%m.%d")

print(parsed_datetime)

print(parsed_datetime.date())
```

打印内容：

```shell
2025-04-11 00:00:00
2025-04-11
```

### strftime()

`strftime()` 方法根据指定格式将 `datetime` 对象格式化（`f`ormat）为字符串表示形式。

```python
from datetime import date, datetime, time

my_date = date(2025, 4, 11)

date_string = my_date.strftime("%Y 年 %m 月 %d 日")

print(date_string)
```

打印内容：

```shell
2025 年 04 月 11 日
```
### combine()

`datetime.combine()` 方法将将 `date` 对象与`time` 对象结合起来，以创建一个新的 `datetime` 对象。

```python
from datetime import date, datetime, time

my_date = date(2025, 4, 11)

my_time = time(15, 46, 0)

dt = datetime.combine(my_date, my_time)

print(dt)
```

打印内容：

```shell
2025-04-11 15:46:00
```


## 时间（Time）

`time` 模块中的 `strftime()` 方法根据各种格式代码格式化时间值。以下是 Python 中时间格式化中一些常用的格式代码：

- **%H**：24 小时制中的 2 位小时（00-23）
- **%I**：12 小时制中的 2 位小时（01-12）
- **%M**：2 位分钟（00-59）
- **%S**：2 位秒（00-59）
- **%p**：AM/PM 标志（AM 或 PM）

```php
import time

# 获取当前 time 对象
current_time = time.localtime()

print(current_time)

# 使用 strftime()  格式化时间
formatted_time = time.strftime("%H:%M:%S", current_time)

formatted_time_am_pm = time.strftime("%I:%M:%S %p", current_time)

print("Formatted Time (24-hour format):", formatted_time)

print("Formatted Time (12-hour format):", formatted_time_am_pm)
```

打印内容示例：

```shell
time.struct_time(tm_year=2025, tm_mon=4, tm_mday=14, tm_hour=16, tm_min=1, tm_sec=50, tm_wday=0, tm_yday=104, tm_isdst=0)

Formatted Time (24-hour format): 16:01:50
Formatted Time (12-hour format): 04:01:50 PM
```

## 日历（Calendar）

### month()

`month()` 函数返回一个格式化字符串，表示给定年份和月份的日历。

```python
import calendar

# 2025 年 4 月份日历
print(calendar.month(2025,4))
```

![](./src/20250409152625.png)

### calendar()

`calendar()` 函数返回一个多行字符串，表示全年的日历。

```python
import calendar

# 2025 年日历
print(calendar.calendar(2025))
```

![](./src/20250409152743.png)

### isleap()

`isleap()` 函数如果给定的年份是闰年，则返回 `True`，否则返回 `False`。

```python
import calendar

# 判断 2025 年是否是闰年
print(calendar.isleap(2025))
```

打印内容：

```shell
False
```

### monthrange()

`monthrange()` 函数返回一个元组，其中包含该月的第一天是星期几（0 - 6 表示星期一 - 星期日）和该月的天数。

```python
import calendar

print(calendar.monthrange(2025, 4))
```

打印内容：

```shell
(1, 30)
```

上面结果的含义是 2025 年 4 月的第一天（2025-04-01）是星期二，本月共 30 天。

## Dateutil

`dateutil` 模块是 Python 中的一个*第三方模块*，它提供了用于处理日期和时间的各种实用程序。它扩展了内置 `datetime` 模块提供的功能，并使在 Python 中处理日期和时间变得更加容易。

安装 `dateutil`:

```shell
pip install python-dateutil
```

### parser.parse()

`parser.parse()` 方法用于解析日期或时间的字符串表示形式，并将其转换为 `datetime` 对象。

```python
from dateutil import parser

date_string = "2024.04.11"

date = parser.parse(date_string)

print(date)
```

打印内容：

```shell
2024-04-11 00:00:00
```

### relativedelta()

`relativedelta` 类用于向 `datetime` 对象添加（+）或减去（-）一定量的时间。可传入的参数：`years`, `months`, `days`, `leapdays`, `weeks`, `hours`, `minutes`, `seconds`, `microseconds`。

```python
from dateutil import parser

from dateutil.relativedelta import relativedelta

date_string = "2024.04.11"

date = parser.parse(date_string)

new_date = date + relativedelta(years=1, months=2, weeks=3, hours=5)

print(new_date)
```

`2024-04-11 00:00:00` 的基础上加 
- 1 年  `2025-04-11 00:00:00`
- 2 个月  `2025-06-11 00:00:00`
- 3 星期即 21 天  `2025-07-02 00:00:00`
- 5 小时 `2025-07-02 05:00:00`

打印内容：

```shell
2025-07-02 05:00:00
```

### rrule()

`rrule()` 函数用于根据用户指定的规则集生成一系列日期。

```python
from dateutil import parser
from dateutil.relativedelta import relativedelta
from dateutil.rrule import rrule, DAILY

date_string = "2024.04.11"

date = parser.parse(date_string)

dates = rrule(freq=DAILY, count=7, dtstart=date)

for d in dates:
    print(d)
```

从 `2024-04-11 00:00:00` 开始，按天（DAILY）累进生成 7 组日期，打印内容：

```shell
2024-04-11 00:00:00
2024-04-12 00:00:00
2024-04-13 00:00:00
2024-04-14 00:00:00
2024-04-15 00:00:00
2024-04-16 00:00:00
2024-04-17 00:00:00
```



| Directive | Meaning                                       | Example                                                                     |
| --------- | --------------------------------------------- | --------------------------------------------------------------------------- |
| `%a`      | 星期几的本地缩写名称。                                   | Sun, Mon, …, Sat (en_US)；So, Mo, …, Sa (de_DE)                              |
| `%A`      | 星期几的本地完整名称。                                   | Sunday, Monday, …, Saturday (en_US)；Sonntag, Montag, …, Samstag (de_DE)     |
| `%w`      | 星期几的十进制表示，0为周日，6为周六。                          | 0, 1, …, 6                                                                  |
| `%d`      | 月份的日期，补零的十进制数。                                | 01, 02, …, 31                                                               |
| `%b`      | 月份的本地缩写名称。                                    | Jan, Feb, …, Dec (en_US)；Jan, Feb, …, Dez (de_DE)                           |
| `%B`      | 月份的本地完整名称。                                    | January, February, …, December (en_US)；Januar, Februar, …, Dezember (de_DE) |
| `%m`      | 月份，补零的十进制数。                                   | 01, 02, …, 12                                                               |
| `%y`      | 不带世纪的年份，补零的十进制数。                              | 00, 01, …, 99                                                               |
| `%Y`      | 带世纪的年份，十进制数。                                  | 0001, 0002, …, 2013, 2014, …, 9998, 9999                                    |
| `%H`      | 24小时制的小时，补零的十进制数。                             | 00, 01, …, 23                                                               |
| `%I`      | 12小时制的小时，补零的十进制数。                             | 01, 02, …, 12                                                               |
| `%p`      | 本地对应的上午或下午标记。                                 | AM, PM (en_US)；am, pm (de_DE)                                               |
| `%M`      | 分钟，补零的十进制数。                                   | 00, 01, …, 59                                                               |
| `%S`      | 秒，补零的十进制数。                                    | 00, 01, …, 59                                                               |
| `%f`      | 微秒，左侧补零的十进制数。                                 | 000000, 000001, …, 999999                                                   |
| `%z`      | UTC偏移量，格式为±HHMM[SS[.ffffff]]（若对象无时区信息则为空）。    | (空), +0000, -0400, +1030, +063415, -030712.345216                           |
| `%Z`      | 时区名称（若对象无时区信息则为空）。                            | (空), UTC, EST, CST                                                          |
| `%j`      | 一年中的第几天，补零的十进制数。                              | 001, 002, …, 366                                                            |
| `%U`      | 一年中的周数（周日为一周的第一天），补零的十进制数。新年中第一个周日之前的天数属于第0周。 | 00, 01, …, 53                                                               |
| `%W`      | 一年中的周数（周一为一周的第一天），十进制数。新年中第一个周一之前的天数属于第0周。    | 00, 01, …, 53                                                               |
| `%c`      | 本地适合的日期和时间表示。                                 | Tue Aug 16 21:30:00 1988 (en_US)；Di 16 Aug 21:30:00 1988 (de_DE)            |
| `%x`      | 本地适合的日期表示。                                    | 08/16/88 (None)；08/16/1988 (en_US)；16.08.1988 (de_DE)                       |
| `%X`      | 本地适合的时间表示。                                    | 21:30:00 (en_US)；21:30:00 (de_DE)                                           |
