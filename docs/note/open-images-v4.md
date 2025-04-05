---
title: Open Images V4
date: 2020-05-22 14:45:52
updated: 2020-05-22 14:45:52
tags: 数据集
categories: 资料
permalink: open-images-v4.html
---
# Open Images V4
## Open Images V4

[Open Images](https://research.googleblog.com/2016/09/introducing-open-images-dataset.html) 包含大约9百万张图片，带有 `image-level` 的标签和 `object-level` 的矩形框标注信息。

[V4](https://storage.googleapis.com/openimages/web/index.html) 的训练集包含174万张图片、1460万个矩形框和600个类别，是世界上最大的带有目标位置标注的数据集。矩形框由专业的标注人员标注，以确保准确性和一致性。而且图片种类多种多样、场景复杂，平均每张图片包含8.4个物体。同时， `image-level` 的标注分类为数千，详情如下表：

 `image-level` 标注信息：

| Train                    | Validation                                 | Test                              | # Classes                             | # Trainable Classes |       |
| ------------------------ | ------------------------------------------ | --------------------------------- | ------------------------------------- | ------------------- | ----- |
| Images                   | 9,011,219                                  | 41,620                            | 125,436                               | -                   | -     |
| Machine-Generated Labels | 78,977,695                                 | 512,093                           | 1,545,835                             | 7,870               | 4,764 |
| Human-Verified Labels    | 27,894,289 pos: 13,444,569 neg: 14,449,720 | 551,390 pos: 365,772 neg: 185,618 | 1,667,399 pos: 1,105,052 neg: 562,347 | 19,794              | 7,186 |

`object-level` 标注信息：

|        | Train      | Validation | Test    | # Classes |
| ------ | ---------- | ---------- | ------- | --------- |
| Images | 1,743,042  | 41,620     | 125,436 | -         |
| Boxes  | 14,610,229 | 204,621    | 625,282 | 600       |

更多详细信息可以参考：https://storage.googleapis.com/openimages/web/factsfigures.html 。


### Object level

每一行定义一个矩形框：

```txt
CopyImageID,Source,LabelName,Confidence,XMin,XMax,YMin,YMax,IsOccluded,IsTruncated,IsGroupOf,IsDepiction,IsInside
000026e7ee790996,freeform,/m/07j7r,1,0.071905,0.145346,0.206591,0.391306,0,1,1,0,0
000026e7ee790996,freeform,/m/07j7r,1,0.439756,0.572466,0.264153,0.435122,0,1,1,0,0
000026e7ee790996,freeform,/m/07j7r,1,0.668455,1.000000,0.000000,0.552825,0,1,1,0,0
000062a39995e348,freeform,/m/015p6,1,0.205719,0.849912,0.154144,1.000000,0,0,0,0,0
000062a39995e348,freeform,/m/05s2s,1,0.137133,0.377634,0.000000,0.884185,1,1,0,0,0
0000c64e1253d68f,freeform,/m/07yv9,1,0.000000,0.973850,0.000000,0.043342,0,1,1,0,0
0000c64e1253d68f,freeform,/m/0k4j,1,0.000000,0.513534,0.321356,0.689661,0,1,0,0,0
0000c64e1253d68f,freeform,/m/0k4j,1,0.016515,0.268228,0.299368,0.462906,1,0,0,0,0
0000c64e1253d68f,freeform,/m/0k4j,1,0.481498,0.904376,0.232029,0.489017,1,0,0,0,0
```

1. **ImageID**：图片 ID
2. **Source**：标注来源。
   - `freeform` 和 `xclick` 为手工标注。
   - `activemil` 使用方法[1](https://xblog.lufficc.com/blog/open-images-v4#fn:1)标注，并且人工验证保证 IoU>0.7。
3. **LabelName**：标签ID。
4. **Confidence**：置信度，总是为1。
5. **`XMin`, `XMax`, `YMin`, `YMax`**：矩形框坐标，已经归一化，范围为[0,1]。
6. **IsOccluded**: 物体是否被其他物体遮挡。
7. **IsTruncated**: 物体是否被截断（超出图像范围）。
8. **IsGroupOf**: 物体是否属于一组。 (如一群人)，包含5个以上物体，且彼此接触、互相遮挡。
9. **IsDepiction**: 物体是否为虚拟对象，如卡通人，不是现实世界物体。
10. **IsInside**: 图片是否从物体内部拍摄， 如从汽车或者建筑内部拍摄。

### Image level

```
CopyImageID,Source,LabelName,Confidence
000026e7ee790996,verification,/m/04hgtk,0
000026e7ee790996,verification,/m/07j7r,1
000026e7ee790996,crowdsource-verification,/m/01bqvp,1
000026e7ee790996,crowdsource-verification,/m/0csby,1
000026e7ee790996,verification,/m/01_m7,0
000026e7ee790996,verification,/m/01cbzq,1
000026e7ee790996,verification,/m/01czv3,0
000026e7ee790996,verification,/m/01v4jb,0
000026e7ee790996,verification,/m/03d1rd,0
```

1. **Source**： 表明标签如何生成：
   - `verification` Google 标注人员验证。
   - `crowdsource-verification` Crowdsource App 验证。
   - `machine` 机器生成的标签。
2. **Confidence**：人工验证的正样本为1，负样本为0，机器生成的为分数，通常 >= 0.5，其值越大，越不可能为 Fase Positive。
3. **Class Names**：标签ID。
4. **ImageID**：图片ID。

## 下载

可以再在[这里](https://storage.googleapis.com/openimages/web/download.html)找到详细的下载列表，如下图：

{% img /images/zHGPDc2Jxdv3yAEvVXqP5pmbIDTVsmSSjOqWs1sv.png %}

下载列表



而图片可以从[Figure Eight](https://www.figure-eight.com/dataset/open-images-annotated-with-bounding-boxes/)或[CVDF](https://github.com/cvdfoundation/open-images-dataset#download-images-with-bounding-boxes-annotations)下载：

{% img /images/QX1SrlV57Gqvw3Ar1I9YywpLPW3ApHng7dNOdw7E.png %}  

{% img /images/fsRDKR1Faa1jmJBMb884kWLEU9o3OrycUkBx7h9Z.png %}  

## 参考链接

1. https://storage.googleapis.com/openimages/web/factsfigures.html
2. https://ai.googleblog.com/2018/04/announcing-open-images-v4-and-eccv-2018.html

------

1. [We don't need no bounding-boxes: Training object class detectors using only human verification](https://arxiv.org/abs/1602.08405), Papadopolous et al., CVPR 2016. [↩](https://xblog.lufficc.com/blog/open-images-v4#fnref1:1)



来源：

https://xblog.lufficc.com/blog/open-images-v4