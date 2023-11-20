---
title: Bottom Navigation
date: 2019-08-23 09:54:08
updated: 2019-08-23 09:54:08
tags: android
categories: Android
permalink: bottom-navigation.html
---

### Disable Transitions Ways:

{% img /images/2019082301.gif %}

The above transition we can remove by adding this

```xml
<com.google.android.material.bottomnavigation.BottomNavigationView
    ...
    app:itemHorizontalTranslationEnabled="false"/>
```



{% img /images/2019082302.gif %}

Now, we can also show label and remove the translation together without `app:itemHorizontalTranslationEnabled="false"` this way

```xml
<com.google.android.material.bottomnavigation.BottomNavigationView
    ...
    app:labelVisibilityMode="labeled"/>
```

{% img /images/2019082303.gif %}

If we want the same size of bottom navigation text then we can use the value of `dimen.xml` just add this line.

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources xmlns:tools="http://schemas.android.com/tools">
    <dimen name="design_bottom_navigation_active_text_size"
        tools:override="true">12sp</dimen>
</resources>
```

{% img /images/2019082304.gif %}

### Problem:

The one problem is still here, What if the menu text is a long text? What if it was made of 2 words?

you will see the long text trimmed when the menu is selected. (Please look at the third menu)

{% img /images/2019082305.gif %}

### Solution:

You just need to hide the long text and show the small text by doing like this below snippet of code.

```
TextView largeTextView = bottomNavigationView.findViewById(itemID)            .findViewById(com.google.android.material.R.id.largeLabel);    TextView smallTextView = bottomNavigationView.findViewById(itemID)            .findViewById(com.google.android.material.R.id.smallLabel);    smallTextView.setVisibility(View.VISIBLE);    largeTextView.setVisibility(View.GONE);
```



{% img /images/2019082306.gif %}