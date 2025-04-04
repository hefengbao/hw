---
title: 学习TailwindCss：02、响应式设计
date: 2022-09-22 15:14:24
tags: tailwindcss
categories: 前端
permalink: tailwindcss-responsive-design-20220922.html
---

接下来的练习可在如下工具进行：

[Tailwind Play (tailwindcss.com)](https://play.tailwindcss.com/)

如果之前接触过 `Bootstrap`,  那应该熟悉 `col-lg-6`、`col-md-6`、`col-sm-6` 这样的写法，来适配不同大小的屏幕，实质是根据屏幕的宽度来计算的。

Tailwindcss 也预设了不同的屏幕大小，类似的用 `sm`、`md`、`lg`、`xl` 、`2xl` 来表示不同的屏幕大小，具体可参考文档 [Responsive Design - Tailwind CSS](https://tailwindcss.com/docs/responsive-design) 中的说明，开发者也可自行定义划分标准，参考文档 [Customizing Screens - Tailwind CSS](https://tailwindcss.com/docs/screens)。

默认情况，Tailwindcss 按移动端优先（Mobile First）的理念设计的。即不带前缀的属性（如`uppercase`）对所有大小的屏幕起作用，而带前缀的属性 （如 `md:uppercase`） 仅在指定的屏幕断点或大于时起作用。

断点（breakpoint），指的是最小屏幕宽度，比如 `sm` 的定义 `@media (min-width: 640px) { ... }`，断点则是 640px.

在 [Tailwind Play (tailwindcss.com)](https://play.tailwindcss.com/) 中运行如下代码：

```html
<div class="text-center sm:text-left"><p>响应式设计</p></div>
```

拖动中间的分界线可看具体效果，注意右侧显示的屏幕宽度， 可知 `sm`  可以用来适配平板或更大的屏幕（即带 `sm` 前缀的属性，仅在屏幕宽度大于 `640px` 时起作用）。