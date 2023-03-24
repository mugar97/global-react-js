import { render, screen } from '@testing-library/react';
import App from './App';

test('renders search element', () => {
  render(<App />);
  const searchElement = screen.getByText(/Search/i);
  expect(searchElement).toBeInTheDocument();
});
