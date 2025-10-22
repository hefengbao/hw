# JavaScript Promise

Promise 是一个构造函数，通过 `new` 关键字实例化对象

## Promise 语法

```javascript
const p = new Promise((resolve, reject)=>{})

console.dir(p)
```

* Promise 接受一个函数作为参数
* 在参数函数中接受两个参数
     * resolve:
     * reject:

## Promise 实例

promise 实例有两个属性

- state：状态
- result：结果

1) Promise 的状态

1. pending
2. fulfilled
3. rejected

2) Promise 状态的改变

通过调用 `resolve()` 和 `reject()` 改变当前 promise 对象的状态

```javascript
const p = new Promise((resolve, reject)=>{
    // reslove() 调用函数，是当前 promise 对象的状态变为 fulfilled
    resolve()
})

console.dir(p) //fulfilled
```



```javascript
const p = new Promise((resolve, reject)=>{
    // reject() 调用函数，是当前 promise 对象的状态变为 rejected
    reject()
})

console.dir(p) //rejected
```

> promise 的状态改变时一次性的

```javascript
const p = new Promise((resolve, reject)=>{
     resolve()
     reject()
})

console.dir(p) //fulfilled
```

3) Promise 的结果

```javascript
const p = new Promise((resolve, reject)=>{
     resolve('Success')
})

console.dir(p)
```

## Promise 的使用

1） then 方法

```javascript
const p = new Promise((resolve, reject)=>{
     resolve('Success')
})
// then 是一个函数
// 接受两个函数参数
// 返回结果为一个新的 promise 对象
p.then(()=>{
    // promise 状态为 fulfilled 时调用
    console.log("成功时调用")
},()=>{
    // promise 状态为 rejected 时调用
     console.log("失败时调用")
})
console.dir(p)

```

```javascript
const p = new Promise((resolve, reject)=>{
     resolve('Success')
})
p.then((res)=>{
   	console.log(res)
    console.log("成功时调用")
},(err)=>{
     console.log(err)
     console.log("失败时调用")
})
console.dir(p)
```

```javascript
const p = new Promise((resolve, reject)=>{
     resolve('Success')
})
const r = p.then((res)=>{
   	console.log(res)
    console.log("成功时调用")
},(err)=>{
     console.log(err)
     console.log("失败时调用")
})
console.dir(r)
```


> then 返回结果为一个新的 promise 对象, 状态为 pending


```javascript
const t = new Promise((resolve, reject) => {}).then((res)=> {
    conlose.log('Success')
},(err)=>{
    conlose.log('Fail')
})

console.dir(t)
```

> 如果 promise 的状态不改变， then 函数里的方法不执行

2) catch

```javascript
const p = new Promise((resolve, reject) => {
    reject()
})

p.catch(()=>{
    console.log('Failure')
})

console.dir(p)
```

```javascript
const p = new Promise((resolve, reject) => {
    console.log(a)
})

p.catch((erro)=>{
    console.log('Failure = ' + erro)
})

console.dir(p)
```

参考：

[2020最好理解的Promise教程_哔哩哔哩 (゜-゜)つロ 干杯~-bilibili](https://www.bilibili.com/video/BV1454y1R7vj)

其他：

<video width="320" height="240" controls>
  <source src="./src/JavaScript-Promise.mp4"  type="video/mp4">
  您的浏览器不支持 HTML5 video 标签。
</video>