---
title: LiveData 的 map 与 switchMap 操作
date: 2019-10-15 10:08:12
updated: 2019-10-15 10:08:12
tags: android
categories: Android
permalink: livedata-map-switchmap.html
---

LiveData可以通过Transformations的map和switchMap操作，将一个LiveData转成另一种类型的LiveData，效果与RxJava的map/switchMap操作符类似。 

可以看看两个函数的声明

```kotlin
public static <X, Y> LiveData<Y> map(
            @NonNull LiveData<X> source,
            @NonNull final Function<X, Y> mapFunction)


public static <X, Y> LiveData<Y> switchMap(
            @NonNull LiveData<X> source,
            @NonNull final Function<X, LiveData<Y>> switchMapFunction)
```

根据以上代码，我们可以知道，对应的变换函数返回的类型是不一样的：map是基于泛型类型的变换，而switchMap则返回一个新的LiveData。

来源：

https://mp.weixin.qq.com/s/qzyfKv6iOHlVobVYi-Q4Mw