# 循环

### Python 循环（Loops）详解

循环是重复执行代码块的核心结构，Python 提供两种主要循环方式：

---

#### 1. **`for` 循环**
用于遍历序列（列表、元组、字符串等）或可迭代对象

**基本语法：**
```python
for 变量 in 序列:
    循环体代码
```

**示例：**
```python
# 遍历列表
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)  # 依次输出每个水果

# 遍历字符串
for char in "Python":
    print(char)  # 逐个输出字符：P-y-t-h-o-n

# 配合 range() 函数
for i in range(5):       # 0-4
    print(i)           

for i in range(2, 6):    # 2-5
    print(i)

for i in range(0, 10, 2):  # 0,2,4,6,8（步长=2）
    print(i)
```

**典型应用场景：**
- 处理集合中的每个元素
- 执行固定次数的操作
- 遍历字典：
  ```python
  person = {"name": "Alice", "age": 30, "city": "New York"}
  for key in person:          # 遍历键
      print(key)
      
  for key, value in person.items():  # 同时遍历键值对
      print(f"{key}: {value}")
  ```

---

#### 2. **`while` 循环**
在条件为真时重复执行代码块

**基本语法：**
```python
while 条件表达式:
    循环体代码
```

**示例：**
```python
# 基础计数
count = 0
while count < 5:
    print(count)
    count += 1  # 输出：0,1,2,3,4

# 用户输入验证
password = ""
while password != "secret":
    password = input("Enter password: ")
print("Access granted!")

# 无限循环（需谨慎）
while True:
    user_input = input("Type 'exit' to quit: ")
    if user_input == "exit":
        break
```

---

#### 3. **循环控制语句**
- **`break`**：立即退出整个循环
  ```python
  for num in range(10):
      if num == 5:
          break
      print(num)  # 输出：0,1,2,3,4
  ```

- **`continue`**：跳过当前迭代，进入下一次循环
  ```python
  for num in range(5):
      if num == 2:
          continue
      print(num)  # 输出：0,1,3,4（跳过2）
  ```

- **`else`**：循环正常结束后执行（非break中断时）
  ```python
  for n in range(2, 10):
      for x in range(2, n):
          if n % x == 0:
              break
      else:  # 循环完整执行（未break）
          print(f"{n}是质数")
  ```

---

#### 4. **嵌套循环**
循环内包含另一个循环
```python
# 打印乘法表
for i in range(1, 4):      # 外层循环
    for j in range(1, 4):  # 内层循环
        print(f"{i}x{j}={i*j}", end="\t")
    print()  # 换行

# 输出：
# 1x1=1   1x2=2   1x3=3
# 2x1=2   2x2=4   2x3=6
# 3x1=3   3x2=6   3x3=9
```

---

#### 5. **高效循环技巧**
- **`enumerate()`**：同时获取索引和值
  ```python
  colors = ["red", "green", "blue"]
  for index, color in enumerate(colors):
      print(f"索引 {index}: {color}")
  ```

- **`zip()`**：并行遍历多个序列
  ```python
  names = ["Alice", "Bob", "Charlie"]
  ages = [24, 30, 28]
  for name, age in zip(names, ages):
      print(f"{name} is {age} years old")
  ```

- **列表推导式**（循环的简洁写法）
  ```python
  # 传统循环
  squares = []
  for x in range(5):
      squares.append(x**2)
  
  # 等效列表推导式
  squares = [x**2 for x in range(5)]
  ```

---

#### 6. **避免常见陷阱**
1. **无限循环**：确保 `while` 循环有退出条件
   ```python
   # 危险示例（无退出条件）
   # while True:
   #     print("无限循环...")
   ```

2. **修改迭代中的列表**：遍历时避免修改原列表
   ```python
   # 错误方式（可能跳过元素）
   numbers = [1, 2, 3, 4]
   for num in numbers:
       if num % 2 == 0:
           numbers.remove(num)  # 导致结果不可预测
   
   # 正确方式：创建副本
   for num in numbers[:]:  # 使用切片副本
       if num % 2 == 0:
           numbers.remove(num)
   ```

3. **使用 `_` 忽略变量**：当不需要循环变量时
   ```python
   for _ in range(3):
       print("Hello!")  # 只需执行3次，不关心计数值
   ```

---

### 总结表：Python 循环对比
| 特性          | `for` 循环                     | `while` 循环                  |
|---------------|-------------------------------|-------------------------------|
| **使用场景**   | 遍历已知序列/固定次数迭代       | 条件满足时重复执行             |
| **循环变量**   | 自动获取序列元素                | 需手动初始化与更新             |
| **终止条件**   | 序列结束自动终止                | 依赖条件表达式变为 False       |
| **典型应用**   | 集合处理、固定次数操作          | 用户输入验证、事件监听         |
| **内存效率**   | 较高（已知迭代次数）            | 取决于终止条件                 |

掌握循环结构是 Python 编程的基础，合理选择循环类型可显著提升代码效率和可读性！