# Learning Kotlin: 控制流 - when


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

