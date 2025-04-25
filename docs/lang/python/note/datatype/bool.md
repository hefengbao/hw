# 布尔

布尔变量是一个可以保存两个可能值之一的变量：`True` 或 `False`。布尔变量通常用于条件 [语句](../statements) 和 [循环](../loops) 中，以控制程序的流程。

## 布尔变量声明

```python
a = True
b = False
```

你还可以使用布尔运算符，例如 `and`、`or` 和 `not` 来组合或否定布尔值。

```python
a = True
b = False
print(a and b)  # False
print(a or b)   # True
print(not a)    # False
```

## 布尔变量用法

### 条件语句

```python
# Declaring a boolean variable
is_raining = True

# Checking the value of the boolean variable using a conditional statement
if is_raining:
    print("Bring an umbrella")
else:
    print("No need for an umbrella")

# Output: Bring an umbrella
```


### 循环语句

```python
# Declaring a boolean variable
has_items = True

# Looping while the boolean variable is True
while has_items:
    # Do something here...
    print("Processing an item...")
    
    # Ask the user if there are more items
    response = input("Are there more items to process? (y/n) ")
    
    # Update the boolean variable based on the user's response
    if response.lower() == "y":
        has_items = True
    else:
        has_items = False

# Output: 
# Processing an item...
# Are there more items to process? (y/n) y
# Processing an item...
# Are there more items to process? (y/n) n
```

参考：

[Python 中的布尔变量 - 了解如何声明和使用布尔变量 - 《Dive into Python》中文版](https://diveintopython.cn/learn/variables/boolean)
