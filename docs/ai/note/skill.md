# Skill（技能）

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

[为什么 AI 巨头们放弃私有壁垒，争相拥抱 Agent Skills - OSCHINA - 中文开源技术交流社区](https://my.oschina.net/IDP/blog/19209853)