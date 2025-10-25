# 生成器（Generator）

```php
function exampleGenerator(): Generator {
    echo "Started";
 
    $value = 4;
 
    yield 1;
    yield;
    yield 3;
    yield $value;
}
```

```php
$generator = exampleGenerator();
```

`current()` 获取当前值，`next()` 执行下一步：

```php
$result = $generator->current();
var_dump($result); // int(1)
// Other code, send email, log, sleep...
 
$generator->next(); // Restart coroutine
var_dump($generator->current()); // NULL
 
$generator->next(); // Current value = 3
$generator->next();
var_dump($generator->current()); // int(4)
```

使用 `foreach` 循环显示：

```php
```php
foreach ($generator as $key => $value) {  
    var_dump($key .'=>'. $value);  
}
```

`valid()` 判断是否还有值：

```php
 while($generator->valid()){  
    var_dump($generator->key() .'=>'.$generator->current());  
    $generator->next();  
}
```

`send($value)` 接收值：

```php
function coroutine(): Generator {
    $received = yield 'Hello from the Coroutine';
    yield "Received: ". $received;
}
 
$coroutine = coroutine();
 
$result = $coroutine->current();
var_dump($result); // Hello from the Coroutine
 
$next = $coroutine->send('Greetings from the code');
var_dump($next); // Received: Greetings from the code.
```

[探索 PHP 中的协程：生成器和纤程 | 日思录](https://tubring.cn/articles/coroutines-in-php)