<<<<<<< HEAD
---
title: Android MaterialButton
date: 2022-05-09 09:39:49
tags: android
categories: Android
permalink: android-materailbutton-20220509.html
---



## MarerialButton

继承关系：

```
java.lang.Object
 ↳android.view.View
  ↳android.widget.TextView
   ↳android.widget.Button
    ↳androidx.appcompat.widget.AppCompatButton
     ↳com.google.android.material.button.MaterialButton
```

属性：

| 属性                     | 描述         | 参数                                           |
| ---------------------- | ---------- | -------------------------------------------- |
| app:backgroundTint     | 背景颜色       | 默认为 ?attr/colorPrimary                       |
| app:backgroundTintMode | 着色模式       | add,multiply,screen,src_atop,src_in,src_over |
| app:strokeColor        | 描边颜色       |                                              |
| app:strokeWidth        | 描边宽度       |                                              |
| app:cornerRadius       | 圆角大小       |                                              |
| app:rippleColor        | 按压水波纹颜色    |                                              |
| app:icon               |            |                                              |
| app:iconSize           |            |                                              |
| app:iconGravity        |            | start, end, textStart, textEnd               |
| app:iconTint           |            |                                              |
| app:iconTintMode       |            | add,multiply,screen,src_atop,src_in,src_over |
| app:iconPadding        | 图标和文本之间的间距 |                                              |

- 不可以使用`android:background`设置按钮背景，会破坏MaterialButton本身的绘制，而设置背景则推荐使用`app:backgroundTint`

- MaterialButton创建后，按钮实际长度并不是设定值，因为它上下有留空，可以使用
  
  android:insetBottom="0dp"`和`android:insetTop="0dp"去除

- 去除阴影
  
  MD控件默认有阴影效果，但是有时候我们并不想要按钮有阴影，那么这时候可以指定style为 `style="@style/Widget.MaterialComponents.Button.UnelevatedButton"` 这样就能去掉阴影，让视图看起来扁平化

## MaterialButtonToggleGroup

```
java.lang.Object
   ↳android.view.View
        ↳android.view.ViewGroup
             ↳android.widget.LinearLayout
                  ↳com.google.android.material.button.MaterialButtonToggleGroup
```

| 属性                    | 描述                  | 参数          |
| --------------------- | ------------------- | ----------- |
| app:checkedButton     |                     | 按钮ID        |
| app:singleSelection   |                     | true, false |
| app:selectionRequired | 设置为 true 后,强制至少选中一个 | true, false |

```java
MaterialButtonToggleGroup materialButtonToggleGroup = findViewById(R.id.toggleGroup);
materialButtonToggleGroup.addOnButtonCheckedListener(new MaterialButtonToggleGroup.OnButtonCheckedListener() {
    @Override
    public void onButtonChecked(MaterialButtonToggleGroup group, int checkedId, boolean isChecked) {
        //TODO
    }
});
```


---

有个公众号：

![](https://hefengbao.github.io/assets/images/eyeswap.jpg)
=======
---
title: Android MaterialButton
date: 2022-05-09 09:39:49
tags: android
categories: Android
permalink: android-materailbutton-20220509.html
---



## MarerialButton

继承关系：

```
java.lang.Object
 ↳android.view.View
  ↳android.widget.TextView
   ↳android.widget.Button
    ↳androidx.appcompat.widget.AppCompatButton
     ↳com.google.android.material.button.MaterialButton
```

属性：

| 属性                     | 描述         | 参数                                           |
| ---------------------- | ---------- | -------------------------------------------- |
| app:backgroundTint     | 背景颜色       | 默认为 ?attr/colorPrimary                       |
| app:backgroundTintMode | 着色模式       | add,multiply,screen,src_atop,src_in,src_over |
| app:strokeColor        | 描边颜色       |                                              |
| app:strokeWidth        | 描边宽度       |                                              |
| app:cornerRadius       | 圆角大小       |                                              |
| app:rippleColor        | 按压水波纹颜色    |                                              |
| app:icon               |            |                                              |
| app:iconSize           |            |                                              |
| app:iconGravity        |            | start, end, textStart, textEnd               |
| app:iconTint           |            |                                              |
| app:iconTintMode       |            | add,multiply,screen,src_atop,src_in,src_over |
| app:iconPadding        | 图标和文本之间的间距 |                                              |

- 不可以使用`android:background`设置按钮背景，会破坏MaterialButton本身的绘制，而设置背景则推荐使用`app:backgroundTint`

- MaterialButton创建后，按钮实际长度并不是设定值，因为它上下有留空，可以使用
  
  android:insetBottom="0dp"`和`android:insetTop="0dp"去除

- 去除阴影
  
  MD控件默认有阴影效果，但是有时候我们并不想要按钮有阴影，那么这时候可以指定style为 `style="@style/Widget.MaterialComponents.Button.UnelevatedButton"` 这样就能去掉阴影，让视图看起来扁平化

## MaterialButtonToggleGroup

```
java.lang.Object
   ↳android.view.View
        ↳android.view.ViewGroup
             ↳android.widget.LinearLayout
                  ↳com.google.android.material.button.MaterialButtonToggleGroup
```

| 属性                    | 描述                  | 参数          |
| --------------------- | ------------------- | ----------- |
| app:checkedButton     |                     | 按钮ID        |
| app:singleSelection   |                     | true, false |
| app:selectionRequired | 设置为 true 后,强制至少选中一个 | true, false |

```java
MaterialButtonToggleGroup materialButtonToggleGroup = findViewById(R.id.toggleGroup);
materialButtonToggleGroup.addOnButtonCheckedListener(new MaterialButtonToggleGroup.OnButtonCheckedListener() {
    @Override
    public void onButtonChecked(MaterialButtonToggleGroup group, int checkedId, boolean isChecked) {
        //TODO
    }
});
```

>>>>>>> 976052fc679b09d373d7c80509b83facd077fb11
