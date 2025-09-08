---
sidebar_position: 1
---

# 教程介绍

让我们在**不到5分钟**的时间内了解 **Docusaurus**。

## 开始使用

通过**创建新站点**开始。

或者使用 **[docusaurus.new](https://docusaurus.new)** **立即尝试 Docusaurus**。

### 您需要什么

- [Node.js](https://nodejs.org/en/download/) 版本 18.0 或更高：
  - 安装 Node.js 时，建议您勾选所有与依赖项相关的复选框。

## 生成新站点

使用**经典模板**生成新的 Docusaurus 站点。

运行命令后，经典模板将自动添加到您的项目中：

```bash
npm init docusaurus@latest my-website classic
```

您可以在命令提示符、PowerShell、终端或代码编辑器的任何集成终端中输入此命令。

该命令还会安装运行 Docusaurus 所需的所有必要依赖项。

## 启动您的站点

运行开发服务器：

```bash
cd my-website
npm run start
```

`cd` 命令会更改您正在使用的目录。为了使用新创建的 Docusaurus 站点，您需要将终端导航到那里。

`npm run start` 命令在本地构建您的网站并通过开发服务器提供服务，您可以在 http://localhost:3000/ 查看。

打开 `docs/intro.md`（此页面）并编辑一些行：站点会**自动重新加载**并显示您的更改。
