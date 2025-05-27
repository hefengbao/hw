# Laravel 读取 json 文件

假设 json 文件存放在 `storage/app/` 目录下：

方法一：

```php
use Illuminate\Support\Facades\File;

$contents = File::get(Storage::path('product.json'));
$arr = json_decode($contents, true);
```

方法二：

```php
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

$arr = File::json(Storage::path('product.json'), true);
```

方法三：

```php

use Illuminate\Support\Facades\Storage;

$arr = Storage::json('product.json');
```

参考：

https://www.laravelia.com/post/how-to-read-json-file-in-laravel-10