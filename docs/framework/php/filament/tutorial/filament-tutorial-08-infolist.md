# Filament 入门：详情页（Infolist）

在 `app/Filament/Admin/Resources/PostResource.php` 中的 `table` 方法中，添加查看按钮 `Tables\Actions\ViewAction::make()`：

```php
class PostResource extends Resource
{
	public static function table(Table $table): Table
	{
		return $table
			->actions([
					Tables\Actions\ViewAction::make(), // 添加查看按钮
					Tables\Actions\EditAction::make(),// 编辑按钮，默认显示在每行的右侧
			]);
	}
}
```

点击查看按钮，默认情况下是显示一个模态框，其布局是不可编辑的创建(`Create`) 界面。

接下来完成自定义的查看界面。

运行 `php artisan make:filament-page ViewPage` 命令创建：

查看新创建的 `app/Filament/Admin/Resources/PostResource/Pages/ViewPage.php`：

在 `PostResource` 的 `getPages()` 方法中注册页面：

```php
class PostResource extends Resource
{
	public static function getPages(): array
	{
		return [
			'index' => Pages\ListPosts::route('/'),
			'create' => Pages\CreatePost::route('/create'),
			'edit' => Pages\EditPost::route('/{record}/edit'),
			'view' => Pages\ViewPage::route('{record}'), // 查看界面
		];
	}
}
```

点击列表中的查看（`View`） 按钮，将会在新的页面（`Page`）显示，而不是在模态框（`Modal`）中显示。

接下来使用 `infolist()` 方法重写布局，首先覆写 `infolist()` 方法：

```php
class PostResource extends Resource
{
	public static function infolist(Infolist $infolist): Infolist
	{
		return $infolist->schema([

		]);
	}
}
```

示例代码：

```php
public static function infolist(Infolist $infolist): Infolist
{
	return $infolist->schema([
		TextEntry::make('title')
				->label('标题'),
		TextEntry::make('slug')
				->label('Slug'),
		TextEntry::make('author.name')
				->label('作者'),
		TextEntry::make('status')
				->label('状态')
				->badge(), // 显示为 badge
		TextEntry::make('content')
				->label('内容')
				->markdown() // 解析 markdown
				->columnSpanFull(), //占用整行
	]);
}
```