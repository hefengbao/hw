# LangGraph


### State（状态）

在 LangGraph 中，State 是一个贯穿整个工作流执行过程中的共享数据的结构，代表当前快照，它存储了从工作流开始到结束的所有必要的信息（历史对话、检索到的文档、工具执行结果等），在各个节点中共享，且每个节点都可以修改。State 可以是 [TypedDict](https://typing.python.org/en/latest/spec/typeddict.html) 类型，也可以是 [Pydantic]([欢迎使用 Pydantic - Pydantic 官方文档](https://pydantic.com.cn/)) 中的 BaseModel 类型。

### Node（节点）

Nod e是 LangGraph 中的一个基本处理单元，代表工作流中的一个操作步骤，可以是一个Agent、调用大模型、工具或一个函数（说白了就是绑定一个函数，具体逻辑可以干任何事情）。

  
Node的设计原则：

- 单一职责原则：每个节点应该只负责一项职责，避免功能过于复杂
- 无状态设计：节点本身不应该保存状态，所有数据都通过输入状态传递
- 幂等性：相同的输入应该产生相同的输出，确保可重试性
- 可测试性：节点逻辑应该易于单元测试

[Multi-Agent全面爆发！一文详解多智能体核心架构及LangGraph框架](https://mp.weixin.qq.com/s/XhFbLTLcSjDj0r3KGT9EOg)