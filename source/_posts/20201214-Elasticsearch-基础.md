---
title: Elasticearch 基础
date: 2020-12-14 20:12:32
updated: 2020-12-14 20:12:32
tags: elasticsearch
categories: 资料
permalink: elasticsearch.html
---

{% img /images/2020121402.jpeg %}

## 基本概念：
· Cluster「集群」：由部署在多个机器的ES节点组成，以处理较大数据集和实现高可用；* Node「节点」：机器上的ES进程，可配置不同类型的节点；
· Master Node「主节点」：用于集群选主。由其中一个节点担任主节点，负责集群元数据管理，如索引创建，节点离开加入集群等；
· Data Node「数据节点」：负责索引数据存储；
· Index「索引」：索引数据的逻辑集合，可类比关系型数据的DataBase；
· Shard「分片」：索引数据子集，通过将分片分配至集群不同节点，实现数据横向扩展。以解决单个节点CPU、内存、磁盘处理能力不足的情况；
· Primary Shard「主分片」：数据分片采用主从模式，由分片接收索引操作；
· Replica Shard「副本分片」：主分片的拷贝，以提高查询吞吐量和实现数据高可靠。主分片异常时，其中一个副本分片会自动提升为新的主分片。

https://mp.weixin.qq.com/s/4J99iUQXmQk4BdjVoi14QA

