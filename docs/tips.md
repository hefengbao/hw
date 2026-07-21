# Tips

## 布尔变量命名

（1）**is-**：描述事物的状态，后面跟形容词，比如 isActive，isDeleted，isEmpty。

（2）**has-**：描述事物的所有权或包含关系，后面跟名词，比如 hasAccess，hasChildren，hasValidationErrors。

（3）**can-**：描述事物的能力或权限，比如 canEdit，canDelete，canRetry。

（4）**should-**：描述事物的意图或逻辑，比如 shouldRetry，shouldCacheResponse。

除了这四个前缀，起名还有另一条规则：永远不在布尔变量名中使用否定词。

比如，不使用 isDisabled，而要用 `isEnabled = false`。[🔗](https://thatamazingprogrammer.com/posts/stop-naming-your-variables-flag-the-art-of-boolean-prefixes/)

