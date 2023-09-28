---
title: 'Learning Kotlin: 属性与字段'
date: 2019-03-02 15:41:36
tags: kotlin
categories: Kotlin
permalink: learning-kotlin-peoperties.html
---



`var`

`val`



```
var <propertyName>[: <PeopertyType>] [= <property_initializer>]
	[<getter>]
	[<setter>]
```



```kotlin
var example: String 
	get() ...
	set(value) {...}
```



`幕后字段`：（还有幕后属性，起了个临时变量的作用吧？）

```kotlin
package app.classes

class BackingFields {
    var counter = 0
        set(value) {
            if (value >= 0) field = value
        }
}

fun main() {
    var backingFields = BackingFields()
    println("backingFields.counter = ${backingFields.counter}")
    backingFields.counter = 1
    println("backingFields.counter = ${backingFields.counter}")
    var backingFields2 = BackingFields()
    backingFields2.counter = -1
    println("backingFields.counter = ${backingFields2.counter}")
}
```

```bash
backingFields.counter = 0
backingFields.counter = 1
backingFields.counter = 0
```



