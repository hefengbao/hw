# Learning Kotlin: 基本类型 - 字符串


`String`

字符串是不可变的。 

字符串的元素--字符可以使用索引运算符访问。 

```
val str: String = "qwerty"

val str2 = str[0] //q
```



字符串模板

```
val data = "Hello"
println("$data World!")
```

```
val a = 1
val b = 2

println("a + b = $( a + b)")
```



分解符

```
val str = """
	{"key":"value"}
"""
```

