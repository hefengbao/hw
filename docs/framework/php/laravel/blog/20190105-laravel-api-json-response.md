# Laravel 定时任务

用 `Passport` 做的 API 认证，用 Postman 测试 API 时，在没有获取 `token` 的情况下访问接口，会自动跳转到登录界面，这显然不是我想要的，虽然可以设置 Headers 解决，但是我希望即使在浏览器端测试 API ，也是返回 json 格式的错误信息，而不是跳转到登录界面。

下面是解决办法：

1、新建中间件 `JsonResponse`：

```shell
php artisan make:middleware JsonResponse
```

2、编辑 `app/Http/Middleware/JsonResponse` 文件：

```php
public function handle($request, Closure $next)
    {
        if ($request->is('api/*')){
            $request->headers->set('Accept', 'application/json');
        }
        return $next($request);
    }
```

3、把 `JsonResponse` 添加到 `Kernel` 中，编辑 `app/Http/Kernel`:

```php
protected $middleware = [
		......
		
        //Application Middleware
        \App\Http\Middleware\JsonResponse::class,
    ];
```

再次访问接口,会有如下响应：

```json
{
  "message": "Unauthenticated."
}
```