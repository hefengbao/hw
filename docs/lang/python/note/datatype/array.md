# 数组

数组是一种数据结构，用于存储**同类型元素**的集合。它是一个容器，包含**固定数量的项**，并且可以使用其索引访问这些元素。


## 创建数组

### `array` 模块的`array()` 方法

```python
import array
int_array = array.array('i', [1, 2, 3, 4, 5])
print(int_array) # array('i', [1, 2, 3, 4, 5])
```

在上面的示例中，`'i'` 表示带符号整数的数据类型代码，[了解更多](https://docs.python.org/zh-cn/3/library/array.html)。

### `numpy` 模块的`array()` 方法

```python
import numpy as np
int_array = np.array([1, 2, 3, 4, 5])
print(int_array) # [1 2 3 4 5]
```

## Python 数组

### 二维数组

```python
import numpy as np

# Create a 2-dimensional array
arr2 = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(arr2)
# Output:
# [[1 2 3]
#  [4 5 6]
#  [7 8 9]]
```

### 字典数组

```python
# Create an array of dictionaries
array_of_dictionaries = [
    {"name": "John", "age": 25, "city": "New York"},
    {"name": "Alice", "age": 30, "city": "London"},
    {"name": "Bob", "age": 35, "city": "Paris"}
]

# Accessing values
print(array_of_dictionaries[0]["name"])  # Output: John
print(array_of_dictionaries[1]["age"])   # Output: 30
print(array_of_dictionaries[2]["city"])  # Output: Paris
```
### 元组数组

```python
import numpy as np

# NumPy array of tuples
array = np.array([(1, 'apple'), (2, 'banana'), (3, 'orange')])
print(array)
```

打印结果：

```shell
[['1' 'apple']
 ['2' 'banana']
 ['3' 'orange']]
```

### 字节数组

使用内置 `bytearray` 或 `bytes` 类型创建字节数组。

使用 `bytearray`：

```python
my_array = bytearray([0x41, 0x42, 0x43, 0x44])  # Creating a bytearray from a list of byte values
print(my_array)  # Output: bytearray(b'ABCD')

# Accessing individual bytes
print(my_array[0])  # Output: 65
print(hex(my_array[1]))  # Output: 0x42

# Modifying bytes
my_array[2] = 0x45
print(my_array)  # Output: bytearray(b'ABED')
```

使用 `bytes`：

```python
my_array = bytes([0x41, 0x42, 0x43, 0x44])  # Creating a bytes object from a list of byte values
print(my_array)  # Output: b'ABCD'

# Accessing individual bytes
print(my_array[0])  # Output: 65
print(hex(my_array[1]))  # Output: 0x42
```

## 数组长度

使用 `len()` 函数获取数组（或任何序列）的长度。`len()` 函数返回序列中的元素数量。

## 数组索引

数组索引允许你通过引用数组中元素的位置或索引来从数组中检索特定元素。

数组索引从 0 开始，因此数组的第一个元素位于索引 0，第二个元素位于索引 1，依此类推。

还可以使用负索引从数组末尾访问元素。使用负索引时，-1 表示最后一个元素，-2 表示倒数第二个元素，依此类推。

## 遍历数组

```python
import numpy as np

my_array = np.array([1, 2, 3, 4, 5])
for element in my_array:
    print(element)
```



参考：

[array --- 高效的数字值数组 — Python 3.13.3 文档](https://docs.python.org/zh-cn/3/library/array.html)

[Python 中的数组变量 - 了解如何使用数组 - 《Dive into Python》中文版](https://diveintopython.cn/learn/variables/array)



