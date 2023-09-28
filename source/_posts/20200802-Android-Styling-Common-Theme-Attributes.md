---
title: 'Android Styling: Common Theme Attributes'
date: 2020-08-02 15:12:25
updated: 2020-08-02 15:12:25
tags: android 
categories: Android
permalink: android-styling-common-theme-attributes.html
---

In the previous article in this series on Android styling, we looked at the difference between themes and styles and how themes allow you to write more flexible styles and layouts which isolate changes:

[Android Styling: Themes vs StylesThe Android styling system offers a powerful way to specify your app's visual design, but it can be easy to misuse…medium.com](https://medium.com/androiddevelopers/android-styling-themes-vs-styles-ebe05f917578)

Specifically we recommended using theme attributes to provide a point of indirection to resources, so that you can vary them (e.g. in [dark theme](https://developer.android.com/guide/topics/ui/look-and-feel/darktheme)). That is, if you find yourself writing a direct resource reference (or worse yet, a hardcoded value 😱) in a layout or style, consider if you should use a theme attribute instead.

```diff

<!-- Copyright 2019 Google LLC.	
   SPDX-License-Identifier: Apache-2.0 -->
<ConstraintLayout ...
-  android:foreground="@drawable/some_ripple"
-  android:background="@color/blue" />
+  android:foreground="?attr/selectableItemBackground"
+  android:background="?attr/colorPrimarySurface" />
```

[common_theme_attrs_prefer.xml.diff](https://gist.github.com/nickbutcher/7975a81a31afa7bebfc17d2e825168d3#file-common_theme_attrs_prefer-xml-diff) hosted with ❤ by [GitHub](https://github.com/)

But what theme attributes are available to use? This post highlights the common ones that you should know about; those that come from Material, AppCompat or the platform. This is not a complete list (for that I’d recommend browsing the attrs files linked below where they are defined) but these are the attributes that I use all the time.

# Colors

Many of these colors come from the [Material color system](https://material.io/design/color/), which defines semantic names for colors that you can use throughout your app ([implemented as theme attrs](https://material.io/develop/android/theming/color)).

{% img /images/2020080202.png %}

- `?attr/colorPrimary` The primary branding color for the app.
- `?attr/colorSecondary` The secondary branding color for the app, usually a bright complement to the primary branding color.
- `?attr/colorOn[Primary, Secondary, Surface etc]` A color which contrasts against the named color.
- `?attr/color[Primary, Secondary]Variant` An alternate shade of the given color.
- `?attr/colorSurface` A color for surfaces of components, such as cards, sheets, and menus.
- `?android:attr/colorBackground` The background for the screen.
- `?attr/colorPrimarySurface` switches between `colorPrimary` in the Light themes, `colorSurface` in the Dark theme.
- `?attr/colorError` A color for displaying errors.

Other handy colors:

- `?attr/colorControlNormal` The color applied to icons/controls in their normal state.
- `?attr/colorControlActivated` The color applied to icons/controls in their activated state (e.g. checked).
- `?attr/colorControlHighlight` The color applied to control highlights (e.g. ripples, list selectors).
- `?android:attr/textColorPrimary` The most prominent text color.
- `?android:attr/textColorSecondary` Secondary text color.

# Dimens

- `?attr/listPreferredItemHeight` Standard (min) height for list items.
- `?attr/actionBarSize` The height of a toolbar.

# Drawables

- `?attr/selectableItemBackground` A ripple/highlight for interactive items (also handy for foregrounds!!)
- `?attr/selectableItemBackgroundBorderless` An unbounded ripple.
- `?attr/dividerVertical` A drawable that may be used as a vertical divider between visual elements.
- `?attr/dividerHorizontal` A drawable that may be used as a horizontal divider between visual elements.

# TextAppearances

Material [defines](https://material.io/design/typography/the-type-system.html#type-scale) a type scale — a discrete set of text styles that you should use throughout your app, each of which is [provided](https://material.io/develop/android/theming/typography/) as a theme attribute which can be set as a `textAppearance`. Check out the [Material type scale generator](https://material.io/design/typography/the-type-system.html#) to help generate a scale for different fonts.

{% img /images/2020080203.png %}

- `?attr/textAppearanceHeadline1` defaults to light 96sp text.
- `?attr/textAppearanceHeadline2` defaults to light 60sp text.
- `?attr/textAppearanceHeadline3` defaults to regular 48sp text.
- `?attr/textAppearanceHeadline4` defaults to regular 34sp text.
- `?attr/textAppearanceHeadline5` defaults to regular 24sp text.
- `?attr/textAppearanceHeadline6` defaults to medium 20sp text.
- `?attr/textAppearanceSubtitle1` defaults to regular 16sp text.
- `?attr/textAppearanceSubtitle2` defaults to medium 14sp text.
- `?attr/textAppearanceBody1` defaults to regular 16sp text.
- `?attr/textAppearanceBody2` defaults to regular 14sp text.
- `?attr/textAppearanceCaption` defaults to regular 12sp text.
- `?attr/textAppearanceButton` defaults to medium all caps 14sp text.
- `?attr/textAppearanceOverline` defaults to regular all caps 10sp text.

# Shape

Material employs a [shape system](https://material.io/design/shape) which is [implemented](https://material.io/develop/android/theming/shape/) as theme attrs for small, medium and large components. Note that if you’re setting a shape appearance on a custom component, you likely want to use a `MaterialShapeDrawable` as it’s background which understands and implements the shaping.

{% img /images/2020080204.png %}

- `?attr/shapeAppearanceSmallComponent` used for Buttons, Chips, Text Fields etc. Defaults to rounded 4dp corners.
- `?attr/shapeAppearanceMediumComponent` used for Cards, Dialogs, Date Pickers etc. Defaults to rounded 4dp corners.
- `?attr/shapeAppearanceLargeComponent` used for Bottom Sheets etc. Defaults to rounded 0dp corners (i.e. square!)

# Button Styles

{% img /images/2020080205.png %}

This might seem super specific, but Material defines three *types* of buttons: [Contained](https://material.io/components/buttons/#contained-button), [Text](https://material.io/components/buttons/#text-button) and [Outlined](https://material.io/components/buttons/#outlined-button). MDC offers theme attrs that you can use to set the `style` of a `MaterialButton`:

- `?attr/materialButtonStyle` defaults to contained (or just omit the style).
- `?attr/borderlessButtonStyle` for a text style button.
- `?attr/materialButtonOutlinedStyle` for outlined style.

# Floats

- `?android:attr/disabledAlpha` Default disabled alpha for widgets.
- `?android:attr/primaryContentAlpha` The alpha applied to the foreground elements.
- `?android:attr/secondaryContentAlpha` The alpha applied to secondary elements.

# App vs Android namespace

You might have noticed that some attributes are referenced by
`?**android**:attr/foo` and others just by `?attr/bar`. This is because some are defined by the Android platform, and as such you need the `android` part to reference them by their namespace (just like with view attributes in layouts: `android:id`). Those without come from static libraries (i.e. AppCompat or MDC) which are compiled into your application, so don’t need the namespace (similar to how you might use `app:baz` in a layout). Some elements are defined *both* in the platform and in a library e.g. `colorPrimary`. In these cases, prefer the non-platform version, as this can be used on all API levels i.e. they’re duplicated in a library precisely to backport them. In these cases, I’ve listed the non-platform versions above.

> prefer non-platform attributes which can be used on all API levels

# More Resources

For a complete list of the theme attributes available to use, go to the source of truth:

- [Android platform](https://android.googlesource.com/platform/frameworks/base/+/refs/heads/master/core/res/res/values/attrs.xml)
- [AppCompat](https://android.googlesource.com/platform/frameworks/support/+/androidx-master-dev/appcompat/appcompat/src/main/res/values/attrs.xml)

Material Design Components:

- [Color](https://github.com/material-components/material-components-android/blob/master/lib/java/com/google/android/material/color/res/values/attrs.xml)
- [Shape](https://github.com/material-components/material-components-android/blob/master/lib/java/com/google/android/material/shape/res/values/attrs.xml)
- [Type](https://github.com/material-components/material-components-android/blob/master/lib/java/com/google/android/material/typography/res/values/attrs.xml)

# Do It Yourself

Sometimes there isn’t a theme attribute which abstracts something you’d like to vary by theme. No worries… create your own! Here’s an example from the [Google I/O app](https://github.com/google/iosched) which shows a list of conference sessions in two screens.

{% img /images/2020080206.png %}

Two screens listing conference sessions

They’re largely similar but the left screen must leave space for the sticky time headers while the right screen does not. We implemented this by abstracting where to align items behind a theme attribute so that we can vary them by theme and use the same layout across two different screens:

\1. Define the theme attribute in [attrs.xml](https://github.com/google/iosched/blob/89df01ebc19d9a46495baac4690c2ebfa74946dc/mobile/src/main/res/values/attrs.xml#L41)

```xml
<!-- Copyright 2019 Google LLC.	
   SPDX-License-Identifier: Apache-2.0 -->
<attr name="sessionListKeyline" format="dimension" />
```

[common_theme_attrs_custom_attr.xml](https://gist.github.com/nickbutcher/05fa9dcf1e344dab77edc06e68dc85c0#file-common_theme_attrs_custom_attr-xml) hosted with ❤ by [GitHub](https://github.com/)

\2. Provide [different](https://github.com/google/iosched/blob/89df01ebc19d9a46495baac4690c2ebfa74946dc/mobile/src/main/res/values/themes.xml#L51) [values](https://github.com/google/iosched/blob/89df01ebc19d9a46495baac4690c2ebfa74946dc/mobile/src/main/res/values/themes.xml#L78) in different themes:

```xml
<!-- Copyright 2019 Google LLC.	
   SPDX-License-Identifier: Apache-2.0 -->
<style name="Theme.IOSched.Schedule">
  …
  <item name="sessionListKeyline">72dp</item>
</style>

<style name="Theme.IOSched.Speaker">
  …
  <item name="sessionListKeyline">16dp</item>
</style>
```

[common_theme_attrs_custom_attr_values.xml](https://gist.github.com/nickbutcher/f34af81ac45d2db42e88ed44ff055f79#file-common_theme_attrs_custom_attr_values-xml) hosted with ❤ by [GitHub](https://github.com/)

\3. [Use](https://github.com/google/iosched/blob/89df01ebc19d9a46495baac4690c2ebfa74946dc/mobile/src/main/res/layout/item_session.xml#L61) the theme attr in the *single* layout used on **both** screens (each using one of the above themes):

```xml
<!-- Copyright 2019 Google LLC.	
   SPDX-License-Identifier: Apache-2.0 -->
<Guideline …
  app:layout_constraintGuide_begin="?attr/sessionListKeyline" />
```

[common_theme_attrs_custom_attr_usage.xml](https://gist.github.com/nickbutcher/0402c4f66a7c41935245f3566aee5239#file-common_theme_attrs_custom_attr_usage-xml) hosted with ❤ by [GitHub](https://github.com/)

# Question (mark) everything

Knowing what theme attributes are available, equips you to use them when writing your layouts, styles or drawables. Using theme attributes makes it much easier to support theming (like [dark theme](https://developer.android.com/guide/topics/ui/look-and-feel/darktheme)) and to write more flexible, maintainable code. For a deep dive on this, join us in our next post in this series:

[Android Styling: Prefer Theme AttributesTheme attribute all the thingsmedium.com
  ](https://medium.com/androiddevelopers/android-styling-prefer-theme-attributes-412caa748774)

https://medium.com/androiddevelopers/android-styling-common-theme-attributes-8f7c50c9eaba