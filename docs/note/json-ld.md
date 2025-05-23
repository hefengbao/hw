---
title: JSON-LD
date: 2020-04-14 16:17:12
updated: 2020-04-14 16:17:12
tags: josn-ld
categories: 资料
permalink: json-ld.html
---
# JSON-LD

## 什么是JSON-LD？

[JSON-LD](http://en.wikipedia.org/wiki/JSON-LD)是 JavaScript Object Notation for Linked Data的缩写，是一种基于JSON表示和传输互联数据（Linked Data）的方法。可用于实施[结构化数据](http://developers.google.com/structured-data/)。JSON-LD描述了如何通过JSON表示有向图，以及如何在一个文档中混合表示互联数据及非互联数据。JSON-LD的语法和JSON兼容。基于JSON-LD可以在基于Web的编程环境中使用互联数据，构造可互操作的互联数据Web服务（linked data web services），并向基于JSON的存储引擎中保存互联数据。

JSON（JavaScript Object Notation）是一种轻量级的数据交换格式，适合于服务器与JavaScript之间交换数据。对于JSON我们非常熟悉，但对于互联数据这个词，可能部分人会既熟悉而又觉得陌生，因为单字面意思已经很清楚，但要表达出其完整含义也并不容易。

互联数据可以说是语义网(Semantic Web)的一部分，但相较于1998年语义网概念的提出，互联数据这个一样显而易见的概念实际出现却要晚了数年。这些年我们一直在强调Web的语义，即便是HTML5那一堆新增标签也不外如是。语义并不是简单的将数据放到Web上，而是对于不仅仅是人，机器也必须都能识别并准确的处理以及高效的利用。而互联数据则更要求数据的指向性，当我们有部分数据时，即可找到对应的相关联的其他数据。当数据从数据库里被拼装成页面后，可能对于人而言找到数据可能轻而易举，但对于机器而言，很难将页面恢复到原始数据，也缺乏语义的判断。若无标准来统一语义和数据互联，对于机器来说整个Web其实是乱糟糟的。

为了使机器可以准确理解，处理和整合数据，我们有了语义Web。而其组成部分RDF(Resource Description Framework)即是用于描述网络资源的W3C标准。它使得语义Web技术相关的技术更加简单、不复杂以及面向一般开发人员。另外，与JSON-LD相似的RDFa(通过属性嵌入RDF)，同样是提供上下文，但属性嵌入到方式注定RDFa只适合小范围的片段嵌入以代替Mircodata，而难以用作大量纯粹数据的定义方式。而添加RDFa的难度也往往大于JSON-LD，毕竟是需要去接受已经存在的内容的情况。[RDF工作组](http://www.w3.org/2011/rdf-wg/wiki/Main_Page)目前已经停止了活动，但通过艰苦的努力，已经将[JSON-LD 1.0](http://www.w3.org/TR/2014/REC-json-ld-20140116/)及[JSON-LD 1.0处理算法和API](http://www.w3.org/TR/2014/REC-json-ld-api-20140116/)推进到了W3C的标准状态。

## 怎样使用JSON-LD？

JSON-LD处理算法和API（JSON-LD Processing Algorithms and API）描述了处理JSON-LD数据所需的算法及编程接口，通过这些接口可以在JavaScript, Python及Ruby等编程环境中直接对JSON-LD文档进行转换和处理。

下面是一个直接选自[规范](http://www.w3.org/TR/2014/REC-json-ld-20140116/)的例子：

```
{
  "name": "Manu Sporny",
  "homepage": "http://manu.sporny.org/",
  "image": "http://manu.sporny.org/images/manu.png"
}
```



这个JSON文档表示一个人。人们很容易推断这里的语义：“name”是人的名字，“homepage”是其主页，“image”是其某种照片。然而机器不理解“name”和“image”这样的术语。

为解决该问题，我们可以使用链接数据。下面使用JSON-LD表示上面的例子：

```
{
  "http://schema.org/name": "Manu Sporny",
  "http://schema.org/url": { "@id": "http://manu.sporny.org/" },
  "http://schema.org/image": { "@id": "http://manu.sporny.org/images/manu.png" }
}
```



通过链接到schema.org上的定义，我们可以教给机器如何理解“name”、“url”和“image”的语义。不过有点复杂了。通过JSON-LD所谓的“上下文（context）”，我们可以兼顾第一个例子的简洁性和第二个例子的语义理解。基于第一个例子，我们引入一个context：

```
{
  "@context": "http://json-ld.org/contexts/person.jsonld",
  "name": "Manu Sporny",
  "homepage": "http://manu.sporny.org/",
  "image": "http://manu.sporny.org/images/manu.png"
}
```



我们现在链接到了json-ld.org上的一个context。context文档看上去像下面这样：

```
{
  "@context":
  {
    "name": "http://schema.org/name", 
    "image": {
      "@id": "http://schema.org/image"
      "@type": "@id"
    },
    "homepage": {
      "@id": "http://schema.org/url",
      "@type": "@id"
    }
  }
}
```



这种方法的另一个优点是，多个文档可以使用同一个context。

参考资料：

- https://json-ld.org/

https://www.biaodianfu.com/json-ld.html



https://github.com/Webnuvola/laravel-json-ld