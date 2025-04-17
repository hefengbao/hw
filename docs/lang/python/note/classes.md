# 类

## 面向对象编程的基本原则

面向对象编程 (OOP) 是一种编程范例，它使用对象及其交互来设计应用程序。Python 是一种面向对象编程语言，它支持以下 OOP 概念：

1. **封装**：封装是将数据（属性）和方法捆绑在类中的机制。它隐藏对象的内部细节，并提供公共接口与之交互。封装有助于实现数据抽象和代码模块化。
2. **继承**：继承允许一个类（子类）从另一个类（超类）继承属性和方法。子类可以在继承超类共同特征的同时扩展或修改继承的行为。继承促进了代码可重用性，并支持“is-a”关系[Is-a_百度百科](https://baike.baidu.com/item/Is-a/15813994)。
3. **多态**：多态允许将不同类的对象视为公共超类的对象。它允许使用单个接口来表示不同类型的对象。多态是通过方法重写和方法重载实现的。
4. **抽象**：抽象专注于表示对象的本质特征，同时隐藏不必要的细节。它允许程序员创建抽象类和方法来定义共同行为，将实现细节留给子类。

## 类是什么

定义了一组属性（变量）和方法（函数），从该**类**创建的**对象**将拥有这些**属性**和**方法**。

类：

对象：

## 创建类

`class` 关键字用于创建类。

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print(f"Hello, my name is {self.name} and I am {self.age} years old.")

person = Person("John", 30)
person.greet()
```

`__init__` 方法是一个构造函数，用于初始化对象的属性。可知，`Person` 类有两个属性 `name` 和 `age`。还有一个 `greet` 方法，打印问候信息。

`person = Person("John", 30)` 初始化对象，即从 `Person` 创建对象。

## 类的继承

```python
class Employee:
    """员工类。"""
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary
        
    def get_salary(self):
        return self.salary

    def set_salary(self, new_salary):
        self.salary = new_salary

class Manager(Employee):
    """经理类，继承自员工类"""
    def __init__(self, name, salary, bonus):
        super().__init__(name, salary)
        self.bonus = bonus

    def get_salary(self):
        return self.salary + self.bonus # 工资 + 绩效
        
manager = Manager('张三', 10000, 100) # 创建经理对象
```

## Python 中的方法（Methods）vs 函数（Functions）

方法是与对象关联的函数（方法定义在类中，使用时，先初始化对象，然后用对象调用方法），而函数不与任何对象关联。

使用上面的例子：

```python
 manager = Manager('张三', 10000, 100) # 创建经理对象
 salary = manager.get_salary()
```

函数使用的例子：

```python
def calculate_salary(salary, bonus = 0):
    return salary + bonus

salary = calculate_salary(10000, 100)
```



参考：
[Python 中的面向对象编程：如何创建类、继承属性和方法 - 《Dive into Python》中文版](https://diveintopython.cn/learn/classes)