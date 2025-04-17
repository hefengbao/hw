# 异常处理

Python 的异常系统是分层的，所有异常都继承自 `BaseException` 类。此系统包括内置异常，例如 `IOError`、`ValueError`、`ZeroDivisionError` 等。程序员还可以定义自己的自定义异常来处理其应用程序特有的特定错误情况。

## Try Except

在 Python 中处理异常的基本结构涉及 `try` 和 `except` 块。其工作原理如下

1. **Try 块：** 此块包含可能生成异常或错误的代码。Python 将尝试执行此代码，如果发生错误，它将停止执行此块并转到 `except` 块。
2. **Except 块：** 如果在 `try` 块中发生错误，则将执行此块中的代码。这允许进行错误处理、日志记录或恢复操作。

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
```


## 何时使用异常

在 Python 编程中，异常应在预期发生错误并且可以以使程序能够继续或正常终止的方式处理错误的情况下使用。这包括但不限于

1. 输入/输出操作
2. 使用文件或网络连接
3. 解析数据
4. 在某些条件下可能失败的外部 API 或库

## 常见异常类型

Python 异常涵盖了广泛的错误类型，从语法错误到运行时错误。以下是常见的一些异常类型

- `SyntaxError`：当 Python 无法理解你的代码时发生。
- `NameError`：当找不到局部或全局名称时发生。
- `TypeError`：由应用于不适当类型对象的运算或函数引起。
- `ValueError`：当函数接收到类型正确但值不当的参数时引发。
- `IndexError`：在尝试访问超出范围的索引时触发。

## 异常处理最佳实践

1. **尽可能捕获特定异常**。
2. **对必须在所有情况下执行的清理操作使用 `finally`**。
3. **避免捕获 `SystemExit`**，除非您有充分的理由。
4. **记录异常**以帮助调试。
5. **使用自定义异常**以获得更清晰的错误报告。



参考：

[Python 中的异常处理：Try-Except 语句 - 《Dive into Python》中文版](https://diveintopython.cn/learn/exceptions)