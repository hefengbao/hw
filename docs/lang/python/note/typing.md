以下是 `typing` 模块中一些常用的类型：

1. 基础类型：大多数常见Python类型都可以用它们的名字直接引用，如 `int`, `float`, `str`, `bool`, `list`, `dict`等。

2. 可选类型和联合类型：`Optional[T]` 类型用于表示该类型可选，即可以是T也可以是`None`类型。联合类型 `Union[T1, T2, ...]` 表示这个变量可以是几种类型的其中一种。

3. 容器类型：如 `List[int]`, `Dict[str, float]` 等，指定了这些容器中元素的类型。

4. 可变和不可变序列类型：`Sequence[T]` 和 `MutableSequence[T]`，前者是可以迭代的序列类型，后者除了可以迭代，也可以更改。

5. 函数类型：`Callable[..., ReturnType]` 或 `Callable[[Arg1Type, Arg2Type], ReturnType]`，用来表示一个函数的类型，其中 `Arg1Type` 和 `Arg2Type` 是函数的参数类型，`ReturnType` 是返回值类型。

6. 泛型类型：`Generic[T]`，用于定义通用类型的类。

7. `Any` 和 `NoReturn` 类型：`Any` 表示变量可以是任何类型，`NoReturn` 表示函数不返回任何值（函数不会正常返回，可能会抛出异常或终止程序）。

8. 自定义类型：如 `NewType`，可以用来创建全新的类型，用于类型检查时能区分基本类型。

使用类型注解并不影响代码的运行，它主要是用来辅助 IDE 等工具进行错误检查和代码提示。此外，一些第三方工具，如 `mypy`，可以用来进行更加严格的类型检查，帮助开发者提早发现代码中的问题。

以下是一个使用类型注解的例子：

```python
from typing import List, Tuple

def average(values: List[int]) -> float:
    return sum(values) / len(values)

def get_names_and_ages() -> Tuple[List[str], List[int]]:
    return ["Alice", "Bob"], [23, 25]
```

在这个例子中，`average` 函数使用了 `List[int]` 来表明它接收一个整数列表作为参数，返回类型为 `float`。`get_names_and_ages` 函数的返回类型是一个包含两个列表的元组，分别对应名字和年龄。