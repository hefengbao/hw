# 模板

## Boilerplate

Much like [I maintain my own CSS reset](https://vale.rocks/posts/css-reset), which provides me a clean slate for my styles, I maintain my own boilerplate, which I use as a base structure and reference when creating HTML documents. Much like my CSS reset, it is very opinionated. Here it is in full:

```html
<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width">
		<meta name="text-scale" content="scale">
		<title>Name of Page | Name of Website</title>

		<link rel="stylesheet" href="/styles.css">

		<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>

		<meta property="og:title" content="Name of Page">
		<meta name="description" content="Description of this page.">
		<meta property="og:description" content="Description of this page for embeds.">

		<link rel="icon" type="image/svg+xml" href="https://example.com/favicon.svg">

		<meta property="og:image" content="https://example.com/embed-image.webp">
		<meta property="og:image:alt" content="A picture of something.">
		<meta property="og:image:type" content="image/webp">
		<meta property="og:image:width" content="1200">
		<meta property="og:image:height" content="630">

		<link rel="canonical" href="https://example.com/page">
		<meta property="og:url" content="https://example.com/page">

		<meta property="og:site_name" content="Website Name">

		<meta name="author" content="A N Other">

		<meta name="color-scheme" content="light dark">
		<meta name="theme-color" content="red" media="(prefers-color-scheme: light)">
		<meta name="theme-color" content="green" media="(prefers-color-scheme: dark)">

		<link rel="alternate" type="application/rss+xml" title="RSS feed of posts on Website Name." href="/posts/feed.xml">
		<link rel="alternate" type="application/feed+json" title="JSON feed of posts on Website Name." href="/posts/feed.json">

		<link rel="search" type="application/opensearchdescription+xml" title="Website Search" href="https://example.com/opensearch.xml">
		<link rel="manifest" href="/app.webmanifest">
	</head>

	<body>
		<header><nav></nav></header>
		<main id="main"></main>
		<footer id="footer"></footer>
	</body>
</html>
```

## Breakdown

值得注意的是，我的 HTML 样板是有顺序的。文档头部的顺序尤其对性能有很大影响。 [Capo.js](https://rviscomi.github.io/capo.js/) 是一个出色的工具，可以从性能角度评估文档 `<head>` 中元素的顺序。

```html
<!doctype html>
```

这是现行 HTML 标准的文档类型声明，自 HTML 5 引入。我总是包含它，以避免落入怪异模式。

```html
<html lang="en"></html>
```

打开包裹文档的标签，并使用 `lang` 属性通过符合 [RFC 5646](https://www.rfc-editor.org/info/rfc5646/) 的标签定义文档语言。提供的语言为整个页面提供默认值，并且可以逐元素覆盖。提供语言对于自动翻译、连字符等排版以及辅助技术（尤其是屏幕阅读器）都很重要。`html` 和 `lang`。

```html
<meta charset="UTF-8">
```

我放在 `<head>` 中的第一个元素始终是 `<meta>` 标签，其 `charset` 值为 `UTF-8`，这是截至 HTML 5 唯一有效的编码。它始终位于 `<head>` 顶部，因为它必须出现在文档前 1024 字节内，并且应在任何可能被弄乱的元素之前。

```html
<meta name="viewport" content="width=device-width">
```

当第一代 iPhone 于 2007 年推出时，它以期望用户缩放和平移的方式渲染桌面网站。Apple 为真正针对移动端优化的网站引入了上面的 `meta` 标签，最终它被更广泛地支持，如今已被广泛支持，用来让网站具有响应式。

Many people will include , however, after extensive testing and research, I’ve identified that [it isn’t necessary to include any more](https://vale.rocks/micros/20260902-1350). It can be included to change the page’s presentation if an element horizontally expands beyond the viewport width, but that should never be allowed to happen [and I advise against it](https://vale.rocks/micros/20260908-1315).`initial-scale=1`

`minimum-scale`, , and all greatly harm accessibility and should never`maximum-scale``user-scalable`1 be used. They should generally be stripped from sites whenever noticed.

```html
<meta name="text-scale" content="scale">
```

Makes text [scale in accordance with the system setting](https://matuzo.at/blog/2026/text-scaling-meta-tag). 如果存在此标签，那么页面的样式必须预期到它并相应编写。这对于避免内容缩放带来的可访问性陷阱尤为重要。

```html
<title>Name of Page | Name of Website</title>
```

页面标题。它是一个必需值，会显示在许多地方。它被用作页面被收藏时的名称、搜索引擎中的标签名称，以及任何其他需要页面名称的地方。我通常先显示页面标题，后跟网站标题。

```html
<link rel="stylesheet" href="/styles.css">
```

Whatever styles must be imported can be imported here. Styles should generally be imported in the page head rather than using the CSS at-rule within a stylesheet to avoid a waterfall, where the stylesheet must first be fetched to then fetch additional stylesheets.`@import`

```html
<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>
```

Complex variable fonts can be rather large in size, even after subletting and other optimisations, so I preload fonts that I know will be used on the page. Even if a font is located on the same-origin, [the `crossorigin` attribute is still necessary](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/preload#cors-enabled_fetches). I always serve fonts as WOFF2, as it is the most performant widely supported font format.

```html
<meta property="og:title" content="Name of Page">
```

The is used for embeds, such as those seen on social media. It is one of the many metadata values of [the Open Graph protocol](https://ogp.me/). While I’ll typically include the site name at the end of the element, I leave it absent in the . In the majority of cases embeds will show the domain or next to the title, rendering it a duplicate.`og:title``<title>``og:title``og:site_name`

```html
<meta name="description" content="Description of this page.">
```

I mainly treat this meta description field as an exercise in search engine optimisation. Previously major search engines would expose the description to users on search pages, however they mostly fetch directly from the document itself now.

```html
<meta property="og:description" content="Description of this page for embeds.">
```

The is sometimes shown in embeds. If absent, embeds usually forgo a description or fall back to the meta description. I like to write short, often quippy content here that strikes intrigue and fits in social media or chat feeds.`og:description`

```html
<link rel="icon" type="image/svg+xml" href="https://example.com/favicon.svg">
```

A favicon is an important bit of branding for all websites – especially when it comes to identifying tabs when you have many open. I serve favicons as SVGs, as they’re [well supported](https://caniuse.com/link-icon-svg), can be made to dynamically adapt to light/dark mode, look good at all sizes, and remove the need for maintaining a set of raster favicons in different sizes.

```html
<meta property="og:image" content="https://example.com/embed-image.webp">
<meta property="og:image:alt" content="A picture of something.">
<meta property="og:image:type" content="image/webp">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```

The image defined in the is often shown in a site’s embed on the likes of social media or chat platforms. It is advantageous to include on almost every site, as it adds context and usually increases an embed’s size for better presence. Support for alt text on embedded images is middling, so it shouldn’t be relied upon. Some sites support it, some ignore it, and some support it in odd ways. I make the effort to include it but keep it brief. 1200px by 630px is a widely supported size, and WebP is the best supported of the modern image formats I’ve tested.`og:image`

```html
<link rel="canonical" href="https://example.com/page">
<meta property="og:url" content="https://example.com/page">
```

A canonical link to the authoritative version of the page is important for indicating what should be considered the source of truth. This is especially important if content is duplicated.

```html
<meta property="og:site_name" content="Website Name">
```

The name of the website to be shown in embeds. As aforementioned, some embeds will show this name near the page’s title.

```html
<meta name="author" content="A N Other">
```

The tag obviously indicates the author of a page. It isn’t strictly necessary but is useful for developers to identify who is responsible for a page.`author`

```html
<meta name="color-scheme" content="light dark">
```

Setting the meta tag with a content attribute value of tells the browser that a site supports both light and dark modes. Having it defined in the head prevents a Flash of Unstyled Content (FOUC), such as a screen of bright white when the site and browser are set to dark mode.`color-scheme``light dark`

```html
<meta name="theme-color" content="red" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="green" media="(prefers-color-scheme: dark)">
```

Used for theming the browser chrome of sites installed as progressive web apps (PWAs) and for theming the browser chrome in Chrome for Android (but only in light mode). Some other browsers also interpret these values in various ways. I use the media attribute to set the colour independently for both light and dark modes.

```html
<link rel="alternate" type="application/rss+xml" title="RSS feed of posts on Website Name." href="/posts/feed.xml">
<link rel="alternate" type="application/feed+json" title="JSON feed of posts on Website Name." href="/posts/feed.json">
```

If a site has syndication feeds, then including these in the head [permits autodiscovery of them](https://piccalil.li/blog/a-quick-guide-to-creating-syndication-feeds/#auto-discovery).

```html
<link rel="search" type="application/opensearchdescription+xml" title="Website Search" href="https://example.com/opensearch.xml">
```

If a site has integrated search functionality, then establishing an [opensearch.xml](https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md) file and referencing it from your document head exposes it to browsers so they can provide a rich searching experience. The exact experience differs by browser, but in many cases it allows searching with a site via the browser’s own address bar and also provides a simple way to add a search engine.

```html
<link rel="manifest" href="/app.webmanifest">
```

I’m a progressive web app evangelist. I love them, and many sites benefit from being PWAs, even if a site is not a typical ‘app’. I’ll [define a manifest](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest) for most sites even if the only benefit is that the presentation is nicer if people add the site to their homescreen. This declaration helps browsers discover the manifest.

```html
<header><nav></nav></header>
<main id="main"></main>
<footer id="footer"></footer>
```

This defines any site’s general structure. The holds a navigation element for general site navigation. The holds the primary page content and has an attribute to provide an anchor, which is important for ‘skip to’ links. The holds information about the current site and page. Like , I give it an for anchoring purposes. I don’t get any more detailed with my HTML body boilerplate, as there is so much variance depending on the site.`body``header``main``id``footer``main``id`

---

This is just boilerplate. It is a template for what I’ll include on roughly every site, with some light alterations. Every site is sure to deviate from this depending on its requirements, but this is a reasonable foundation.

If a page is expected to be cited academically, then you’d consider including Google Scholar’s meta tags and [Dublin Core](https://www.dublincore.org/specifications/dublin-core/)’s meta tags. If a page represents an article, then you’d include the tags from the Open Graph Protocol’s [article namespace](https://ogp.me/#type_article) and perhaps tags pertaining to a publishing system. A video, audio, book, or other content type would similarly be marked up differently. Many sites will also benefit from [`JSON-LD` structured data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data). It all depends on the particular page and what is needed.`citation_*``dc`

## 资料

[My HTML Boilerplate | Vale.Rocks](https://vale.rocks/posts/html-boilerplate)