---
title: 'Android Styling: Themes Overlay'
date: 2020-08-02 16:05:30
updated: 2020-08-02 16:05:30
tags: android
categories: Android
permalink: android-styling-themes-overlay.html
---

In previous articles in this series on Android styling, we’ve looked at the [difference between styles and themes](https://medium.com/androiddevelopers/android-styling-themes-vs-styles-ebe05f917578), talked about the [benefits of using themes and theme attributes](https://medium.com/androiddevelopers/android-styling-prefer-theme-attributes-412caa748774) and highlighted some [common attributes to use](https://medium.com/androiddevelopers/android-styling-common-theme-attributes-8f7c50c9eaba).

Today we’ll focus on actually *using* themes, how they are applied to your app and the implications for how you build them.

# Scope

In a previous article we [stated](https://medium.com/androiddevelopers/android-styling-themes-vs-styles-ebe05f917578):

> A `Theme` is accessed as a property of a `Context` and can be obtained from any object which is or has a context e.g. `Activity`, `View` or` ViewGroup`. These objects exist in a tree, where an `Activity` contains `ViewGroup`s which contain `View`s etc. Specifying a theme at any level of this tree cascades to descendent nodes e.g. setting a theme on a `ViewGroup` applies to all the `View`s within it (in contrast to styles which only apply to a single view).

Setting a theme at any level in this tree doesn’t *replace* the theme currently in effect, it *overlays* it. Consider the following `Button` which species a theme, but who’s parent also specifies a theme:

```xml
<!-- Copyright 2019 Google LLC.	
   SPDX-License-Identifier: Apache-2.0 -->
<ViewGroup …
  android:theme="@style/Theme.App.Foo">
  <Button …
    android:theme="@style/Theme.App.Bar"/>
</ViewGroup>
```

[themes_overlay_nested.xml](https://gist.github.com/nickbutcher/27a9b3e72ff3a5bd6a1bd630a4050e9a#file-themes_overlay_nested-xml) hosted with ❤ by [GitHub](https://github.com/)

If an attribute is specified in both themes, then the most local “wins” i.e. those in `Bar` will be applied to the button. Any attributes specified in theme `Foo` but **not** specified in theme `Bar` will also be applied to the button.

{% img /images/2020080208.png %}

Themes overlay each other

This might seem like a contrived example but this technique is extremely useful for styling subsections of an app with a different appearance such as a dark toolbar on an otherwise light screen, or this screen (from the [Owl sample app](https://github.com/material-components/material-components-android-examples/tree/develop/Owl)) which has a largely pink theme but the bottom section showing related content has a blue theme:

{% img /images/2020080209.gif %}

A blue sub-section within a pink themed screen.

This can be achieved by setting a theme on the root of the blue section and it cascades to all views within it.

# Overly Overlaid

As themes overlay any themes higher in the tree, it’s important to consider *what* your theme specifies to ensure that it doesn’t accidentally *replace* an attribute that you want to keep. For example, you may want to change the background color of a view (usually controlled by `colorSurface`) but nothing else i.e. you want to retain the rest of the current theme. For this we can use a technique known as **theme overlays**.

These are themes which are designed to, *well*, overlay another theme. They are as narrowly scoped as possible i.e. they only define (or inherit) as few attributes as possible. In fact, theme overlays often (but not always) have no parent e.g.:

```xml
<!-- Copyright 2019 Google LLC.	
   SPDX-License-Identifier: Apache-2.0 -->
<style name="ThemeOverlay.MyApp.DarkSurface" parent="">
  <item name="colorSurface">#121212</item>
</style>
```

[themes_overlay_themeoverlay.xml](https://gist.github.com/nickbutcher/cf73673343b8d83e857826cd360fac8c#file-themes_overlay_themeoverlay-xml) hosted with ❤ by [GitHub](https://github.com/)

> Theme overlays are narrowly scoped themes, defining as few attributes as possible, designed to overlay another theme

By convention, we name these beginning with “ThemeOverlay”. There are a number of handy theme overlays [provided by MDC](https://github.com/material-components/material-components-android/blob/master/lib/java/com/google/android/material/theme/res/values/themes_overlay.xml) (and [AppCompat](https://android.googlesource.com/platform/frameworks/support/+/androidx-master-dev/appcompat/appcompat/src/main/res/values/themes.xml#76)) that you can use to flip the color of a subsection of your app from light to dark:

- `ThemeOverlay.MaterialComponents.Dark`
- `ThemeOverlay.MaterialComponents.Light`

By definition, theme overlays don’t specify a number of things and shouldn’t be used in isolation e.g. as the theme of your activity. In fact you can think of 2 “types” of theme you can use in your app:

1. **“Full” themes**. These specify everything you’d need for a screen. They inherit from another “full” theme like `Theme.MaterialComponents` and should be used to theme an `Activity`.
2. **Theme overlays**. Only ever intended to be applied *over* a full theme, i.e. should not be used in isolation as likely won’t specify important and necessary things.

# Ever-present

There’s always a theme in effect, even if you don’t specify one anywhere in your app you’ll inherit a [default theme](https://cs.android.com/android/platform/superproject/+/master:frameworks/base/core/java/android/content/res/Resources.java;l=166?q=selectDefaultTheme). As such the example above was a simplification and you should never use a full theme within a `View` and instead use theme overlays:

```diff
<!-- Copyright 2019 Google LLC.	
   SPDX-License-Identifier: Apache-2.0 -->
<ViewGroup …
-   android:theme="@style/Theme.App.Foo">
+   android:theme="@style/ThemeOverlay.App.Foo">
<Button …
-   android:theme="@style/Theme.App.Bar"/>
+   android:theme="@style/ThemeOverlay.App.Bar"/>
</ViewGroup>
```

[themes_overlay_use_overlays.xml.diff](https://gist.github.com/nickbutcher/543b9c5619cfde5afd44fe023e77f77a#file-themes_overlay_use_overlays-xml-diff) hosted with ❤ by [GitHub](https://github.com/)

These overlays won’t exist in isolation but will themselves be overlaid on the theme of the enclosing `Activity`.

# Cost : Benefit

Using Themes has a run-time cost; each time that you declare an `android:theme`, you’re creating a new `ContextThemeWrapper`, which allocates new `Theme` and `Resources` instances. It also introduces more levels of styling indirection to be resolved. Be wary of using themes *too* liberally, especially in repeated situations such as `RecyclerView` item layouts or profile to monitor their impact.

# Use in Context

We said that a `Theme` is associated with a `Context` — this means that if you’re using a `Context` to retrieve a resource in code, then be careful that you use *the right* `Context`. For example, somewhere in your code you may retrieve a `Drawable`:

```
someView.background = AppCompatResources.getDrawable(requireContext(), R.drawable.foo)
```

If the drawable references a theme attribute (which all drawables can do from API 21+, and `VectorDrawable`s [can do](https://medium.com/androiddevelopers/draw-a-path-rendering-android-vectordrawables-89a33b5e5ebf) from API 14+ via Jetpack) then you should ensure you use the right `Context` to load the `Drawable`. If you don’t you might be frustrated when trying to apply a theme to a sub-hierarchy and wondering why your `Drawable` isn’t respecting it. For example if you use a `Fragment` or `Activity`’s `Context` to load the `Drawable`, this won’t respect themes applied lower down in the tree. Instead use the `Context` *closest* to where the resource will be used:

```
someView.background = AppCompatResources.getDrawable(someView.context, R.drawable.foo)
```

# Mis-Application

We’ve talked about themes and contexts existing in a tree: `Activity` > `ViewGroup` > `View` etc. It can be tempting to extend this mental model to include the `Application` class, after all you can specify a theme on the `<application>` tag in your manifest. **Don’t be fooled by this**!!

The `Application` `Context` does **not** retain any theme information, the theme that you can set in your manifest is merely used as a fallback for any `Activity` which doesn’t explicitly set a theme. As such you should never use the `Application` `Context` to [load resources](https://riggaroo.co.za/dark-mode-musings-beware-of-the-context/) which might vary by theme (like drawables or colors) or to resolve theme attributes.

> *Never use the* `*Application*` `*Context*` *to load themable resources*

This is also why we specify a “full” theme for an `Activity` and structure these to extend from any application wide theme — an `<activity>`’s theme isn’t overlaid over the `<application>`’s.

# Build up

Hopefully this post has explained how themes overlay ancestors in a tree and how this behavior can be useful when styling our apps. Use the `android:theme` tag to theme sections of your layout and use theme overlays to only adjust the attributes you need. Be mindful of using the right theme and context to load resources and be wary of the application context!



https://medium.com/androiddevelopers/android-styling-themes-overlay-1ffd57745207

