import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  render(<App />);
  const titleElement = screen.getByText(/personajes de rick and morty/i);
  expect(titleElement).toBeInTheDocument();
});