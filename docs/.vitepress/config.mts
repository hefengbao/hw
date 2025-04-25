import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: "Hello World",
  base: '/hw/',
  description: "一个程序员的笔记 & 博客",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      level: [2,3],
      label: '页面导航'
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    footer: {
      message: '熟能生巧！',
      copyright: 'Copyright © 2025 ♥贺丰宝♥'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Lang',
        activeMatch: '/lang/*',
        items: [
          { text: 'CSS', link: '/lang/css/', activeMatch: '/lang/chinecssse/*' },
          { text: 'Html', link: '/lang/html/', activeMatch: '/lang/html/*' },
          { text: 'Java', link: '/lang/java/', activeMatch: '/lang/java/*' },
          { text: 'Javascript', link: '/lang/javascript/', activeMatch: '/lang/javascript/*' },
          { text: 'Kotlin', link: '/lang/kotlin/', activeMatch: '/lang/kotlin/*' },
          { text: 'PHP', link: '/lang/php/', activeMatch: '/lang/php/*' },
          { text: 'Python', link: '/lang/python/', activeMatch: '/lang/python/*' },
        ]
      },
      {
        text: 'Framework',
        activeMatch: '/framework/*',
        items: [
          {
            text: 'Javascript',
            activeMatch: '/framework/javascript/*',
            items: [
              { text: 'Jquery', link: '/framework/javascript/jquery/',activeMatch: '/framework/javascript/jquery/*' },
              { text: 'Vitepress', link: '/framework/javascript/vitepress/',activeMatch: '/framework/javascript/vitepress/*' },
              { text: 'Vue', link: '/framework/javascript/vue/',activeMatch: '/framework/javascript/vue/*' },
            ]
          },
          {
            text: 'PHP',
            activeMatch: '/framework/php/*',
            items: [
              { text: 'Filament', link: '/framework/php/filament/',activeMatch: '/framework/php/filament/*' },
              { text: 'Laravel', link: '/framework/php/laravel/',activeMatch: '/framework/php/laravel/*' },
            ]
          },
        ]
      },
      {
        text: '移动开发',
        activeMatch: '/mobile-development/*',
        items: [
          { text: 'Android', link: '/mobile-development/android/',activeMatch: '/mobile-development/android/*' },
        ]
      },
      {
        text: 'Web开发',
        link: '/web-development/',
        activeMatch: '/web-development/*',
      },
      {
        text: 'Database',
        activeMatch: '/database/*',
        items: [
          { text: 'MySQL', link: '/database/mysql/',activeMatch: '/lang/mysql/*' },
          { text: 'Oracle', link: '/database/oracle/',activeMatch: '/lang/oracle/*' },
          { text: 'Redis', link: '/database/redis/',activeMatch: '/lang/redis/*' },
          { text: 'SQLite', link: '/database/sqllite/',activeMatch: '/lang/sqllite/*' },
        ]
      },
      {
        text: 'DevOps',
        activeMatch: '/devops/*',
        items: [
          { 
            text: '开发环境', 
            activeMatch: '/devops/env/*', 
            items: [
              { text: 'Docker', link: '/devops/env/docker/',activeMatch: '/devops/env/docker/*' },
              { text: 'IDE', link: '/devops/env/ide/',activeMatch: '/devops/env/ide/*' },
              { text: 'MySql', link: '/devops/env/mysql/',activeMatch: '/devops/env/mysql/*' },
              { text: 'Node.js', link: '/devops/env/nodejs/',activeMatch: '/devops/env/nodejs/*' },
              { text: 'Oracle', link: '/devops/env/oracle/',activeMatch: '/devops/env/oracle/*' },
              { text: 'PHP', link: '/devops/env/php/',activeMatch: '/devops/env/php/*' },
              { text: 'Redis', link: '/devops/env/redis/',activeMatch: '/devops/env/redis/*' },
            ]
          },
        ]
      },
      { text: 'AI', link: '/ai/', activeMatch: '/ai/*' },
    ],

    sidebar: {
      '/devops/env/docker/': [
        { text: '首页', link: '/devops/env/docker/index' },
      ],
      '/devops/env/ide/': [
        { text: '首页', link: '/devops/env/ide/index' },
      ],
      '/devops/env/mysql/': [
        { text: '首页', link: '/devops/env/mysql/index' },
      ],
      '/devops/env/nodejs/': [
        { text: '首页', link: '/devops/env/nodejs/index' },
      ],
      '/devops/env/oracle/': [
        { text: '首页', link: '/devops/env/oracle/index' },
      ],
      '/devops/env/php/': [
        { text: '首页', link: '/devops/env/php/index' },
      ],
      '/devops/env/redis/': [
        { text: '首页', link: '/devops/env/redis/index' },
      ],
      '/framework/javascript/jquery/': [
        { text: '首页', link: '/framework/javascript/jquery/index' },
      ],
      '/framework/javascript/vitepress/': [
        { text: '首页', link: '/framework/javascript/vitepress/index' },
        { 
          text: '插件', 
          items: [
            { text: '图片查看器', link: '/framework/javascript/vitepress/vitepress-plugin-image-viewer' },
            { text: 'Giscus 评论系统', link: '/framework/javascript/vitepress/vitepress-plugin-comment-with-giscus' },
            { text: '哔哩哔哩视频', link: '/framework/javascript/vitepress/vitepress-plugin-bilibili-video' },
          ]
        },
      ],
      '/framework/javascript/vue/': [
        { text: '首页', link: '/framework/javascript/vue/index' },
      ],
      '/framework/php/filament/': [
        { text: '首页', link: '/framework/php/filament/index' },
      ],
      '/framework/php/laravel/': [
        { text: '首页', link: '/framework/php/laravel/index' },
      ],
      '/lang/python/': [
        { text: '首页', link: '/lang/python/index' },
        {
          text: '笔记',
          items: [
            { text: '安装', link: '/lang/python/note/install' },
            { text: 'IDE', link: '/lang/python/note/ide' },
            { text: '基础', link: '/lang/python/note/basic' },
            { 
              text: '数据类型', 
              items: [
                { text: '数字', link: '/lang/python/note/datatype/number' },
                { text: '字符串', link: '/lang/python/note/datatype/string' },
                { text: '布尔', link: '/lang/python/note/datatype/bool' },
                { text: '列表', link: '/lang/python/note/datatype/list' },
                { text: '元组', link: '/lang/python/note/datatype/tuple' },
                { text: '集合', link: '/lang/python/note/datatype/set' },
                { text: '字典', link: '/lang/python/note/datatype/dict' },
              ]
            },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hefengbao' }
    ]
  }
})
