import { act, render } from '@testing-library/react';
import { SortControl } from './SortControl';
import userEvent from '@testing-library/user-event';

test('should render sort control labels', () => {
  const { getByText } = render(<SortControl onChange={() => {}} />);
  expect(getByText('Sort by:')).toBeInTheDocument();
});

test('should render "Release date" option by default', () => {
  const { getByLabelText } = render(<SortControl onChange={() => {}} />);
  expect(getByLabelText('Sort by:')).toHaveValue('release date');
});

test('should render the option passed in the currentSelection prop', () => {
  const { getByLabelText } = render(<SortControl initialOption='title' onChange={() => {}} />);
  expect(getByLabelText('Sort by:')).toHaveValue('title');
});

test('should call "onChange" callback with the selected option after change', () => {
  const onChange = jest.fn();
  const { getByLabelText } = render(
    <SortControl initialOption='release date' onChange={onChange} />
  );
  act(() => {
    userEvent.selectOptions(getByLabelText('Sort by:'), 'title');
  });
  expect(onChange).toHaveBeenCalledWith('title');
  expect(getByLabelText('Sort by:')).toHaveValue('title');
});
