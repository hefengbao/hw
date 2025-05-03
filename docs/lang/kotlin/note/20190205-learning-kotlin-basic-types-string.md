# 基本类型 - 字符串


`String`

字符串是不可变的。 

字符串的元素--字符可以使用索引运算符访问。 

```kotlin
val str: String = "qwerty"

val str2 = str[0] //q
```



字符串模板

```kotlin
val data = "Hello"
println("$data World!")
```

```kotlin
val a = 1
val b = 2

println("a + b = $( a + b)")
```



分解符

```kotlin
val str = """
	{"key":"value"}
"""
```

