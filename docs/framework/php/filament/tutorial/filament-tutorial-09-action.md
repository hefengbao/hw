# Filament 入门：操作（Action）

Filament 中的操作（Action）主要是处理点击事件（逻辑），比如按钮、链接的事件逻辑。


在 `app/Filament/Admin/Resources/PostResource.php` 中的 `table` 方法中已经看到过了：

```php
public static function table(Table $table): Table
{
	return $table
		->actions([
				Tables\Actions\ViewAction::make(), // 查看按钮
				Tables\Actions\EditAction::make(),// 编辑按钮，默认显示在每行的右侧
		])
		->bulkActions([
				Tables\Actions\BulkActionGroup::make([ // 批量操作选项
						Tables\Actions\DeleteBulkAction::make(),// 批量删除
				]),
		]);
}
```

上面这些称之为列表操作（Table Action）.

常用的几类：

Forms Actions:[https://filamentphp.com/docs/3.x/forms/actions](https://filamentphp.com/docs/3.x/forms/actions)

Table Actions:[https://filamentphp.com/docs/3.x/tables/actions](https://filamentphp.com/docs/3.x/tables/actions)

Infolist Actions:[https://filamentphp.com/docs/3.x/infolists/actions](https://filamentphp.com/docs/3.x/infolists/actions)

这几类中都预定义好的 Action, 直接使用即可，如果不能满足需求，则需要自定义，比如在列表中，需要有一个置顶操作：

```php
public static function table(Table $table): Table
{
	return $table
		->actions([
				Tables\Actions\ViewAction::make(), // 查看按钮
				Tables\Actions\EditAction::make(),// 编辑按钮，默认显示在每行的右侧，
				Tables\Actions\Action::make('pinned') // 名称，要唯一
						->label('置顶') // 显示的名称（标签）
						->color('danger') // 颜色
						->requiresConfirmation() // 显示确认框
						->action(function (){}) // 操作逻辑
		])
		->bulkActions([
				Tables\Actions\BulkActionGroup::make([ // 批量操作选项
						Tables\Actions\DeleteBulkAction::make(),// 批量删除
				]),
		]);
}
```

使用过程中要注意的是每个类别中引入的 `action` 命名空间的不同。



