import { render, screen } from '@testing-library/react';
import App from './App';

test('renders School Dashboard heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { name: /school dashboard/i });
  expect(headingElement).toBeInTheDocument();
});

test('renders login text', () => {
  render(<App />);
  const loginText = screen.getByText(/login to access the full dashboard/i);
  expect(loginText).toBeInTheDocument();
});

test('renders footer copyright text', () => {
  render(<App />);
  const footerText = screen.getByText(/copyright/i);
  expect(footerText).toBeInTheDocument();
});

test('renders holberton logo', () => {
  render(<App />);
  const logoElement = screen.getByAltText(/holberton logo/i);
  expect(logoElement).toBeInTheDocument();
});
