# Skill（技能）

[SkillHub-专为中国用户优化的Skills社区](https://skillhub.tencent.com/)

[https://agentskills.io](https://agentskills.io/)

[Agent Skills 市场 - Claude、Codex 和 ChatGPT Skills | SkillsMP](https://skillsmp.com/zh)

## 文件结构

```md
skills/skill-name/
	|-- SKILL.md # Instructions (YAML + Markdown)
	|-- scripts/ # Optional templates
	|-- templates/ # Optional templates
	|-- resources/ # Additional documentation
```

## 加载

 加载机制：**"渐进式披露"（progressive disclosure）**

渐进式披露通过三阶段加载机制实现：

- **第一阶段 --- 启动时**：智能体将所有 Skill 的元数据加载到系统提示词中。一个典型 Skill 的描述约 50 个词，消耗 40--50 个 tokens；100 个 Skills 的元数据总计约 4,000--5,000 个 tokens。
- **第二阶段 --- 匹配时**：处理用户请求过程中，智能体扫描 Skill 描述，识别相关匹配项。
- **第三阶段 --- 加载时**：匹配成功后，智能体通过文件系统工具读取完整的 SKILL.md 文件。此时完整内容才进入上下文窗口，根据复杂度消耗 2,000--5,000 个 tokens。

## 参考

[兄弟！你真的懂 Skill 吗？](https://mp.weixin.qq.com/s/h9BKGfLgH7GCNEhvwDBYBg)（Anthropic 开源了 16 个官方 Skill。本文的工作是：逐个分析它们的目录结构、SKILL.md 内容和执行方式，同时结合对整个 Skill 框架源码（9 个核心文件，约 2000+ 行代码）的逐文件拆解，回答一个问题：Skill 系统的执行模式到底有几种？）

[为什么 AI 巨头们放弃私有壁垒，争相拥抱 Agent Skills - OSCHINA - 中文开源技术交流社区](https://my.oschina.net/IDP/blog/19209853)