# 数字类型

Python 中最常见的数字类型是

- **整数** (int)：这是一个没有小数点的整数。例如，`1`、`2`、`3` 等是整数。
- **浮点数**（float）：这是一个小数。例如，`1.2`、`3.14159` 等是浮点数。
- **复数**（complex）：这是一个具有实部和虚部的数字。例如，`1 + 2j`、`3.14 - 4j` 等是复数。

```python
# 整数
x = 5
print(type(x))  # Output: <class 'int'>

# 浮点数
y = 3.14
print(type(y))  # Output: <class 'float'>

# 复数
z = 2 + 3j
print(type(z))  # Output: <class 'complex'>
```

### `isinstance()` 函数

要检查变量在 Python 中是否为数字，可以使用 `isinstance()` 函数来检查变量是否属于 int、float 或 complex 数据类型。

```python
x = 10
y = 3.14
z = 2 + 3j

print(isinstance(x, (int, float, complex)))  # Output: True
print(isinstance(y, (int, float, complex)))  # Output: True
print(isinstance(z, (int, float, complex)))  # Output: True
print(isinstance('hello', (int, float, complex)))  # Output: False
```

## 四舍五入数字

### `round()` 函数

可以使用内置的 `round()` 函数对数字进行四舍五入。`round()` 函数有两个参数：要四舍五入的数字和小数位数。

```python
x = 3.14159
rounded_x = round(x, 2)
print(rounded_x) # Output: 3.14
```

> [!NOTE] 
> 请注意，如果要四舍五入的数字以 5 结尾，`round()` 函数将四舍五入到最接近的偶数。这称为“银行家四舍五入”。

例如：

```python
x = 2.5
rounded_x = round(x)
print(rounded_x) # Output: 2
```

## 数字格式化

###  使用 `format()` 函数

```python
x = 3.14159
format_x = "{:.2f}".format(x)

print(format_x)  # Output: 3.14
```

`format()` 函数中的 `"{:.2f}"` 字符串告诉 Python 将数字格式化为小数点后两位的浮点数。

### 使用 `f` 字符串

```python
x = 3.14159
print(f"{x:.2f}")  # Output: 3.14
```

字符串前面的 `f` 表示这是一个 f 字符串，字符串中的 `"{x:.2f}"` 告诉 Python 将 `x` 的值格式化为小数点后两位的浮点数。

### 使用 `%` 运算符

```python
x = 3.14159
print("%.2f" % x)  # Output: 3.14
```

`%` 运算符中的 `%.2f` 字符串告诉 Python 将数字格式化为小数点后两位的浮点数。

## 检查字符串是否为数字

### 使用 `isnumeric()` 方法

```python
my_string = "123"
if my_string.isnumeric():
    print("String is a number")
else:
    print("String is not a number") 
    
# Output: String is a number
```

### 使用 `isdigit()` 方法

```python
my_string = "456"
if my_string.isdigit():
    print("String is a number")
else:
    print("String is not a number") 
    
# Output: String is a number
```

### 使用 `try-except` 块将字符串转换为浮点数

```python
my_string = "789.12"
try:
    float(my_string)
    print("String is a number")
except ValueError:
    print("String is not a number") 
    
# Output: String is a number
```

> [!NOTE] 
>请注意，如果字符串包含非数字字符，前两种方法将返回 `False`，第三种方法将引发 `ValueError`。

```python
my_string = "a789.12"

try:
    float(my_string)
    print("String is a number")
except ValueError:
    print("String is not a number")

# Output: String is not a number
```

## 检查数字是否为整数

你可以使用模运算符 `%` 来检查一个数字是否为整数。如果数字除以 1 的结果等于 0，则该数字为整数。

```python
num = 5.0


# 求余，如果余数为 0，则是整数
if num % 1 == 0:
    print("The number is whole.")
else:
    print("The number is not whole.") 
    
# Output: "The number is whole."
```

## 生成随机数

使用内置的 `random` 模块。

### `randint()` 函数

生成随机整数：

```python
import random
# 生成一个 0 到 10 之间的随机整数
random_number = random.randint(0, 10)
print(random_number)
```

## `uniform()` 函数

生成一个随机浮点数：

```python
import random
# 生成一个 0 到 1 之间的随机浮点数
random_number = random.uniform(0, 1)
print(random_number)
```

## 对数字求平方

第一种方法是使用指数运算符 `**`。

```python
x = 5
squared = x ** 2
print(squared) # Output: 25
```

第二种方法是使用 `pow()` 函数来计算一个数字的平方。

```python
x = 5
squared = pow(x, 2)
print(squared)
```

## 对数字取反

使用 `-`（减号）运算符对一个数字取反。

```python
number = 10
negated_number = -number
print(negated_number) # Output: -10
```

## 素数

素数是大于 1 的正整数，除了 1 和它本身之外，没有其他正整数因子（只能被 1 和 它自身整除）。

```python
def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True
```

## 欧拉数

欧拉数，也称为数学常数 `e`，是一个数学常数，大约等于 2.71828。在 Python 中，你可以使用 `math` 模块计算欧拉数。

```python
import math

e = math.e

print(e) # Output: 2.718281828459045
```

## 从字符串中提取数字

使用[正则表达式](../regex)。

```python
import re

string = "The price is $12.34"

number = re.findall(r'\d+\.\d+', string)[0]

print(number) # Output: 12.34
```

要从字符串中提取数字，我们使用正则表达式模式 `\d+\.\d+` 使用 `re.findall` 函数。此模式匹配一个或多个数字 `\d+`，后跟一个点 `\.`，后跟一个或多个数字 `\d+`。结果匹配是一个字符串，表示句子中的数字。

由于 `re.findall` 返回一个匹配列表，我们访问了列表的第一个元素 `[0]` 以获取数字作为字符串。

如果您需要将从字符串中提取的数字转换为数值，可以使用 float 或 int 函数。

```python
number = float(number)
print(number) # Output: 12.34
```

## 数字的位数

要在 Python 中查找数字的位数，可以将数字转换为字符串，然后遍历字符串以提取每个位数。

```python
num = 12345

# Convert number to string
num_str = str(num)

# Iterate over string and print each digit
for digit in num_str:
    print(digit)
```


参考：

[Python 中的数字类型 - 整数、浮点数和复数 - 《Dive into Python》中文版](https://diveintopython.cn/learn/variables/number)