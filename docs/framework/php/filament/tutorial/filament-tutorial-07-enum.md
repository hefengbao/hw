# Filament 入门：Enum

在前面的文章中，Post 的 status 设定为两种状态：`draft`、`Publish`,对于这种可选值确定的字段，可使用枚举类型（Enum）:

```php
<?php

namespace App\Enums;

enum Status: string
{
    case Draft = 'draft';
    case Publish = 'publish';
}
```

使用 `Status::Draft->value` 这样的方式获取值，`PostResource` 中表单的 `status` 可以修改成这样。

```php
Forms\Components\Select::make('status')
		->label('状态')
		->options([
				Status::Draft->value => '草稿',
				Status::Publish->value => '发布',
		])
		->default('draft') // 默认已选项
		->selectablePlaceholder(false) // 不显示请选择（Select an option）选项
		->live(),
```

但是还是稍显麻烦，Filament 提供了更简洁的方法，修改 `Status.php`:

```php
use Filament\Support\Contracts\HasLabel;

enum Status: string implements HasLabel
{
    case Draft = 'draft';
    case Publish = 'publish';

    public function getLabel(): ?string
    {
        return match ($this){
            self::Draft => '草稿',
            self::Publish => '发布',
        };
    }
}
```

修改 `app/Models/Post.php`:

```php
class Post extends Model
{
    use HasFactory;

    protected $casts = [
				...
        'status' => Status::class 
    ];
}
```

表单中的代码就可以改成这样：

```php
Forms\Components\Select::make('status')
		->label('状态')
		->options(Status::class)
		->default('draft') // 默认已选项
		->selectablePlaceholder(false) // 不显示请选择（Select an option）选项
		->live(),

```

在前面列表（Table）那篇文章中，使用 `color()` 方法来定制 badge 颜色：

```php
Tables\Columns\TextColumn::make('status')
	->label('状态')
	->badge() // 显示为 badge
	->color(fn(string $state): string => match($state){
			'publish' => 'info',
			default => 'primary'
	}) // 定制 badge 颜色
```

Filament 也提供可更加简介的方法，让 `Status` 继承 `HasLabel`：

```php
use Filament\Support\Contracts\HasLabel;

enum Status: string implements HasLabel, HasColor
{
    case Draft = 'draft';
    case Publish = 'publish';

    public function getLabel(): ?string
    {
        return match ($this){
            self::Draft => '草稿',
            self::Publish => '发布',
        };
    }

    public function getColor(): string|array|null
    {
        return match ($this){
            self::Draft => 'primary',
            self::Publish => 'info',
        };
    }
}
```

构建列表的代码可简化为：

```php
Tables\Columns\TextColumn::make('status')
		->label('状态')
		->badge()
```

Filament 预定义的颜色（Color）参考：[https://filamentphp.com/docs/3.x/support/colors](https://filamentphp.com/docs/3.x/support/colors)
