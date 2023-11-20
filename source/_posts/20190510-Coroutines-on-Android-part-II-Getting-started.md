---
title: 'Coroutines on Android (part II): Getting started'
date: 2019-05-10 09:48:53
updated: 2019-05-10 09:48:53
tags: kotlin
categories: Kotlin
permalink: coroutines-on-android-part2-getting-startted.html
---

来源：

<https://medium.com/androiddevelopers/coroutines-on-android-part-ii-getting-started-3bff117176dd>



### Keeping track of coroutines

In part one, we explored the problems that coroutines are great at solving. As a recap, coroutines are a great solution to two common programming problems:

1. **Long running tasks** are tasks that take too long to block the main thread.
2. **Main-safety** allows you to ensure that any suspend function can be called from the main thread.

To solve these problems, coroutines build upon regular functions by adding **suspend** and **resume**. When all coroutines on a particular thread are suspended, the thread is free to do other work.

However, coroutines by themselves don’t help you keep track of the work that’s being done. It’s perfectly fine to have a large number of coroutines — hundreds or even thousands — and have all of them suspended at the same time. And, while coroutines are cheap, the work they perform is often expensive, like reading files or making network requests.

It’s quite difficult to keep track of one thousand coroutines manually using code. You *could* try to track all of them and manually ensure they complete or cancel, but code like this is tedious and error prone. If the code is not perfect, it will lose track of a coroutine, which is what I call a *work leak*.

A *work leak* is like a memory leak, but worse. It’s a coroutine that’s been lost. In addition to using memory, a work leak can resume itself to use CPU, disk, or even launch a network request.

> A leaked coroutine can waste memory, CPU, disk, or even launch a network request that’s not needed.

To help avoid leaking coroutines, Kotlin introduced [**structured concurrency**](https://kotlinlang.org/docs/reference/coroutines/basics.html#structured-concurrency). Structured concurrency is a combination of language features and best practices that, when followed, help you keep track of all work running in coroutines.

On Android, we can use structured concurrency to do three things:

1. **Cancel work** when it is no longer needed.
2. **Keep track** of work while it’s running.
3. **Signal errors** when a coroutine fails.

Lets dive into each of these and see how structured concurrency helps us make sure we never lose track of a coroutine and leak work.

### Cancel work with scopes

In Kotlin, coroutines must run in something called a `CoroutineScope`. A `CoroutineScope` keeps track of your coroutines, even coroutines that are suspended. Unlike the `Dispatchers` we talked about in part one, it doesn’t actually execute your coroutines — it just makes sure you don’t lose track of them.

To ensure that all coroutines are tracked, Kotlin does not allow you to start a new coroutine without a `CoroutineScope`. You can think of a `CoroutineScope`as sort of like lightweight version of an `ExecutorService` with superpowers. It grants you the ability to start new coroutines which come with all that suspend and resume goodness we explored in part one.

A `CoroutineScope` keeps track of all your coroutines, and it can cancel all of the coroutines started in it. This fits well with Android development where you want to ensure that you clean up everything that was started by a screen when the user leaves.

> A CoroutineScope keeps track of all your coroutines, and it can cancel all of the coroutines started in it.

#### Starting new coroutines

It’s important to note that you can’t just call a `suspend` function from anywhere. The suspend and resume mechanism requires that you switch from normal functions to a coroutine.

There are two ways to start coroutines, and they have different uses:

1. [**launch**](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/launch.html) builder will start a new coroutine that is “fire and forget” — that means it won’t return the result to the caller.
2. [**async**](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/async.html) builder will start a new coroutine, and it allows you to return a result with a suspend function called `await`.

In almost all cases, the right answer for how to start a coroutine from a regular function is to use `launch`. Since the regular function has no way to call `await` (remember, it can’t call suspend functions directly) it doesn’t make much sense to use `async` as your main entry to coroutines. We’ll talk later about when it makes sense to use `async`.

You should instead use a coroutine scope to start a coroutine by calling `launch`.

```
scope.launch {
    // This block starts a new coroutine 
    // "in" the scope.
    // 
    // It can call suspend functions
   fetchDocs()
}
```

You can think of `launch` as a bridge that takes your code from regular functions into a coroutines world. Inside of the `launch` body, you can call suspend functions and create main safety like we covered in the last post.

> Launch is a bridge from regular functions into coroutines.

*Warning:* A big difference between `launch` and `async` is how they handle exceptions. `async` expects that you will eventually call `await` to get a result (or exception) so it won’t throw exceptions by default. That means if you use`async` to start a new coroutine it will silently drop exceptions.

Since `launch` and `async` are only available on a `CoroutineScope`, you know that any coroutine you create will always be tracked by a scope. Kotlin just doesn’t let you create an untracked coroutine, which goes a long way to avoid work leaks.

#### Start in the ViewModel

So if a `CoroutineScope` keeps track of all coroutines that are launched in it, and `launch` creates a new coroutine, where exactly should you call `launch`and put your scopes? And, when does it make sense to cancel all the coroutines started in a scope?

On Android, it often makes sense to associate a `CoroutineScope` with a user screen. This lets you avoid leaking coroutines or doing extra work for `Activities` or `Fragments` that are no longer relevant to the user. When the user navigates away from the screen, the `CoroutineScope` associated with the screen can `cancel` all work.

> Structured concurrency guarantees when a **scope** **cancels**, all of its **coroutines** **cancel**.

When integrating coroutines with Android Architecture Components, you typically want to `launch` coroutines in the `ViewModel`. This is a natural place since that’s where most serious work starts — and you won’t have to worry about rotation killing all your coroutines.

To use coroutines in a `ViewModel`, you can use the `viewModelScope` [extension property](https://kotlinlang.org/docs/tutorials/kotlin-for-py/extension-functionsproperties.html) from `lifecycle-viewmodel-ktx:2.1.0-alpha04`.`viewModelScope` is on-track to be released in [AndroidX Lifecycle (v2.1.0)](https://developer.android.com/jetpack/androidx/releases/lifecycle) and is currently in alpha. You can read more about how it works in [@manuelvicnt](http://manuelvicnt/)’s [blog post](https://medium.com/androiddevelopers/easy-coroutines-in-android-viewmodelscope-25bffb605471). As the library is currently in alpha, there may be bugs, and the APIs could change before the final release. If find any bugs, you can file them [here](https://issuetracker.google.com/issues?q=componentid:413132).

Take a look at this example:

```
class MyViewModel(): ViewModel() {
    fun userNeedsDocs() {
        // Start a new coroutine in a ViewModel
        viewModelScope.launch {
            fetchDocs()
        }
    }
}
```

`viewModelScope` will automatically cancel any coroutine that is started by this `ViewModel` when it is cleared (when the `onCleared()` callback is called). This is typically the right behavior — if we haven’t fetched the docs, and the user has closed the app, we’re probably just wasting their battery completing the request.

And for more safety, a `CoroutineScope` will propagate itself. So, if a coroutine you start goes on to start another coroutine, they’ll both end up in the same scope. That means even when libraries that you depend on start a coroutine from your `viewModelScope`, you’ll have a way to cancel them!

*Warning:* Coroutines are [cancelled cooperatively](https://kotlinlang.org/docs/reference/coroutines/cancellation-and-timeouts.html#cancellation-and-timeouts) by throwing a `CancellationException` when the coroutine is suspended. Exception handlers that catch a top-level exception like `Throwable` will catch this exception. If you consume the exception in an exception handler, or never suspend, the coroutine will linger in a semi-canceled state.

So, when you need a coroutine to run as long as a `ViewModel`, use `viewModelScope` to switch from regular functions to coroutines. Then, since `viewModelScope` will automatically `cancel` coroutines for you, it’s totally fine to write an infinite loop here without creating leaks.

```
fun runForever() {
    // start a new coroutine in the ViewModel
    viewModelScope.launch {
        // cancelled when the ViewModel is cleared
        while(true) {
            delay(1_000)
            // do something every second
        }
    }
}
```

By using `viewModelScope` you’re able to ensure that all work, even this infinite loop, is cancelled when it is no longer needed.

### Keep track of work

Launching one coroutine is good — and for a lot of code that’s really all you’ll ever need to do. Launch a coroutine, make a network request, and write the result to the database.

Sometimes, though, you need a bit more complexity. Say you wanted to do two network requests simultaneously (or at the same time) in a coroutine — to do that you’ll need to start more coroutines!

To make more coroutines, any suspend functions can start more coroutines by using another builder called [coroutineScope](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/coroutine-scope.html) or its cousin [supervisorScope](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/supervisor-scope.html). This API is, honestly, a bit confusing. The `coroutineScope` builder and a `CoroutineScope` are different things despite only having one character difference in their name.

Launching new coroutines everywhere is one way to create potential work leaks. The caller may not know about the new coroutines, and if it doesn’t how could it keep track of the work?

To fix this, structured concurrency helps us out. Namely, it provides a guarantee that when a `suspend` function returns, all of its work is done.

> Structured concurrency guarantees that when a suspend function returns, all of its work is done.

Here’s an example of using `coroutineScope` to fetch two documents:

```
suspend fun fetchTwoDocs() {
    coroutineScope {
        launch { fetchDoc(1) }
        async { fetchDoc(2) }
    }
}
```

In this example, two documents are fetched from the network simultaneously. The first one is fetched in a coroutine started with `launch` which is “fire and forget” — that means it won’t return the result to the caller.

The second document is fetched with `async`, so the document can be returned to the caller. This example is a little weird, since typically you would use `async` for both documents — but I wanted to show that you can mix and match `launch` and `async` depending on what you need.

> coroutineScope and supervisorScope let you safely launch coroutines from suspend functions.

Note, though, that this code never explicitly waits for either of the new coroutines! It seems like `fetchTwoDocs` will return while the coroutines are running!

To make structured concurrency and avoid work leaks, we want to ensure that when a suspend function like `fetchTwoDocs` returns, all of its work is done. That means both of the coroutines it launches must complete before `fetchTwoDocs` returns.

Kotlin ensures that the work does not leak from `fetchTwoDocs` with the `coroutineScope` builder. The `coroutineScope` builder will suspend itself until all coroutines started inside of it are complete. Because of this, there’s no way to return from `fetchTwoDocs` until all coroutines started in the `coroutineScope` builder are complete.

#### Lots and lots of work

Now that we’ve explored keeping track of one and two coroutines, it’s time to go all-in and try to keep track of one thousand coroutines!

Take a look at the following animation:

{% img /images/2019051001.gif %}

Animation showing how a coroutineScope can keep track of one thousand coroutines.

*This example shows making one thousand network request simultaneously. This is not recommend in real Android code — your app will use lots of resources.*

In this code, we launch one thousand coroutines with `launch` inside a `coroutineScope` builder. You can see how things get wired up. Since we’re in a `suspend` function, some code somewhere must have used a `CoroutineScope`to create a coroutine. We don’t know anything about that `CoroutineScope`, it could be a `viewModelScope` or some other `CoroutineScope` defined somewhere else. No matter what calling scope it is, the `coroutineScope`builder will use it as the parent to the new scope it creates.

Then, inside the `coroutineScope` block, `launch` will start coroutines “in” the new scope. As the coroutines started by launch complete, the new scope will keep track of them. Finally, once all of the coroutines started inside the `coroutineScope` are complete, `loadLots` is free to return.

*Note:* the parent-child relationship between scopes and coroutines is created using `Job` objects. But you can often think of the relationship between coroutines and scopes without diving into that level.

> coroutineScope and supervisorScope will wait for child coroutines to complete.

There’s a lot going on here under the hood — but what’s important is that using `coroutineScope` or `supervisorScope` you can `launch` a coroutine safely from any suspend function. Even though it will start a new coroutine, you won’t accidentally leak work because you’ll always suspend the caller until the new coroutine completes.

What’s really cool is `coroutineScope` will create a child scope. So if the parent scope gets cancelled, it will pass the cancellation down to all the new coroutines. If the caller was the `viewModelScope`, all one thousand coroutines would be automatically cancelled when the user navigated away from the screen. Pretty neat!

Before we move on to errors, it’s worth taking a moment to talk about `supervisorScope` vs. `coroutineScope`. The main difference is that a `coroutineScope` will `cancel` whenever any of its children fail. So, if one network request fails, all of the other requests are cancelled immediately. If instead you want to continue the other requests even when one fails, you can use a `supervisorScope`. A `supervisorScope` won’t cancel other children when one of them fails.

### Signal errors when a coroutine fails

In coroutines, errors are signaled by throwing exceptions, just like regular functions. Exceptions from a `suspend` function will be re-thrown to the caller by resume. Just like with regular functions, you’re not limited to try/catch to handle errors and you can build abstractions to perform error handling with other styles if you prefer.

However, there are situations where errors can get lost in coroutines.

```
val unrelatedScope = MainScope()
// example of a lost error
suspend fun lostError() {
    // async without structured concurrency
    unrelatedScope.async {
        throw InAsyncNoOneCanHearYou("except")
    }
}
```

Note this code is declaring an unrelated coroutine scope that will launch a new coroutine without structured concurrency. Remember at the beginning I said that structured concurrency is a combination of types and programming practices, and introducing unrelated coroutine scopes in suspend functions is not following the programming practices of structured concurrency.

The error is lost in this code because `async` assumes that you will eventually call `await` where it will rethrow the exception. However, if you never do call `await`, the exception will be stored forever waiting patiently waiting to be raised.

> Structured concurrency guarantees that when a coroutine errors, its caller or scope is notified.

If you do use structured concurrency for the above code, the error will correctly be thrown to the caller.

```
suspend fun foundError() {
    coroutineScope {
        async { 
            throw StructuredConcurrencyWill("throw")
        }
    }
}
```

Since the `coroutineScope` will wait for all children to complete, it can also get notified when they fail. If a coroutine started by `coroutineScope` throws an exception, `coroutineScope` can throw it to the caller. Since we’re using `coroutineScope` instead of `supervisorScope`, it would also immediately cancel all other children when the exception is thrown.

### Using structured concurrency

In this post, I introduced structured concurrency and showed how it makes our code fit well with Android `ViewModel` to avoid work leaks.

I also talked about how it makes suspend functions easier to reason about. Both by ensuring they complete work before they return, as well as ensuring they signal errors by surfacing exceptions.

If instead we used unstructured concurrency, it would be easy for coroutines to accidentally leak work that the caller didn’t know about. The work would not be cancellable, and it would not be guaranteed that exceptions would be rethrown. This would make our code more surprising, and possibly create obscure bugs.

You *can* create unstructured concurrency by introducing a new unrelated `CoroutineScope` (note the capital `C`), or by using a global scope called `GlobalScope`, but you should only consider unstructured concurrency in rare cases when you need the coroutine to live longer than the calling scope. It’s a good idea to then add structure yourself to ensure you keep track of the unstructured coroutines, handle errors, and have a good cancellation story.

Structured concurrency does take some getting used to if you have experience with unstructured concurrency. The structure and guarantees do it make it safer and easier to interact with `suspend` functions. It’s a good idea to work with structured concurrency as much as possible, because it helps make code easier to read and much less surprising.

At the start of this post I listed three things that structured concurrency solves for us

1. **Cancel work** when it is no longer needed.
2. **Keep track** of work while it’s running.
3. **Signal errors** when a coroutine fails.

To accomplish this structured concurrency gives us some guarantees about our code. Here are the guarantees of structured concurrency.

1. When a **scope** **cancels**, all of its **coroutines** **cancel**.
2. When a **suspend fun** **returns**, all of its **work is done**.
3. When a **coroutine** **errors**, its **caller or scope is notified**.

Put together, the guarantees of structured concurrency make our code safer, easier to reason about, and allow us to avoid leaking work!