import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
  it('renders without crashing', () => {
    render(<Notifications />);
  });

  it('renders the notification text', () => {
    render(<Notifications />);
    expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument();
  });

  it('renders three list items', () => {
    render(<Notifications />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });

  it('renders the close button', () => {
    render(<Notifications />);
    const closeButton = screen.getByRole('button', { name: /close/i });
    expect(closeButton).toBeInTheDocument();
  });
});
