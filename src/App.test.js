import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  render(<App />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});