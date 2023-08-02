import { render } from '@testing-library/react';
import App2 from './App2';

test('renders App2', () => {
    render(<App2 />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<App2 />);
    expect(asFragment()).toMatchSnapshot();
});