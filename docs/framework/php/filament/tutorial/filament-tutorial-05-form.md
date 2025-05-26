# Filament 入门：表单（Form）

Filament 中的表单（Form）用来实现创建（Create）和编辑（Edit）功能。表单逻辑在 `form(Form $form)` 方法中完成。这篇文章主要介绍表单组件（Component）、表单验证等。

为了尽可能多的演示表单组件，我们将创建一个相对复杂的表单，先做准备。

```shell
php artisan make:model Post -m
```

```php
Schema::create('posts', function (Blueprint $table) {
		$table->id();
		$table->unsignedInteger('user_id')->comment('作者 ID');
		$table->string('title')->comment('标题');
		$table->string('slug');
		$table->text('content')->comment('内容');
		$table->unsignedInteger('category_id')->comment('分类 ID');
		$table->string('image')->nullable()->comment('封面地址');
		$table->string('status')->comment('状态');
		$table->dateTime('published_at')->nullable()->comment('发布时间');
		$table->timestamps();
});
```

```shell
php artisan make:model Category -m
```

```php
Schema::create('categories', function (Blueprint $table) {
		$table->id();
		$table->string('name');
		$table->timestamps();
});
```

```shell
php artisan make:model Tag -m
```

```php
Schema::create('tags', function (Blueprint $table) {
		$table->id();
		$table->string('name');
		$table->timestamps();
});
```

`Post` 与 `Tag` 是多对多关系，所以我们创建中间表保存它们的对应关系：

```shell
php artisan make:migration create_post_tag_table
```

```php
Schema::create('post_tag', function (Blueprint $table) {
		$table->id();
		$table->unsignedInteger('post_id');
		$table->unsignedInteger('tag_id');
});
```

完善 `Post` 模型中的逻辑：

```php
class Post extends Model
{
    use HasFactory;

    protected $casts = [
        'tags' => 'array', // 文档 https://filamentphp.com/docs/3.x/forms/fields/tags-input
        'published_at' => 'datetime'
    ];

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class);
    }
}
```

迁移数据表

```shell
php artisan migrate
```

在学习使用Laravel时，我们需要设置 `fillable` 或 `guarded` 来设置那些字段可以被保存到模型中（参考[https://laravel.com/docs/10.x/eloquent#mass-assignment](https://laravel.com/docs/10.x/eloquent#mass-assignment)）,
Filament只将有效数据保存到模型中([https://filamentphp.com/docs/3.x/panels/getting-started#unguarding-all-models](https://filamentphp.com/docs/3.x/panels/getting-started#unguarding-all-models))，因此可以全局禁用掉模型保护：

```php
class AppServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        Model::unguard();
    }
}
```

创建 Post 资源（Resource）：

```php
php artisan make:filament-resource Post
```

本篇文章的主要逻辑都在 `PostResoure` 中的 `form(Form $form)` 方法中完成，默认是如下：

```php
class PostResource extends Resource
{
    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //这里放置 Filament\Forms\Components 组件来布局。
            ]);
    }
}
```

一个基础为表单示例：

```php
public static function form(Form $form): Form
{
	return $form
		->schema([
			Forms\Components\TextInput::make('title')
					->label('标题') // 标签，不设置的话则显示 Title
					->required() // 必填项
					->maxLength(100) // 验证规则，最大长度为 100
					->columnSpanFull(), // 占满一行，默认是 1/2
			Forms\Components\TextInput::make('slug')
					->columnSpanFull(),
			Forms\Components\MarkdownEditor::make('content') // 使用 Markdown 编辑器
					->label('内容')
					->required()
					->columnSpanFull(),
			//Forms\Components\RichEditor::make('content'), 富文本编辑器
			Forms\Components\FileUpload::make('image')
					->label('封面')
					->disk('public') // app/config/filesystems.php 中定义的 disks
					->directory('attachment/images') // 保存目录
						->columnSpanFull(),
			Forms\Components\Select::make('category_id')
					->label('分类')
					->relationship('category','name')
					// relationship：
					// 第一个参数 category 是在 app/Models/Post.php 中定义的 `category()` 关系,
					// 第二个参数 name 表示用 Category 中的 name 的值作为选择框（select）选项（option）的内容
					->required(),
			Forms\Components\TagsInput::make('tags')
					// 这里的 tags 对应 app/Models/Post.php 中定义的 `tags()` 关系,并且在 `$casts` 属性中转为 array
					->label('标签')
					->multiple() // 可以多选
					->placeholder('') // 重置 placeholder
					->relationship('tags','name'),
			Forms\Components\Select::make('user_id')
					->label('作者')
					->relationship('author', 'name')
					->required(),
			Forms\Components\Select::make('status')
					->label('状态')
					->options([
							'draft' => '草稿',
							'publish' => '发布',
					])
					->default('draft') // 默认已选项
					->selectablePlaceholder(false), // 不显示请选择（Select an option）选项
			Forms\Components\DateTimePicker::make('published_at')
					->label('发布时间'),
		]);
}
```

如果 `Select` 组件使用了关联数据（relationship）,还可以进一步使用预加载（`preload`）、搜索（`searchable`）功能，另外还可以使用弹出框（modal）创建新的选项，在本例中，可以创建新的分类,完善代码：

```php
Forms\Components\Select::make('category_id')
	->label('分类')
	->relationship('category','name')
	// relationship：
	// 第一个参数 category 是在 app/Models/Post.php 中定义的 `category()` 关系,
	// 第二个参数 name 表示用 Category 中的 name 的值作为选择框（select）选项（option）的内容
	->required()
	->preload() //预加载
	->searchable() //可搜索
	->createOptionForm([
			Forms\Components\TextInput::make('name')
					->label('名称')
					->required()
	]),
```

设想一种场景，当用户输入标题后（`title`）后，自动生成 Slug (`slug`), 可以使用 `Filament\Forms\Set $set` 设置：

```php
Forms\Components\TextInput::make('title')
	->label('标题') // 标签，不设置的话则显示 Title
	->required() // 必填项
	->maxLength(100) // 验证规则，最大长度为 100
	->columnSpanFull() // 占满一行，默认是 1/2
	->live() // 
	->afterStateUpdated(fn(?string $state, Forms\Set $set) => $set('slug', Str::slug($state, '-', 'zh'))), // 配合 live() 方法，在 数据结束后 更新 slug 数据。 
```

![](https://www.8ug.icu/storage/upload/images/20231229/xoZGtR3ZWi56fwm7WVC2uQh1XnI2gfLXYTO800Tb.gif)

接下来，我们设定发布时间（`published_at`）仅在状态（`status`）为`publish`时才可选择日期， 

```php
Forms\Components\Select::make('status')
	->label('状态')
	->options([
			'draft' => '草稿',
			'publish' => '发布',
	])
	->default('draft') // 默认已选项
	->selectablePlaceholder(false) // 不显示请选择（Select an option）选项
	->live(),
Forms\Components\DateTimePicker::make('published_at')
	->label('发布时间')
	->disabled(fn(Forms\Get $get): bool => $get('status') !== 'publish'), // 仅当 status 的值为 publish 时才可用
```

完善代码后：

```php
public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title')
                    ->label('标题') // 标签，不设置的话则显示 Title
                    ->required() // 必填项
                    ->maxLength(100) // 验证规则，最大长度为 100
                    ->columnSpanFull() // 占满一行，默认是 1/2
                    ->live()
                    ->afterStateUpdated(fn(?string $state, Forms\Set $set) => $set('slug', Str::slug($state, '-', 'zh'))),
                Forms\Components\TextInput::make('slug')
                    ->columnSpanFull(),
                Forms\Components\MarkdownEditor::make('content') // 使用 Markdown 编辑器
                    ->label('内容')
                    ->required()
                    ->columnSpanFull(),
                //Forms\Components\RichEditor::make('content'), 富文本编辑器
                Forms\Components\FileUpload::make('image')
                    ->label('封面')
                    ->disk('public') // app/config/filesystems.php 中定义的 disks
                    ->directory('attachment/images') // 保存目录
                    ->columnSpanFull(),
                Forms\Components\Select::make('category_id')
                    ->label('分类')
                    ->relationship('category','name')
                    // relationship：
                    // 第一个参数 category 是在 app/Models/Post.php 中定义的 `category()` 关系,
                    // 第二个参数 name 表示用 Category 中的 name 的值作为选择框（select）选项（option）的内容
                    ->required()
                    ->preload() //预加载
                    ->searchable() //可搜索
                    ->createOptionForm([
                        Forms\Components\TextInput::make('name')
                            ->label('名称')
                            ->required()
                    ]),
                Forms\Components\Select::make('tags')
                    // 这里的 tags 对应 app/Models/Post.php 中定义的 `tags()` 关系,并且在 `$casts` 属性中转为 array
                    ->label('标签')
                    ->multiple() // 可以多选
                    ->placeholder('') // 重置 placeholder
                    ->relationship('tags','name')
                    ->preload()
                    ->searchable()
                    ->createOptionForm([
                        Forms\Components\TextInput::make('name')
                            ->label('名称')
                            ->required()
                    ]),
                Forms\Components\Select::make('user_id')
                    ->label('作者')
                    ->relationship('author', 'name')
                    ->required()
                    ->preload()
                    ->searchable(),
                Forms\Components\Select::make('status')
                    ->label('状态')
                    ->options([
                        'draft' => '草稿',
                       'publish' => '发布',
                    ])
                    ->default('draft') // 默认已选项
                    ->selectablePlaceholder(false) // 不显示请选择（Select an option）选项
                    ->live(),
                Forms\Components\DateTimePicker::make('published_at')
                    ->label('发布时间')
                    ->disabled(fn(Forms\Get $get): bool => $get('status') !== 'publish'), // 仅当 status 的值为 publish 时才可用
            ]);
    }
```

如果想要获取并保存用户的 IP，该怎么做呢？

在 `app/Filament/Admin/Resources/PostResource/Pages` 目录下，默认已创建了三个文件 `CreatePost`,`EditPost`,`ListPost`,分别对应创建、编辑、列表。`CreatePost` 中覆写 `mutateFormDataBeforeCreate` 方法：

```php
class CreatePost extends CreateRecord
{
    protected static string $resource = PostResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $data['ip'] = request()->ip();

        //其他数据处理逻辑

        return $data;
    }
}
```