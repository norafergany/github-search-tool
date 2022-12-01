import { render, screen } from '@testing-library/react';
import MatchMediaMock from "jest-matchmedia-mock";
import App from './App';

let matchMedia;
beforeAll(() => {
  matchMedia = new MatchMediaMock();
})

test('renders learn react link', () => {
  render(<App />);
  const brandElement = screen.getByText(/devfinder/i);
  expect(brandElement).toBeInTheDocument();
});
