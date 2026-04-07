import Link from 'next/link';

/**
 * Site-wide header with navigation.
 */
export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors"
        >
          opencode-demo
        </Link>
        <nav className="flex gap-4 text-sm">
          <a
            href="https://opencode.ai/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition-colors"
          >
            OpenCode Docs
          </a>
          <a
            href="https://github.com/features/copilot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition-colors"
          >
            Copilot
          </a>
        </nav>
      </div>
    </header>
  );
}
