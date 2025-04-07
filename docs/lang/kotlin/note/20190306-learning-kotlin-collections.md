# Learning Kotlin: 集合

与数组不同的是可变集合的大小可以动态改变。


`List`:是一个 `有序列表`， 可通过索引（下标）访问元素。元素可以在 list 中出现多次、`元素可重复`。

`Set` 是 `元素唯一的集合`。一般来说 set 中元素的顺序并不重要、无序集合、

`Map` `(字典)是一组键值对`。`键` 是唯一的，每个键都刚好映射到一个值，`值可以重复`。



| 集合创建方式                                                    | 示例                                                                                       | 说明                             | 是否可变 |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------ | ---- |
| `arrayListOf<T>()`<br>`mutableLIstOf<T>()` <br>相同元素类型的列表  | `val list= arrayListOf<Int>()`<br>`val list= mutableLIstOf<String>()`                    | - 必须指定元素类型                     | 可变   |
| `listOf<T>()`<br>相同元素类型的列表                                | `val list= listOf<Int>(1,2,3)`                                                           | - 必须指定元素类型<br />- 必须指定初始化数据元素  | 不可变  |
| `arrayMapOf<K,V>()`<br>`mutableMapOf<K,V>()`<br>相同元素类型的字典 | `val map= arrayMapOf(Pair("key", "value"))`<br>`val map= mutableMapOf<String, String>()` | - 初始元素使用 Pair 包装               | 可变   |
| `mapOf<T>()`<br>相同元素类型的字典                                 | `val map= mapOf(Pair("key", "value"))`                                                   | - 元素使用 Pair 包装<br />- 必须指定初始元素 | 不可变  |
| `arraySetOf<T>()`<br>`mutableSetOf<T>()`<br>相同元素类型的集合     | `val set = arraySetOf<Int>(1,2,3)`<br>`val set = mutableSetOf<Int>()`                    | - 会对元素自动去重                     | 可变   |
| `setOf<T>()`<br>相同元素类型的集合                                 | `val set = setOf<Int>(1,2,3)`                                                            | - 对元素自动去重<br />- 必须指定元素类型      | 不可变  |
