---
title: 'Learning Kotlin: 控制流 - for'
date: 2019-02-05 16:16:45
tags: kotlin
categories: Kotlin
permalink: learning-kotlin-control-flow-for.html
---



```kotlin
package app

fun main() {
    //for

    val arrs = arrayOf(1, 2, 3)

    for (item in arrs) {
        println(item)
    }
}
```



`for` 可以循环遍历任何提供了迭代器的对象：

* 有一个成员函数或者扩展函数 `iterator`, 它的返回类型
* 有一个成员函数或者扩展函数 `next()` ,并且
* 有一个成员函数或者扩展函数 `hasNext()` 返回 `Boolean`.

这三个函数都需要标记为 `operator`