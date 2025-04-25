# 语句

语句是执行特定操作的一行代码。它是 Python 解释器可以执行的最小的代码单元。

## 赋值语句

```python
x = 10  # 单行赋值
```

## 条件（if）语句

`if` 语句用于有条件地执行代码。它允许你指定一个条件，并且仅当该条件计算结果为 `True` 时才执行代码块。

```python
x = 3
if x < 5:
    print("x is less than 5")
else:
    print("x is greater than or equal to 5")
```

### 嵌套 if 语句

```python
age = 18
if age >= 18:
    print("You are legally an adult")
    if age == 18:
        print("Congratulations on turning 18!")
else:
    print("You are not yet an adult")
```

### `elif` 语句

`elif` 语句是一个条件 `statement`，可检查程序中的多个条件。它与 `if` 和 `else` 语句结合使用。

语法：

```python
if condition:
    statement(s)
elif condition:
    statement(s)
else:
    statement(s)
```

```python
age = 25

if age < 18:
    print("You are a minor")
elif age >= 18 and age <= 65:
    print("You are an adult")
else:
    print("You are a senior citizen")
```

### 三元 `if` 语句

三元语句提供了一种简洁的方法来编写单行 if 语句。它是一个内联 if 语句，包含三个操作数：一个条件、一个在条件为真时执行的表达式以及一个在条件为假时执行的表达式。

三元 `if` 语句语法：

```python
<expression_if_true> if <condition> else <expression_if_false>
```

```python
num = 7
result = "Even" if num % 2 == 0 else "Odd"
print(result)
```

在上面的示例中，三元语句使用 **三元运算符** `if` 检查数字是奇数还是偶数。如果数字可以被 2 整除（即除法的余数为零），则 `result` 变量将被分配字符串 `'Even'`，如果它不能被 2 整除（即余数为一），则 `result` 变量将被分配字符串 `'Odd'`。

## `match` 语句

`match` 语句在 Python 3.10 中引入，它提供了一种简洁易读的方式来表达条件逻辑。它允许您将一个值与一组模式进行比较，并根据匹配执行相应的代码。

```python
def calculate_discount(total_amount):
    match total_amount:
        case amount if amount < 1000:
            return amount * 0.05
        case amount if amount >= 1000 and amount < 5000:
            return amount * 0.10
        case amount if amount >= 5000:
            return amount * 0.15
```

`match` 语句简化了条件语句。它可以提高可读性，有助于编写更简洁的代码。


## `pass` 语句

空操作占位符，不执行任何动作，用于语法需要语句但无实际操作的情况。

```python
def empty_func():
   pass  # 占位防止语法错误
```

## `del` 语句

删除对象引用（如变量、列表项或对象属性，例如 `del x`、`del list[0]`）。

```python
del my_list[0]  # 删除列表首个元素
```

## `return` 语句

终止函数并（可选）返回值。若无返回值，默认返回 `None`。

```python
def add(a, b):
   return a + b  # 返回结果
```

## `import` 语句

导入模块或从模块中导入特定对象（如 `import math`、`from os import path`）。

```python
import math  # 导入模块
from sys import exit  # 导入特定对象
```

## `continue` 和 `break`

循环控制语句：
 - `continue` 跳过当前迭代，进入下一次循环；
 - `break` 直接退出循环。

```python
for num in range(5):
   if num == 2:
	   continue  # 跳过数字2
   if num == 4:
	   break     # 遇到数字4时终止循环
   print(num)
```

## assert 语句

 `assert` 语句用于测试条件，如果条件不满足，则触发错误。它通常用于调试和测试目的。

基本语法：

```python
assert condition, message
```

其中 `condition` 是要测试的表达式，`message` 是条件不满足时显示的可选错误消息。

```python
x = 5
assert x == 5, "x should be 5"
```

在此示例中，`assert` 语句测试 `x` 是否等于 `5`。如果条件满足，则该语句不起作用。如果条件不满足，则会引发一条错误，并显示消息 `x should be 5`。

## try 语句

 `try` 语句用于捕获在执行代码块期间可能发生的异常。它确保即使发生错误，代码也不会停止运行。

```python
try:
    # Block of code to be attempted
except ExceptionType:
    # Block of code to be executed if the try block throws an exception
else:
    # Block of code to be executed if no exception was thrown in the try block
finally:
    # Block of code that is always executed regardless of whether an exception was thrown or not
```

详见 [错误处理](./exceptions)


## with 语句

## 多行语句

使用行续符（反斜杠 `\`）或括号（`()`、`[]`、`{}`）将语句跨越多行书写，从而使开发者更容易阅读和理解代码。


1. 使用反斜杠

```python
total = 10 + \
        20 + \
        30
print(total)
```

2. 使用括号

```python
fruit_list = ('Apple',
              'Mango',
              'Banana',
              'Orange')  # 使用括号隐式续行
              
print(fruit_list)
```


参考：

[Python 语句简介：赋值、条件示例 - 《Dive into Python》中文版](https://diveintopython.cn/learn/statements)

[如何在 Python 中使用 IF 条件语句，三元运算符 - 《Dive into Python》中文版](https://diveintopython.cn/learn/statements/if)

