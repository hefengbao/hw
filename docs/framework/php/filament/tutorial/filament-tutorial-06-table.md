# Filament 入门：列表（Table）

Filament 中列表（Table）用来显示内容列表，分页，常用的操作按钮，修改，查看等。

在 `app/Filament/Admin/Resources/PostResource.php` 中，默认有：

```php
public static function table(Table $table): Table
{
		return $table
				->columns([
						// 列表逻辑
				])
				->filters([
						// 过滤逻辑
				])
				->actions([
						Tables\Actions\EditAction::make(),// 编辑按钮，默认显示在每行的右侧
				])
				->bulkActions([
						Tables\Actions\BulkActionGroup::make([ // 批量操作选项
								Tables\Actions\DeleteBulkAction::make(),// 批量删除
						]),
				]);
}
```

示例代码：

```php
public static function table(Table $table): Table
{
		return $table
			->columns([
					Tables\Columns\TextColumn::make('title')
							->label('标题')
							->description(fn(Post $record) => $record->slug),//利用这个特性可以把字段合并显示
					Tables\Columns\TextColumn::make('author.name')
							->label('作者'),
					Tables\Columns\TextColumn::make('status')
							->label('状态')
							->badge() // 显示为 badge
							->color(fn(string $state): string => match($state){
									'publish' => 'info',
									default => 'primary'
							}) // 定制 badge 颜色
			])
			->filters([
					Tables\Filters\SelectFilter::make('status')
							->label('状态')
							->options([
									'draft' => '草稿',
									'publish' => '发布',
							])
			]);
}
```

如果需要对列表查询设置一些条件限制，比如排序等，使用`getEloquentQuery()` 方法：

```php
class PostResource extends Resource
{
	public static function getEloquentQuery(): Builder
	{
			return parent::getEloquentQuery()->orderByDesc('id');
	}
}
```