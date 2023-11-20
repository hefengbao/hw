---
title: 'Learning Kotlin: 泛型'
date: 2019-03-02 15:42:44
tags: kotlin
categories: Kotlin
permalink: learning-kotlin-generics.html
---

### 泛型接口/类（泛型类型）

定义泛型累些那个，实在类型名之后、主构造函数之前用尖括号括起的大写西姆类型参数指定：

```kotlin
interface Drink<T> {
	fun drink(t: T)
}

class DrinkApple : Drink<String> {
    override fun drink(t: String){
        println("drink: ${t}")
    }
}
```

```kotlin
abstract class Color<T>(var t: T /*泛型字段*/){
    abstract fun printColor()
}

class Blue(){
    val color = "blue"
}

class BlueColor(t: Blue) : Color<Blue>(t){
    override fun printColor(){
        println("color:${t.color}")
    }
}
```



### 泛型字段

### 泛型方法

类型参数要放在方法名的前面：

```kotlin
fun <T> fromJson(json: String, tClass: Class<T>): T? {
	val t: T? = tClass.newInstance()
    return t
}
```



### 泛型约束

限定泛型参数的类型

```kotlin
//所传递的参数类型 T 必须满足是 User 的子类或 User 类
fun <T: User> fromJson(json: String, tClass: Class<T>): T? {
	
}
```



### 泛型中的 out 与 in



泛型

型变



## java泛型中的一些概念

- java 中的通配符类型参数： ? extends E

- 通配符<? extends E>表示包括E在内的所有子类,称为协变

- 通配符<? super E>表示包括E在内的所有父类,称为逆变

- 协变: 表示包括E在内的所有子类,泛型对象只能读取,称为生产者

- 逆变: 表示包括E在内的所有父类,泛型对象只能写入,称为消费者

  

资料：

[Kotlin 泛型中的 in 和 out](https://www.jianshu.com/p/c5ef8b30d768)   

[一文读懂 kotlin 的协变与逆变 -- 从 Java 说起](https://juejin.im/post/6882360186641350664)  

