---
title: 'Android Styling: Prefer Theme Attributes'
date: 2020-08-02 15:12:58
updated: 2020-08-02 15:12:58
tags: android
categories: Android
permalink: android-styling-prefer-theme-attributes.html
---

In the previous posts in this series on Android styling, we looked at the difference between themes and styles and why it’s a good idea to factor out things that you wish to vary by theme and common theme attributes to use:

[Android Styling: Themes vs StylesThe Android styling system offers a powerful way to specify your app’s visual design, but it can be easy to misuse…medium.com](https://medium.com/androiddevelopers/android-styling-themes-vs-styles-ebe05f917578)

[Android Styling: Common Theme AttributesIn the previous article in this series on Android styling, we looked at the difference between themes and styles and…medium.com](https://medium.com/androiddevelopers/android-styling-common-theme-attributes-8f7c50c9eaba)

This enables us to create fewer layouts or styles, isolating changes within a theme. In practice, you largely want to vary colors by theme and as such you should always* refer to colors via theme attributes.

> *Always\* refer to colors via theme attributes*

That means you can consider code like this to be a smell:

```xml
<!-- Copyright 2019 Google LLC.	
   SPDX-License-Identifier: Apache-2.0 -->
<View …
  android:background="@color/white"/>
```

[prefer_theme_attrs_color_res.xml](https://gist.github.com/nickbutcher/c4cc6ee85d8f53c95dfb07a49c73bd1d#file-prefer_theme_attrs_color_res-xml) hosted with ❤ by [GitHub](https://github.com/)

Instead you should refer to a theme attribute, allowing you to vary the color by theme, for example, providing a different value in [dark theme](https://developer.android.com/guide/topics/ui/look-and-feel/darktheme):

```xml
<!-- Copyright 2019 Google LLC.	
   SPDX-License-Identifier: Apache-2.0 -->
<View …
  android:background="?attr/colorSurface"/>
```

[prefer_theme_attrs_color_attr.xml](https://gist.github.com/nickbutcher/7886005615abde4d3b196f192dc961da#file-prefer_theme_attrs_color_attr-xml) hosted with ❤ by [GitHub](https://github.com/)

Even if you’re not currently supporting alternate themes (what–no dark theme??), I’d recommend following this approach as it’ll make adopting theming much easier.

# Qualified Colors?

You *can* vary colors by providing alternate values in different configurations (e.g. `@color/foo` defined in both `res/**values**/colors.xml` and an alternate value set in `res/**values-night**/colors.xml`) but I’d recommend using theme attributes instead.

Varying at the color layer forces you to give **semantic names** to colors i.e. you likely wouldn’t name a color `@color/white` and provide a dark variant in the `-night` configuration — that would be pretty confusing. Instead you might be tempted to use a *semantic* name, like `@color/background`. The problem with this is that it combines both the declaration of the color and providing the value. As such it gives no indication that this can or will vary by theme.

Varying `@colors` can also encourage you to create more colors. If a different situation calls for a new semantically named color with the same value (i.e. not a background but should be the same color), then you still need to create a new entry in your colors file.

By using a theme attribute we separate the declaration of semantic colors from providing their values and make call-sites clearer that the color will vary by theme (as they use the `?attr/` syntax). Keeping your color declarations to literally named values encourages you to define a palette of colors used by your app and vary them at the theme level, keeping your colors file small and maintainable.

> *Define a palette of colors used by your app and vary them at the theme level*

The added benefit of this approach is that layouts/styles referring to these colors become more reusable. Because themes can be overlaid or varied, the indirection means you don’t need to create alternate layouts or styles just to vary some colors — you can use the same layouts with a different theme.

# Always?

I placed an asterix on *“always\* refer to colors via theme attributes”* because there may be occasions where you explicitly don’t want to vary a color by theme. For example, the [Material Design guidelines](https://material.io/design/color/dark-theme.html#ui-application) call out occasions where you may wish to use the same brand color in both light and dark themes.

{% img /images/2020080207.png %}

In these rare cases, it’s perfectly valid to refer directly to a color resource:

```xml
<!-- Copyright 2019 Google LLC.	
   SPDX-License-Identifier: Apache-2.0 -->
<FloatingActionButton …
  app:backgroundTint="@color/owl_pink_500"/>
```

[prefer_theme_attrs_constant_color_exception.xml](https://gist.github.com/nickbutcher/2264b82b8d36eb1d9fd67c80dd25b940#file-prefer_theme_attrs_constant_color_exception-xml) hosted with ❤ by [GitHub](https://github.com/)

# State of the art

Another situation where you might not refer directly to a theme attribute in your layouts/styles is when using `ColorStateList`[s](https://developer.android.com/reference/android/content/res/ColorStateList).

```xml

<!-- Copyright 2019 Google LLC.	
   SPDX-License-Identifier: Apache-2.0 -->
<View …
  android:background="@color/primary_20"/>
```

[prefer_theme_attrs_csl_exception.xml](https://gist.github.com/nickbutcher/4b6969e1d21b0f02fa20604d2926569b#file-prefer_theme_attrs_csl_exception-xml) hosted with ❤ by [GitHub](https://github.com/)

This might be valid if `primary_20` is a `ColorStateList` which itself refers to theme attributes for the color values (see below). While commonly used to provide different colors in different states (pressed, disabled etc) `ColorStateList`s have another capability that can be useful for theming. They let you specify an alpha value to be applied to a color:

```xml
<!-- Copyright 2019 Google LLC.	
   SPDX-License-Identifier: Apache-2.0 -->
<selector …
  <item android:alpha="0.20" android:color="?attr/colorPrimary" />
</selector>
```

[prefer_theme_attrs_csl.xml](https://gist.github.com/nickbutcher/d5f6466cb68e6cdfeb5bf21b9d98d8cb#file-prefer_theme_attrs_csl-xml) hosted with ❤ by [GitHub](https://github.com/)

This kind of single-item-`ColorStateList` (i.e. only supplying a single, default color, not different colors per state) helps reduce the number of color resources that you need to maintain. That is rather than defining a new color resource that manually sets an alpha value on your primary color (per configuration!) instead this alters whatever `colorPrimary` is in the current theme. If your primary color changes you only need to update it in a single place, not hunting down all instances of where it has been tweaked.

While useful, there are some caveats to this technique to be aware of.

\1. If the specified color *also* has an alpha value, then the alphas are *combined* e.g. applying 50% alpha to 50% opaque white would yield 25% white:

```xml

<!-- Copyright 2019 Google LLC.	
   SPDX-License-Identifier: Apache-2.0 -->
<selector …
  <item android:alpha="0.50" android:color="#80ffffff" />
</selector>
```

[prefer_theme_attrs_csl_combined_alpha.xml](https://gist.github.com/nickbutcher/06d23f5814992c449a793e9c7768039c#file-prefer_theme_attrs_csl_combined_alpha-xml) hosted with ❤ by [GitHub](https://github.com/)

For this reason, it’s preferable to specify theme colors as fully opaque and use `ColorStateList`s to modify their alphas.

\2. The alpha component was only added in API 23 so if your min sdk is lower than this, be sure to use `AppCompatResources.getColorStateList` which backports this behavior (and always use the `android:alpha` namespace, never the `app:alpha` namespace).

\3. Often we use a shorthand to set a color as a drawable e.g.

```xml
<!-- Copyright 2019 Google LLC.	
   SPDX-License-Identifier: Apache-2.0 -->
<View …
  android:background="@color/foo"/>
```

[prefer_theme_attrs_view_background_color.xml](https://gist.github.com/nickbutcher/ae17cd8bc8030bec7c330ad0d93746ef#file-prefer_theme_attrs_view_background_color-xml) hosted with ❤ by [GitHub](https://github.com/)

A `View`’s background is a drawable, this shorthand coerces the given color to a `ColorDrawable`. However there is no way to convert a `ColorStateList` to a `Drawable` (before API 29 when `ColorStateListDrawable` was introduced to solve this issue). We can however work around this restriction:

```xml
<!-- Copyright 2019 Google LLC.	
   SPDX-License-Identifier: Apache-2.0 -->
<View …
  android:background="@drawable/a_solid_white_rectangle_shape_drawable"
  app:backgroundTint="@color/some_color_state_list"/>
```

[prefer_theme_attrs_view_background_tint.xml](https://gist.github.com/nickbutcher/ffffbe1b63a23147d1cc878098867084#file-prefer_theme_attrs_view_background_tint-xml) hosted with ❤ by [GitHub](https://github.com/)

Be sure that your background tint supports the states your view needs e.g. if it needs to change when disabled.

# Enforcement

So you’re convinced that you should be using theme attributes and `ColorStateList`s, but how do you enforce this across your codebase or team? You can try to be vigilant during code reviews but this doesn’t scale well. A better approach is to rely on tooling to catch this. This article outlines how to add a lint check to look for literal color uses and could be extended to cover all advice in this article:

[Making Android Lint Theme AwareUse Android Lint API to identify screens and drawable not ready for dark theme. Also, use it to maintain dark theme…proandroiddev.com](https://proandroiddev.com/making-android-lint-theme-aware-6285737b13bc)

# Be Indirect

Using theme attributes and `ColorStateList`s to factor colors out to your theme makes your layouts and styles more *flexible*, promoting reuse and keeping your codebase lean and maintainable.

Join us in the next post where we’ll look more at using themes and how they interact:

[Android Styling: Themes OverlayIn previous articles in this series on Android styling, we’ve looked at the difference between styles and themes…medium.com
  ](https://medium.com/androiddevelopers/android-styling-themes-overlay-1ffd57745207)

https://medium.com/androiddevelopers/android-styling-prefer-theme-attributes-412caa748774