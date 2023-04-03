/* eslint-disable @typescript-eslint/no-empty-function */
import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchForm from './SearchForm';

test('renders an input with the value equal to initial value passed in props', () => {
  const { getByRole } = render(<SearchForm initialSearchQuery='test' onSearch={() => {}} />);
  expect(getByRole('textbox')).toHaveValue('test');
});
test('after typing to the input and a "click" event on the Submit button, the "onChange" prop is called with proper value', () => {
  const onChange = jest.fn();
  const { getByRole } = render(<SearchForm initialSearchQuery='' onSearch={onChange} />);

  act(() => {
    userEvent.type(getByRole('textbox'), 'new value');
    userEvent.click(getByRole('button'));
  });

  expect(getByRole('textbox')).toHaveValue('new value');
  expect(onChange).toBeCalledWith('new value');
});
test('after typing to the input and pressing Enter key, the "onChange" prop is called with proper value', () => {
  const onChange = jest.fn();
  const { getByRole } = render(<SearchForm initialSearchQuery='' onSearch={onChange} />);
  act(() => {
    userEvent.type(getByRole('textbox'), 'new value{enter}');
  });
  expect(getByRole('textbox')).toHaveValue('new value');
  expect(onChange).toBeCalledWith('new value');
});
