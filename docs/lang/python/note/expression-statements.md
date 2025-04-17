# 基本语句

[[toc]]

语句是执行特定操作的一行代码。它是 Python 解释器可以执行的最小的代码单元。

## 语句集

| **语句类型**             | **描述**                                                         |
| -------------------- | -------------------------------------------------------------- |
| 多行语句                 | 使用行续符（反斜杠 `\`）或括号（`()`、`[]`、`{}`）将语句跨越多行书写。                    |
| 复合语句                 | 包含其他语句的语句（如 `if`、`while`、`for`、`def`、`class`），通常带有缩进代码块。       |
| 简单语句                 | 执行单一操作的基本独立语句（如赋值、`print`、`return`）。                           |
| 表达式语句                | 计算并产生值的语句（如 `x + 5`、函数调用），但结果不一定可见。                            |
| `pass` 语句            | 空操作占位符，不执行任何动作，用于语法需要语句但无实际操作的情况。                              |
| `del` 语句             | 删除对象引用（如变量、列表项或对象属性，例如 `del x`、`del list[0]`）。                 |
| `return` 语句          | 终止函数并（可选）返回值。若无返回值，默认返回 `None`。                                |
| `import` 语句          | 导入模块或从模块中导入特定对象（如 `import math`、`from os import path`）。        |
| `continue` 和 `break` | 循环控制语句：<br> - `continue` 跳过当前迭代，进入下一次循环；<br> - `break` 直接退出循环。 |
示例说明：

1. **多行语句**  
```python
total = (10 + 20 
		+ 30 + 40)  # 使用括号隐式续行
```
2. **复合语句**  
```python
if x > 0:
   print("正数")  # 缩进块内的子语句
```
3. **简单语句**  
```python
x = 10  # 单行赋值
```
4. **表达式语句**  
```python
print("你好")  # 函数调用也是表达式
```
5. **`pass` 语句**  
```python
def empty_func():
   pass  # 占位防止语法错误
```
6. **`del` 语句**  
```python
del my_list[0]  # 删除列表首个元素
```
7. **`return` 语句**  
```python
def add(a, b):
   return a + b  # 返回结果
```
8. **`import` 语句**  
```python
import math  # 导入模块
from sys import exit  # 导入特定对象
```
9. **`continue` 和 `break`**  
```python
for num in range(5):
   if num == 2:
	   continue  # 跳过数字2
   if num == 4:
	   break     # 遇到数字4时终止循环
   print(num)
```


参考：

[Python 语句简介：赋值、条件示例 - 《Dive into Python》中文版](https://diveintopython.cn/learn/statements#expression-statements)