---
title: 'Learning Kotlin: 包'
date: 2019-02-05 16:16:08
tags: kotlin
categories: Kotlin
permalink: learning-kotlin-packages.html
---



```kotlin
package app

import ...

class ... {...}

fun ... {...}
```



`import`:

* 导入类

* 顶层函数及属性

* 在 `对象声明` 中声明的函数和属性

* `枚举常量`

   

顶层可见性：

```kotlin
...
class private constructor(...) {...}
```

