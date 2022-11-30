import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const brandElement = screen.getByText(/devfinder/i);
  expect(brandElement).toBeInTheDocument();
});
