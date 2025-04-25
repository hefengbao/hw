# Vitepress 集成图片查看器（图片预览）

## 安装

```shell
# npm 
npm i vitepress-plugin-image-viewer

# yarn
yarn add vitepress-plugin-image-viewer

# pnpm
pnpm add vitepress-plugin-image-viewer
# 注意：使用 pnpm 时，需要额外安装 viewerjs
pnpm add viewerjs
```

## 配置

创建目录文件 `.vitepress/theme/index.mts` 并编辑，如果使用默认主题（Theme）直接添加如下内容即可，自定义主题则根据实际情况添加：

```ts
import DefaultTheme from 'vitepress/theme';
import 'viewerjs/dist/viewer.min.css';
import imageViewer from 'vitepress-plugin-image-viewer';
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';
import { useRoute } from 'vitepress';

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
        // 注册全局组件，如果你不想使用也可以不添加
        ctx.app.component('vImageViewer', vImageViewer);
    },

    setup() {
        // 获取路由
        const route = useRoute();
        // 使用
        imageViewer(route);
    }
};
```

`index.mts` 根据实际情况可以是 `index.ts` 、`index.js`。
## 演示

![](./src/v1.14.0.png)

点击图片查看效果。

参考：

[vitepress-plugin-image-viewer/README_zh.md at main · T-miracle/vitepress-plugin-image-viewer](https://github.com/T-miracle/vitepress-plugin-image-viewer/blob/main/README_zh.md)