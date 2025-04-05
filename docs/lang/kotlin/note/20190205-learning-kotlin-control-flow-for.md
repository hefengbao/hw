# Learning Kotlin: 控制流 - for


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