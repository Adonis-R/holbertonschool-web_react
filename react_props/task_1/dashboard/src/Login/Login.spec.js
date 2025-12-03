import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

describe('Login component', () => {
  it('renders without crashing', () => {
    render(<Login />);
  });

  it('includes 2 labels, 2 inputs, and 1 button', () => {
    render(<Login />);
    const labels = screen.getAllByText(/:/);
    expect(labels).toHaveLength(2);

    const inputs = screen.getAllByRole('textbox');
    const passwordInput = document.querySelector('input[type="password"]');
    expect(inputs.length + (passwordInput ? 1 : 0)).toBe(2);

    const button = screen.getByRole('button', { name: 'OK' });
    expect(button).toBeInTheDocument();
  });

  it('focuses the email input when the Email label is clicked', async () => {
    const user = userEvent.setup();
    render(<Login />);
    const emailLabel = screen.getByText('Email:');
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    
    await user.click(emailLabel);
    expect(emailInput).toHaveFocus();
  });

  it('focuses the password input when the Password label is clicked', async () => {
    const user = userEvent.setup();
    render(<Login />);
    const passwordLabel = screen.getByText('Password:');
    const passwordInput = document.querySelector('input[type="password"]');
    
    await user.click(passwordLabel);
    expect(passwordInput).toHaveFocus();
  });
});
