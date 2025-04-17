# 变量

## 变量定义

变量是计算机内存中一个已命名的位置，用于存储值。

要在 Python 中创建变量，你需要给它一个名称，并使用赋值运算符 `=` 为它分配一个值。

## 变量命名约定

在 Python 中，变量名称区分大小写，可以是字母、数字和下划线的任意组合。但是，Python 中有指导原则和变量命名约定，可以使你的代码更具可读性和可维护性

- 为变量名称使用小写字母。在 Python 中，惯例是为变量名称使用小写字母。
- 使用下划线分隔变量名称中的单词。如果变量名称由多个单词组成，请使用下划线分隔它们。例如，`first_name` 是一个比 `firstname` 更好的变量名称
- 避免使用保留关键字。Python 有保留关键字，在语言中具有特殊含义，例如 `if`、`else`、`while` 和 `for`。避免将这些关键字用作变量名称。
- 为变量使用描述性名称。选择反映变量用途的描述性名称。例如，`count` 是一个比 `c` 更好的变量名称
- 为变量名称使用单数名词。例如，`student` 是一个比 `students` 更好的变量名称。
- 在你的代码中和整个团队中保持命名约定的一致性。
## 变量声明

```python
x = "Hello World"

print(x) # 输出：Hello World

y = 1

print(y) # 输出：1

y = 10

print(y) # 输出：10

y = "Hello World" # y 变量既可以是数字类型的 10 也可以是字符串类型的 Hello World

print(y) #输出：Hello World

```

```python
# 预先定义变量
a = 1

if(a < 5):
    b = 1 # 在使用时定义变量
else:
    b = 0

print(b)
```

## 常量

常量变量，是一种约定，指的是变量一旦赋值就不再改变，比如数学中的圆周率 `π`，约定使用大写字母命名：

```python
PI = 3.14159
```

## 全局变量和局部变量定义

全局变量和局部变量指的是变量的作用域（有效范围）。

Python 中的全局变量是在**函数外部定义**的变量，并且程序的任何部分都可以访问它，包括函数。Python 中的全局变量具有全局作用域，这意味着它们可以从代码中的任何位置访问。

```python
x = "全局变量"  

print(x)

def my_function():
    print(x)

my_function()
```

打印结果：

```shell
全局变量
```

局部变量是在**函数内部定义**的变量，只能在该函数内访问。局部变量具有局部作用域，这意味着它们只能在定义它们的代码块内访问。

```python
def my_function():
    y = "局部变量"
    print(y)

print(y) # 这里会出错，NameError: name 'y' is not defined
```


![](./src/20250414192409.png)

如果运行项目，同样会报错：

```shell
PS E:\Project\Python\demo> & E:/Program/Python313/python.exe e:/Project/Python/demo/app.py
Traceback (most recent call last):
  File "e:\Project\Python\demo\app.py", line 5, in <module>
    print(y)
          ^
NameError: name 'y' is not defined
```

