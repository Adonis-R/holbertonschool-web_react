import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { getCurrentYear } from '../utils/utils';

describe('Footer component', () => {
  it('renders without crashing', () => {
    render(<Footer />);
  });

  it('renders the correct copyright text when isIndex is true', () => {
    render(<Footer />);
    const currentYear = getCurrentYear();
    const paragraph = screen.getByText(`Copyright ${currentYear} - Holberton School`);
    expect(paragraph).toBeInTheDocument();
  });
});
