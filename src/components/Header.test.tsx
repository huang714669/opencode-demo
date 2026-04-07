import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from './Header';

describe('Header', () => {
  it('renders the site name', () => {
    render(<Header />);
    expect(screen.getByText('opencode-demo')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header />);
    expect(screen.getByText('OpenCode Docs')).toBeInTheDocument();
    expect(screen.getByText('Copilot')).toBeInTheDocument();
  });
});
