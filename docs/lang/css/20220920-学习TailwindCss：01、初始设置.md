---
title: 学习TailwindCss：初始设置
date: 2022-09-20 09:15:29
tags: tailwindcss
categories: 前端
permalink: tailwindcss-setup-20220920.html
---

使用 vs code 编辑器，可以安装 `Tailwind CSS IntelliSense` 插件， 参考 [Editor Setup - Tailwind CSS](https://tailwindcss.com/docs/editor-setup)。

如果没安装 `NodeJs` 环境则需要安装。

新建文件夹 `tailwindcssdemo`，并进入目录, 在 `Terminal` 运行:

```shell
// 初始化项目详细，demo 项目，连按回车即可 😀
npm init 


npm install -D tailwindcss

npx tailwindcss init
```

接下来的配置可按文档进行 [Installation: Tailwind CLI - Tailwind CSS](https://tailwindcss.com/docs/installation)：

修改 `tailwind.config.js` 配置：

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

新建目录和文件 `src/input.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

在 Terminal 运行如下命令：

```shell
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

在 `src` 目录下新建 `index.html`：

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/dist/output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```

双击 `index.html` 可在浏览器预览。

![](https://hefengbao.github.io/assets/images/202209200947833.png)

或者可安装 `http-server`:
```shell
npm instll -g http-server
```

然后进入 `src` 目录运行：
```shell
http-server
```

```shell
Starting up http-server, serving ./

http-server version: 14.1.1

http-server settings:
CORS: disabled
Cache: 3600 seconds
Connection Timeout: 120 seconds
Directory Listings: visible
AutoIndex: visible
Serve GZIP Files: false
Serve Brotli Files: false
Default File Extension: none

Available on:
  http://127.0.0.1:8080
Hit CTRL-C to stop the server
```

然后在浏览器访问`http://127.0.0.1:8080` 预览。