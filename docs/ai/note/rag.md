# RAG

RAG（Retrieval Augmented Generation ，检索增强生成）

![](./src/rag-diagram.webp)

RAG（Retrieval-Augmented Generation） 是一种结合“搜索”与“生成”的技术，使 LLM 在回答问题时能参考外部知识库，生成更准确、可溯源、事实性强的答案。其工作流程分为三步：Retrieve（检索）：根据用户查询，从外部知识库（如文档、数据库）中检索最相关的文本片段；Augment（增强）：将检索结果拼接到原始 Prompt 中，形成增强上下文；Generate（生成）：LLM 基于增强后的上下文生成最终回答。

参考：

[16 Techniques to Supercharge and Build Real-world RAG Systems—Part 1](https://www.dailydoseofds.com/16-techniques-to-supercharge-and-build-real-world-rag-systems-part-1/)

[从零搭建RAG应用：跳过LangChain，掌握文本分块、向量检索、指代消解等核心技术实现](https://mp.weixin.qq.com/s/UHKExjZc5wLGfTF15r_1IQ)
[IMA知识库：从0到1的架构设计与实践](https://mp.weixin.qq.com/s/StjkpTTMIQoxwHGyDgStOg)
