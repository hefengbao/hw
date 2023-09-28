---
title: 'Learning Kotlin: Lambda 表达式'
date: 2019-03-06 16:25:23
updated: 2019-03-06 16:25:23
tags: kotlin
categories: Kotlin
permalink: learning-kotlin-lambdas.html
---

## 方法声明：

* 普通类的方法
* 静态类的方法
* companion object 伴生类的方法

```kotlin
fun max(a: Int, b: Int): Int {
    return if (a > b) a else b
}
```

### 普通类的方法

```kotlin
class Person {
    fun test(){
        println("成员方法")
    }
}

>>> Person().test()
```

### 静态类的方法

```kotlin
object Util {
    fun test() {
        println("工具类方法")
    }
}

>>> Util.test()
```

### companion object 伴生类的方法

```kotlin
class Person {
    companion object {
        fun test(){
            println("companion function")
        }
    }
}

>>> Person.test()
```

## 方法参数

* 默认参数
* 具名参数
* 可变数量的参数

### 默认参数

方法参数可以有默认值，当省略相应的参数时使用默认值。

```kotlin
fun read(offset: Int = 0, start: Int) {}
```

### 具名参数

如果一个默认参数在一个无默认值的参数之前，那么无默认值的参数，通过`具名参数`赋值

```kotlin
 fun read(offset: Int = 0, start: Int) {}

read(start = 1)
```

如果最后一个参数是方法，那么它既可以作为具名参数在括号内传入，也可以在括号外传入。

```kotlin
fun read(offset: Int = 0, start: Int, action:() -> Unit){} // action 为方法参数
read(start = 1, action = { println("hello") })
read(start = 1) {
    println("hello")
}
```

### 可变数量的参数（Varargs)

```kotlin
fun append(vararf str: Str): String {
    val result = StringBuffer()
    for (char in str){
        result.append(char)
    }

    return result.toString()
}

>>> appednd('1', '2', '3')
```

```kotlin
val world = charArrayOf('w', 'o', 'r', 'l', 'd')
val result = append('h', 'e', 'l', 'l', 'o', *world)
```

可变参数的要求：

* 只有一个参数可以标注为 `vararg`;
* 如果 vararg 不是最后一个参数，可以使用具名参数语法，给后面的参数传递值。

## Lambda 表达式

隐形参数 `it`:

* it 并不是 Kotlin 中的一个关键字（保留字）
* it 是在当一个高阶方法中 Lambda 表达式的参数只有一个的时候可以使用 it 来使用此参数
* it 可表示为单个参数的隐式名称，是 Kotlin 语言约定的
