import { fireEvent, render } from '@testing-library/react';
import Counter from './Counter';

test('renders initial value provided in props', () => {
  const { getByText } = render(<Counter initialValue={8} />);
  expect(getByText('8')).toBeInTheDocument();
});

test('click event on "decrement" button decrements the displayed value', () => {
  const { getByText } = render(<Counter initialValue={0} />);
  fireEvent.click(getByText('-'));
  expect(getByText('-1')).toBeInTheDocument();
});

test('click event on "increment" button increments the displayed value', () => {
  const { getByText } = render(<Counter initialValue={0} />);
  fireEvent.click(getByText('+'));
  expect(getByText('1')).toBeInTheDocument();
});
