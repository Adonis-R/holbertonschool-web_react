import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  it('renders without crashing', () => {
    render(<Header />);
  });

  it('contains the Holberton logo', () => {
    render(<Header />);
    const logo = screen.getByAltText('holberton logo');
    expect(logo).toBeInTheDocument();
  });

  it('contains the heading h1 element with the correct text', () => {
    render(<Header />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('School dashboard');
  });
});
