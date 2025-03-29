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
          { text: 'Filament', link: '/framework/filament/',activeMatch: '/framework/filament/*', },
          { text: 'Laravel', link: '/framework/laravel/',activeMatch: '/framework/laravel/*', },
        ]
      },
      {
        text: 'Database',
        activeMatch: '/database/*',
        items: [
          { text: 'MySQL', link: '/database/mysql/',activeMatch: '/lang/mysql/*', },
          { text: 'Redis', link: '/database/redis/',activeMatch: '/lang/redis/*', },
        ]
      },
      {
        text: 'DevOps',
        activeMatch: '/devops/*',
        items: [
          
        ]
      },
      { text: 'AI', link: '/ai/', activeMatch: '/ai/*', },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/' },
          { text: 'Runtime API Examples', link: '/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hefengbao' }
    ]
  }
})
