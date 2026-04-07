# opencode-demo

**OpenCode + GitHub Copilot 最佳编码工作流演示应用**

本项目演示基于 [OpenCode](https://opencode.ai) 与 **GitHub Copilot AI 套餐**的高质量编码工作流，涵盖从项目初始化到 CI/CD 的每一步最佳实践。

## 技术栈

| 工具                                           | 用途                  |
| ---------------------------------------------- | --------------------- |
| [Next.js](https://nextjs.org) + TypeScript     | 框架与类型安全        |
| [Tailwind CSS v4](https://tailwindcss.com)     | 样式                  |
| [Vitest](https://vitest.dev) + Testing Library | 单元/组件测试         |
| ESLint v9 + Prettier                           | 代码质量与格式化      |
| Husky + lint-staged                            | 预提交钩子            |
| GitHub Actions                                 | CI（lint/test/build） |

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
# 打开 http://localhost:3000

# 运行测试
npm run test

# Lint 检查
npm run lint

# 生产构建
npm run build
```

## OpenCode 工作流步骤

### 1. 初始化项目

```bash
git init && git branch -m main
npm init -y
# OpenCode 辅助生成配置文件骨架
```

### 2. 功能开发（AI 辅助）

在 VSCode 中开发时，使用 Copilot 提示：

```
// Copilot prompt 示例：
// Create a React TypeScript Counter component with props: initial (number).
// Include +1, -1, Reset buttons and a data-testid="count-value" display.
```

### 3. 提交规范（Conventional Commits）

```bash
git commit -m "feat(ui): add Counter component with increment/decrement"
git commit -m "test: add Counter unit tests"
git commit -m "chore: configure ESLint and Prettier"
```

### 4. 生成测试（Copilot 辅助）

```
// Copilot prompt 示例：
// Write vitest tests for Counter using @testing-library/react.
// Cover: initial render, increment, decrement, reset behaviors.
```

### 5. PR 描述（Copilot 辅助）

```
// Copilot prompt 示例：
// Summarize these changes for a PR description:
// - Added Counter component
// - Added Header component
// - Added vitest tests
// Use conventional format with checklist.
```

## 项目结构

```
src/
├── components/
│   ├── Counter.tsx          # 交互计数器组件
│   ├── Counter.test.tsx     # Counter 单元测试
│   ├── Header.tsx           # 页面头部导航
│   ├── Header.test.tsx      # Header 单元测试
│   └── WorkflowSteps.tsx    # 工作流步骤列表
├── pages/
│   ├── _app.tsx             # Next.js App 入口
│   ├── index.tsx            # 首页
│   └── api/
│       └── hello.ts         # 示例 API 路由
└── styles/
    └── globals.css          # Tailwind 全局样式
```

## API 路由

```bash
GET /api/hello
# 返回: { name, version, workflow[] }
```

## CI/CD

每次 push 或 PR 到 main 分支时，GitHub Actions 自动执行：

1. `npm run lint` — ESLint 代码质量检查
2. `npm run test:run` — Vitest 测试
3. `npm run build` — Next.js 生产构建

## 贡献指南

1. 创建 feature 分支：`git checkout -b feature/your-feature`
2. 开发并提交（Conventional Commits 格式）
3. 确保 lint/test/build 全部通过
4. 开 PR，在描述中注明 AI 辅助内容
5. PR 审查通过后合并到 main
