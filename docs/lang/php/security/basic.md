# 基础
## 净化输入

永远不要相信用户输入，使用 PHP 的 `filter_input()` 或 Symfony Validator 等库来清理输入。

```php
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
```

## 转义输出

在 HTML 中渲染用户数据时，始终对其进行转义以避免 XSS 攻击。

```php
echo(htmlspecialchars($username, ENT_QUOTES, 'UTF-8'));
```

## 使用参数化查询

通过坚持预处理语句来防止 SQL注入。

```php
$stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email");   
$stmt->execute(['email' => $email]);
```