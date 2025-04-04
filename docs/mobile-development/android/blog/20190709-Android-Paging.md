---
title: Android Paging
date: 2019-07-09 15:01:27
updated: 2019-07-09 15:01:27
tags: android
categories: Android
permalink: android-paging.html
---

Paging Library [Paging](https://developer.android.com/topic/libraries/architecture/paging/)

###### 1. [Datasource](https://developer.android.com/reference/android/arch/paging/DataSource)

数据源抽象类，Paging 有三种实现
 （1）[PageKeyedDataSource](https://developer.android.com/reference/android/arch/paging/PageKeyedDataSource.html) 按页加载，如请求数据时传入page页码。
 （2）[ItemKeyedDataSource](https://developer.android.com/reference/android/arch/paging/ItemKeyedDataSource.html)  按条目加载，即请求数据需要传入其它item的信息，如加载第n+1项的数据需传入第n项的id。
 （3）[PositionalDataSource](https://developer.android.com/reference/android/arch/paging/PositionalDataSource.html) 按位置加载，如加载指定从第n条到n+20条。

###### 2. [PagedList](https://developer.android.com/reference/android/arch/paging/PagedList.html)

`PagedList` 是 `List`  的子类，通过 `Datasource` 加载数据,并可以设置一次加载的数量以及预加载的数量等。

###### 3.[PagedListAdapter](https://developer.android.com/reference/android/arch/paging/PagedListAdapter.html)

`PagedListAdapte` 是 `RecyclerView.Adapter` 的实现，用于展示 `PagedList` 的数据。数据源变动时后台线程通过 `DiffUtil` 比较前后两个 `PagedList` 的差异，然后调用 `notifyItem...()` 方法更新 RecyclerView。

###### 4. [LivePagedListBuilder](https://developer.android.com/reference/android/arch/paging/LivePagedListBuilder.html)

将 `PagedList` 和 `LiveData` 整合成 `LiveData<PagedList>`。