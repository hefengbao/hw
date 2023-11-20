---
title: 'Learning Kotlin: 类与继承'
date: 2019-03-02 15:40:31
tags: kotlin
categories: Kotlin
permalink: learning-kotlin-classes.html
---

### 类布局

``` kotlin
package app

...

class Demo constructor(str: String) {
    // 属性声明与初始化
    val ...
    var ...
    
    init {
        
    }
    
    // 次构造函数
    constructor(...) {...}
    
    // 方法声明
    fun ... {...}
    
    // 伴生对象
   companion object {}
}
```



类成员：

* 构造函数与初始化块
* 函数
* 属性
* 嵌套类与内部类
* 对象声明



### 继承

超类 `Any`：`equals()`, `hashCode()`, `toString()`. 



资料：

[N久之前，我在直播时承诺要讲的那个Kotlin括号的问题](<https://mp.weixin.qq.com/s/ZqGJ0ZoIpGcdcFEMyAPBIg>)

