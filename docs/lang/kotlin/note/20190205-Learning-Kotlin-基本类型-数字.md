---
title: 'Learnling Kotlin: 基本类型 - 数字'
date: 2019-02-05 16:15:01
tags: kotlin
categories: Kotlin
permalink: learning-kotlin-basic-types-numbers.html
---



一个字节8位



什么是位宽？

1、在计算机中， 所有数字在存储的时候，都是二进制存储

2、二进制 8 位称为 1 个字节

3、Int 数据类型占 4 个字节， 4 * 8  = 32 位

4、Long 数据类型占 8 个字节， 8 * 8 = 64 位

表示数字的内置类型：

|      | Type   | Bit width （位宽） | 最小值 | 最大值   |                      |                |
| ---- | ------ | ------------------ | ------ | -------- | -------------------- | -------------- |
| 浮点 | Double | 64                 |        |          | `toDouble(): Double` | 小数点后 16 位 |
| 浮点 | Float  | 32                 |        |          | `toFloat(): Float`   | 小数点后 6 位  |
| 整数 | Long   | 64                 | -2^63  | 2^63 - 1 | `toLong(): Long`     |                |
| 整数 | Int    | 32                 | -2^31  | 2^31 - 1 | `toInt(): Int`       |                |
| 整数 | Short  | 16                 | -32768 | 32767    | `toShort(): Short`   |                |
| 整数 | Byte   | 8                  | -128   | 127      | `toByte(): Byte`     |                |



数字可转化为 `Char`: `toChar(): Char`

数字装箱？

