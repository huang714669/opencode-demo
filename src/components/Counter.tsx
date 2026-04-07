import { useState } from 'react';

interface CounterProps {
  /** Starting value for the counter */
  initial?: number;
}

/**
 * Interactive counter — demonstrates React state with TypeScript.
 * AI-assisted scaffold (GitHub Copilot), human-reviewed.
 */
export default function Counter({ initial = 0 }: CounterProps) {
  const [count, setCount] = useState<number>(initial);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(initial);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <p className="text-sm text-gray-500 mb-2">当前计数</p>
      <div data-testid="count-value" className="text-5xl font-bold text-gray-900 mb-6">
        {count}
      </div>
      <div className="flex gap-3">
        <button
          onClick={decrement}
          aria-label="Decrement counter"
          className="px-4 py-2 rounded bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors"
        >
          −1
        </button>
        <button
          onClick={increment}
          aria-label="Increment counter"
          className="px-4 py-2 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
        >
          +1
        </button>
        <button
          onClick={reset}
          aria-label="Reset counter"
          className="px-4 py-2 rounded bg-gray-100 text-gray-500 font-medium hover:bg-gray-200 transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
