interface Step {
  id: number;
  title: string;
  description: string;
  tool: string;
}

const STEPS: Step[] = [
  {
    id: 1,
    title: '初始化项目',
    description: 'git init、npm init、安装依赖，建立 TypeScript + Next.js 骨架。',
    tool: 'OpenCode',
  },
  {
    id: 2,
    title: 'AI 辅助编码',
    description: '用 Copilot 生成组件草稿，开发者审查并补充类型与测试。',
    tool: 'Copilot',
  },
  {
    id: 3,
    title: '提交规范',
    description: 'Conventional Commits (feat/fix/chore)，Husky 预提交钩子自动 lint。',
    tool: 'Husky + lint-staged',
  },
  {
    id: 4,
    title: '测试驱动',
    description: 'Vitest + Testing Library，覆盖关键交互逻辑。',
    tool: 'Vitest',
  },
  {
    id: 5,
    title: 'CI 自动化',
    description: 'GitHub Actions 在每次 push/PR 自动运行 lint、test、build。',
    tool: 'GitHub Actions',
  },
  {
    id: 6,
    title: 'PR & 代码审查',
    description: 'Copilot 生成 PR 描述草稿，团队审查，合并到 main。',
    tool: 'GitHub PR',
  },
];

/**
 * Displays the OpenCode + Copilot workflow steps.
 */
export default function WorkflowSteps() {
  return (
    <ol className="space-y-4">
      {STEPS.map((step) => (
        <li
          key={step.id}
          className="flex gap-4 bg-white rounded-lg border border-gray-200 p-4 shadow-sm"
        >
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">
            {step.id}
          </span>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-gray-900">{step.title}</h3>
              <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded">
                {step.tool}
              </span>
            </div>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
