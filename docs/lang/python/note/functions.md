# 函数

函数，可执行特定任务的可重用代码块。

### ## 编写函数

一个简单示例：

```python
# 定义函数
def my_function():
    print("Hello World.")

# 调用函数 
my_function()


# 定义有参数的函数
def hello(name):
    print ("Hello " + name)

# 调用有参数的函数，需要传入参数
hello("World")
```

首先要使用 **def** (define) 关键字，然后是**函数名**（最好以要实现的功能命名），接下来是**括号**，括号里是 0 个到多个参数（根据实际情况确定），后面是英文冒号`:`，然后另起一行开始编写函数逻辑（必须有缩进）

```python
def 函数名(可选参数1, 可选参数2, ...):
	函数逻辑
	函数逻辑
	函数逻辑
	...
```

## 类型提示

为了是函数更健壮，为**函数参数**和**返回值**添加类型提示:

```python
def hello(name: str) -> str:
    return "Hello " + name

print(hello("World"))
```

## 默认参数

**函数参数**可以具有默认值，如果在调用函数时未提供值，则使用这些默认值。

```python
def greet(name="there"):
	print("Hello, " + name)

greet() # Output: Hello, there
greet("John") # Output: Hello, John
```

## 可变长度参数

**可变长度函数参数**（参数的个数不确定）使用 `*` 符号表示：

```python
def calculate_sum(*numbers):
    total = 0
    for num in numbers:
        total += num
    return total

sum1 = calculate_sum(1, 2, 3)   # 6
sum2 = calculate_sum(10, 20)    # 30
sum3 = calculate_sum(5)         # 5
```

## 从函数返回多个值

```python
def test_return():
    return 1
    return 2

print(test_return())
```

打印结果：

```shell
1
```

可以看出，函数只能直接返回单个值。但是，你可以通过将它们打包到元组、列表或字典等数据结构中来返回多个值。

```python
def get_user_info():
    name = "John Doe"
    age = 30
    email = "john@gmail.com"
    return name, age, email

# 调用函数并解包返回的值
user_name, user_age, user_email = get_user_info()

print("Name:", user_name)
print("Age:", user_age)
print("Email:", user_email)
```

## 函数文档

使用文档字符串(`""" """`)添加函数**文档**，描述函数的作用、其参数及其返回值。可以使用 `help` 函数访问此信息。

```python
def greet(name):
    """向具有给定姓名的人打印问候语。"""
    print("Hello, " + name)

help(greet)
```

实际使用时，把鼠标移到函数名上，即可看到注释说明：

![](./src/Code_5gxhgKapfL.gif)


Python 函数命名的一些建议：

1. 函数名称必须**以字母或下划线** `_` 开头，后跟任意组合的字母、数字或下划线。示例：`def my_function():`
2. 函数名称应**具有描述性**，并传达函数的目的。示例：`def calculate_total():`
3. 函数名称**区分大小写**，这意味着 `my_function` 和 `My_Function` 是不同的名称。示例：`def my_function():` 和 `def My_Function():` 是两个不同的函数。
4. 函数名称不应与**Python 关键字**相同，例如 `print` 或 `if`。示例：`def print():` 不是一个有效的函数名称。
5. 函数名称应遵循 **snake_case** 命名约定，其中单词用下划线分隔。此约定使函数名称更具可读性和易于理解。示例：`def calculate_total_with_discount():`

总体而言，建议选择一个**具有描述性**、**易于理解**且遵循 Python 函数命名约定的函数名称。


参考：

[Python 中的函数：参数、定义、高阶函数示例 - 《Dive into Python》中文版](https://diveintopython.cn/learn/functions)