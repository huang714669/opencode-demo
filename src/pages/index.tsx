import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/Header';
import Counter from '@/components/Counter';
import WorkflowSteps from '@/components/WorkflowSteps';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>OpenCode + Copilot Demo</title>
        <meta name="description" content="OpenCode & GitHub Copilot best-practice workflow demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Header />

        <main className="max-w-3xl mx-auto px-6 py-10">
          {/* Hero */}
          <section className="mb-10">
            <h1 className="text-3xl font-bold text-gray-900">OpenCode + Copilot 最佳工作流</h1>
            <p className="mt-3 text-gray-600 leading-relaxed">
              本 Demo 展示基于 <strong>OpenCode</strong> 与 <strong>GitHub Copilot AI 套餐</strong>
              的高质量编码工作流，包含 TypeScript、Tailwind CSS、Vitest 测试与 GitHub Actions CI。
            </p>
          </section>

          {/* Interactive Demo */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">交互组件演示</h2>
            <Counter initial={0} />
          </section>

          {/* Workflow Steps */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">OpenCode 工作流步骤</h2>
            <WorkflowSteps />
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
