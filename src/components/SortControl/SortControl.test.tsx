import { act, render } from '@testing-library/react';
import { SortControl } from './SortControl';
import userEvent from '@testing-library/user-event';

test('should render sort control labels', () => {
  const { getByText } = render(<SortControl onChange={jest.fn()} />);
  expect(getByText('Sort by')).toBeInTheDocument();
});

test('should render "Release date" option by default', () => {
  const { getByLabelText } = render(<SortControl onChange={jest.fn()} />);
  expect(getByLabelText('Sort by')).toHaveValue('Release date');
});

test('should render the option passed in the currentSelection prop', () => {
  const { getByLabelText } = render(<SortControl initialOption='Title' onChange={jest.fn()} />);
  expect(getByLabelText('Sort by')).toHaveValue('Title');
});

test('should call "onChange" callback with the selected option after change', () => {
  const onChange = jest.fn();
  const { getByLabelText } = render(
    <SortControl initialOption='Release date' onChange={onChange} />
  );
  act(() => {
    userEvent.selectOptions(getByLabelText('Sort by'), 'Title');
  });
  expect(onChange).toHaveBeenCalledWith('Title');
  expect(getByLabelText('Sort by')).toHaveValue('Title');
});
