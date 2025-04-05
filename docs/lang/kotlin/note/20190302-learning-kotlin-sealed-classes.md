# Learning Kotlin: 密封类

> Sealed classes are used for representing restricted class hierarchies, when a value can have one of the types from a limited set, but cannot have any other type. They are, in a sense, an extension of enum classes: the set of values for an enum type is also restricted, but each enum constant exists only as a single instance, whereas a subclass of a sealed class can have multiple instances which can contain state.

If you are like me, you probably did not understand that on a first read, especially without real-world code samples. 

### Sealed class rules

- Sealed classes are abstract and can have abstract members.
- Sealed classes cannot be instantiated directly.
- Sealed classes cannot have public constructors (The constructors are private by default).
- Sealed classes can have subclasses, but they must either be in the same file or nested inside of the sealed class declaration.
- Sealed classes subclass can have subclasses outside of the sealed class file.

### Declaring a sealed class

```kotlin
sealed class Fruit()
```

The important part of the code above is the `sealed` modifier. As mentioned in the sealed class rules, a sealed class can have subclasses but they must all be in the same file or nested inside of the sealed class declaration. However, subclasses of the sealed class subclasses do not have to be in the same file. 

```kotlin
// Nested
sealed class Fruit() {
    class Apple() : Fruit()
    class Orange() : Fruit()
}
sealed class Fruit
// Not nested
class Apple() : Fruit()
class Orange() : Fruit()
// Fruits.kt
sealed class Fruit() {
    class Apple() : Fruit()
    class Orange() : Fruit()
    open class UnknownFruit(): Fruit()
}
// SomeOtherFile.kt
class Grape : Fruit() // Not Acceptable
class Tomato : UnknownFruit() // Acceptable
```

*The key benefit of using sealed classes comes into play when you use them in* *a* `when` [ *expression*](https://kotlinlang.org/docs/reference/control-flow.html#when-expression)*. If it's possible to verify that the statement covers all cases, you don't need to add* *an* `*else*` *clause* *to the statement. However, this works only if you* *use* `*when*` *as* *an expression (using the result) and not as a statement.*

```kotlin
// Invalid
override fun getItemViewType(position: Int): Int {
    return when (fruits[position]) {
        is Fruit.Apple -> R.layout.item_apple
    }
}
```

The piece of code above fails because we MUST implement ALL types. The error thrown says: 

```bash
When expression must be exhaustive, add necessary 'is Orange' branch or else branch instead
```

This just means that we must include all types of Fruit in the when expression. Or use a catch-all else block. 

```kotlin
override fun getItemViewType(position: Int): Int {
    return when (fruits[position]) {
        is Fruit.Apple -> R.layout.item_apple
        is Fruit.Orange -> R.layout.item_orange
    }
}
```

### Bonus: how can we apply sealed classes in a real-world scenario in Android? 

There are many ways that sealed classes can be used, but one of my favorites is in a RecyclerView adapter. 

Let’s say we want to display a list of fruits in a RecyclerView, where each fruit has its own **ViewHolder**. 

Apple has an`AppleViewHolder` and Orange has an `OrangeViewHolder`. but we also want to make sure that every new Fruit added has its own ViewHolder explicitly specified, or we throw an exception. We can easily do this with sealed classes. 

Show me the code: 

```kotlin
sealed class Fruit {
    class Apple : Fruit()
    class Orange : Fruit()
}
class FruitAdapter : RecyclerView.Adapter<RecyclerView.ViewHolder>() {
private val fruits = arrayListOf<Fruit>()
override fun getItemCount() = fruits.size
    
    override fun getItemViewType(position: Int): Int {
        return when (fruits[position]) {
            is Fruit.Apple -> R.layout.item_apple
            is Fruit.Orange -> R.layout.item_orange
        }
    }
override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): RecyclerView.ViewHolder {
        val layoutInflater = LayoutInflater.from(parent.context)
return when (viewType) {
            R.layout.item_apple -> {
                val itemView = layoutInflater.inflate(R.layout.item_apple, parent, false)
                AppleViewHolder(itemView)
            }
            R.layout.item_orange -> {
                val itemView = layoutInflater.inflate(R.layout.item_orange, parent, false)
                OrangeViewHolder(itemView)
            }
            else -> throw UnknownViewTypeException("Unknown view type $viewType")
        }
    }
override fun onBindViewHolder(holder: RecyclerView.ViewHolder, position: Int) {
        val fruit = fruits[position]
when (fruit) {
            is Fruit.Apple -> (holder as AppleViewHolder).bind(fruit)
            is Fruit.Orange -> (holder as OrangeViewHolder).bind(fruit)
        }
    }
// ... other methods
}
```

参考：

https://proandroiddev.com/understanding-kotlin-sealed-classes-65c0adad7015