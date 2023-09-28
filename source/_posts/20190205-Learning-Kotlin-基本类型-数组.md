---
title: 'Learning Kotlin: 基本类型 - 数组'
date: 2019-02-05 16:15:41
tags: kotlin
categories: Kotlin
permalink: learning-kotlin-basic-types-array.html
---

数组是一种初始化时指定容器大小， 不可以动态调整其大小的容器。元素按顺序存储在一串连续的内存段上。

`Array`

`arrayOf()`

必须指定数组的元素，集合中的元素是任意类型。

```
val arrayNumber = arrayOf(1, 2, 3, 4)
//或者
val arrayNumber: Array<Int> = arrayOf(1, 2, 3, 4)

val arrayObjects: Array<Any> = arrayOf(1, true, "2", JSONObject())
```



`arrayOfNulls()`

创建一个指定大小的、所有原色都为空的数组，必须指定集合中的元素类型

```
val arrayOfNulls: Array<String?> = arrayOfNulls<String>(5)
arrayOfNulls[0] = "element1"
arrayOfNulls[4] = null
```



`Array(size: Int, fun {})`

动态创建数组，用接受数组大小以及一个方法参数的 Array 构造方法，用作参数的方法能够返回给定索引的每个元素初始值

```
val asc = Array(5){ i -> (i * i).toString() } //i = 0, 1, 2, 3, 4
asc.forEach { println(it) }
```



原生类型数组



| 原生数组类型 |      |
| ------------ | ---- |
| ByteArray    |      |
| ShortArray   |      |
| IntArray     |      |
| LongArray    |      |
| BooleanArray |      |
| CharArray    |      |
| FloatArray   |      |
| DoubleArray  |      |



```
// IntArray
val intArr = IntArray(5)
intArr[0] = 1

val intArr2 = IntArray(5) { 1000 } // [100, 100, 100, 100, 100]

val intArr3 = IntArray(5) { it -> it *2 }
//或者
val intArr3 = IntArray(5) { it *2 } // it , lambda 表达式专有变量， 这里指的是数组的下标
```



数组的常见操作

```
for (item in intArr3 ) {}

for (i int intArr3.indices) {}

for((index, item) in intArr3.withIndex) {}


intArr3.forEach { it -> //todo }

intArr3.forEach { ibdex, item -> }
```

