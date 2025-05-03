# 控制与循环

## if

条件控制 if-else \ when

```kotlin
package app

fun main() {
    val a = 2
    var b = 1
    var max = a
    if (a < b) max = b

    if (a > b) {
        max = a
    } else {
        max = b
    }

    //作为表达式
    max = if (a > b) a else b

    // if 的分支可以是代码块，最后的表达式作为该快的值

    max = if (a > b) {
        println("Choose a")
        a
    } else {
        println("Choose b")
        b
    }
}
```

## when

```kotlin
package app

fun main() {
    val a = 2 

    //when
    when (a) {
        1 -> println("x == 1")
        2 -> println("x == 2")
        else -> {
            println("x is neither 1 nor 2")
        }
    }

    // when 既可以被当做表达式使用也可以被当做语句使用。

    fun hasPrefix(x: Any) = when (x) {
        is String -> x.startsWith("prefix")
        else -> false
    }

    val prefixString = "prefixString"
    println("$prefixString is start with 'prefix' = ${hasPrefix(prefixString)}")
}
```

## for


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


## while

```kotlin
package app

fun main() {
	while () {}
    
    do {} while ()
}
```