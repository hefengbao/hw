import DefaultTheme from 'vitepress/theme';
import 'viewerjs/dist/viewer.min.css';
import imageViewer from 'vitepress-plugin-image-viewer';
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import { toRefs } from "vue";

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
        // 注册全局组件，如果你不想使用也可以不添加
        ctx.app.component('vImageViewer', vImageViewer);
        // ...
    },
    setup() {
        // 获取路由
        const route = useRoute();
        // 获取当前页面的 frontmatter
        const { frontmatter } = toRefs(useData());
        // 使用
        imageViewer(route);

        giscusTalk({
            repo: 'hefengbao/hw',
            repoId: 'MDEwOlJlcG9zaXRvcnkxNzU3Njk1Njk=',
            category: 'Announcements', // 或其他分类
            categoryId: 'DIC_kwDOCnoH4c4CqaUM',
            mapping: 'pathname',
            inputPosition: 'top',
            lang: 'zh-CN',
            lightTheme: 'light',
            darkTheme: 'transparent_dark',
        }, {
            frontmatter,
            route
        }, true);
    },
};