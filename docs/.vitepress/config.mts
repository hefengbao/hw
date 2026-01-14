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
      level: [2, 3],
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
      message: '亲手创建自己所需的软件，是程序员的幸运。',
      copyright: `Copyright © 2019-${new Date().getFullYear()} ♥贺丰宝♥`
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
          { text: 'CSS', link: '/lang/css/', activeMatch: '/lang/css/*' },
          { text: 'Go', link: '/lang/go/', activeMatch: '/lang/go/*' },
          { text: 'Html', link: '/lang/html/', activeMatch: '/lang/html/*' },
          { text: 'Java', link: '/lang/java/', activeMatch: '/lang/java/*' },
          { text: 'Javascript', link: '/lang/javascript/', activeMatch: '/lang/javascript/*' },
          { text: 'JSON', link: '/lang/json/', activeMatch: '/lang/json/*' },
          { text: 'Kotlin', link: '/lang/kotlin/', activeMatch: '/lang/kotlin/*' },
          { text: 'Markdown', link: '/lang/markdown/', activeMatch: '/lang/markdown/*' },
          { text: 'PHP', link: '/lang/php/', activeMatch: '/lang/php/*' },
          { text: 'Python', link: '/lang/python/', activeMatch: '/lang/python/*' },
          { text: 'SQL', link: '/lang/sql/', activeMatch: '/lang/sql/*' },
        ]
      },
      {
        text: 'Framework',
        activeMatch: '/framework/*',
        items: [
          {
            text: 'Javascript',
            items: [
              { text: 'Jquery', link: '/framework/javascript/jquery/', activeMatch: '/framework/javascript/jquery/*' },
              { text: 'Vitepress', link: '/framework/javascript/vitepress/', activeMatch: '/framework/javascript/vitepress/*' },
              { text: 'Vue', link: '/framework/javascript/vue/', activeMatch: '/framework/javascript/vue/*' },
            ]
          },
          {
            text: 'PHP',
            items: [
              { text: 'Filament', link: '/framework/php/filament/', activeMatch: '/framework/php/filament/*' },
              { text: 'Laravel', link: '/framework/php/laravel/', activeMatch: '/framework/php/laravel/*' },
            ]
          },
          {
            text: 'Python',
            items: [
              { text: 'Flash', link: '/framework/python/flask/', activeMatch: '/framework/python/flask/*' },
            ]
          },
        ]
      },
      {
        text: '移动开发',
        activeMatch: '/mobile-development/*',
        items: [
          { text: 'Android', link: '/mobile-development/android/', activeMatch: '/mobile-development/android/*' },
          { text: 'HarmonyOS', link: '/mobile-development/harmonyos/', activeMatch: '/mobile-development/harmonyos/*' },
          { text: 'KMP', link: '/mobile-development/kmp/', activeMatch: '/mobile-development/kmp/*' },
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
          { text: 'MySQL', link: '/database/mysql/', activeMatch: '/database/mysql/*' },
          { text: 'Oracle', link: '/database/oracle/', activeMatch: '/database/oracle/*' },
          { text: 'Redis', link: '/database/redis/', activeMatch: '/database/redis/*' },
          { text: 'SQLite', link: '/database/sqlite/', activeMatch: '/database/sqlite/*' },
        ]
      },
      {
        text: 'DevOps',
        activeMatch: '/devops/*',
        items: [
          { text: '构建', link: '/devops/build/', activeMatch: '/devops/build/*' },
          { text: '部署', link: '/devops/deploy/', activeMatch: '/devops/deploy/*' },
          { text: '开发环境', link: '/devops/env/', activeMatch: '/devops/env/*' },
          { text: '版本控制', link: '/devops/svn/', activeMatch: '/devops/svn/*' },
          { text: '测试', link: '/devops/testing/', activeMatch: '/devops/testing/*' },
          { text: '其他', link: '/devops/other/', activeMatch: '/devops/other/*' },
        ]
      },
      {
        text: 'OS',
        activeMatch: '/os/*',
        items: [
          { text: 'Windows', link: '/os/windows/', activeMatch: '/os/windows/*' },
          { text: 'Linux', link: '/os/linux/', activeMatch: '/os/linux/*' },
        ]
      },
      { text: 'CS', link: '/cs/', activeMatch: '/cs/*' },
      { text: 'AI', link: '/ai/', activeMatch: '/ai/*' },
      { text: '工具', link: '/tools/', activeMatch: '/tools/*' },
      { text: '产品', link: '/products/', activeMatch: '/products/*' },
      { text: '笔记', link: '/notes/', activeMatch: '/notes/*' },
    ],

    sidebar: {
      '/ai/': [
        { text: '开篇', link: '/ai/' },
        {
          text: '笔记',
          items: [
            { text: '概述', link: '/ai/note/01-overview' },
            { text: '自然语言处理（NLP）', link: '/ai/note/02-nlp' },
            { text: '通用人工智能（AGI）', link: '/ai/note/03-agi' },
            { text: '大模型（LLM）', link: '/ai/note/llm' },
            { text: '智能体（Agent）', link: '/ai/note/agent' },
            { text: 'MCP', link: '/ai/note/mcp' },
            { text: 'RAG', link: '/ai/note/rag' },
            { text: 'Prompt', link: '/ai/note/prompt' },
          ]
        },
        {
          text: '应用',
          items: [
            {
              text: 'Ollama',
              items: [
                { text: '安装 & 配置', link: '/ai/app/ollama/' },
              ]
            },
            { text: 'Dify', link: '/ai/app/dify' },
            { text: 'LangChain', link: '/ai/app/lang-chain' },
            { text: 'LangGraph', link: '/ai/app/lang-graph' },
            { text: 'LangSmith', link: '/ai/app/lang-smith' },
            { text: 'OpenManus', link: '/ai/app/open-manus' },
            { text: 'Browser', link: '/ai/app/browser-use' },
          ]
        },
      ],
      '/cs/': [
        { text: '开篇', link: '/cs/' },
        { text: '协议', link: '/cs/protocol' },
        { text: '网络', link: '/cs/network' },
        {
          text: '算法',
          items: [
            { text: 'Big O', link: '/cs/algorithm/20251020-big-o' },
            { text: '资料', link: '/cs/algorithm/resources' },
          ]
        },
      ],
      '/database/mysql/': [
        { text: '开篇', link: '/database/mysql/' },
        { text: '博客', link: '/database/mysql/blog' },
      ],
      '/database/oracle/': [
        { text: '开篇', link: '/database/oracle/' },
        { text: '博客', link: '/database/oracle/blog' },
      ],
      '/database/redis/': [
        { text: '开篇', link: '/database/redis/' },
        {
          text: '笔记',
          items: [
            { text: 'Redis学习笔记', link: '/database/oracle/note/20201115-learning-redis' },
          ]
        },
      ],
      '/database/sqlite/': [
        { text: '开篇', link: '/database/sqlite/' },
        { text: 'DataType', link: '/database/sqlite/data-types' },
      ],
      '/devops/build/': [
        { text: '开篇', link: '/devops/build/' },
        { text: 'Gradle', link: '/devops/build/gradle/' },
      ],
      '/devops/deploy/': [
        { text: '开篇', link: '/devops/deploy/' },
        {
          text: 'Nginx',
          items: [
            { text: '资料', link: '/devops/deploy/nginx/' },
            { text: '博客', link: '/devops/deploy/nginx/blog' },
          ]
        },
        {
          text: 'PHP',
          items: [
            { text: '博客', link: '/devops/deploy/php/blog' },
          ]
        },
        {
          text: 'SSL',
          items: [
            { text: '工具', link: '/devops/deploy/ssl/tools' },
            { text: '博客', link: '/devops/deploy/ssl/blog' },
          ]
        },
      ],
      '/devops/env/': [
        { text: '开篇', link: '/devops/env/' },
        {
          text: 'Docker',
          items: [
            { text: '安装', link: '/devops/env/docker/01-install' },
            { text: '镜像', link: '/devops/env/docker/02-mirror' },
            { text: '命令', link: '/devops/env/docker/03-command' },
          ]
        },
        {
          text: 'IDE',
          items: [
            { text: 'Android Studio', link: '/devops/env/ide/android-studio/' },
            { text: 'PhpStorm', link: '/devops/env/ide/phpstorm/' },
            { text: 'VS Code', link: '/devops/env/ide/vscode/' },
          ]
        },
        { text: 'MinIO', link: '/devops/env/minio/' },
        { text: 'MySQL', link: '/devops/env/mysql/' },
        { text: 'Nginx', link: '/devops/env/nginx/' },
        { text: 'Node.js', link: '/devops/env/nodejs/' },
        { text: 'Oracle', link: '/devops/env/oracle/' },
        { text: 'PHP', link: '/devops/env/php/' },
        { text: 'Python', link: '/devops/env/python/' },
        { text: 'Redis', link: '/devops/env/redis/' },
      ],
      '/devops/other/': [
        { text: 'DevOps', link: '/devops/other/' },
        { text: '微服务', link: '/devops/other/20190121-microservices' },
      ],
      '/devops/svn/': [
        { text: '开篇', link: '/devops/svn/' },
        { text: 'Git', link: '/devops/svn/git/' },
        { text: 'Github', link: '/devops/svn/github/' },
        {
          text: 'Github',
          items: [
            { text: 'Github Action', link: '/devops/svn/github/github-action' },
            { text: '资源', link: '/devops/svn/github/resource' },
          ]
        },
        {
          text: 'Gitlab',
          items: [
            { text: '安装', link: '/devops/svn/gitlab/install' },
            { text: '升级', link: '/devops/svn/gitlab/upgrade' },
            { text: '命令', link: '/devops/svn/gitlab/command' },
          ]
        },
        { text: 'Visual SVN', link: '/devops/svn/visual-svn/' },
      ],
      '/devops/testing/': [
        { text: '开篇', link: '/devops/testing/' },
      ],
      '/framework/javascript/jquery/': [
        { text: '开篇', link: '/framework/javascript/jquery/' },
        { text: 'Ajax', link: '/framework/javascript/jquery/20220409-jquery-ajax' },
        { text: 'DOM', link: '/framework/javascript/jquery/20220409-jquery-dom' },
      ],
      '/framework/javascript/vitepress/': [
        { text: '开篇', link: '/framework/javascript/vitepress/' },
        {
          text: '插件',
          items: [
            { text: '图片查看器', link: '/framework/javascript/vitepress/plugins/vitepress-plugin-image-viewer' },
            { text: 'Giscus评论系统', link: '/framework/javascript/vitepress/plugins/vitepress-plugin-comment-with-giscus' },
            { text: '哔哩哔哩视频', link: '/framework/javascript/vitepress/plugins/vitepress-plugin-bilibili-video' },
          ]
        },
        { text: '博客', link: '/framework/javascript/vitepress/blog' },
      ],
      '/framework/javascript/vue/': [
        { text: '开篇', link: '/framework/javascript/vue/' },
        { text: '博客', link: '/framework/javascript/vue/blog' },
      ],
      '/framework/php/filament/': [
        { text: '开篇', link: '/framework/php/filament/' },
        { text: '博客', link: '/framework/php/filament/blog' },
        { text: '教程', link: '/framework/php/filament/tutorial' },
      ],
      '/framework/php/laravel/': [
        { text: '开篇', link: '/framework/php/laravel/' },
        { text: 'Deploy', link: '/framework/php/laravel/deploy' },
        { text: 'Package', link: '/framework/php/laravel/package' },
        { text: '博客', link: '/framework/php/laravel/blog' },
        { text: '教程', link: '/framework/php/laravel/tutorial' },
      ],
      '/framework/python/flask/': [
        { text: '开篇', link: '/framework/python/flask/' },
      ],
      '/lang/css/': [
        { text: '开篇', link: '/lang/css/' },
        { text: '博客', link: '/lang/css/blog' },
      ],
      '/lang/go/': [
        { text: '开篇', link: '/lang/go/' },
      ],
      '/lang/html/': [
        { text: '开篇', link: '/lang/html/' },
        { text: '博客', link: '/lang/html/blog' },
      ],
      '/lang/java/': [
        { text: '开篇', link: '/lang/java/' },
        { text: '博客', link: '/lang/java/blog' },
      ],
      '/lang/javascript/': [
        { text: '开篇', link: '/lang/javascript/' },
        {
          text: '笔记',
          items: [
            { text: 'JavaScript Promise', link: '/lang/javascript/note/20201124-js-promise' },
            { text: 'Javascript Axios', link: '/lang/javascript/note/20210727-javascript-axios' },
            { text: 'Javascript 日期', link: '/lang/javascript/note/20220409-javascript-datetime' },
            { text: 'Javascript 存储', link: '/lang/javascript/note/20220409-javascript-storage' },
          ]
        },
        {
          text: '插件',
          items: [
            { text: 'Editor.js', link: '/lang/javascript/plugin/20250517-editorjs' },
          ]
        },
        { text: '博客', link: '/lang/javascript/blog' },
      ],
      '/lang/json/': [
        { text: '开篇', link: '/lang/json/' },
      ],
      '/lang/kotlin/': [
        { text: '开篇', link: '/lang/kotlin/' },
        {
          text: '笔记',
          items: [
            { text: '基本类型-数字', link: '/lang/kotlin/note/20190205-learning-kotlin-basic-types-numbers' },
            { text: '基本类型-布尔值', link: '/lang/kotlin/note/20190205-learning-kotlin-basic-types-boolean' },
            { text: '基本类型-字符', link: '/lang/kotlin/note/20190205-learning-kotlin-basic-types-char' },
            { text: '基本类型-字符串', link: '/lang/kotlin/note/20190205-learning-kotlin-basic-types-string' },
            { text: '基本类型-数组', link: '/lang/kotlin/note/20190205-learning-kotlin-basic-types-array' },
            { text: '类型检查与转换', link: '/lang/kotlin/note/20190306-learning-kotlin-typecasts' },
            { text: '控制流与循环', link: '/lang/kotlin/note/20190205-learning-kotlin-control-flow' },
            { text: '返回与跳转', link: '/lang/kotlin/note/20190205-learning-kotlin-returns' },
            { text: '异常', link: '/lang/kotlin/note/20190306-learning-kotlin-exceptions' },
            { text: '包 & 导入', link: '/lang/kotlin/note/20190205-learning-kotlin-packages' },
            { text: '类与继承', link: '/lang/kotlin/note/20190302-learning-kotlin-classes' },
            { text: '数据类', link: '/lang/kotlin/note/20190302-learning-kotlin-data-classes' },
            { text: '委托属性', link: '/lang/kotlin/note/20190302-learning-kotlin-delegated-properties' },
            { text: '委托', link: '/lang/kotlin/note/20190302-learning-kotlin-delegation' },
            { text: '枚举类', link: '/lang/kotlin/note/20190302-learning-kotlin-enum-classes' },
            { text: '扩展', link: '/lang/kotlin/note/20190302-learning-kotlin-extensions' },
            { text: '泛型', link: '/lang/kotlin/note/20190302-learning-kotlin-generics' },
            { text: '内联类', link: '/lang/kotlin/note/20190302-learning-kotlin-inline-classes' },
            { text: '接口', link: '/lang/kotlin/note/20190302-learning-kotlin-interfaces' },
            { text: '嵌套类', link: '/lang/kotlin/note/20190302-learning-kotlin-nested-classes' },
            { text: '对象', link: '/lang/kotlin/note/20190302-learning-kotlin-object-declarations' },
            { text: '属性与字段', link: '/lang/kotlin/note/20190302-learning-kotlin-peoperties' },
            { text: '密封类', link: '/lang/kotlin/note/20190302-learning-kotlin-sealed-classes' },
            { text: '类型别名', link: '/lang/kotlin/note/20190302-learning-kotlin-type-aliases' },
            { text: '可见性修饰符', link: '/lang/kotlin/note/20190302-learning-kotlin-visibility-modifiers.' },
            { text: '注解', link: '/lang/kotlin/note/20190306-learning-kotlin-annotations' },
            { text: '集合', link: '/lang/kotlin/note/20190306-learning-kotlin-collections' },
            { text: '相等性', link: '/lang/kotlin/note/20190306-learning-kotlin-equality' },
            { text: '函数', link: '/lang/kotlin/note/20190306-learning-kotlin-functions' },
            { text: '内联函数', link: '/lang/kotlin/note/20190306-learning-kotlin-inline-functions' },
            { text: 'Lambda表达式', link: '/lang/kotlin/note/20190306-learning-kotlin-lambdas' },
            { text: '解构声明', link: '/lang/kotlin/note/20190306-learning-kotlin-multi-declarations' },
            { text: 'Null 安全', link: '/lang/kotlin/note/20190306-learning-kotlin-null-safety' },
            { text: '操作符重载', link: '/lang/kotlin/note/20190306-learning-kotlin-operator-overloading' },
            { text: '区间', link: '/lang/kotlin/note/20190306-learning-kotlin-ranges' },
            { text: '反射', link: '/lang/kotlin/note/20190306-learning-kotlin-reflection' },
            { text: 'This表达式', link: '/lang/kotlin/note/20190306-learning-kotlin-this-expressions' },
            { text: '类型安全的构建器', link: '/lang/kotlin/note/20190306-learning-kotlin-type-safe-builders' },
            { text: '修饰符', link: '/lang/kotlin/note/20190311-leatning-kotlin-modifiers' },
            { text: '协程', link: '/lang/kotlin/note/20190502-learning-kotlin-coroutine' },
          ]
        },
        { text: '博客', link: '/lang/kotlin/blog' },
      ],
      '/lang/markdown/': [
        { text: '开篇', link: '/lang/markdown/' },
      ],
      '/lang/php/': [
        { text: '开篇', link: '/lang/php/' },
        {
          text: '笔记',
          items: [
            { text: '魔术方法', link: '/lang/php/note/20191129-php-magic-methods' },
          ]
        },
        { text: '包', link: '/lang/php/package/' },
        { text: '博客', link: '/lang/php/blog' },
      ],
      '/lang/python/': [
        { text: '开篇', link: '/lang/python/' },
        {
          text: '笔记',
          items: [
            { text: '开始', link: '/lang/python/note/01-start' },
            {
              text: '数据类型',
              items: [
                { text: '字符串', link: '/lang/python/note/datatype/01-string' },
                { text: '数字', link: '/lang/python/note/datatype/02-number' },
                { text: '布尔', link: '/lang/python/note/datatype/03-bool' },
                { text: '列表', link: '/lang/python/note/datatype/04-list' },
                { text: '元组', link: '/lang/python/note/datatype/05-tuple' },
                { text: '数组', link: '/lang/python/note/datatype/06-array' },
                { text: '集合', link: '/lang/python/note/datatype/07-set' },
                { text: '字典', link: '/lang/python/note/datatype/08-dict' },
              ]
            },
          ]
        }
      ],
      '/lang/sql/': [
        { text: 'Join', link: '/lang/sql/join' },
      ],
      '/lang/toml/': [
        { text: '开篇', link: '/lang/toml/' },
      ],
      '/lang/xml/': [
        { text: '开篇', link: '/lang/xml/' },
      ],
      '/lang/yaml/': [
        { text: '开篇', link: '/lang/yaml/' },
      ],
      '/mobile-development/android/': [
        { text: '开篇', link: '/mobile-development/android/' },
        {
          text: '基础',
          items: [
            { text: 'Activity', link: '/mobile-development/android/basic/activity' },
            { text: 'Fragment', link: '/mobile-development/android/basic/fragment' },
            { text: 'Service', link: '/mobile-development/android/basic/service' },
            { text: '四大组件', link: '/mobile-development/android/basic/four-components' },
            { text: 'Flavor', link: '/mobile-development/android/basic/flavor' },
            { text: 'Launch Mode', link: '/mobile-development/android/basic/launch-mode' },
          ]
        },
        {
          text: 'Jetpack Compose',
          items: [

          ]
        },
        { text: 'Material Design', link: '/mobile-development/android/material-design' },
        { text: '博客', link: '/mobile-development/android/blog' },
        { text: 'Dependecy', link: '/mobile-development/android/20190504-android-dependecies' },
        { text: '反编译', link: '/mobile-development/android/decompile' },
      ],
      '/mobile-development/harmonyos/': [
        { text: '开篇', link: '/mobile-development/harmonyos/index' },
        { text: '环境搭建', link: '/mobile-development/harmonyos/env' },
        { text: 'Database', link: '/mobile-development/harmonyos/database' },
        { text: '卡片', link: '/mobile-development/harmonyos/form' },
      ],
      '/mobile-development/kmp/': [
        { text: '开篇', link: '/mobile-development/kmp/index' },
        { text: '创建项目', link: '/mobile-development/kmp/create-project' },
        { text: 'Room', link: '/mobile-development/kmp/room' },
        { text: 'Datastore', link: '/mobile-development/kmp/datastore' },
        { text: 'ViewModel', link: '/mobile-development/kmp/viewmodel' },
        { text: 'Navigation', link: '/mobile-development/kmp/navigation' },
        { text: 'Koin', link: '/mobile-development/kmp/koin' },
        { text: 'Ktor', link: '/mobile-development/kmp/ktor' },
        { text: 'Uuid', link: '/mobile-development/kmp/uuid' },
        { text: 'expect/actual', link: '/mobile-development/kmp/expect-actual' },
      ],
      '/notes/': [
        { text: '开篇', link: '/notes/index' },
        {
          text: '数据格式',
          items: [
            { text: 'CSV', link: '/notes/data-format/csv' },
            { text: 'JSON', link: '/notes/data-format/json' },
            { text: 'Protocol Buffers', link: '/notes/data-format/protocol-buffers' },
            { text: 'XML', link: '/notes/data-format/xml' },
            { text: 'YAML', link: '/notes/data-format/yaml' },
          ]
        },
        { text: '数据可视化', link: '/notes/data-visualization' },
        { text: '时间日期', link: '/notes/datetime' },
        { text: 'DSL', link: '/notes/dsl' },
        { text: 'Elasticsearch', link: '/notes/elasticsearch' },
        { text: 'Emoji', link: '/notes/emoji' },
        { text: 'Ffmpeg', link: '/notes/ffmpeg' },
        { text: 'ID', link: '/notes/id' },
        { text: 'JSON-LD', link: '/notes/json-ld' },
        { text: 'JWT', link: '/notes/jwt' },
        { text: 'Markdown', link: '/notes/markdown' },
        { text: 'Oauth2', link: '/notes/oauth2' },
        { text: 'OpenImages', link: '/notes/open-images-v4' },
        { text: 'PDF', link: '/notes/pdf' },
        { text: 'Print', link: '/notes/print' },
        { text: 'SAAS PAAS IAAS', link: '/notes/saas-paas-iaas' },
        { text: 'SnowFlake', link: '/notes/snowflake' },
      ],
      '/os/linux/': [
        { text: '开篇', link: '/os/linux/' },
        {
          text: '笔记',
          items: [
            { text: '用户、组', link: '/os/linux/note/user-group' },
            { text: '定时任务', link: '/os/linux/note/crontab' },
            { text: '时间', link: '/os/linux/note/date' },
            { text: '磁盘', link: '/os/linux/note/disk' },
            { text: '包管理', link: '/os/linux/note/package-manager' },
            { text: 'Supervisor', link: '/os/linux/note/supervisor' },
            { text: '环境变量', link: '/os/linux/note/environment-variables' },
          ]
        },
        { text: '博客', link: '/os/linux/blog' },
      ],
      '/os/windows/': [
        { text: '开篇', link: '/os/windows/' },
        { text: '软件', link: '/os/windows/softwate' },
        { text: 'USB 设备', link: '/os/windows/usb-device' },
        { text: 'WSL', link: '/os/windows/wsl' },
        { text: '环境变量', link: '/os/windows/note/environment-variables' },
      ],
      '/products/': [
        { text: '开篇', link: '/products/' },
        { text: 'Logo', link: '/products/logo' },
        { text: 'UI', link: '/products/ui' },
        {
          text: '项目',
          items: [
            { text: '记账', link: '/products/project/bookkeeping' },
            { text: '笔记', link: '/products/project/note' },
          ]
        },
      ],
      '/tools/': [
        { text: '开篇', link: '/tools/' },
        { text: '浏览器', link: '/tools/browser' },
        { text: '代码统计', link: '/tools/cloc' },
        { text: '编辑器', link: '/tools/editor' },
        { text: '邮件', link: '/tools/mail' },
      ],
      '/web-development/': [
        { text: '开篇', link: '/web-development/' },
        { text: 'API', link: '/web-development/api' },
        { text: 'CORS', link: '/web-development/cors' },
        { text: 'HTTP', link: '/web-development/http' },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hefengbao' }
    ]
  }
})
