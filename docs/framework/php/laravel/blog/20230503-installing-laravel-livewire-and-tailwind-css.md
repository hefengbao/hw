# Laravel10.x 使用 Livewire 和 Tailwind CSS

## 1、创建项目：

```shell
composer create-project laravel/laravel livewire-tailwindcss-demo
#或者
laravel new livewire-tailwindcss-demo
```

## 2、安装 Livewire

```shell
composer require livewire/livewire
```

## 3、安装 Tailwindcss

```shell
# Install Tailwind CSS
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

# Create Tailwind CSS configuration file
npx tailwindcss init -p
```

`npx tailwindcss init -p` 命令会自动生成 `tailwind.config.js` 配置文件， 编辑 `tailwind.config.js` ：

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.js",
      "./resources/**/*.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

编辑 `./resources/css/app.css` ：

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

编辑 `./resources/views/welcome.blade.php ` :

```html
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Tailwindcss 3 in Laravel 10 with Vite</title>

    <!-- Fonts -->
    <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    @vite('resources/css/app.css')

</head>

<body class="antialiased">

<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col">
            <div class="h-1 bg-gray-200 rounded overflow-hidden">
                <div class="w-24 h-full bg-indigo-500"></div>
            </div>
            <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Space The Final Frontier</h1>
                <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
            </div>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div class="rounded-lg h-64 overflow-hidden">
                    <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503">
                </div>
                <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Shooting Stars</h2>
                <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div class="rounded-lg h-64 overflow-hidden">
                    <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1204x504">
                </div>
                <h2 class="text-xl font-medium title-font text-gray-900 mt-5">The Catalyzer</h2>
                <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div class="rounded-lg h-64 overflow-hidden">
                    <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1205x505">
                </div>
                <h2 class="text-xl font-medium title-font text-gray-900 mt-5">The 400 Blows</h2>
                <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</section>


</body>
</html>

```

## 4、 运行项目

首先编译 css :

```shell
npm run dev --host=8001
```

编辑 `.env` ：

```shell
APP_URL=http://127.0.0.1:8001
```

运行项目：

```shell
php artisan serve --port=8001
```

访问 `http://127.0.0.1:8001` 查看效果。

端口可选择自己喜欢用的，只要统一就不会出错。

参考：
https://alemsbaja.hashnode.dev/tailwindcss-3-setup-in-laravel-10-using-vite