test('renders title', () => {
  render(<App />);
  const titleElement = screen.getByText(/personajes de rick and morty/i);
  expect(titleElement).toBeInTheDocument();
});