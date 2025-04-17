import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: "HelloWorld",
  base: '/helloworld/',
  description: "一个程序员的笔记",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Lang',
        activeMatch: '/lang/*',
        items: [
          { text: 'CSS', link: '/lang/css/',activeMatch: '/lang/chinecssse/*', },
          { text: 'Html', link: '/lang/html/',activeMatch: '/lang/html/*', },
          { text: 'Java', link: '/lang/java/',activeMatch: '/lang/java/*', },
          { text: 'Javascript', link: '/lang/javascript/',activeMatch: '/lang/javascript/*', },
          { text: 'Kotlin', link: '/lang/kotlin/',activeMatch: '/lang/kotlin/*', },
          { text: 'PHP', link: '/lang/php/',activeMatch: '/lang/php/*', },
        ]
      },
      {
        text: 'Framework',
        activeMatch: '/framework/*',
        items: [
          { text: 'Filament', link: '/framework/php/filament/',activeMatch: '/framework/php/filament/*', },
          { text: 'Laravel', link: '/framework/php/laravel/',activeMatch: '/framework/php/laravel/*', },
        ]
      },
      {
        text: '移动开发',
        activeMatch: '/mobile-development/*',
        items: [
          { text: 'android', link: '/mobile-development/android/',activeMatch: '/mobile-development/android/*', },
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
          { text: 'MySQL', link: '/database/mysql/',activeMatch: '/lang/mysql/*', },
          { text: 'Oracle', link: '/database/oracle/',activeMatch: '/lang/oracle/*', },
          { text: 'Redis', link: '/database/redis/',activeMatch: '/lang/redis/*', },
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
              { text: 'Docker', link: '/devops/env/docker/',activeMatch: '/devops/env/docker/*', },
              { text: 'IDE', link: '/devops/env/ide/',activeMatch: '/devops/env/ide/*', },
              { text: 'MySql', link: '/devops/env/mysql/',activeMatch: '/devops/env/mysql/*', },
              { text: 'Node.js', link: '/devops/env/nodejs/',activeMatch: '/devops/env/nodejs/*', },
              { text: 'Oracle', link: '/devops/env/oracle/',activeMatch: '/devops/env/oracle/*', },
              { text: 'PHP', link: '/devops/env/php/',activeMatch: '/devops/env/php/*', },
              { text: 'Redis', link: '/devops/env/redis/',activeMatch: '/devops/env/redis/*', },
            ]
          },
        ]
      },
      { text: 'AI', link: '/ai/', activeMatch: '/ai/*', },
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
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hefengbao' }
    ]
  }
})
