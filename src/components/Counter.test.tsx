import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import Counter from './Counter';

describe('Counter', () => {
  it('renders with the initial value', () => {
    render(<Counter initial={5} />);
    expect(screen.getByTestId('count-value')).toHaveTextContent('5');
  });

  it('increments count when +1 button is clicked', async () => {
    const user = userEvent.setup();
    render(<Counter initial={0} />);
    await user.click(screen.getByRole('button', { name: /increment/i }));
    expect(screen.getByTestId('count-value')).toHaveTextContent('1');
  });

  it('decrements count when −1 button is clicked', async () => {
    const user = userEvent.setup();
    render(<Counter initial={3} />);
    await user.click(screen.getByRole('button', { name: /decrement/i }));
    expect(screen.getByTestId('count-value')).toHaveTextContent('2');
  });

  it('resets count to initial value', async () => {
    const user = userEvent.setup();
    render(<Counter initial={2} />);
    await user.click(screen.getByRole('button', { name: /increment/i }));
    await user.click(screen.getByRole('button', { name: /increment/i }));
    await user.click(screen.getByRole('button', { name: /reset/i }));
    expect(screen.getByTestId('count-value')).toHaveTextContent('2');
  });

  it('uses 0 as default initial value', () => {
    render(<Counter />);
    expect(screen.getByTestId('count-value')).toHaveTextContent('0');
  });
});
