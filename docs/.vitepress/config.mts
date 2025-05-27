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
          { text: 'CSS', link: '/lang/css/', activeMatch: '/lang/chinecssse/*' },
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
          {
            text: 'Python',
            items: [
              { text: 'Flash', link: '/framework/python/flask/',activeMatch: '/framework/python/flask/*' },
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
      { text: '工具', link: '/tools/', activeMatch: '/tools/*' },
    ],

    sidebar: {
      '/ai/': [
        { text: '开篇', link: '/ai/index' },
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
          ]
        },
        { 
          text: '应用', 
          items: [
            { 
              text: 'Ollama', 
              items: [
                { text: '安装 & 配置', link: '/ai/app/ollama/index' },
              ]
            },
            { text: 'Dify', link: '/ai/app/dify' },
            { text: 'LangChain', link: '/ai/app/lang-chain' },
            { text: 'LangGraph', link: '/ai/app/lang-graph' },
            { text: 'OpenManus', link: '/ai/app/open-manus' },
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
            { text: 'Oracle查看某个账户下的表/视图', link: '/database/oracle/blog/20200206-oracle-user-table-view' },
            { text: 'Oracle对where条件中有null值字段的处理', link: '/database/oracle/blog/20200518-oracle-where-null' },
          ]
        },
      ],
      '/database/redis/': [
        { text: '开篇', link: '/database/redis/index' },
        { 
          text: '笔记', 
          items: [
            { text: 'Redis学习笔记', link: '/database/oracle/note/20201115-learning-redis' },
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
            { text: 'Nginx学习资料', link: '/devops/deploy/nginx/index' },
            { text: 'Nginx服务器部署php项目', link: '/devops/deploy/nginx/20170419-nginx-deploy-php-project' },
            { text: '如何使用Nginx重定向www到非www及反之', link: '/devops/deploy/nginx/20200522-how-to-redirect-www-to-non-www-and-vice-versa-with-nginx' },
          ]
        },
        { 
          text: 'PHP', 
          items: [
            { text: 'Deployer', link: '/devops/deploy/php/20200522-deployer-usage' },
          ]
        },
        { 
          text: 'SSL', 
          items: [
            { text: '通过Let\'s Encrypt申请HTTPS证书', link: '/devops/deploy/ssl/20210713-letsencrypt-https' },
            { text: '工具', link: '/devops/deploy/ssl/tools' },
          ]
        },
      ],
      '/devops/env': [
        { text: '开篇', link: '/devops/env/index' },
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
            { 
              text: 'Android Studio', 
              items: [
                { text: 'Build output中文乱码', link: '/devops/env/ide/android-studio/20210202-output-chinese-character-encoding' },
                { text: '修改.android和.gradle目录', link: '/devops/env/ide/android-studio/20250310-android-studio-android-gradle-directory' },
              ]
            },
            { 
              text: 'PhpStorm', 
              items: [
                { text: 'PhpStorm从已有文件创建项目', link: '/devops/env/ide/phpstorm/20171108-phpstorm-create-new-project-from-existing-files' },
              ]
            },
            { 
              text: 'VS Code', 
              items: [
                { text: 'VS Code插件', link: '/devops/env/ide/vscode/20210727-plugins' },
                { text: '使用vscode作为Laravel开发IDE', link: '/devops/env/ide/vscode/20231017-setup-vscode-for-laravel-development' },
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
          text: 'Nginx', 
          items: [
            { text: 'Docker容器中运行Nginx', link: '/devops/env/nginx/20241210-nginx-docker' },
          ]
        },
        { 
          text: 'Node.js', 
          items: [
            { text: 'Windows安装Node.js', link: '/devops/env/nodejs/20250415-windows-install-nodejs' },
            { text: 'SyntaxError: Unexpected token \'export\'', link: '/devops/env/nodejs/20231011-SyntaxError-Unexpected-token-export' },
          ]
        },
        { 
          text: 'Oracle', 
          items: [
            { text: 'Ubuntu安装Oracle Instant Client和OCI', link: '/devops/env/oracle/20180511-ubuntu-install-oracle-instant-client-and-oci' },
            { text: 'PL/SQL Developer配置', link: '/devops/env/oracle/20200516-pl-sql-developer-config' },
            { text: 'Windows 10安装配置PL/SQL', link: '/devops/env/oracle/20230901-windows-10-install-plsql' },
          ]
        },
        { 
          text: 'PHP', 
          items: [
            { text: 'Ubuntu服务器配置LEMP环境', link: '/devops/env/php/20170418-ubuntu-install-lemp' },
            { text: 'ErrorException:symlink():Input/output error', link: '/devops/env/php/20200115-ErrorException-symlink-Input-output-error' },
            { text: 'Windows10搭建php环境', link: '/devops/env/php/20200206-windows-10-php-env' },
            { text: 'Ubuntu安 PHP的PDO_OCI扩展', link: '/devops/env/php/20200410-intall-php-pdo-oci-extension-on-ubuntu' },
            { text: 'PHP Opcache', link: '/devops/env/php/20211013-php-opcache' },
            { text: '如何通过PHP-FPM配置Nginx与PHP协同工作', link: '/devops/env/php/20241206-how-to-configure-nginx-to-work-with-php-via-php-fpm' },
            { 
              text: 'Composer', 
              items: [
                { text: '学习 Composer', link: '/devops/env/php/composer/learn-composer' },
                { text: 'composer update: Discard changes [y,n,v,d,s,?]?', link: '/devops/env/php/composer/20200103-composer-update-discard-changes-ynvds' },
                { text: 'proc_open(): fork failed - Cannot allocate memory', link: '/devops/env/php/composer/20200103-proc_open-fork-failed -cannot-allocate-memory' },
                { text: '生产环境Composer使用', link: '/devops/env/php/composer/20210808-composer-in-production-env' },
              ]
            },
            { 
              text: 'WAMP', 
              items: [
                { text: 'WAMP: You don\'t have permission to access on this server', link: '/devops/env/php/wamp/20170619-wamp-403' },
                { text: 'WAMPServer为Laravel项目配置alias', link: '/devops/env/php/wamp/20180412-wampserver-add-alias-for-laravel-programe' },
                { text: 'WAMPServer之Apache日志分割', link: '/devops/env/php/wamp/20180813-wampserver-apche-logs-setting' },
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
            { text: 'Ubuntu redis多实例安装', link: '/devops/env/redis/20180720-ubuntu-install-redis-multi-instance' },
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
            { text: 'Ubuntu搭建git server', link: '/devops/svn/git/20170711-ubuntu-install-git-server' },
            { text: 'Git Commit规范化工具', link: '/devops/svn/git/20231026-git-commit-format' },
          ]
        },
        { 
          text: 'Github', 
          items: [
            { text: 'Github资料', link: '/devops/svn/github/index' },
            { text: 'Github新建项目初始化', link: '/devops/svn/github/20200206-github-new-project-init.md' },
          ]
        },
        { 
          text: 'Gitlab', 
          items: [
            { text: 'Ubuntu安装gitlab', link: '/devops/svn/gitlab/20180513-ubuntu-install-gitlab' },
            { text: 'GitlabUpgrade', link: '/devops/svn/gitlab/20180925-GItlab-Upgrade' },
          ]
        },
        { 
          text: 'Visual SVN', 
          items: [
            { text: 'Windows下VisualSVN配置钩子', link: '/devops/svn/visual-svn/20170623-windows-visualsvn-post-commit' },
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
            { text: '图片查看器', link: '/framework/javascript/vitepress/plugins/vitepress-plugin-image-viewer' },
            { text: 'Giscus评论系统', link: '/framework/javascript/vitepress/plugins/vitepress-plugin-comment-with-giscus' },
            { text: '哔哩哔哩视频', link: '/framework/javascript/vitepress/plugins/vitepress-plugin-bilibili-video' },
          ]
        },
        { 
          text: '博客', 
          items: [
            { text: 'https://hefengbao.github.io 无法加载样式', link: '/framework/javascript/vitepress/blog/2025-05-21-hefengbao-github-io-can-not-load-style' },
          ]
        },
      ],
      '/framework/javascript/vue/': [
        { text: '开篇', link: '/framework/javascript/vue/index' },
        { text: '创建Vue项目', link: '/framework/javascript/vue/20191219-create-vue-project.' },
        { text: 'Vue 配置', link: '/framework/javascript/vue/20191214-vue-conifg' },
        { text: 'Vue 路由', link: '/framework/javascript/vue/20190728-Vue-Router' },
      ],
      '/framework/kmp': [
        { text: '开篇', link: '/framework/kmp/index' },
      ],
      '/framework/php/filament/': [
        { text: '开篇', link: '/framework/php/filament/index' },
        { 
          text: '博客', 
          items: [
            { text: 'Filament表单复用', link: '/framework/php/filament/blog/20240828-reusing-filament-forms' },
          ]
        },
        { 
          text: '教程', 
          items: [
            { text: '安装', link: '/framework/php/filament/tutorial/filament-tutorial-01-installation' },
            { text: '配置', link: '/framework/php/filament/tutorial/filament-tutorial-02-configuration' },
            { text: '替换默认的User用户模型', link: '/framework/php/filament/tutorial/filament-tutorial-03-use-anothor-user-model' },
            { text: '资源（Resource）', link: '/framework/php/filament/tutorial/filament-tutorial-04-resource' },
            { text: '表单（Form）', link: '/framework/php/filament/tutorial/filament-tutorial-05-form' },
            { text: '列表（Table）', link: '/framework/php/filament/tutorial/filament-tutorial-06-table' },
            { text: 'Enum', link: '/framework/php/filament/tutorial/filament-tutorial-07-enum' },
            { text: '详情页（Infolist）', link: '/framework/php/filament/tutorial/filament-tutorial-08-infolist' },
            { text: '操作（Action）', link: '/framework/php/filament/tutorial/filament-tutorial-09-action' },
          ]
        },
      ],
      '/framework/php/laravel/': [
        { text: '开篇', link: '/framework/php/laravel/index' },
        { text: 'Deploy', link: '/framework/php/laravel/deploy' },
        { 
          text: '包', 
          items: [
            { text: 'Package', link: '/framework/php/laravel/package/20200522-laravel-package' },
            { text: 'LaravelEasyMetrics', link: '/framework/php/laravel/package/20250527-laravel-easy-metrics' },
          ]
        },
        { 
          text: '博客', 
          items: [
            { text: 'Laravel系统登录后的跳转', link: '/framework/php/laravel/blog/20171109-larvel-redirect-if-authenticated' },
            { text: 'Laravel timestamp', link: '/framework/php/laravel/blog/20180328-Laravel-timestamp' },
            { text: 'Laravel用UUID做主键', link: '/framework/php/laravel/blog/20180620-laravel-use-uuid-as-primary-key' },
            { text: 'Laravel备份', link: '/framework/php/laravel/blog/20181114-laravel-backup' },
            { text: 'Laravel Mail配置', link: '/framework/php/laravel/blog/20181114-laravel-mail-config' },
            { text: 'Laravel定时任务', link: '/framework/php/laravel/blog/20181214-laravel-cron' },
            { text: '浅析Laravel文档推荐的Nginx配置', link: '/framework/php/laravel/blog/20190821-laravel-recommended-nginx-conf-analysis' },
            { text: 'Erroneous data format for unserializing \'Symfony Component Routing CompiledRoute\'', link: '/framework/php/laravel/blog/20200404-Erroneous-data-format-for-unserializing-Symfony-Component-Routing-CompiledRoute' },
            { text: 'Laravel使用Redis', link: '/framework/php/laravel/blog/20220423-laravel-redis' },
            { text: '在类型为datetime-local的input中显示日期', link: '/framework/php/laravel/blog/20230328-laravel-tutorial-show-a-date-in-a-datetime-local-input' },
            { text: 'Laravel10.x使用Livewire和TailwindCSS', link: '/framework/php/laravel/blog/20230503-installing-laravel-livewire-and-tailwind-css' },
            { text: 'Laravel中的setVisible和setHidden模型方法', link: '/framework/php/laravel/blog/20230504-the-setvisible-and-sethidden-eloquent-methods-in-laravel' },
            { text: 'Laravel使用Vuepress搭建文档', link: '/framework/php/laravel/blog/20230506-how-to-add-documentation-to-your-laravel-app-with-vuepress' },
            { text: '控制器中CURD方法不能满足需求时如何给方法命名', link: '/framework/php/laravel/blog/20230818-laravel-tips-how-to-name-the-method-in-the-controller-that-beyond-curd' },
            { text: '7个Laravel函数也接受数组参数', link: '/framework/php/laravel/blog/20231001-laravel-functions-that-also-accept-array-parameter' },
            { text: '添加自定义Artisan命令(带可选参数)', link: '/framework/php/laravel/blog/20231002-adding-a-custom-artisan-command-with-optional-arguments' },
            { text: '在Laravel中加载限制数量的关联数据并避免 N+1问题', link: '/framework/php/laravel/blog/20231003-limiting-loaded-relationship-records-in-laravel' },
            { text: '在Laravel中使用PHP Enums存储附加信息', link: '/framework/php/laravel/blog/20231005-using-php-enums-in-laravel' },
            { text: 'Laravel保存json数据不转义汉字', link: '/framework/php/laravel/blog/20231214-laravel-save-json-to-database-unescaped-unicode' },
            { text: '用Traits增强Laravel应用程序', link: '/framework/php/laravel/blog/20240228-enhancing-laravel-applications-with-traits' },
            { text: 'Laravel的Collection::times()使用', link: '/framework/php/laravel/blog/20240319-using-collection-times-in-laravel' },
            { text: 'Laravel读取json文件', link: '/framework/php/laravel/blog/20240826-how-to-read-json-file-in-laravel' },
            { text: 'Laravel配置额外的环境文件', link: '/framework/php/laravel/blog/20240826-how-to-read-json-file-in-laravel' },
            { text: 'Laravel11使用JWT认证API', link: '/framework/php/laravel/blog/20240829-laravel-11-json-jwt-authentication' },
            { text: '5个调度方法', link: '/framework/php/laravel/blog/20240830-laravel-advanced-top-5-scheduler-functions-you-might-not-know-about' },
            { text: 'Laravel查询作用域', link: '/framework/php/laravel/blog/20240831-laravel-query-scopes' },
            { text: '使用HTTP响应缓存加速LaravelAPI', link: '/framework/php/laravel/blog/20240904-supercharge-your-laravel-api-with-http-response-caching' },
            { text: 'Laravel方法Str::replaceArray()', link: '/framework/php/laravel/blog/20240905-discover-the-power-of-str-replacearray-in-laravel' },
            { text: 'Laravel API速率限制', link: '/framework/php/laravel/blog/20240906-securing-your-laravel-apis-with-built-in-rate-limiting' },
            { text: 'Laravel集合中使用ensure()方法验证数据类型', link: '/framework/php/laravel/blog/20240907-data-type-validation-in-laravel-collections-with-the-ensure-method' },
            { text: 'Laravel性能提升的秘密武器OPCache', link: '/framework/php/laravel/blog/20240908-php-opcache-the-secret-weapon-for-laravel-performance-boost' },
            { text: 'Laravel预加载限定条数', link: '/framework/php/laravel/blog/20240922-limit-eager-loaded-relationships-in-laravel' },
            { text: 'Laravel重设SessionID', link: '/framework/php/laravel/blog/20240924-laravel-regenerate-session-id' },
            { text: 'Laravel Blade:@stack', link: '/framework/php/laravel/blog/20240930-laravel-blade-stack' },
            { text: 'TrustProxies Middleware', link: '/framework/php/laravel/blog/20241008-laravel-trustproxies-middleware' },
            { text: 'Laravel请求流式接口返回流式Http响应', link: '/framework/php/laravel/blog/20250312-using-stream-request-stream-response-in-laravel' },
          ]
        },
        { 
          text: '教程', 
          items: [
            { text: '开篇', link: '/framework/php/laravel/tutorial/laravel-tutorial-01-start' },
            { text: '搭建环境&创建项目', link: '/framework/php/laravel/tutorial/laravel-tutorial-02-development-enviroment' },
            { text: '概览', link: '/framework/php/laravel/tutorial/laravel-tutorial-03-introduction' },
            { text: '路由', link: '/framework/php/laravel/tutorial/laravel-tutorial-04-routes' },
            { text: 'Artisan 命令行', link: '/framework/php/laravel/tutorial/laravel-tutorial-05-artisan-command' },
            { text: '控制器', link: '/framework/php/laravel/tutorial/laravel-tutorial-06-controllers' },
            { text: '数据库&模型', link: '/framework/php/laravel/tutorial/laravel-tutorial-07-database-model' },
            { text: '模型设置', link: '/framework/php/laravel/tutorial/laravel-tutorial-08-model-settings' },
            { text: '查询构造器&检索模型', link: '/framework/php/laravel/tutorial/laravel-tutorial-09-queries-retrieving-models' },
            { text: 'Telescope & dd方法', link: '/framework/php/laravel/tutorial/laravel-tutorial-10-telescope-dd' },
            { text: '视图 & Blade模板', link: '/framework/php/laravel/tutorial/laravel-tutorial-11-view-blade' },
            { text: '请求 & CSRF保护', link: '/framework/php/laravel/tutorial/laravel-tutorial-12-request-csrf' },
            { text: '表单验证', link: '/framework/php/laravel/tutorial/laravel-tutorial-13-form-validation' },
            { text: '模型关联', link: '/framework/php/laravel/tutorial/laravel-tutorial-14-eloquent-relationships' },
            { text: '中间件', link: '/framework/php/laravel/tutorial/laravel-tutorial-15-middleware' },
            { text: '事件系统', link: '/framework/php/laravel/tutorial/laravel-tutorial-16-events' },
            { text: '发送邮件', link: '/framework/php/laravel/tutorial/laravel-tutorial-17-mail' },
            { text: '队列', link: '/framework/php/laravel/tutorial/laravel-tutorial-18-queues' },
            { text: '任务调度', link: '/framework/php/laravel/tutorial/laravel-tutorial-19-scheduling' },
            { text: '文件系统', link: '/framework/php/laravel/tutorial/laravel-tutorial-20-filesystem' },
            { text: '缓存', link: '/framework/php/laravel/tutorial/laravel-tutorial-21-cache' },
            { text: '用户认证', link: '/framework/php/laravel/tutorial/laravel-tutorial-22-auth' },
            { text: '用户授权', link: '/framework/php/laravel/tutorial/laravel-tutorial-23-access' },
          ]
        },
      ],
      '/framework/python/flask/': [
        { text: '开篇', link: '/framework/python/flask/index' },
      ],
      '/lang/css/': [
        { text: '开篇', link: '/lang/css/index' },
        {
          text: '博客',
          items: [
            { text: '使用align-content:center实现div居中', link: '/lang/css/blog/20240903-align-content-center' },
          ]
        },
      ],
      '/lang/go/': [
        { text: '开篇', link: '/lang/go/index' },
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
        {
          text: '博客',
          items: [
            { text: 'JDK8中的LocalDate、LocalTime和LocalDateTime', link: '/lang/java/blog/20230927-jdk8-localdate-localtime-localdatetime' },
            { text: 'JDK8中的ZoneId、ZoneDateTime、Instant、DateTimeFormatter、Period和Duration', link: '/lang/java/blog/20230929-jdk8-zoneid-zonedatetime-instant-datetimeformatter-period-duration' },
          ]
        },
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
          text: '插件',
          items: [
            { text: 'Editor.js', link: '/lang/javascript/plugin/20250517-editorjs' },
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
        {
          text: '博客',
          items: [
            { text: 'let、with、run、apply、also函数的使用', link: '/lang/kotlin/blog/20190511-kotlin-let-with-run-apply-also' },
            { text: '使用Moshi解析json', link: '/lang/kotlin/blog/20190519-getting-started-using-moshi-for-json-parsing-with-kotlin' },
          ]
        },
        {
          text: '教程',
          items: [
            { text: 'Char & String', link: '/lang/kotlin/tutorial/kotlin-toturial-01-char-string' },
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
        },
        {
          text: '博客',
          items: [
            { text: '空值检查!/is_null/isset', link: '/lang/php/blog/20231110-php-check-for-empty-values-not-is-null-vs-isset' },
            { text: '使用JSON Schema验证JSON数据', link: '/lang/php/blog/20240901-validating-json-with-json-schema-and-php' },
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
      '/lang/sql/': [
        { text: 'Join', link: '/lang/sql/join' },
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
       '/mobile-development/android/': [
        { text: '开篇', link: '/mobile-development/android/index' },
        { text: 'Dependecy', link: '/mobile-development/android/20190504-android-dependecies' },
        {
          text: 'JetpackCompose',
          items: [
            { 
              text: '博客',
              items: [
                { text: '使用LinkAnnotation替代ClickableText', link: '/mobile-development/android/jetpack-compose/blog/20240824-jetpack-compose-migrating-from-the-clickabletext-composable-to-linkannotation' },
              ]
            },
            { 
              text: '教程',
              items: [
                { text: '开发环境&新建项目', link: '/mobile-development/android/jetpack-compose/tutorial/jetpack-compose-tutorial-01-android-env-config-create-project' },
                { text: 'Modifier,Box,Colum,Row', link: '/mobile-development/android/jetpack-compose/tutorial/jetpack-compose-tutorial-02-modifier-box-colum-row' },
                { text: 'Text & ClickableText', link: '/mobile-development/android/jetpack-compose/tutorial/jetpack-compose-tutorial-03-text-clickabletext' },
                { text: 'TextField & OutlinedTextField', link: '/mobile-development/android/jetpack-compose/tutorial/jetpack-compose-tutorial-04-textfield-outlinedtextfield' },
                { text: 'Image', link: '/mobile-development/android/jetpack-compose/tutorial/jetpack-compose-tutorial-05-image' },
                { text: '获取Context,Lifecycle,UriHandler', link: '/mobile-development/android/jetpack-compose/tutorial/jetpack-compose-tutorial-06-context-lifecycle-urihandler' },
                { text: '使用Coil加载图片', link: '/mobile-development/android/jetpack-compose/tutorial/jetpack-compose-tutorial-07-use-coli-load-image-circle-crop' },
                { text: 'Image使用Icon', link: '/mobile-development/android/jetpack-compose/tutorial/jetpack-compose-tutorial-08-image-use-vectordrawables-imagevector-painter' },
                { text: 'Icon', link: '/mobile-development/android/jetpack-compose/tutorial/jetpack-compose-tutorial-09-icon' },
                { text: 'Button', link: '/mobile-development/android/jetpack-compose/tutorial/jetpack-compose-tutorial-10-Button-OutlinedButton-TextButton-IconButton-FilledTonalButton-ElevatedButton' },
                { text: 'RadioButton、Checkbox、Switch', link: '/mobile-development/android/jetpack-compose/tutorial/jetpack-compose-tutorial-11-RadioButton-Checkbox-Switch' },
                { text: 'TopAppBar & BottomAppBar', link: '/mobile-development/android/jetpack-compose/tutorial/jetpack-compose-tutorial-12-topappbar-bottomappbar' },
                { text: 'Scaffold & Snackbar', link: '/mobile-development/android/jetpack-compose/tutorial/jetpack-compose-tutorial-13-scaffold-snackbar' },
                { text: 'Navigation导航', link: '/mobile-development/android/jetpack-compose/tutorial/jetpack-compose-tutorial-14-navigation' },
                { text: 'LazyColumn & LazyRow', link: '/mobile-development/android/jetpack-compose/tutorial/jetpack-compose-tutorial-15-lazycolumn-lazyrow' },
                { text: 'LazyVerticalGrid & LazyHorizontalGrid', link: '/mobile-development/android/jetpack-compose/tutorial/jetpack-compose-tutorial-16-LazyVerticalGrid-LazyHorizontalGrid' },
                { text: 'Card', link: '/mobile-development/android/jetpack-compose/tutorial/jetpack-compose-tutorial-17-card' },
                { text: 'AlertDialog', link: '/mobile-development/android/jetpack-compose/tutorial/jetpack-compose-tutorial-18-alertdialog' },
                { text: 'NavigationBar & Badge', link: '/mobile-development/android/jetpack-compose/tutorial/jetpack-compose-tutorial-19-navigationbar-badge' },
                { text: '权限请求', link: '/mobile-development/android/jetpack-compose/tutorial/jetpack-compose-tutorial-20-permission-request' },
              ]
            },
          ]
        },
        {
          text: '博客',
          items: [
            { text: 'DatePickerDialog', link: '/mobile-development/android/blog/20170820-android-datepickerdialog' },
            { text: 'transformDexArchiveWithExternalLibsDexMergerForDebug', link: '/mobile-development/android/blog/20180321-transformDexArchiveWithExternalLibsDexMergerForDebug' },
            { text: 'RecyclerView滚动监听', link: '/mobile-development/android/blog/20180528-ecyclerview-addonscrolllistene' },
            { text: '获取签名证书的sha1值', link: '/mobile-development/android/blog/20180619-android-get-sha1' },
            { text: 'widget has an unresolved type,and thus it was upcasted to android.view.View', link: '/mobile-development/android/blog/20190406-widget-has-an-unresolved-type-and-thus-it-was-upcasted-to-android-view-View' },
            { text: 'Parameter type must not include a type variable or wildcard: java.util.Map<java.lang.String, ? extends okhttp3.RequestBody>', link: '/mobile-development/android/blog/20190420-parameter-type-must-not-include-a-type-variable-or-wildcard' },
            { text: '如何在Android开发中保存敏感信息', link: '/mobile-development/android/blog/20190526-how-to-store-use-sensitive-information-in-android-development' },
            { text: 'Storage', link: '/mobile-development/android/blog/20190629-Storing-data-on-Android' },
            { text: 'Android 透明色', link: '/mobile-development/android/blog/20191014-android-color-alpha' },
            { text: 'Livedata map switchmap', link: '/mobile-development/android/blog/20191015-livedata-map-switchmap' },
            { text: '7 Pro-tips for Room', link: '/mobile-development/android/blog/20191129-7-pro-tips-for-room' },
            { text: 'Practical ProGuard rules examples', link: '/mobile-development/android/blog/20191129-Practical-ProGuard-rules-examples' },
            { text: 'Okhttp 开启日志', link: '/mobile-development/android/blog/20200402-how-to-enable-logging-in-okhttp' },
            { text: 'OkHttp Interceptor', link: '/mobile-development/android/blog/20200402-OkHttp-Interceptor-Making-the-most-of-it' },
            { text: 'Android多国语言文件夹汇总', link: '/mobile-development/android/blog/20200601-android-multi-language' },
            { text: 'GitHub Actions for Android developers', link: '/mobile-development/android/blog/20210302-GitHub-Actions-for-Android-developers' },
            { text: 'Response from xxx  was null but response body type was declared as non-null', link: '/mobile-development/android/blog/20230706-response-from-was-null-but-response-body-type-was-declared-as-non-null' },
            { text: 'EditText inputType & TextField keyboardType', link: '/mobile-development/android/blog/20230810-android-edittext-inputtype-textfield-keyboardtype' },
            { text: 'Android保存bitmap到共享目录', link: '/mobile-development/android/blog/20231027-android-save-bitmap-to-share-folder' },
          ]
        },
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
            { text: 'Ubuntu 安装 glibc', link: '/os/linux/blog/20230709-ubuntu-install-glibc' },
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
      '/tools/': [
        { text: '开篇', link: '/tools/index' },
        { text: '浏览器', link: '/tools/browser' },
        { text: '代码统计', link: '/tools/cloc' },
        { text: '编辑器', link: '/tools/editor' },
        { text: '邮件', link: '/tools/mail' },
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
