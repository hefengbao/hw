---
title: 'Android Fragments: Common Queries & Mistakes'
date: 2019-06-28 14:31:25
updated: 2019-06-28 14:31:25
tags: android
categories: Android
permalink: android-fragments-common-queries-mistakes.html
---

# Obstacles

Here are a few obstacles related to fragments some of you must have faced already or might run into in the future:

- FragmentManager: getSupportFragmentManager and getChildFragmentManager. Which one to use when and avoid memory leaks while using them
- Callback from DialogFragment, ChildFragment, BottomSheetFragment to parent fragment
- Fragments when using ViewPager and when to use FragmentStateAdapter vs FragmentPagerAdapter.
- When to use FragmentTransaction add vs replace
- Fragment receivers, broadcasts and memory leaks
- How to handle these Fragment BottomBarNavigation and drawer
- commit() and commitAllowingStateLoss()
- Fragment option menus
- Fragment getActivity(), getView() and NullPointers Exceptions
- onActivityResult with nested fragments
- Fragment and Bundle
- Back Navigation

Whoa, that’s a big list! If you’ve run into any that I’ve missed, let me know in the comments.

------

# getSupportFragmentManager and getChildFragmentManager

FragmentManager is class provided by the framework which is used to create transactions for adding, removing or replacing fragments.

- getSupportFragmentManager is associated with an activity. Consider it as a FragmentManager for your activity.

So whenever you are using ViewPager, BottomSheetFragment, and DialogFragment in an activity you will use getSupportFragmentManager

Example:

```
BottomDialogFragment bottomSheetDialog = BottomDialogFragment.getInstance();
bottomSheetDialog.show(getSupportFragmentManager(), "Custom Bottom Sheet");
```

- getChildFragmentManager is associated with fragments.

Whenever you are ViewPager inside a fragment you will use getChildFragmentManager.

Example:

```
FragmentManager cfManager=getChildFragmentManager();
viewPagerAdapter = new ViewPagerAdapter(cfManager);
```

Here is the [official link](https://developer.android.com/reference/android/support/v4/app/FragmentManager.html) for this for better understanding.

When it comes to common mistakes people make when they are using ViewPager inside a Fragment, they often pass getSupportFragmentManager, which is a fragment manager for an activity, and it causes issues such as memory leaks or ViewPager not updating properly.

The most important issue caused by using getSupportFragmentManager in fragments is a memory leak. But why does it happen? Well, you have a stack of fragments which are used by ViewPager, and all these fragments stack in activity since you used getSupportFragmentManager. Now if close your Parent fragment, it will be closed but it will not be destroyed because all child fragments are active and they are still in memory, hence causing leak. It will not just leak parent fragment but also all of the child fragments since none of them can be cleared from heap memory. So never try to use getSupportFragmentManager in a fragment

------

# Callback from DialogFragment, ChildFragment, BottomSheetFragment to a Parent Fragment

This is a very common issue people face when they use BottomSheetFragment or DialogFragment or ChildFragment.

Example:

Add a child fragment:

<iframe src="https://medium.com/media/3bb599ad1cfbdb6840b23e8f0fb38f34" frameborder="0" height="0" width="0" title="" class="fx p q fw ac" style="box-sizing: inherit; top: 0px; left: 0px; width: 680px; height: 0px; position: absolute;"></iframe>

Another example bottomSheetFragment:

```
BottomSheetDialogFragment fragment = BottomSheetDialogFragment.newInstance();
fragment.show(getChildFragmentManager(), fragment.getTag());
```

Now suppose you want a callback from these child fragments to parent fragments. Most people create connections between two fragments using an activity, few people pass interface listeners as a parameter to fragments (which is a really a bad practice that one should avoid). The best way to call getParentFragment() from your child fragment is to create a callback. This is very simple. Consider the example below:

```
dialogFragment.show(ParentFragment.this.getChildFragmentManager(), "dialog_fragment");
```

Then set the callback to the parent fragment by adding the following code in the child fragment:

<iframe src="https://medium.com/media/cf93ae53f884a0cbc5fe6308d5062936" frameborder="0" height="0" width="0" title="" class="fx p q fw ac" style="box-sizing: inherit; top: 0px; left: 0px; width: 680px; height: 0px; position: absolute;"></iframe>

That's it. You can give a callback to your parent fragment now easily.

Using the same method, you can create a callback from a child fragment inside ViewPager to the parent fragment who is holding ViewPager.

------

# Fragments When Using ViewPager and When to Use FragmentStateAdapter vs FragmentPagerAdapter

`FragmentPagerAdapter` stores the whole fragment in memory and can cause an increase of memory overhead if a large number of fragments are used in `ViewPager`. `FragmentStatePagerAdapter` only stores the savedInstanceState of fragments and destroys all the fragments when they lose focus.

So when you are going to have many fragments, use FragmentStateAdapter. If ViewPager is going to have less than three fragments, use FragmentPagerAdapter.

Let’s look at some commonly faced issues.

**Update ViewPager not working:**

Remember ViewPager fragments are managed by FragmentManager, either from fragment or activity, and FragmentManager holds instances of all ViewPager fragments.

So when people say ViewPager is not refreshed, it’s nothing but old instances of fragments are still being held by FragmentManager. You need to find out why FragmentManger is holding an instance of fragments. Is there a leak or not? Ideally, to refresh ViewPager the following code works. If it is not, you are doing something wrong.

```
List<String> strings = new ArrayList<>();
strings.add("1");
strings.add("2");
strings.add("3");
viewPager.setAdapter(new PagerFragAdapter(getSupportFragmentManager(), strings));
strings.add("4");
viewPager.getAdapter().notifyDataSetChanged();
```

**Access current Fragment from ViewPager:**

This is also a very common issue we come across. If you come across this, either create an array list of fragments inside the adapter or try to access the fragment using some tags. I prefer another option, however. FragmentStateAdapter and FragmentPagerAdapter both provide the method setPrimaryItem. This can be used to set the current fragment as seen below:

<iframe src="https://medium.com/media/7b068f35ffb1f5fde4485cc27e6c73e6" frameborder="0" height="0" width="0" title="" class="fx p q fw ac" style="box-sizing: inherit; top: 0px; left: 0px; width: 680px; height: 0px; position: absolute;"></iframe>

I am leaving a GitHub link to this simple ViewPager project so that everyone can understand better.

[amodkanthe/ViewPagerTestContribute to amodkanthe/ViewPagerTest development by creating an account on GitHub.github.com](https://github.com/amodkanthe/ViewPagerTest)

------

# FragmentTransaction Add vs Replace

In our activity, we have a container with our fragments displayed inside.

*Add* will simply add a fragment to the container. Suppose you add FragmentA and FragmentB to the container. The container will have FragmentA and FragmentB and if the container is FrameLayout, fragments are added one above the other.

*Replace* will simply replace a fragment on top of the container, so if I call create FragmentC and call replace FragmentB which was on top, FragmentB will be removed from the container (unless you are not calling addToBackStack) and now FragmentC will be on top.

So which one to use when? `replace` removes the existing fragment and adds a new fragment. This means when you press the back button, the fragment that got replaced will be created with its onCreateView being invoked. On the other hand, `add` retains the existing fragments and adds a new fragment that means existing fragment will be active and they wont be in 'paused' state. Hence, when a back button is pressed onCreateView, it is not called for the existing fragment (the fragment which was there before the new fragment was added). In terms of fragment's life cycle events, onPause, onResume, onCreateView, and other life cycle events will be invoked in case of `replace` but not in the case of `add`.

Use replace fragment if don’t need to revisit current fragments and current fragments are not required anymore. Also if your app has memory constraints, consider using replace instead of add.

------

# Fragment Receivers, Broadcasts and Memory Leaks

When using receivers inside a fragment, a common mistake is to forget to unregister the receiver in onPause or OnDestroy. If you are registering a fragment to listen to the receiver inside onCreate or OnResume, you will have to unregister it inside onPause or onDestroy. Otherwise, it will cause a memory leak.

```
LocalBroadcastManager.getInstance(getActivity()).unregisterReceiver(mYourBroadcastReceiver);
```

Also, if have multiple fragments listening to the same broadcast receiver, make sure you register in onResume and unregister in onPause. If you use onCreate and onDestroy to register and unregister, other fragments will not receive the broadcast as this fragment is not destroyed

------

# How to Handle Fragment BottomBarNavigation and NavigationDrawer

When we are using BottomBarNavigation and NavigationDrawer, it’s common to see issues such as fragments being recreated or the same fragment being added multiple times.

In such a case, you can use the fragment transactions show and hide instead of add or replace.

There is also a beautiful library which takes care of navigations and avoids recreation of fragments called FragNav. I’ve linked it below.

[ncapdevi/FragNavAn Android library for managing multiple stacks of fragments — ncapdevi/FragNavgithub.com](https://github.com/ncapdevi/FragNav)

------

# commit() and commitAllowingStateLoss()

If your activity is not in a resume state and you try to commit a fragment, your app will crash. To avoid this, you need to check if the activity or fragment is in a resume state or not `isAdded()` / `isResumed()`

Another solution, if you don’t care much about the state of the fragment, is that you can call commitAllowingStateLoss. This ensures the fragments are added or replaced, despite the activity is finishing or not being in a resume state.

------

# Fragment Option Menus

When using option menu inside the fragment, remember to add the following line. People often forgot to add this and keep wondering where the option is on the toolbar.

```
@Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setHasOptionsMenu(true);
    }
```

When using the toolbar inside the fragment, you can inflate the menu using code:

```
getToolbar().inflateMenu(R.menu.toolbar_menu_gmr);
```

Alternatively, you can override on createOptionsMenu but I prefer the above method as it does not rely on a super class

------

# Fragment getActivity(), getView() NullPointers Exceptions

If any background process posts a result and the fragment is not in the stack or in a resume state, accessing the view of the fragment will cause a NullPointer exception. So, whenever you are accessing getView or getActivity after a background operation or delay, make sure you cancel all background operations on termination.

Example:

<iframe src="https://medium.com/media/fa1e403a26e404a0cd22ecc5c8907017" frameborder="0" height="0" width="0" title="" class="fx p q fw ac" style="box-sizing: inherit; top: 0px; left: 0px; width: 680px; height: 0px; position: absolute;"></iframe>

------

# Nested Fragment onActivityResult

Yes, the `onActivityResult()` in a nested fragment will not be invoked.

The calling sequence of onActivityResult (in Android support library) is

1. `Activity.dispatchActivityResult()`.
2. `FragmentActivity.onActivityResult()`.
3. `Fragment.onActivityResult()`.

You will have to use `onActivityResult()` in parent fragments or activity and to pass the result to a nested fragment as below:

<iframe src="https://medium.com/media/aca8485b65fb9a76daab00a2d98bf5ea" frameborder="0" height="0" width="0" title="" class="fx p q fw ac" style="box-sizing: inherit; top: 0px; left: 0px; width: 680px; height: 0px; position: absolute;"></iframe>

------

# Fragment and Bundle

Whenever you are passing arguments to a fragment, make sure you are using Bundle instead of a constructor.

The [Android documentation](https://developer.android.com/reference/android/app/Fragment.html) states:

*Every fragment must have an empty constructor, so it can be instantiated when restoring its activity’s state. It is strongly recommended that subclasses do not have other constructors with parameters, since these constructors will not be called when the fragment is re-instantiated; instead, arguments can be supplied by the caller with setArguments(Bundle) and later retrieved by the Fragment with getArguments().*

That’s why it’s better to use a bundle to set the parameters of the fragment, it’s easier for the system to restore its values when the fragment is re-instantiated.

------

# Back Navigation

You should ensure that pressing the *Back* button on a detail screen returns the user to the master screen. To do so, call `addToBackStack()` before you commit the transaction:

<iframe src="https://medium.com/media/66da06d0217cfbc15aefedbe04558d31" frameborder="0" height="0" width="0" title="" class="fx p q fw ac" style="box-sizing: inherit; top: 0px; left: 0px; width: 680px; height: 0px; position: absolute;"></iframe>

When there are `FragmentTransaction` objects on the back stack and the user presses the *Back* button, the `FragmentManager` pops the most recent transaction off the back stack and performs the reverse action (such as removing a fragment if the transaction added it).

------

# Conclusion

Fragments can seem pretty easy at first but there is a lot more to them. You need to be careful of a number of things while using fragments, such as memory, navigation, callbacks, and bundle. I hope most commonly faced issues and most commonly made mistakes were covered in this article.