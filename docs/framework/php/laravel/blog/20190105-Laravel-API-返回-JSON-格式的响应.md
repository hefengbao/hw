---
title: Laravel API 返回 JSON 格式的响应
date: 2019-01-05 13:04:48
updated: 2019-03-28 17:59:18
tags: laravel
categories: 
- PHP
- Laravel
permalink: laravel-api-json-response-VWbZXsR6.html
---
用 `Passport` 做的 API 认证，用 Postman 测试 API 时，在没有获取 `token` 的情况下访问接口，会自动跳转到登录界面，这显然不是我想要的，虽然可以设置 Headers 解决，但是我希望即使在浏览器端测试 API ，也是返回 json 格式的错误信息，而不是跳转到登录界面。

下面是解决办法：

1、新建中间件 `JsonResponse`：
```
php artisan make:middleware JsonResponse
```

2、编辑 `app/Http/Middleware/JsonResponse` 文件：

```
public function handle($request, Closure $next)
    {
        if ($request->is('api/*')){
            $request->headers->set('Accept', 'application/json');
        }
        return $next($request);
    }
```

3、把 `JsonResponse` 添加到 `Kernel` 中，编辑 `app/Http/Kernel`:

```
protected $middleware = [
		......
		
        //Application Middleware
        \App\Http\Middleware\JsonResponse::class,
    ];
```

再次访问接口,会有如下响应：

```
{
  "message": "Unauthenticated."
}
```