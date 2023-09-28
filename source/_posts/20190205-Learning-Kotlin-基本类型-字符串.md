---
title: 'Learning Kotlin: 基本类型 - 字符串'
date: 2019-02-05 16:15:55
tags: kotlin
categories: Kotlin
permalink: learning-kotlin-basic-types-string.html
---



`String`

字符串是不可变的。 

字符串的元素--字符可以使用索引运算符访问。 

```
val str: String = "qwerty"

val str2 = str[0] //q
```



字符串模板

```
val data = "Hello"
println("$data World!")
```

```
val a = 1
val b = 2

println("a + b = $( a + b)")
```



分解符

```
val str = """
	{"key":"value"}
"""
```

