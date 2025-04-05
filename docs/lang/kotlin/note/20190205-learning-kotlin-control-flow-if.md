# Learning Kotlin: 控制流 - if

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

