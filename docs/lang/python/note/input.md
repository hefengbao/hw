# input()

CLI 用户输入：

```python
name = input('请输入用户名：')

email = input('请输入邮箱：')

print(f'用户名：{name}')  

print(f'邮箱：{email}')
```

![](./src/Code_SevAzwy2iA.gif)

用户输入的数据默认是**字符串**

![](./src/Code_Jnn65BSupX.gif)

需要特定类型的数据，需要做类型转换：

```python
number = input("Enter a number: ")
print(type(number))

if number.isdigit():    
    number = int(number)
    print(f"The number is {number} and its type is {type(number)}")
elif number.replace('.', '', 1).isdigit() and number.count('.') < 2:
    number = float(number)
    print(f"The number is {number} and its type is {type(number)}")
else:
    print("The input is not a valid number.")
```

![](./src/Code_R0tH77cQJp.gif)

由于 `input()` 方法返回的是字符串，所以可以直接使用一些字符串的处理函数，比如去除空格：

```python
name = input("Enter your name: ").strip()
```

处理密码输入，可使用 `getpass` 模块：

```python
from getpass import getpass

password = getpass("请输入密码: ")
print(password)
```

![](./src/Code_zm1Fu2mjxw.gif)
