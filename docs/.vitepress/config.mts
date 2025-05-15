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
      message: '亲手创建自己所需的软件，是程序员的幸运。',
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
          { text: 'JSON', link: '/lang/json/', activeMatch: '/lang/json/*' },
          { text: 'Kotlin', link: '/lang/kotlin/', activeMatch: '/lang/kotlin/*' },
          { text: 'Markdown', link: '/lang/markdown/', activeMatch: '/lang/markdown/*' },
          { text: 'PHP', link: '/lang/php/', activeMatch: '/lang/php/*' },
          { text: 'Python', link: '/lang/python/', activeMatch: '/lang/python/*' },
          { text: 'TOML', link: '/lang/toml/', activeMatch: '/lang/toml/*' },
          { text: 'XML', link: '/lang/xml/', activeMatch: '/lang/xml/*' },
          { text: 'YAML', link: '/lang/yaml/', activeMatch: '/lang/yaml/*' },
        ]
      },
      {
        text: 'Framework',
        activeMatch: '/framework/*',
        items: [
          {
            text: 'Javascript',
            items: [
              { text: 'Jquery', link: '/framework/javascript/jquery/',activeMatch: '/framework/javascript/jquery/*' },
              { text: 'Vitepress', link: '/framework/javascript/vitepress/',activeMatch: '/framework/javascript/vitepress/*' },
              { text: 'Vue', link: '/framework/javascript/vue/',activeMatch: '/framework/javascript/vue/*' },
            ]
          },
          { text: 'KMP', link: '/framework/kmp/', activeMatch: '/framework/kmp/*' },
          {
            text: 'PHP',
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
          { text: 'MySQL', link: '/database/mysql/',activeMatch: '/database/mysql/*' },
          { text: 'Oracle', link: '/database/oracle/',activeMatch: '/database/oracle/*' },
          { text: 'Redis', link: '/database/redis/',activeMatch: '/database/redis/*' },
          { text: 'SQLite', link: '/database/sqlite/',activeMatch: '/database/sqlite/*' },
        ]
      },
      {
        text: 'DevOps',
        activeMatch: '/devops/*',
        items: [
          { text: '部署',  link: '/devops/deploy/',activeMatch: '/devops/deploy/*'},
          { text: '开发环境',  link: '/devops/env/',activeMatch: '/devops/env/*'},
          { text: '版本控制',  link: '/devops/svn/',activeMatch: '/devops/svn/*'},
          { text: '测试',  link: '/devops/testing/',activeMatch: '/devops/testing/*'},
          { text: '其他',  link: '/devops/other/',activeMatch: '/devops/other/*'},
        ]
      },
      {
        text: 'OS',
        activeMatch: '/os/*',
        items: [
          { text: 'Windows',  link: '/os/windows/',activeMatch: '/os/windows/*'},
          { text: 'Linux',  link: '/os/linux/',activeMatch: '/os/linux/*'},
        ]
      },
      { text: 'CS', link: '/cs/', activeMatch: '/cs/*' },
      { text: 'AI', link: '/ai/', activeMatch: '/ai/*' },
    ],

    sidebar: {
      '/ai/': [
        { text: '开篇', link: '/ai/index' },
        { 
          text: '笔记', 
          items: [
            { text: '概述', link: '/ai/note/overview' },
            { text: '自然语言处理（NLP）', link: '/ai/note/nlp' },
            { text: '通用人工智能（AGI）', link: '/ai/note/agi' },
            { text: '大模型（LLM）', link: '/ai/note/llm' },
            { text: 'LangChain', link: '/ai/note/lang-chain' },
            { text: '智能体（Agent）', link: '/ai/note/agent' },
            { text: 'MCP', link: '/ai/note/mcp' },
            { text: 'OpenManus', link: '/ai/note/open-manus' },
            { 
              text: 'Ollama', 
              items: [
                { text: '安装 & 配置', link: '/ai/note/ollama/index' },
              ]
            },
          ]
        },
      ],
      '/cs/': [
        { text: '开篇', link: '/cs/index' },
        { text: '协议', link: '/cs/protocol' },
        { 
          text: '算法', 
          items: [
            { text: '资料', link: '/cs/algorithm/index' },
          ]
        },
      ],
      '/database/mysql/': [
        { text: '开篇', link: '/database/mysql/index' },
        { 
          text: '博客', 
          items: [
            { text: 'Working with JSON in MySQL', link: '/database/mysql/blog/20200522-working-with-json-in-mysql' },
          ]
        },
      ],
      '/database/oracle/': [
        { text: '开篇', link: '/database/oracle/index' },
        { 
          text: '博客', 
          items: [
            { text: 'Oracle# Oracle 查看某个账户下的表、视图', link: '/database/oracle/blog/20200206-oracle-user-table-view' },
            { text: 'Oracle对where条件中有null值字段的处理', link: '/database/oracle/blog/20200518-oracle-where-null' },
          ]
        },
      ],
      '/database/redis/': [
        { text: '开篇', link: '/database/redis/index' },
        { 
          text: '笔记', 
          items: [
            { text: 'Redis 学习笔记', link: '/database/oracle/note/20201115-learning-redis' },
          ]
        },
      ],
      '/database/sqlite/': [
        { text: '开篇', link: '/database/sqlite/index' },
      ],
      '/devops/deploy/': [
        { text: '开篇', link: '/devops/deploy/index' },
        { 
          text: 'Nginx', 
          items: [
            { text: 'Nginx 学习资料', link: '/devops/deploy/nginx/index' },
            { text: 'Nginx 服务器部署 php 项目', link: '/devops/deploy/nginx/20170419-nginx-deploy-php-project' },
            { text: '如何使用Nginx重定向www到非www及反之', link: '/devops/deploy/nginx/20200522-how-to-redirect-www-to-non-www-and-vice-versa-with-nginx' },
          ]
        },
        { 
          text: 'PHP', 
          items: [
            { text: 'Deployer 使用资料', link: '/devops/deploy/php/20200522-deployer-usage' },
          ]
        },
        { 
          text: 'SSL', 
          items: [
            { text: '通过 Let\'s Encrypt 申请 HTTPS证书', link: '/devops/deploy/ssl/20210713-letsencrypt-https' },
          ]
        },
      ],
      '/devops/env': [
        { text: '开篇', link: '/devops/env/index' },
        { 
          text: 'Docker', 
          items: [
            { text: 'Docker 安装', link: '/devops/env/docker/install' },
          ]
        },
        { 
          text: 'IDE',
          items: [
            { 
              text: 'Android Studio', 
              items: [
                { text: 'Build output 中文乱码', link: '/devops/env/ide/android-studio/20210202-output-chinese-character-encoding' },
              ]
            },
            { 
              text: 'PhpStorm', 
              items: [
                { text: 'PhpStorm 从已有文件创建项目', link: '/devops/env/ide/phpstorm/20171108-phpstorm-create-new-project-from-existing-files' },
              ]
            },
            { 
              text: 'VS Code', 
              items: [
                { text: 'VS Code 插件', link: '/devops/env/ide/vscode/20210727-plugins' },
              ]
            },
          ]
        },
        { 
          text: 'MinIO', 
          items: [
            { text: 'MinIO 安装配置', link: '/devops/env/minio/20200411-minio' },
          ]
        },
        { 
          text: 'MySQL', 
          items: [
            { text: 'Mysql 8 安装', link: '/devops/env/mysql/20191203-mysql-8-install' },
          ]
        },
        { 
          text: 'Node.js', 
          items: [
            { text: 'Windows 安装 Node.js', link: '/devops/env/nodejs/20250415-windows-install-nodejs' },
          ]
        },
        { 
          text: 'Oracle', 
          items: [
            { text: 'Ubuntu 安装 Oracle Instant Client 和 OCI', link: '/devops/env/oracle/20180511-ubuntu-install-oracle-instant-client-and-oci' },
            { text: 'PL/SQL Developer 配置', link: '/devops/env/oracle/20200516-pl-sql-developer-config' },
          ]
        },
        { 
          text: 'PHP', 
          items: [
            { text: 'Ubuntu 服务器配置 LEMP 环境', link: '/devops/env/php/20170418-ubuntu-install-lemp' },
            { text: 'ErrorException:symlink():Input/output error', link: '/devops/env/php/20200115-ErrorException-symlink-Input-output-error' },
            { text: 'windows10 搭建 php 环境', link: '/devops/env/php/20200206-windows-10-php-env' },
            { text: 'Ubuntu 安装 PHP 的 PDO_OCI 扩展', link: '/devops/env/php/20200410-intall-php-pdo-oci-extension-on-ubuntu' },
            { text: 'PHP Opcache', link: '/devops/env/php/20211013-php-opcache' },
            { 
              text: 'Composer', 
              items: [
                { text: 'composer update: Discard changes [y,n,v,d,s,?]?', link: '/devops/env/php/composer/20200103-composer-update-discard-changes-ynvds' },
                { text: 'proc_open(): fork failed - Cannot allocate memory', link: '/devops/env/php/composer/20200103-proc_open-fork-failed -cannot-allocate-memory' },
                { text: 'Ubuntu 安装 composer', link: '/devops/env/php/composer/20201125-ubuntu-install-composer' },
                { text: '生产环境 Composer 使用', link: '/devops/env/php/composer/20210808-composer-in-production-env' },
              ]
            },
            { 
              text: 'WAMP', 
              items: [
                { text: 'WAMP: You don\'t have permission to access on this server', link: '/devops/env/php/wamp/20170619-wamp-403' },
                { text: 'WAMPServer 为 Laravel 项目配置 alias', link: '/devops/env/php/wamp/20180412-wampserver-add-alias-for-laravel-programe' },
                { text: 'WAMPServer 之 Apache 日志分割', link: '/devops/env/php/wamp/20180813-wampserver-apche-logs-setting' },
              ]
            },
          ]
        },
        {
          text: 'Python',
          items: [
            { text: '安装', link: '/devops/env/python/install' },
            { text: 'IDE', link: '/devops/env/python/ide' },
            { text: '虚拟环境', link: '/devops/env/python/venv' },
            { 
              text: '包管理', 
              items: [
                { text: 'pip', link: '/devops/env/python/pip' },
                { text: 'uv', link: '/devops/env/python/uv' },
              ]
            },
          ]
        },
        { 
          text: 'Redis', 
          items: [
            { text: 'Ubuntu redis 多实例安装', link: '/devops/env/redis/20180720-ubuntu-install-redis-multi-instance' },
          ]
        },
      ],
      '/devops/other': [
        { text: 'DevOps', link: '/devops/other/index' },
        { text: '微服务', link: '/devops/other/20190121-microservices' },
      ],
      '/devops/svn': [
        { text: '开篇', link: '/devops/svn/index' },
        { 
          text: 'Git', 
          items: [
            { text: 'Git 基础', link: '/devops/svn/git/index' },
            { text: 'Ubuntu 搭建 git server', link: '/devops/svn/git/20170711-ubuntu-install-git-server' },
          ]
        },
        { 
          text: 'Github', 
          items: [
            { text: 'Github 资料', link: '/devops/svn/github/index' },
            { text: 'Github 新建项目初始化', link: '/devops/svn/github/20200206-github-new-project-init.md' },
          ]
        },
        { 
          text: 'Gitlab', 
          items: [
            { text: 'Ubuntu 安装 gitlab', link: '/devops/svn/gitlab/20180513-ubuntu-install-gitlab' },
            { text: 'Gitlab Upgrade', link: '/devops/svn/gitlab/20180925-GItlab-Upgrade' },
          ]
        },
        { 
          text: 'Visual SVN', 
          items: [
            { text: 'Windows 下 VisualSVN 配置钩子(post-commit)', link: '/devops/svn/visual-svn/20170623-windows-visualsvn-post-commit' },
          ]
        },
      ],
      '/devops/testing': [
        { text: '开篇', link: '/devops/testing/index' },
      ],
      '/framework/javascript/jquery/': [
        { text: '开篇', link: '/framework/javascript/jquery/index' },
        { text: 'Ajax', link: '/framework/javascript/jquery/20220409-jquery-ajax' },
        { text: 'DOM', link: '/framework/javascript/jquery/20220409-jquery-dom' },
      ],
      '/framework/javascript/vitepress/': [
        { text: '开篇', link: '/framework/javascript/vitepress/index' },
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
        { text: '开篇', link: '/framework/javascript/vue/index' },
        { text: '创建 Vue 项目', link: '/framework/javascript/vue/20191219-create-vue-project.' },
        { text: 'Vue 配置', link: '/framework/javascript/vue/20191214-vue-conifg' },
        { text: 'Vue 路由', link: '/framework/javascript/vue/20190728-Vue-Router' },
      ],
      '/framework/kmp': [
        { text: '开篇', link: '/framework/kmp/index' },
      ],
      '/framework/php/filament/': [
        { text: '开篇', link: '/framework/php/filament/index' },
      ],
      '/framework/php/laravel/': [
        { text: '开篇', link: '/framework/php/laravel/index' },
        { text: 'Laravel Package', link: '/framework/php/laravel/20200522-Laravel-Package' },
        { 
          text: '博客', 
          items: [
            { text: 'Laravel：系统登录后的跳转', link: '/framework/php/laravel/blog/20171109-larvel-redirect-if-authenticated' },
            { text: 'Laravel timestamp', link: '/framework/php/laravel/blog/20180328-Laravel-timestamp' },
            { text: 'Laravel 用 UUID 做主键', link: '/framework/php/laravel/blog/20180620-laravel-use-uuid-as-primary-key' },
            { text: 'Laravel 备份', link: '/framework/php/laravel/blog/20181114-laravel-backup' },
            { text: 'Laravel Mail 配置', link: '/framework/php/laravel/blog/20181114-laravel-mail-config' },
            { text: 'Laravel 定时任务', link: '/framework/php/laravel/blog/20181214-laravel-cron' },
            { text: '【转】浅析 Laravel 文档推荐的 Nginx 配置', link: '/framework/php/laravel/blog/20190821-laravel-recommended-nginx-conf-analysis' },
            { text: 'Erroneous data format for unserializing \'Symfony Component Routing CompiledRoute\'', link: '/framework/php/laravel/blog/20200404-Erroneous-data-format-for-unserializing-Symfony-Component-Routing-CompiledRoute' },
            { text: 'Laravel 使用 Redis', link: '/framework/php/laravel/blog/20220423-laravel-redis' },
          ]
        },
      ],
      '/lang/css/': [
        { text: '开篇', link: '/lang/css/index' },
      ],
      '/lang/html/': [
        { text: '开篇', link: '/lang/html/index' },
        {
          text: '最佳实践',
          items: [
            { text: 'Head 最佳实践', link: '/lang/html/best-practices/20191009-html-head-best-practices' },
          ]
        }
      ],
      '/lang/java/': [
        { text: '开篇', link: '/lang/java/index' },
      ],
      '/lang/javascript/': [
        { text: '开篇', link: '/lang/javascript/index' },
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
          text: '博客',
          items: [
            { text: 'can not read a block mapping entry; a multiline key may not be an implicit key', link: '/lang/javascript/blog/20200101-can-not-read-a-block-mapping-entry-a-multiline-key-may-not-be-an-implicit-key' },
          ]
        },
      ],
      '/lang/json/': [
        { text: '开篇', link: '/lang/json/index' },
      ],
      '/lang/kotlin/': [
        { text: '开篇', link: '/lang/kotlin/index' },
        {
          text: '笔记',
          items: [
            { text: '基本类型 - 数字', link: '/lang/kotlin/note/20190205-learning-kotlin-basic-types-numbers' },
            { text: '基本类型 - 布尔值', link: '/lang/kotlin/note/20190205-learning-kotlin-basic-types-boolean' },
            { text: '基本类型 - 字符', link: '/lang/kotlin/note/20190205-learning-kotlin-basic-types-char' },
            { text: '基本类型 - 字符串', link: '/lang/kotlin/note/20190205-learning-kotlin-basic-types-string' },
            { text: '基本类型 - 数组', link: '/lang/kotlin/note/20190205-learning-kotlin-basic-types-array' },
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
            { text: 'Lambda 表达式', link: '/lang/kotlin/note/20190306-learning-kotlin-lambdas' },
            { text: '解构声明', link: '/lang/kotlin/note/20190306-learning-kotlin-multi-declarations' },
            { text: 'Null 安全', link: '/lang/kotlin/note/20190306-learning-kotlin-null-safety' },
            { text: '操作符重载', link: '/lang/kotlin/note/20190306-learning-kotlin-operator-overloading' },
            { text: '区间', link: '/lang/kotlin/note/20190306-learning-kotlin-ranges' },
            { text: '反射', link: '/lang/kotlin/note/20190306-learning-kotlin-reflection' },
            { text: 'This 表达式', link: '/lang/kotlin/note/20190306-learning-kotlin-this-expressions' },
            { text: '类型安全的构建器', link: '/lang/kotlin/note/20190306-learning-kotlin-type-safe-builders' },
            { text: '修饰符', link: '/lang/kotlin/note/20190311-leatning-kotlin-modifiers' },
            { text: '协程', link: '/lang/kotlin/note/20190502-learning-kotlin-coroutine' },
          ]
        },
        {
          text: '博客',
          items: [
            { text: 'let、with、run、apply、also函数的使用', link: '/lang/kotlin/blog/20190511-kotlin-let-with-run-apply-also' },
            { text: '使用 Moshi 解析 json', link: '/lang/kotlin/blog/20190519-getting-started-using-moshi-for-json-parsing-with-kotlin' },
          ]
        }
      ],
      '/lang/markdown/': [
        { text: '开篇', link: '/lang/markdown/index' },
      ],
      '/lang/php/': [
        { text: '开篇', link: '/lang/php/index' },
        { text: '包', link: '/lang/php/20210727-PHP-Package' },
        {
          text: '笔记',
          items: [
            { text: '魔术方法', link: '/lang/php/note/20191129-php-magic-methods' },
          ]
        }
      ],
      '/lang/python/': [
        { text: '开篇', link: '/lang/python/index' },
        {
          text: '笔记',
          items: [
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
      '/lang/toml/': [
        { text: '开篇', link: '/lang/toml/index' },
      ],
      '/lang/xml/': [
        { text: '开篇', link: '/lang/xml/index' },
      ],
      '/lang/yaml/': [
        { text: '开篇', link: '/lang/yaml/index' },
      ],
      '/os/linux/': [
        { text: '开篇', link: '/os/linux/index' },
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
        {
          text: '博客',
          items: [
            { text: 'Setup is unable to find the "ifconfig" program on your machine', link: '/os/linux/blog/20171001-setup-is-unable-to-find-the-ifconfig-program-on-your-machine' },
            { text: 'Ubuntu iptables', link: '/os/linux/blog/20200430-ubuntu-iptables' },
            { text: 'dpkg: warning: files list file for package \'xxxx\ missing; assuming package has no files currently installed', link: '/os/linux/blog/20200823-dpkg-warning-files-list-file-for-package-xxxx-missing-assuming-package-has-no-files-currently-installed' },
          ]
        },
      ],
      '/os/windows/': [
        { text: '开篇', link: '/os/windows/index' },
        { text: '软件', link: '/os/windows/softwate' },
        { text: 'USB 设备', link: '/os/windows/usb-device' },
        { text: 'WSL', link: '/os/windows/wsl' },
        { text: '环境变量', link: '/os/windows/note/environment-variables' },
      ],
      '/web-development/': [
        { text: '开篇', link: '/web-development/index' },
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
