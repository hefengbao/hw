---
title: 学习TailwindCss：02、Backgrounds
date: 2022-09-22 14:43:22
tags: tailwindcss
categories: 前端
permalink: tailwindcss-backgrounds-20220922.html
---


## 背景色

文档：[Background Color - Tailwind CSS](https://tailwindcss.com/docs/background-color)

框架本身预定义了一些颜色，除开 `bg-inherit` （继承）、`bg-current`、`bg-transparent`、`bg-black`、`bg-white` 之外，名称规则为 `bg-颜色名-数值`，其中数值可以是：`50`、 `100`、`200`、`300`、`400`、`500`、 `600`、`700`、 `800`、`900`，数值越大，颜色越深。

### 基本使用：
```html
<p class="bg-green-500">Hello World!</p>
```

### 修改透明度：

```html
<p class="bg-green-500/100">Hello World!</p>
```

透明度可以是 0 ~ 100 的任意值。

### 鼠标悬浮、获取焦点或者处于其他状态

鼠标悬浮：在按钮、链接等的效果

```html
<button class="bg-green-500 hover:bg-green-700">Hello World!</button>
```

获取焦点：输入框等

```html
<input type="text" class="bg-gray-300 focus:bg-gray-50">
```

###  适配不同的屏幕
```html
<button class="bg-blue-500 sm:bg-green-500">Subscribe</button>
```


## 描边（Background Clip）


```html
<div class="bg-clip-border p-6 bg-violet-600 border-4 border-violet-300 border-dashed"></div>
```

`border-4`  即 css 中的 `border-width` 属性；
`border-violet-300` 即 css 中的 `border-color` 属性；
`border-dashed` 即 css 中的 `# border-style` 属性；

## 背景图片

`bg-fixed`：

