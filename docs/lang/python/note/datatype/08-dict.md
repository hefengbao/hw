# 字典

Python 中的字典是键值对的集合，其中每个键都与一个值关联。它是一个无序数据结构，字典中的每个键都必须是唯一的。

## 创建字典

使用大括号 `{}` 或使用 `dict()` 函数来创建字典。

- 使用大括号

```python
# Create an empty dictionary
empty_dict = {}

# Create a dictionary with key-value pairs
my_dict = {'name': 'John', 'age': 30, 'city': 'New York'}

# Create a dictionary with mixed data types
mixed_dict = {'name': 'John', 'age': 30, 'scores': [85, 90, 95]}
```

- 使用 `dict()` 函数

```python
# Create an empty dictionary
empty_dict = dict()

# Create a dictionary with key-value pairs
my_dict = dict(name='John', age=30, city='New York')

# Create a dictionary with mixed data types
mixed_dict = dict(name='John', age=30, scores=[85, 90, 95])
```

## 字典键&值

### `keys()` 方法

获取字典所有的建键。

```python
# Creating a dictionary
my_dict = {"name": "Sam", "age": 35, "city": "Boston"}

# Getting the keys of the dictionary
keys = my_dict.keys()

# Printing the keys
print(keys) # Output: dict_keys(['name', 'age', 'city'])
```

请注意，`keys()` 返回一个视图对象，该对象是字典键的动态视图。这意味着如果修改了字典，视图对象将反映这些更改。如果你需要将键作为列表来处理，可以将视图对象转换为列表。

```python
my_dict = {"name": "Sam", "age": 35, "city": "Boston"}

keys = my_dict.keys()

print(keys) # 输出：dict_keys(['name', 'age', 'city'])

my_dict["post_code"] = "611130"

print(keys) # 输出：dict_keys(['name', 'age', 'city', 'post_code'])

key_list = list(keys)

print(key_list) # 输出：['name', 'age', 'city', 'post_code']
```

### 检查键是否存在

使用 `in` 运算符来检查字典是否具有键。

```python
my_dict = {"name": "Sam", "age": 35, "city": "Boston"}

if "name" in my_dict:
    print("键 'name' 在字典中")
else:
    print("键 'name' 不在字典中")

# 键 'name' 在字典中

if "country" in my_dict:
    print("键 'country' 在字典中")
else:
    print("键 'country' 不在字典中")

# 键 'country' 不在字典中
```

### `values()` 方法

获取字典所有的值。

```python
my_dict = {'a': 1, 'b': 2, 'c': 3}
values = my_dict.values()
print(values) # Output: dict_values([1, 2, 3])

values_list = list(values)
print(values_list) # Output: [1, 2, 3]
```

## 获取元素

使用键值获取值：

```python
# Creating a dictionary
my_dict = {'apple': 3, 'banana': 5, 'orange': 2}

# Accessing a value using its key
print(my_dict['apple'])  # Output: 3
print(my_dict['banana']) # Output: 5

# 当键值不存在
print(my_dict['banana2']) # KeyError: 'banana2'
```

使用 `get()` 方法获取与字典中的键关联的值。

```python
# create a dictionary
my_dict = {'apple': 1, 'pineapple': 2, 'orange': 3}

# get the value associated with the 'apple' key
apple_value = my_dict.get('apple')

# print the value
print(apple_value) # Output: 1

print(my_dict.get('banana')) # Output: None
```

如果在字典中找不到该键，`get()` 默认返回 None。

## 添加元素

### 赋值

要向 Python 字典中添加键值对，可以使用以下语法

```python
my_dict[key] = value
```

`my_dict` 是你想要向其中添加元素的字典，`key` 是新元素的键，`value` 是新元素的值。

```python
my_dict = {}
my_dict["name"] = "John"
print(my_dict) # Output: {'name': 'John'}.
```

如果键已存在于字典中，则其值将更新为新值。如果键不存在，则会向字典中添加一个新的键值对。

### `update()` 方法

`update()` 方法将另一个字典作为参数，并将其键值对添加到原始字典中。如果键已存在于原始字典中，则其值将更新为新字典中的值。

```python
my_dict = {'a': 1, 'b': 2}
new_dict = {'c': 3, 'd': 4}

my_dict.update(new_dict)

print(my_dict)  # Output: {'a': 1, 'b': 2, 'c': 3, 'd': 4}
```

## 删除元素

### `del` 语句

```python
# create a dictionary
my_dict = {'a': 1, 'b': 2, 'c': 3}

# delete an element with key 'b'
del my_dict['b']

# print the updated dictionary
print(my_dict) # Output: {'a': 1, 'c': 3}
```

### `pop()` 方法

```python
my_dict = {"a": 1, "b": 2, "c": 3}

deleted_element = my_dict.pop("b")

print(my_dict)  # Output: {"a": 1, "c": 3}

print(deleted_element) # Output: 2
```

`pop()` 方法会返回删除的键值。

## 嵌套字典

可以通过简单地将字典用作另一个字典中的值来将字典嵌套到字典中。

```python
# create a dictionary of dictionaries
my_dict = {
    'person1': {'name': 'John', 'age': 28},
    'person2': {'name': 'Jane', 'age': 32}
}

# accessing values in the dictionary of dictionaries
print(my_dict['person1']['name']) # output: 'John'
print(my_dict['person2']['age']) # output: 32
```

向嵌套字典中添加新字典

```python
# adding a new person to the dictionary of dictionaries
my_dict['person3'] = {'name': 'Alex', 'age': 25}

# accessing the new person's information
print(my_dict['person3']['name']) # output: 'Alex'
```

在嵌套字典中更新值

```python
# create a dictionary of dictionaries
my_dict = {
    'person1': {'name': 'John', 'age': 28},
    'person2': {'name': 'Jane', 'age': 32}
}

# updating a person's age in the dictionary of dictionaries
my_dict['person1']['age'] = 30

# accessing the updated age
print(my_dict['person1']['age']) # output: 30
```

## 对象字典

通过使用对象实例作为值并使用唯一键来访问对象来创建对象字典。

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

# create objects
person1 = Person("Alice", 25)
person2 = Person("Bob", 30)
person3 = Person("Charlie", 35)

# create dictionary of objects
people = {
    "person1": person1,
    "person2": person2,
    "person3": person3
}

# access objects using keys
print(people["person1"].name)   # outputs "Alice"
print(people["person2"].age)    # outputs 30
```

## 删除字典

可以使用 `del` 关键字后跟字典变量名来删除字典。

```python
my_dict = {'key1': 'value1', 'key2': 'value2'}
del my_dict
```

## 键值反转

```python
my_dict = {'a': 1, 'b': 2, 'c': 3}

reversed_dict = {value: key for key, value in my_dict.items()}

print(reversed_dict) # Output: {1: 'a', 2: 'b', 3: 'c'}
```


## 字典遍历

- 迭代键

```python
# create a dictionary
my_dict = {'a': 1, 'b': 2, 'c': 3}

# iterate over the keys and print them
for key in my_dict:
    print(key)
```

输出

```python
a
b
c
```

- 迭代值

```python
# create a dictionary
my_dict = {'a': 1, 'b': 2, 'c': 3}

# iterate over the values and print them
for value in my_dict.values():
    print(value)
```

输出

```python
1
2
3
```

- 迭代键值对

```python
# create a dictionary
my_dict = {'a': 1, 'b': 2, 'c': 3}

# iterate over the key-value pairs and print them
for key, value in my_dict.items():
    print(key, value)
```

输出

```python
a 1
b 2
c 3
```

## 字典到 JSON 转换

可以在 Python 中使用内置的 `json` 模块将字典转换为 JSON 格式。

```python
import json

# sample dictionary
my_dict = {'name': 'John', 'age': 30, 'city': 'New York'}

# convert dictionary to JSON
json_obj = json.dumps(my_dict)

# print the JSON object
print(json_obj)
```

在此示例中，`json.dumps()` 函数用于将字典 `my_dict` 转换为 JSON 对象 `json_obj`。`print()` 函数用于在控制台上显示 JSON 对象。

输出

```python
{"name": "John", "age": 30, "city": "New York"}
```

还可以使用 `json.dump()` 函数将 JSON 对象保存到文件中。

```python
import json

# sample dictionary
my_dict = {'name': 'John', 'age': 30, 'city': 'New York'}

# save dictionary to a JSON file
with open('data.json', 'w') as f:
    json.dump(my_dict, f)
```

在此示例中，`json.dump()` 函数用于将字典 `my_dict` 保存到名为 `data.json` 的文件中。使用 with 语句以写入模式打开文件。

## 使用变量创建字典

```python
# define variables
name = "John"
age = 25
gender = "male"

# create dictionary
my_dict = {
    "name": name,
    "age": age,
    "gender": gender
}

# print dictionary
print(my_dict)
```

## 将列表转换为字典

使用 `dict()` 构造函数。列表应包含 [元组](05-tuple.md)，其中每个元组都包含一个键值对。

```python
my_list = [('a', 1), ('b', 2), ('c', 3)]
my_dict = dict(my_list)
print(my_dict) # Output: {'a': 1, 'b': 2, 'c': 3}
```
## 将元组转换为字典

使用 `dict()` 函数将元组转换为字典。

```python
# Define a tuple
my_tuple = ('apple', 'pineapple', 'cherry')

# Convert the tuple to a dictionary
my_dict = dict(zip(range(len(my_tuple)), my_tuple))

# Print the dictionary
print(my_dict)
```

输出

```python
{0: 'apple', 1: 'pineapple', 2: 'cherry'}
```

`zip()` 函数用于将元组元素与其每个元素的索引结合起来。然后，使用 `dict()` 函数将压缩对象转换为字典。
## 将字符串转换为字典

使用内置于 Python 中的 `json` 模块将字符串转换为 Python 中的字典。

```python
import json

# Sample string
string = '{"name": "John", "age": 30, "city": "New York"}'

# Convert string to dictionary
dictionary = json.loads(string)

# Print the dictionary
print(dictionary)
```

输出

```python
{'name': 'John', 'age': 30, 'city': 'New York'}
```



参考：

[Python 字典：定义、创建、访问、删除示例 - 《Dive into Python》中文版](https://diveintopython.cn/learn/variables/dictionary)

[Python 中的字典操作：添加、删除、迭代、排序 - 《Dive into Python》中文版](https://diveintopython.cn/learn/variables/dictionary/basic-operations)

[如何将 Python 字典转换为（从）列表、字符串和元组 - 《Dive into Python》中文版](https://diveintopython.cn/learn/variables/dictionary/convert)

[Python 字典中的键值示例：获取、转换、检查和删除 - 《Dive into Python》中文版](https://diveintopython.cn/learn/variables/dictionary/key-value-operations)