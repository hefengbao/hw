# 列表

Python 中的列表是**有序、可变且允许重复的元素集合**，可以是任何类型。列表中的每个元素都有一个唯一的索引，表示其在列表中的位置。列表索引从 0 开始，这意味着列表中的第一个元素的索引为 0，第二个元素的索引为 1，依此类推。

## 创建列表

```python
my_list = [1, 2, 3, 4, 5]
```

创建一个空列表：

```python
my_list = []
```

## 列表嵌套

在一个列表中嵌套一个或多个列表来创建嵌套列表（多层列表）。

```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```

## 列表复制

可以使用切片运算符或 `copy()` 方法。

```python
# 使用切片
original_list = [1, 2, 3, 4, 5]
new_list = original_list[:]
print(new_list)  # Output: [1, 2, 3, 4, 5]

# 使用 copy() 方法
original_list = [1, 2, 3, 4, 5]
new_list = original_list.copy()
print(new_list)  # Output: [1, 2, 3, 4, 5]
```

## 列表长度

使用 `len()` 函数获取列表的长度（元素的数量）。

```python
my_list = [1, 2, 3, 4, 5]
length = len(my_list)
print(length)  # Output: 5
```

```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(len(list_of_lists)) # Output: 3
```

```python
my_list = []
if len(my_list) == 0:
    print("空列表")
else:
    print("非空列表")
```

## 列表索引

使用 Python 中内置的 `index()` 方法来获取列表中项元素的索引，`index()` 方法将元素作为参数，并返回该元素在列表中第一次出现的索引。

```python
my_list = ['apple', 'banana', 'cherry', 'banana', 'date']
index_of_banana = my_list.index('banana')   # 输出：1
index_of_tomato = my_list.index('tomato')   # ValueError: 'tomato' is not in list
```

如果在列表中找不到元素，`index()` 方法会引发 `ValueError`。

```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(list_of_lists.index([1, 2, 3])) # 输出： 0
print(list_of_lists.index(1)) # ValueError: 1 is not in list
```

## 元素访问

你可以使用方括号并指定索引号来访问特定索引处的元素。

```python
my_list = ['apple', 'banana', 'orange']
print(my_list[0])  # Output: 'apple'
print(my_list[1])  # Output: 'banana'
print(my_list[2])  # Output: 'orange'
print(my_list[3])  # IndexError: list index out of range
```

如果列表索引超出范围，Python 将会抛出 `IndexError`。

对于嵌套列表，一个层级一个层级逐次访问：

```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

level1 = list_of_lists[1]  
print(level1) # 输出： [4, 5, 6] 

level2 = level1[1]
print(level2) # 输出： 5

# 可以简写为
print(list_of_lists[1][1]) # 输出： 5
```

## 更改或替换元素

```python
my_list = [1, 2, 3, 4, 5]
my_list[0] = 0
print(my_list) # Output: [0, 2, 3, 4, 5]
```


## 添加元素

### `insert()` 方法

`insert()` 方法可用于**在指定索引处将元素追加到列表中**。使用 `insert()` 方法的语法如下

```python
list.insert(index, element)
```

示例：

```python
my_list = [1, 2, 3, 4]
my_list.insert(2, "hello")
print(my_list)  # [1, 2, 'hello', 3, 4]
```

### `append()` 方法

要向 Python 列表的**末尾插入元素**，可以使用 `append()` 方法。

```python
my_list = [1, 2, 3, 4]
my_list.append(5)
print(my_list)  # [1, 2, 3, 4, 5]
```

### `extend()` 方法

Python 中的 `extend()` 方法用于将可迭代对象（例如列表、元组、集合或字符串）中的元素**追加到现有列表的末尾**。

```python
# Create a list
my_list = [1, 2, 3]

# Append elements from another list to my_list using extend()
other_list = [4, 5, 6]
my_list.extend(other_list)

print(my_list)
# Output: [1, 2, 3, 4, 5, 6]
```

## 删除列表

使用 `del` 语句删除列表。

```python
my_list = [1, 2, 3, 4, 5]
del my_list

print(my_list) # NameError: name 'my_list' is not defined
```

## 删除元素

使用列表对象的 `remove()` 方法。

```python
my_list = [1, 2, 3, 4, 5]
my_list.remove(3) # 3 是元素
print(my_list) 

# Output: [1, 2, 4, 5]
```

```python
my_list = [1, 2, 3, 4, 5, 3]
my_list.remove(3) # 3 是元素
print(my_list) 

# Output: [1, 2, 4, 5, 3]
```

使用 `del` 语句从列表中删除元素，根据**索引**删除。

```python
my_list = [1, 2, 3, 4, 5]
del my_list[2] # 2 是索引
print(my_list)

# Output: [1, 2, 3, 5]
```

从列表中删除第一个元素，可以使用 `del` 语句或 `pop()` 方法，根据**索引**删除。。

```python
my_list = [1, 2, 3, 4, 5]
my_list.pop(0)
print(my_list) 

# Output: [2, 3, 4, 5]
```

从末尾删除：

```python
my_list = [1, 2, 3, 4, 5]
my_list.pop()
print(my_list) 

# Output: [1, 2, 3, 4]
```

从列表中移除 `None`

```python
original_list = [1, None, "hello", None, 5.7, None, "world"]
new_list = [item for item in original_list if item is not None]
print(new_list) 

# Output: [1, 'hello', 5.7, 'world']
```

`clear()` 是一个内置方法，用于从列表中移除所有项。

```python
my_list = [1, 2, 3, 4]
my_list.clear()
print(my_list)  # Output: []
```

## 列表合并

使用 `+` 运算符连接两个或多个列表。

```python
list1 = [1, 2, 3]
list2 = [4, 5, 6]
concatenated_list = list1 + list2
print(concatenated_list) # Output: [1, 2, 3, 4, 5, 6]
```

连接列表的另一种方法是 `extend()` 方法

```python
list1 = [1, 2, 3]
list2 = [4, 5, 6]
list1.extend(list2)
print(list1) # Output: [1, 2, 3, 4, 5, 6]
```

## 列表切片

使用切片符号提取列表的一部分。列表切片的语法是

```python
my_list[start:end:step]
```

其中 `start` 是要包括的第一个项目的索引，`end` 是要排除的第一个项目的索引，`step` 是在切片中每个项目之间要跳过的项目数（默认为 1）。

```python
my_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# 获取前3个元素
print(my_list[:3]) # output: [0, 1, 2]

# 获取第3个至第5个元素
print(my_list[3:6]) # output: [3, 4, 5]

# 从第二个元素开始间隔（step = 2）获取元素
print(my_list[1::2])  # output: [1, 3, 5, 7, 9]

# 反转列表
print(my_list[::-1]) # output: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
```

还可以使用切片替换多个元素。

```python
my_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
my_list[3:6] = [0] # Output: [0, 1, 2, 0, 6, 7, 8, 9]
```

## 列表推导式

列表推导式是通过对现有列表或可迭代对象的每个元素应用表达式来创建新列表的简洁方式。列表推导式的基本语法是

```python
new_list = [expression(item) for item in iterable if condition]
```

其中
- `expression` 是将应用于可迭代对象每个元素的操作。
- `item` 是表示可迭代对象每个元素的变量。
- `iterable` 是元素序列，例如列表或范围。
- `condition` 是基于条件筛选元素的可选表达式。

例如，要创建一个新列表，其中包含从 `1` 到 `5` 的数字的平方，可以使用如下列表推导式

```python
squares = [x**2 for x in range(1, 6)]
print(squares)  # Output: [1, 4, 9, 16, 25]
```

还可以使用 `if` 语句基于条件筛选元素。例如，要创建一个新列表，其中包含从 `1` 到 `10` 的偶数，可以使用如下列表推导式

```python
evens = [x for x in range(1, 11) if x % 2 == 0]
print(evens)  # Output: [2, 4, 6, 8, 10]
```

## 列表去重

可以使用内置 `set()` 函数从列表中删除重复项。

```python
my_list = [1, 2, 3, 3, 4, 5, 5, 5, 6]
new_list = list(set(my_list))
print(new_list) # Output: [1, 2, 3, 4, 5, 6]
```
## 遍历列表

可以使用 `for` 循环在 Python 中循环列表。

```python
my_list = [1, 2, 3, 4, 5]
for item in my_list:
    print(item)
```

## 列表排序

### `sort()` 方法

该方法默认按升序对列表中的元素进行排序。

```python
my_list = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]

my_list.sort()

print(my_list) 

# Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
```

如果你想按降序对列表进行排序，你可以将 `reverse=True` 参数传递给 `sort()` 方法

```python
my_list = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]

my_list.sort(reverse=True)

print(my_list) 

# Output: [9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]
```

### `sorted()` 函数

该函数返回一个新的已排序列表，并且不会更改原始列表。

```python
my_list = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]

sorted_list = sorted(my_list)

print(sorted_list) 

# Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
```

## 列表反转

可以使用内置的 `reverse()` 方法或切片符号。

使用 `reverse()` 方法

```python
my_list = [1, 2, 3, 4, 5]
my_list.reverse()
print(my_list) # Output: [5, 4, 3, 2, 1]
```

使用切片符号

```python
my_list = [1, 2, 3, 4, 5]
reversed_list = my_list[::-1]
print(reversed_list) # Output: [5, 4, 3, 2, 1]
```

## 列表求和

可以使用内置的 `sum()` 函数。

```python
my_list = [1, 2, 3, 4, 5]
list_sum = sum(my_list)
print(list_sum) # Output: 15
```

不能用于嵌套列表。

## 列表比较

可以使用比较运算符（`<`、`<=`、`>`、`>=`、`==`、`!=`）比较两个列表。

```python
list1 = [1, 2, 3]
list2 = [1, 2, 4]

if list1 == list2:
    print("The two lists are equal")
elif list1 < list2:
    print("list1 is less than list2")
else:
    print("list1 is greater than list2")
    
# Output: list1 is less than list2
```

## 列表筛选

可以使用 `filter()` 函数筛选列表，即创建新列表，其中仅包含满足特定条件的现有列表中的元素。

`filter()` 函数接受两个参数：函数和可迭代对象。该函数应为可迭代对象中的每个元素返回 True 或 False。然后，`filter()` 函数返回一个新可迭代对象，其中仅包含函数返回 True 的元素。

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def is_even(num):
    return num % 2 == 0

even_numbers = list(filter(is_even, numbers))
print(even_numbers)  # Output: [2, 4, 6, 8, 10]
```
## 列表映射

`map()` 是一个内置函数，它对可迭代对象（如列表、元组或集合）的每个元素应用一个函数，并返回一个包含转换后值的新可迭代对象。

```python
# 定义转换函数
def double(x):
    return x * 2

# 定义列表
my_list = [1, 2, 3, 4, 5]

# 使用 map() 函数转换
new_list = map(double, my_list)

# 把结果转换为列表并打印
print(list(new_list))

# Output: [2, 4, 6, 8, 10]
```

## 检查列表是否包含元素

可以使用 `in` 关键字或 `index` 方法检查项是否在列表中。

如果项在列表中，`in` 关键字返回 True，否则返回 False。

```python
my_list = [1, 2, 3, 4, 5]
if 3 in my_list:
    print("3 is in the list")
else:
    print("3 is not in the list") # Output: 3 is in the list
```

`index` 方法返回列表中项的第一个出现的索引。如果项不在列表中，它将引发 `ValueError`。

```python
my_list = ["apple", "banana", "cherry"]
index = my_list.index("banana")
print(index)  # Output: 1
```

## 列表到字符串转换

使用 `join()` 方法，返回结果是字符串。

```python
my_list = ['apple', 'banana', 'orange']
my_string = ', '.join(my_list)
print(my_string) # Output: apple, banana, orange
```

可以在 `join()` 方法中使用任何分隔符字符串，包括空字符串（如果要将元素连接在一起而不使用任何分隔符）。

## 列表到字典转换

可以使用 `dict()` 构造函数将列表转换为 [字典](08-dict.md)。列表应包含键值对作为 [元组](05-tuple.md)，其中每个元组的第一个元素是键，第二个元素是值。

```python
my_list = [("a", 1), ("b", 2), ("c", 3)]
my_dict = dict(my_list)
print(my_dict) # Output: {'a': 1, 'b': 2, 'c': 3}
```

## 列表到集合转换

若要将列表转换为集合，可以使用内置的 `set()` 函数。

```python
my_list = [1, 2, 3, 4, 5]
my_set = set(my_list)
print(my_set) # Output: {1, 2, 3, 4, 5}
```

还可以通过将列表转换为集合，然后将其转换回列表来获取唯一值列表，即列表去重。

```python
my_list = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
my_set = set(my_list)
unique_list = list(my_set)
print(unique_list)

输出：[1, 2, 3, 4, 5]
```

## 列表到元组转换

使用内置的 `tuple()` 函数轻松地将列表转换为元组。

```python
my_list = [1, 2, 3, 4, 5]
my_tuple = tuple(my_list)
print(my_tuple) # Output: (1, 2, 3, 4, 5)
```


参考：

[Python 中的列表：创建、访问、添加、删除、排序和复制 - 《Dive into Python》中文版](https://diveintopython.cn/learn/variables/list)

[Python 列表示例：索引、列表解析、筛选、连接、切片 - 《Dive into Python》中文版](https://diveintopython.cn/learn/variables/list/basic-operations)

[如何将 Python 列表转换为（从）字符串、字典和集合 - 《Dive into Python》中文版](https://diveintopython.cn/learn/variables/list/convert)