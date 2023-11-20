---
title: Laravel Rate Limiting in Production
date: 2020-05-22 20:17:26
updated: 2020-05-22 20:17:26
tags: 
- laravel
categories: 
- PHP
- Laravel
permalink: laravel-rate-limiting-in-production-926c4d581886.html
---

Whenever you develop a Laravel-based application that makes it into production you’ll probably provide some kind of API. Either for internal usage or for the customer to consume. However you most likely want to install some kind of rate limiting mechanism to make sure nobody is overusing your API and thus risking to take down your hosting infrastructure.

A well-known mechanism to prevent APIs from being overloaded with requests (kind of DoS) is a rate limiting. You’ll define a maximum number of requests in a given amount of time and when a client hits that maximum your web server will answer with *HTTP 429 Too Many Requests*. This indicates the client that there is some kind of cooldown time it needs to wait until further requests will be processed.

# Rate Limiting Middleware

Laravel provides a convenient *throttle* middleware that provides that kind of rate limiting. It even supports different limits based upon a model so you can limit the amount of requests based upon a dynamic parameter.

```php
<?php

// Allow up to 60 requests in 1 minute for that route (= 1 req/s)
Route::get('api/v1/user', 'Api\UserController@index')->middleware('throttle:60,1');

// Allow up to 60 requests in 60 minutes for that route (= 1 req/m)
Route::post('api/v1/user', 'Api\UserController@store')->middleware('throttle:60,60');

// Rate Limiting for a whole group of routes
Route::group(['middleware' => 'throttle:60,1'], function () {
    // [...]
});
```



Figure 1 — Rate Limiting using Laravel’s “throttle” middleware

This is a pretty cool default functionality. However it comes with a downside you will experience in production: The request **still** **hits** your Laravel application before being denied due to an exceeded limit which means the request **still generates load** on your web-server.

Of course the impact isn’t as high as it normally would be but in fact the web-server needs to boot up the Laravel framework and the request will pass any middleware that is processed before the *throttle* middleware itself. This alone could cause some database queries to be executed before the check for the exceeded rate limit even happens.

Finally the request causes impact on your cache server (e.g. Redis). Laravel’s rate limiting middleware stores the client’s IP address alongside with the amount of requests in a given time period and performs a check on every request.

# Load Balancer Rate Limiting

A technique I often use when bringing Laravel-based applications into production is a combination of Laravel Middleware Rate Limiting alongside with another rate limiting at the load balancer.

A load balancer is a piece of software that usually sits in front of your web-server stack. The traffic goes from the left to the right until it hits your Laravel application.

{% img /images/20200522/1_iRo2ersIlJiVfNJ0FOpXVw.png %}

Figure 2 — Position of the Load Balancer in the Web-Server Stack

It should be desirable to kill unwanted requests as early as possible in that chain of processing to reduce load in the backend. One of the most used load balancers is [HAProxy](http://www.haproxy.org/). Although the website looks like it’s software from the 90s, it’s battle-tested and under very active development. At the time of writing this article HAProxy has reached stable version 2.1 and is “cloud ready” for usage with modern technologies like Kubernetes.

HAProxy is mainly a Layer 7 HTTP Load Balancer (however it also supports some more protocols, which is pretty awesome). That means that it can handle SSL offloading, can look into the user’s request and decide a few key things upon the request details:

- First of all it can decide which backend to use for the incoming request which means you could split up your application into two different Laravel applications: One for the frontend and another one for the backend.
- It can restrict some URIs to a given IP range or require basic authentication for it. That way I’m able to protect the Laravel Horizon Dashboard in production — it’s only accessible from a specific VPN IP range for additional security.
- It can split your user’s request between several backend web-servers which means you are able to scale your deployment. You no longer need to get bigger and bigger machines, you can just add some. And you can remove them if no longer needed (e.g. after a huge sale event, when running a web shop).

However this article will focus on the configuration of rate limiting within HAProxy for the sake of performance and stability of your web-server deployment.

# Configuration of HAProxy

Before diving right into the configuration of the rate limiting itself it’s important to configure some basic limitations of HAProxy. You may want to configure a maximum amount of parallel connections that load balancer is allowed to handle at one time.

```
backend laravel
    timeout queue 10s
    server app-1 10.10.100.101:8080 check maxconn 30
    server app-2 10.10.100.102:8080 check maxconn 30
    server app-3 10.10.100.103:8080 check maxconn 30
```



Figure 3 — Max Connection Settings for HAProxy

When there are more than 90 (3 times 30 connections) concurrent connections HAProxy will put those requests in a queue and will forward them once the active connection count drops below 30 again. Usually this happens within milliseconds, so your users will barely notice under normal circumstances. The queue will be flushed after 10 seconds and the client receives an *HTTP 503 Service Unavailable* which means HAProxy couldn’t elect a backend server to serve the request to the user.

One would ask why you should limit those connections to the backend server. The idea behind this procedure is that it’s better to serve some HTTP errors to some clients than bury your web backend under such a heavy workload your application becomes inoperable. It’s a kind of a protection for your infrastructure.

## HAProxy Rate Limiting

To integrate rate limiting functionalities into HAProxy you need to configure a so called *stick table* within your frontend configuration block. That table works kind of like the Laravel throttle middleware under the hood. It stores a definable value as dictionary key and some counters that belong to that key.

To recognize a user we will use its requesting IP address as dictionary key. And the value we are interested in is the amount of HTTP connection the client establishes.

```
frontend app
    bind :80
    stick-table type ipv6 size 100k expire 30s store http_req_rate(10s)
    http-request track-sc0 src
    http-request deny deny_status 429 if { sc_http_req_rate(0) gt 20 }
    default_backend laravel
```



Figure 4 — Establish Rate Limiting within HAProxy

The first two lines of that configuration example are plain and basic frontend definitions in HAProxy. You create a new frontend (something that receives a user’s request) and bind it to port 80 which is the default HTTP port.

In Line 3 you create a *stick-table* that stores IP addresses as “dictionary key”, has a maximum size of 100k, thats values expire after 30 seconds and that stores the request rate of the latest 10 seconds for each client. The reason why we are using *ipv6* as table type is that the default *ip* type is not able to store IPv6 addresses due to a limitation of the key length. Although the type suggests that the table can only store IPv6 addresses this is not the case; it can easily store both, so don’t worry.

Afterwards we initialize a so called *sticky counter* (sc) to count the incoming HTTP requests of each user and **deny** the request with a *HTTP 429 Too Many Requests* if the HTTP request rate exceeds 20 requests for the given amount of time we defined in Line 3 (in our case this are seconds).

HAProxy will automatically take care of the table and purge old entries. So after some time the clients will be able to connect to the server again.

## Downsides

However there are some downsides you should consider when performing rate limiting with HAProxy. The Laravel Throttle Middleware has some neat features for usability.

{% img /images/20200522/1_f7n2ggc0-is5aThcEB6jTQ.png %}

Figure 5 — X-RateLimit headers of the Laravel Throttle Middleware

As you can see Laravel will automatically add some additional headers to its response when a request got rate-limited. You can see the hard limit of requests (5 in the example) and the remaining amount of requests you can perform before getting a *HTTP 429* from the server. Furthermore it provides a counter and a unix timestamp that shows you when you are allowed to perform new requests after a rate limit hit.

You won’t get those headers with the provided HAProxy configuration above. Therefore I personally decided to use the load balancer rate limiting technique **alongside** with Laravel’s rate limiting middleware. You easily can configure much higher limits within your load balancer than at your Laravel application and you still get some kind of protection against flooding your application.

For example you could set up the Laravel throttle middleware to prevent more requests than 60 per minute so the user gets one request per second. Then you could configure HAProxy to limit the requests when there are more than 120 requests per minute. So if your user is using your API correctly and honors the rate limiting headers he won’t ever hit your load balancer rate limit. But if the user just ignores the headers and continues flooding your application with requests although they get denied by your Laravel middleware he’ll run into your load balancer rate limiting at some point.

By doing this you can efficiently prevent your infrastructure from being flooded with requests.

# Conclusion

- Laravel provides a convenient default middleware to throttle requests using the cache backend you set up for your application.
- In production it may be a problem that your user’s requests still hit your web-server backend although the user is already rate-limited.
- Rate limiting via Laravel Middleware costs more than rate limiting at the edge of your web stack (at the load balancer).
- HAProxy provides a convenient way to achieve rate limiting using *stick-tables* and some easy deny rules at the frontend.
- It’s better to show some users a HTTP error that burying your infrastructure under heavy load (no matters whether it’s a DoS-attack or just a high amount of legit traffic).

In the future I’ll publish more articles about production-specific experiences with Laravel I made in the past. I hope you can get some takeaways for your own projects.

Hosting is fun and there are many ways to fine-tune your application very individually. One-Click-Hosting solutions may suite for many projects, but when it comes to performance and security you may prefer a tailored solution.



来源：

https://medium.com/swlh/laravel-rate-limiting-in-production-926c4d581886