---
title: Observe LiveData from ViewModel in Fragment
date: 2019-04-22 10:25:23
updated: 2019-04-22 10:25:23
tags: android
categories: Android
permalink: observe-livedata-from-viewmodel-in-fragment.html
---



Google  introduced Android architecture components which are basically a  collection of libraries that facilitate robust design, testable, and  maintainable apps. It includes convenient and less error-prone handling  of LifeCycle and prevents memory leaks.

Although  these components are easy to use with exhaustive documentation, using  them inappropriately leads to several issues which could be difficult to  debug.

### Problem

One  such issue our team came across was observing LiveData from ViewModel  in Fragment. Let's say we have two Fragments: FragmentA (which is  currently loaded) & FragmentB which user can navigate to. FragmentA  is observing data from ViewModel via LiveData.

**When**

- The user navigates to FragmentB, FragmentA gets replaced by FragmentB and the transaction is added to backstack.
- After some actions on FragmentB user presses the back button and returns to FragmentA

**Then**

- LiveData observer in FragmentA triggered twice for single emit.

Following is the code Snippet:

```
@Override
public void onActivityCreated(@Nullable Bundle savedInstanceState) {
    super.onActivityCreated(savedInstanceState);
    final ProductListViewModel viewModel =
            ViewModelProviders.of(getActivity()).get(ProductListViewModel.class);
    viewModel.getProducts().observe(this, new Observer<List<ProductEntity>>() {
        @Override
        public void onChanged(List<ProductEntity> productEntities) {
            //Do something
        }
    });
}
```

If the user navigates to `FragmentB` again and presses back to visit `FragmetnA`, the LiveData observer was triggered thrice and it conti01nued to increase

### Debugging Approach

The initial thought was somehow(due to Fragment going though lifecycle) `ViewModel` was triggering LiveData multiple data on the same Observer. We added the following log to ensure this is the case:

```
@Override
public void onActivityCreated(@Nullable Bundle savedInstanceState) {
    super.onActivityCreated(savedInstanceState);
    final ProductListViewModel viewModel =
            ViewModelProviders.of(getActivity()).get(ProductListViewModel.class);
    viewModel.getProducts().observe(this, new Observer<List<ProductEntity>>() {
        @Override
        public void onChanged(List<ProductEntity> productEntities) {
            Log.d("TEST", "[onChanged]: " + hashCode());
            //Do something
        }
    });
}
```

After closely observing the `hashCode()` we discovered that same LiveData was observed twice and whenever value for `LiveData` was set multiple `Observer` instances `onChanged()` were called. **This is because the observers were not getting removed when** `**FragmentA**`**was getting replaced.**

One quick fix we did was to `removeObservers()` before observing again as follows:

```
viewModel.getProducts().removeObservers(this);
viewModel.getProducts().observe(this, new Observer<List<ProductEntity>>() {
    @Override
    public void onChanged(List<ProductEntity> productEntities) {
        Log.d("TEST", "[onChanged]: " + hashCode());
        //Do something
    }
});
```

Since its more of a workaround and would be difficult to maintain(each Observe requires `removeObservers`), I tried to find a proper fix.

In order to do that I had to understand:

1. Fragment Lifecycle
2. How LiveData observers are removed
3. Why `onActivityCreated` for observing LiveData?

### Fragment Lifecycle

After searching a bit I came across the following diagram which gave a better understanding of Fragment Lifecycle:

Further researching on `Fragment` I found there are two distinct lifecycles associated with fragment:

**The lifecycle of the** `**Fragmetn**`**Fragment** 



![img](https://cdn-images-1.medium.com/max/1600/0*XOEAs_jDCwSargiV.png)

**Image from** [**https://github.com/xxv/android-lifecycle**](https://github.com/xxv/android-lifecycle)

Since the image itself is self-explanatory, I won’t go in details. More information can be found [here](https://guides.codepath.com/android/creating-and-using-fragments).

**The lifecycle of each view hierarchy**

This was something interesting which I never knew. The lifecycle of a Fragment’s view is:



![img](https://cdn-images-1.medium.com/max/1600/1*g_clKmSJGSNKIoM6KdrCmw.png)

**Screenshot from** [**dev doc**](https://developer.android.com/reference/androidx/fragment/app/Fragment.html#getViewLifecycleOwner())

### How LiveData observers are removed

Based on the [documentation](https://developer.android.com/topic/libraries/architecture/livedata#work_livedata):

> You can register an observer paired with an object that implements the `LifecycleOwner` interface**. This relationship allows the observer to be removed when the state of the corresponding** `**Lifecycle**` **object changes to** `**DESTROYED**`**.** This is especially useful for activities and fragments because they can safely observe `LiveData` objects and not worry about leaks—activities and fragments are instantly unsubscribed when their lifecycles are destroyed.

### Solution

- The lifecycle of `Fragment` when `FragmentA` is replaced by `FragmentB` and the transaction is added to backstack, the state of `FragmentA` lifecycle is `onDestroyView` .
- When the user presses back on `FragmentB` , `FragmentA` goes through `onCreateView()` → `onViewCreated` → `onActivityCreated`
- Since `FragmentA` is never destroyed, the previous `Observer` is never removed. As a result, each time `onActivityCreated` was called, a new `Observer` was registered with the previous one still around. This caused `onChanged()` called multiple times.
- One proper solution is to use `getViewLifeCycleOwner()` as LifeCycleOwer while observing `LiveData` inside `onActivityCreated` as follows:

```
viewModel.getMainTab().observe(getViewLifecycleOwner(), new Observer<Integer>() {
    @Override
    public void onChanged(@Nullable Integer integer) {
        //Do something
    }
});
```

**Note:**

> The first method where it is safe to access the view lifecycle is `onCreateView(LayoutInflater, ViewGroup, Bundle)` under the condition that you must return a non-null view (**an IllegalStateException will be thrown if you access the view lifecycle but don't return a non-null view**).

### But why not observe in onCreate instead of onActivityCreated?

Based on the [documentation](https://developer.android.com/topic/libraries/architecture/livedata#work_livedata):

> Generally,  LiveData delivers updates only when data changes, and only to active  observers. An exception to this behavior is that observers also receive  an update when they change from an inactive to an active state. F**urthermore,  if the observer changes from inactive to active a second time, it only  receives an update if the value has changed since the last time it  became active**.

If we observe in `onCreate`and Fragment's view is recreated (visible → backstack → comes back), we have to update the values from `ViewModel` manually. This is because `LiveData` will not call the observer since it had already delivered the last result to that observer.

### Conclusion

Based on my research:

- User`getViewLifecycleOwner()` when you want to observe for `LiveData` inside `onActivityCreated`.
- If you want to manually update the views and values when Fragment is recreated, observe the LiveData in `onCreate()` 

---

来源：

https://medium.com/@begalesagar/observe-livedata-from-viewmodel-in-fragment-fd7d14f9f5fb