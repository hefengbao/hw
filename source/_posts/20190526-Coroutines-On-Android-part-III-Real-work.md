---
title: 'Coroutines On Android (part III): Real work'
date: 2019-05-26 09:41:46
updated: 2019-05-26 09:41:46
tags: 
- kotlin
- android
categories: Android
permalink: coroutines-on-android-part3-real-work.html
---

### Solving real-world problems with coroutines

Part one and two of this series focused on how coroutines can be used to simplify code, provide main-safety on Android, and avoid leaking work. With that background, they look like a great solution to both background processing and a way to simplify callback based code on Android.

So far, we’ve focused on what coroutines are and how to manage them. In this post we’ll look at how to use them to accomplish some real tasks. Coroutines are a general purpose programming language feature at the same level as functions — so you can use them to implement anything that you could with functions and objects. However, there’s a two types of tasks that come up all the time in real code that coroutines are a great solution for:

1. **One shot** **requests** are requests that are run each time they are called — they always complete after the result is ready.
2. **Streaming** **requests** are requests that continue to observe changes and report them to caller — they don’t complete when the first result is ready.

Coroutines are a great solution to both of these tasks. In this post, we’ll look deeply into one shot requests and explore how to implement them using coroutines on Android.

### One shot requests

A one shot request is performed once each time it’s called and completes as soon as a result is ready. This pattern is the same as a regular function call — it gets called, does some work, then returns. Due to the similarity to function calls they tend to be easier to understand than streaming requests.

> A one shot request is performed each time it’s called. It stops executing as soon as a result is ready.

For an example of a one shot request, consider how your browser loaded this page. When you clicked the link to this post your browser sent a network request to the server to load the page. Once the page was transferred to your browser it stopped talking to the backend — it had all the data it needed. If the server modified the post, the new changes would not be shown in your browser — you would have to refresh the page.

So, while they lack the live-push of streaming requests, one shot requests are pretty powerful. There’s a whole lot of things you can do in an Android app that can be solved by one shot requests like fetching, storing, or updating data. It’s also a good pattern for things like sorting a list.

### Problem: Displaying a sorted a list

Let’s explore one-shot requests by looking at how you might display a sorted list. To make the example concrete, let’s build an inventory app for use by an employee at a store. It will be used to lookup products based on when they were last stocked — they’ll want to be able to sort the list both ascending and descending. It has so many products that sorting it may take almost a second — so we’ll use coroutines to avoid blocking the main thread!

In this app all of the products are stored in a Room database. This is a good use case to explore since it doesn’t need to involve a network request so we can focus on the pattern. Even though the example is simpler because it doesn’t use the network, it exposes the patterns needed to implement one shot requests.

To implement this request using coroutines, you will introduce coroutines to the `ViewModel`, `Repository`, and `Dao`. Lets walk through each one at a time and see how to integrate them with coroutines.

```kotlin
class ProductsViewModel(val productsRepository: ProductsRepository): ViewModel() {
   private val _sortedProducts = MutableLiveData<List<ProductListing>>()
   val sortedProducts: LiveData<List<ProductListing>> = _sortedProducts

   /**
    * Called by the UI when the user clicks the appropriate sort button
    */
   fun onSortAscending() = sortPricesBy(ascending = true)
   fun onSortDescending() = sortPricesBy(ascending = false)

   private fun sortPricesBy(ascending: Boolean) {
       viewModelScope.launch {
           // suspend and resume make this database request main-safe
           // so our ViewModel doesn't need to worry about threading
           _sortedProducts.value =
                   productsRepository.loadSortedProducts(ascending)
       }
   }
}
```



`ProductsViewModel` is responsible for receiving events from the UI layer, then asking the repository for the updated data. It uses `LiveData` to hold the currently sorted list to for display by the UI. When a new event comes in `sortProductsBy` starts a new coroutine to sort the list and updates the `LiveData` when the result is ready. The `ViewModel` is typically the right place to start most coroutines in this architecture, since it can cancel the coroutine in `onCleared`. If the user leaves the screen they usually have no use for outstanding work.

*If you haven’t used LiveData much, check out this great post by* [*@CeruleanOtter*](https://twitter.com/CeruleanOtter)*introducing how they work to store data for UIs.*

[**ViewModels : A Simple Example**
*Introduction*medium.com](https://medium.com/androiddevelopers/viewmodels-a-simple-example-ed5ac416317e)

This is a general pattern for coroutines on Android. Since the Android framework doesn’t call suspend functions, you’ll need to coordinate with a coroutine in response to a UI event. The easiest way to do that is to just start a new coroutine when the event comes in — and the natural place to do that is in the `ViewModel`.

> As a general pattern, start coroutines in the ViewModel.

The `ViewModel` uses a `ProductsRepository` to actually fetch the data. Here’s what that looks like:

```kotlin
class ProductsRepository(val productsDao: ProductsDao) {

  /**
    * This is a "regular" suspending function, which means the caller must
    * be in a coroutine. The repository is not responsible for starting or 
    * stopping coroutines since it doesn't have a natural lifecycle to cancel
    * unnecessary work.
    *
    * This *may* be called from Dispatchers.Main and is main-safe because
    * Room will take care of main-safety for us.
    */
   suspend fun loadSortedProducts(ascending: Boolean): List<ProductListing> {
       return if (ascending) {
           productsDao.loadProductsByDateStockedAscending()
       } else {
           productsDao.loadProductsByDateStockedDescending()
       }
   }
}
```



`ProductsRepository` provides a reasonable interface for interacting with products. In this app, since everything is in the local Room database, it just provides a nice interface for the `@Dao` that has two different functions for the different sort orders.

The repository is an optional part of the Android Architecture Components architecture — but if you do have it or a similar layer in your app, it should prefer to expose regular suspend functions. Since a repository doesn’t have a natural lifecycle — it’s just an object — it would have no way to cleanup work. As a result, any coroutines started in the repository will leak by default.

In addition to avoiding leaks, by exposing regular suspend functions, it’s easy to re-use the repository in different contexts. Anything that knows how to make a coroutine can call `loadSortedProducts`. For example, a background job scheduled by the WorkManager library could call this directly.

> A repository should prefer to expose regular suspend functions that are main-safe.

> Note: *Some background save operations may want to continue after user leaves a screen — and it makes sense to have those saves run without a lifecycle. In most other cases the* `*viewModelScope*` *is a reasonable choice.*

Moving on to `ProductsDao`, it looks like this:

```kotlin
@Dao
interface ProductsDao {
   // Because this is marked suspend, Room will use it's own dispatcher
   //  to run this query in a main-safe way.
   @Query("select * from ProductListing ORDER BY dateStocked ASC")
   suspend fun loadProductsByDateStockedAscending(): List<ProductListing>

   // Because this is marked suspend, Room will use it's own dispatcher
   //  to run this query in a main-safe way.
   @Query("select * from ProductListing ORDER BY dateStocked DESC")
   suspend fun loadProductsByDateStockedDescending(): List<ProductListing>
}        
```



`ProductsDao` is a Room `@Dao` that exposes two suspend functions. Because the functions are marked suspend, Room ensures they are main-safe. That means you can call them directly from `Dispatchers.Main`.

*If you haven’t seen coroutines in Room yet, check out this great post by* [*@*FMuntenescu](https://twitter.com/FMuntenescu)

[**Room 🔗 Coroutines**
*Add some suspense to your database*medium.com](https://medium.com/androiddevelopers/room-coroutines-422b786dc4c5)

A bit of warning though, the coroutine that calls this will be on the main thread. So if you did something expensive with the results — like transforming them to a new list — you should make sure you’re not blocking the main thread.

> *Note:* *Room uses its own dispatcher to run queries on a background thread. Your code* should not *use* `*withContext(Dispatchers.IO)*` *to call suspending room queries. It will complicate the code and make your queries run slower.*

> Suspend functions in Room are main-safe and run on a custom dispatcher.

### The one shot request pattern

That’s the complete pattern for making a one shot request using coroutines in Android Architecture Components. We added coroutines to the `ViewModel`, `Repository`, and `Room` and each layer has a different responsibility.

1. ViewModel launches a coroutine on the main thread — it completes when it has a result.
2. Repository exposes regular suspend functions and ensures they are main-safe.
3. The database and network expose regular suspend functions and ensures they are main-safe.

**The** `**ViewModel**` is responsible for starting coroutines and ensuring that they get cancelled if the user leaves the screen. It doesn’t do expensive things— instead relying on other layers to do the heavy work. Once it has the result it sends it to the UI using `LiveData`.

Since the `ViewModel` doesn’t do heavy work it starts the coroutine on on the main thread. By starting on main it can respond to user events faster if the result is available immediately (e.g. from an in-memory cache).

**The** `**Repository**` exposes regular suspend functions to access data. It typically doesn’t start it’s own long lived coroutines since it doesn’t have any way to cancel them. Whenever the `Repository` has to do expensive things like transform a list it should use `withContext` to expose a main-safe interface.

**The data layer** (network or database) always exposes regular suspend functions. It is important that these suspend functions are main-safe when using Kotlin coroutines, and both Room and Retrofit follow this pattern.

In a one shot request, the data layer *only* exposes suspend functions. A caller has to call them again if they want a new value. This is just like the refresh button on your web browser.

It’s worth taking a moment to make sure you understand these patterns for one shot requests. It’s the normal pattern for coroutines on Android, and you’ll use it all of the time.

### Our first bug report!

After testing that solution, you launch it to production and everything is going well for weeks until you get a really strange bug report:

> **Subject:** 🐞 — wrong sort order!

> **Report:** When I click the sort order buttons really really really really quickly, sometimes the sort is wrong. This doesn’t happen all the time 🙃.

You take a look and scratch your head. What could possibly go wrong? The algorithm seems fairly simple:

1. Start the sort the user requested.
2. Run the sort in the Room dispatcher.
3. Show the result of the sort.

You’re tempted to close the bug **“wontfix — don’t press the buttons so fast”**but you’re worried something may be broken. After adding logging statements and writing a test to call lots of sorts at once— you finally figure it out!

It turns out the result shown isn’t actually the “result of *the* sort,” it’s actually the result of the “*last sort* to complete.” When the user spams the button — they start multiple sorts at the same time and they can finish in any order!

> When starting a new coroutine in response to a UI event, consider what happens if the user starts another before this one completes.

This is a *concurrency bug* and it doesn’t really have anything to do with coroutines. We’d have the same bug if we used callbacks, Rx, or even an `ExecutorService` the same way.

There are many many ways to fix this in both the `ViewModel` and the `Repository`. Let’s explore some patterns for ensuring that one shot requests complete in the order the user expects.

### The best solution: Disable the button

The fundamental problem is that we’re doing two sorts. We can fix that by making it only do one sort! The easiest way to do that is to disable the sort buttons to stop the new events.

This may seem like a simple solution, but it’s a really good idea. The code to implement this is simple, easy to test, and as long as it makes sense in the UI it’ll completely fix the problem!

To disable the buttons, tell the UI that a sort request is happening inside of `sortPricesBy` like this:

```kotlin
// Solution 0: Disable the sort buttons when any sort is running

class ProductsViewModel(val productsRepository: ProductsRepository): ViewModel() {
   private val _sortedProducts = MutableLiveData<List<ProductListing>>()
   val sortedProducts: LiveData<List<ProductListing>> = _sortedProducts
  
   private val _sortButtonsEnabled = MutableLiveData<Boolean>()
   val sortButtonsEnabled: LiveData<Boolean> = _sortButtonsEnabled
  
   init {
       _sortButtonsEnabled.value = true
   }

   /**
    * Called by the UI when the user clicks the appropriate sort button
    */
   fun onSortAscending() = sortPricesBy(ascending = true)
   fun onSortDescending() = sortPricesBy(ascending = false)

   private fun sortPricesBy(ascending: Boolean) {
       viewModelScope.launch {
           // disable the sort buttons whenever a sort is running
           _sortButtonsEnabled.value = false
           try {
               _sortedProducts.value =
                       productsRepository.loadSortedProducts(ascending)
           } finally {
               // re-enable the sort buttons after the sort is complete
               _sortButtonsEnabled.value = true
           }
       }
   }
}
```



Disabling the buttons while a sort runs using _sortButtonsEnabled in sortPricesBy.

Ok that one was not too bad. Just disable the buttons inside of `sortPricesBy`around the call to the repository.

And in most cases it’s the right way to fix this problem. But what if we wanted to leave the buttons enabled and fix the bug? That’s a bit harder, and we’ll spend the rest of this post exploring a few different options.

> Important: *This code shows a major advantage of starting on main — the buttons disable instantly in response to a click. If you switched dispatchers, a fast-fingered user on a slow phone could send more than one click!*

### Concurrency patterns

The next few sections explore advanced topics — and if you’re just starting with coroutines you don’t need to understand them right away. Simply disabling the button is the best solution to most problems you’ll run across.

For the rest of this post, we’ll explore ways to use coroutines to leave the button enabled but ensure that one shot requests are executed in an order that doesn’t surprise the user. We can do that by avoiding accidental concurrency by controlling when the coroutines run (or don’t run).

There are three basic patterns that you can use for a one shot request to ensure that exactly one request runs at a time.

1. **Cancel previous work** before starting more.
2. **Queue the next work** and wait for the previous requests to complete before starting another one.
3. **Join previous work** if there’s already a request running just return that one instead of starting another request.

As you look through these solutions you’ll notice that they have some complexity to their implementations. To focus in on how to use these patterns instead of implementation details I’ve [created a gist with implementations of all three patterns](https://gist.github.com/objcode/7ab4e7b1df8acd88696cb0ccecad16f7#file-concurrencyhelpers-kt-L19) as reusable abstractions.

#### Solution #1: Cancel the previous work

In the case of sorting, getting a new event from the user often means you can cancel the last sort. After all, what’s the point of continuing if the user has already told you they don’t want the result?

To cancel the previous request, we’ll need to keep track of it somehow. The function `cancelPreviousThenRun` [in the gist](https://gist.github.com/objcode/7ab4e7b1df8acd88696cb0ccecad16f7#file-concurrencyhelpers-kt-L91) does exactly that.

Lets take a look at how it can be used to fix the bug:

```kotlin
// Solution #1: Cancel previous work

// This is a great solution for tasks like sorting and filtering that
// can be cancelled if a new request comes in.

class ProductsRepository(val productsDao: ProductsDao, val productsApi: ProductsService) {
   var controlledRunner = ControlledRunner<List<ProductListing>>()

   suspend fun loadSortedProducts(ascending: Boolean): List<ProductListing> {
       // cancel the previous sorts before starting a new one
       return controlledRunner.cancelPreviousThenRun {
           if (ascending) {
               productsDao.loadProductsByDateStockedAscending()
           } else {
               productsDao.loadProductsByDateStockedDescending()
           }
       }
   }
}
```



Using cancelPreviousThenRun to ensure that only one sort runs at a time.

Looking at the [example implementation](https://gist.github.com/objcode/7ab4e7b1df8acd88696cb0ccecad16f7#file-concurrencyhelpers-kt-L91) for `cancelPreviousThenRun` in the gist is a good way to see how to keep track of in-progress work.

```kotlin
// see the complete implementation at
// https://gist.github.com/objcode/7ab4e7b1df8acd88696cb0ccecad16f7
suspend fun cancelPreviousThenRun(block: suspend () -> T): T {
   // If there is an activeTask, cancel it because it's result is no longer needed
   activeTask?.cancelAndJoin()
   
   // ...
```

In a nutshell it always keeps track of the currently active sort in the member variable `activeTask`. Whenever a sort starts, it will immediately `cancelAndJoin` on whatever is currently in `activeTask`. This has the effect of cancelling any in progress sorts before starting a new one.

It’s a good idea to use abstractions similar to `ControlledRunner<T>` to encapsulate logic like this it instead of mixing ad-hoc concurrency with application logic.

> Consider building abstractions to avoid mixing ad-hoc concurrency patterns with application code.

> Important: *This pattern is not well suited for use in global singletons, since unrelated callers shouldn’t cancel each other.*

#### Solution #2: Queue the next work

There’s one solution to concurrency bugs that *always works.*

Just queue up requests so only one thing can happen at a time! Just like a queue or a line at a store, requests will execute one at a time in the order they started.

For this particular problem of sorting, cancelling is probably better than queuing, but it’s worth talking about because it *always works*.

```kotlin
// Solution #2: Add a Mutex

// Note: This is not optimal for the specific use case of sorting
// or filtering but is a good pattern for network saves.

class ProductsRepository(val productsDao: ProductsDao, val productsApi: ProductsService) {
   val singleRunner = SingleRunner()

   suspend fun loadSortedProducts(ascending: Boolean): List<ProductListing> {
       // wait for the previous sort to complete before starting a new one
       return singleRunner.afterPrevious {
           if (ascending) {
               productsDao.loadProductsByDateStockedAscending()
           } else {
               productsDao.loadProductsByDateStockedDescending()
           }
       }
   }
}
```



Whenever a new sort comes in, it uses a instance of `SingleRunner` to ensure that only one sort is running at a time.

It [uses a ](https://gist.github.com/objcode/7ab4e7b1df8acd88696cb0ccecad16f7#file-concurrencyhelpers-kt-L49)`Mutex`, which is a single ticket (or lock), that a coroutine must get in order to enter the block. If another coroutine tried while one was running, it would suspend itself until all pending coroutines were done with the `Mutex`.

> A Mutex lets you ensure only one coroutine runs at a time — and they will finish in the order they started.

#### Solution 3: Join previous work

The third solution to consider is joining the previous work. It’s a good idea if the new request would re-start the exact same work that has already been half completed.

This pattern doesn’t make very much sense with the sort function, but it’s a natural fit for a network fetch that loads data.

For our product inventory app, the user will need a way to fetch a new product inventory from the server. As a simple UI, we’ll provide them with a refresh button that they can press to start a new network request.

Just like the sort buttons, simply disabling the button while the request is running is a complete solution to the problem. But if we didn’t — or couldn’t — do that, we could instead join the existing request.

Lets look at some code using [joinPreviousOrRun](https://gist.github.com/objcode/7ab4e7b1df8acd88696cb0ccecad16f7#file-concurrencyhelpers-kt-L124) from the gist for an example of how this might work:

```kotlin
class ProductsRepository(val productsDao: ProductsDao, val productsApi: ProductsService) {
   var controlledRunner = ControlledRunner<List<ProductListing>>()

   suspend fun fetchProductsFromBackend(): List<ProductListing> {
       // if there's already a request running, return the result from the 
       // existing request. If not, start a new request by running the block.
       return controlledRunner.joinPreviousOrRun {
           val result = productsApi.getProducts()
           productsDao.insertAll(result)
           result
       }
   }
}
```



This inverts the behavior of `cancelPreviousAndRun`. Instead of discarding the previous request by cancelling it — it will discard the new request and avoid running it. If there’s already a request running, it waits for the result of current “in flight” request and returns that instead of running a new one. The block will only be executed if there was not already a request running.

You can see how this works at the start of `joinPreviousOrRun` — it just returns the previous result if there’s anything in `activeTask`:

```kotlin
// see the complete implementation at
// https://gist.github.com/objcode/7ab4e7b1df8acd88696cb0ccecad16f7#file-concurrencyhelpers-kt-L124

suspend fun joinPreviousOrRun(block: suspend () -> T): T {
    // if there is an activeTask, return it's result and don't run the block
    activeTask?.let {
        return it.await()
    }
    // ...
```



This pattern scales well for requests like fetching products by `id`. You could add add a map from `id` to `Deferred` then use the same join logic to keep track of previous requests for the same product.

> Join previous work is a great solution to avoiding repeated network requests.

### What’s next?

In this post we explored how to implement a one shot request using Kotlin coroutines. To start out we implemented a complete pattern showing how to start a coroutine in the `ViewModel` and then expose regular suspend functions from a `Repository` and Room `Dao`.

For most tasks, this is all you need to do in order to use Kotlin coroutines on Android. This pattern can be applied to many common tasks like sorting a list like we showed here. You can also use it to fetch, save, or update data on the network

We then looked at a subtle bug that can come up and possible solutions. The easiest (and often best) way to fix this is in the UI — just disable the sort buttons while a sort is in progress.

And wrapping up we looked at some advanced concurrency patterns and how to implement them in Kotlin coroutines. The [code for this](https://gist.github.com/objcode/7ab4e7b1df8acd88696cb0ccecad16f7#file-concurrencyhelpers-kt-L158) is a bit complex, but it does provide a good introduction to some advanced coroutines topics.

In the next post, we’ll take a look at streaming requests and explore how to use the `liveData` builder!