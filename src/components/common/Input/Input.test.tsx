import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';

test('should render an input with a label', () => {
  const { getByLabelText } = render(<Input label='Test Label' />);
  expect(getByLabelText('Test Label')).toBeInTheDocument();
});

test('should render an input without a label', () => {
  const { getByLabelText } = render(<Input />);
  expect(getByLabelText('Input field')).toBeInTheDocument();
});

test('should update the value when the user types in the input', () => {
  const { getByLabelText } = render(<Input label='Test Label' />);
  const inputElement = getByLabelText('Test Label') as HTMLInputElement;
  expect(inputElement.value).toBe('');
  userEvent.type(inputElement, 'test value');
  expect(inputElement.value).toBe('test value');
});
