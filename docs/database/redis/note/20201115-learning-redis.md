# Redis 学习笔记


## string （字符串）

* 单值缓存  

  SET key value

  GET key

* 对象缓存

  1）SET user:1 value（json 格式数据）

  ​	  GET user:1

  2）MSET user:1:name Lily user:1:balance 999

  ​	  MGET user:1:name user:1:balance

  ​	  MGET user:1:name

* 分布式锁

  SETNX

* 计数器

  INCR article:readCount:{文章ID}

  GET article:readCount:{文章ID}

* WEB 集群 session 共享

* 分布式全局序列号

  INCBY orderId 1000  //redis 批量生成序列号

## hash（哈希）

* 对象缓存

  HSET key field value

  HMSET key field value [field value ...]

* 电商购物车

  1、用户 ID 为 key

  2、商品 ID 为 field

  3、商品数量为 value

  购物车操作：

  1、添加商品  hset cart:1001 10088 1

  2、增加数量  hincrby cart:1001 10088 1

  3、商品总数  hlen cart:1001 10088

  4、删除商品  hdel cart:1001 10088

  5、获取购物车所有商品  hgetall cart:1001
  
  ### 缺点：
  
  1）过期功能不能用在 field 上，只能用在 key 上
  
  2）Redis 集群架构下不适合大规模使用

## list （列表）

LPUSH key value [value...]

RPUSH key value [value...]

LPOP key

RPOP key

LRANGE key start stop

### 实现常用数据结构

Stack（栈）= LPUSH + LPOP -> FILO

Queue（队列）= LPUSH + RPOP 

BLocking MQ（阻塞队列）= LPUSH + BRPOP

### 实现消息流

## set（集合）

### set 常用操作

### set 常用计算

### 应用场景

#### 1、抽奖

1）点击参与抽奖加入集合

```
SADD key {userId}
```

2）查看参与抽奖所有用户

```
SMEMBERS key
```

3）抽取 count 名中奖者

```
SRANDMEMBER key count

//分批抽奖
SPOP key count
```



#### 2、微信微博点赞、收藏、标签

1）点赞

```
SADD like:{消息 ID} {用户 ID}
```

2）取消点赞

```
SREM like:{消息 ID} {用户 ID}
```

3）检查用户是否点过赞

```
SISMEMBER like:{消息 ID} {用户 ID}
```

4）获取点赞的用户列表

```
SMEMBERS like:{消息 ID} 
```

5）获取点赞用户数

```
SCARD like:{消息 ID} 
```

#### 3、集合操作实现微博等关注模型

## zset（有序集合）



## 应用

#### 1、实现排行榜


[Weiwf/redis-mindmap: 通过思维导图整理redis的重要知识点 (github.com)](https://github.com/Weiwf/redis-mindmap)

![](./src/redis持久化.png)


![](./src/redis复制.png)

![](./src/redis缓存设计.png)


![](./src/redis内存.png)


![](./src/redis内存优化.png)


![](./src/redis哨兵.png)


![](redis阻塞.png)