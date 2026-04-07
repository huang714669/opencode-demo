import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
  version: string;
  workflow: string[];
};

/**
 * GET /api/hello
 * Returns demo metadata — used to demonstrate Next.js API routes.
 */
export default function handler(_req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({
    name: 'OpenCode Demo',
    version: '1.0.0',
    workflow: ['OpenCode', 'GitHub Copilot', 'TypeScript', 'Tailwind', 'Vitest', 'GitHub Actions'],
  });
}
