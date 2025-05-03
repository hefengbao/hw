# 元组

元组是一个不可变的值序列，类似于列表。但是，元组一旦创建就不能修改，这意味着你不能在元组中添加、删除或更改元素。

## 创建元组

要创建元组，你可以使用括号 `()` 并用逗号 `,` 分隔元素。

```python
my_tuple = (1, "hello", 3.14)
```

使用空括号 () 创建一个空元组

```python
empty_tuple = ()
```

如果你想创建一个仅包含一个元素的元组，你需要在元素后添加一个逗号，因为如果没有逗号，Python 会将括号解释为分组运算符，而不是元组

```python
single_tuple = (1,)
```

在 Python 中，元组是不可变的，这意味着一旦创建，它们的元素就不能更改。但是，你可以通过组合现有元组和其他元素来创建一个新的元组。因此，要“追加”或“添加”一个元素到元组，你实际上会创建一个新的元组，其中包括现有元素和新元素。

**使用 `+` 运算符创建一个新的元组**

```python
existing_tuple = (1, 2, 3)
new_element = 4

new_tuple = existing_tuple + (new_element,)

print(new_tuple) # Output: (1, 2, 3, 4)
```

**使用 `+=` 增强赋值运算符**

```python
existing_tuple = (1, 2, 3)
new_element = 4

existing_tuple += (new_element,)

print(existing_tuple) # Output: (1, 2, 3, 4)
```
## 元组索引

元组中的第一个元素的索引为 0，第二个元素的索引为 1，依此类推。负索引也受支持，这意味着元组中的最后一个元素的索引为 -1，倒数第二个元素的索引为 -2，依此类推。

```python
my_tuple = ('apple', 'banana', 'cherry')
print(my_tuple[0])   # Output: 'apple'
print(my_tuple[1])   # Output: 'banana'
print(my_tuple[-1])  # Output: 'cherry'
```

## 元组切片

元组是有序的不可变元素集合，你可以使用切片来提取元组的一部分。

元组切片使用语法 `tuple[start:end:step]` 来指定要从元组中提取的元素范围。start 参数是要包含在切片中的第一个元素的索引（包括），end 是要包含在切片中的最后一个元素的索引（不包括），step 是索引之间的增量。

```python
my_tuple = (1, 2, 3, 4, 5)
print(my_tuple[1:4])  # Output: (2, 3, 4)
```

可以使用负索引从末尾切片元组。

```python
my_tuple = (1, 2, 3, 4, 5)
print(my_tuple[-3:-1])  # Output: (3, 4)
```

如果未指定任何参数，Python 将使用默认值：start=0、end=len(tuple) 和 step=1。例如

```python
my_tuple = (1, 2, 3, 4, 5)
print(my_tuple[:3])  # Output: (1, 2, 3)
```


## 命名元组

命名元组是内置元组数据类型的子类，它允许通过名称和索引位置访问字段。

命名元组是使用 `collections.namedtuple` 函数创建的。

```python
from collections import namedtuple

# create a named tuple with two fields: 'x' and 'y'
Point = namedtuple('Point', ['x', 'y'])

# create an instance of the named tuple
p = Point(1, 2)

# access fields by index
print(p[0])  # prints 1

# access fields by name
print(p.x)   # prints 1
print(p.y)   # prints 2
```

## 元组推导式（Tuple Comprehension）

通过对可迭代对象的每个元素应用转换来从现有可迭代对象创建一个新的元组。

元组推导式的语法格式如下：

```python
(表达式 for 迭代变量 in 可迭代对象 [if 条件表达式] )
```

```python
numbers = (1, 2, 3, 4, 5)
squares = tuple(x ** 2 for x in numbers)
print(squares)  # Output: (1, 4, 9, 16, 25)
```

元组推导还可以包括条件表达式，这允许你根据某些条件过滤元素。

```python
numbers = (1, 2, 3, 4, 5)
even_squares = tuple(x ** 2 for x in numbers if x % 2 == 0)
print(even_squares)  # Output: (4, 16)
```
## 元组比较

要在 Python 中比较元组，你可以逐个比较它们的元素，直到找到差异，或者直到所有元素都已成功比较。

```python
tuple1 = (1, 2, 3)
tuple2 = (1, 2, 4)

if tuple1 == tuple2:
    print("The two tuples are equal")
else:
    print("The two tuples are not equal")
```

## 元组长度

可以使用内置的 `len()` 函数来查找元组的长度。

```python
my_tuple = (1, 2, 3, 4, 5)
print(len(my_tuple)) # Output: 5
```

## 遍历元组

要在 Python 中循环遍历元组，你可以使用 `for` 循环。

```python
my_tuple = (1, 2, 3, 4, 5)
for item in my_tuple:
    print(item)
```

如果你还需要元组中每个项目的索引，你可以使用 `enumerate()` 函数

```python
my_tuple = (1, 2, 3, 4, 5)
for index, item in enumerate(my_tuple):
    print(index, item)
```

打印结果：

```shell
0 1
1 2
2 3
3 4
4 5
```
## 元组列表排序

### `sorted()` 函数

可以使用 sorted 函数对 Python 中的元组列表进行排序，并传递一个 key 参数，该参数指定如何比较每个元组中的元素。

```python
# 定义一个元组列表
my_list = [(1, 2), (3, 1), (2, 4)]

# 根据每个元组中的第一个元素排序
sorted_list = sorted(my_list, key=lambda x: x[0])
print(sorted_list) # Output: [(1, 2), (2, 4), (3, 1)]

# 根据每个元组中的第二个元素排序
sorted_list = sorted(my_list, key=lambda x: x[1])
print(sorted_list) # Output: [(3, 1), (1, 2), (2, 4)]
```

根据打印将结果可知，默认是按升序排序。

还可以通过将 reverse 参数设置为 True 来按相反的顺序对元组列表进行排序

```python
# define a list of tuples
my_list = [(1, 2), (3, 1), (2, 4)]

# sort the list by the second element in each tuple in reverse order
sorted_list = sorted(my_list, key=lambda x: x[1], reverse=True)

print(sorted_list) # Output: [(2, 4), (1, 2), (3, 1)]
```

### `sort()` 方法

```python
tuples = [(3, 'apple'), (1, 'orange'), (2, 'banana')]
tuples.sort(key=lambda x: x[0])
print(tuples)  # Output: [(1, 'orange'), (2, 'banana'), (3, 'apple')]
```

## 返回元组

可以使用元组从函数返回多个值。

```python
def calculate_statistics(numbers):
    total = sum(numbers)
    count = len(numbers)
    average = total / count
    return total, count, average
```


参考：

[Python 元组 - 了解如何创建、访问和添加元素 - 《Dive into Python》中文版](https://diveintopython.cn/learn/variables/tuple)

[Python 元组的基本操作 - 排序、比较、切片 - 《Dive into Python》中文版](https://diveintopython.cn/learn/variables/tuple/basic-operations)

[如何在 Python 中将元组转换为其他类型 - 《Dive into Python》中文版](https://diveintopython.cn/learn/variables/tuple/convert)
