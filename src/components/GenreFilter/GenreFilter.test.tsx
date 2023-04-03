/* eslint-disable @typescript-eslint/no-empty-function */
import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GenreFilter from './GenreFilter';

test('renders in uppercase all genres passed in props', () => {
  const { getByText } = render(
    <GenreFilter genres={['x', 'y', 'z']} initialGenre={''} onSelect={() => {}} />
  );
  expect(getByText('ALL')).toBeInTheDocument();
  expect(getByText('X')).toBeInTheDocument();
  expect(getByText('Y')).toBeInTheDocument();
  expect(getByText('Z')).toBeInTheDocument();
});
test('renders "ALL" option for empty genres passed in props', () => {
  const { getByText } = render(<GenreFilter genres={[]} initialGenre={''} onSelect={() => {}} />);
  expect(getByText('ALL')).toBeInTheDocument();
});
test('highlights a selected genre passed in props', () => {
  const { getByText } = render(
    <GenreFilter genres={['a', 'b']} initialGenre={'b'} onSelect={() => {}} />
  );
  expect(getByText('ALL')).not.toHaveClass('active');
  expect(getByText('A')).not.toHaveClass('active');
  expect(getByText('B')).toHaveClass('active');
});
test('highlights "all" when genre passed in props is not in genres', () => {
  const { getByText } = render(
    <GenreFilter genres={['a', 'b']} initialGenre={''} onSelect={() => {}} />
  );
  expect(getByText('ALL')).toHaveClass('active');
  expect(getByText('A')).not.toHaveClass('active');
  expect(getByText('B')).not.toHaveClass('active');
});
test('after a click event on a genre button component calls "onChange" callback and passes correct genre in arguments', () => {
  const onChange = jest.fn();
  const { getByText } = render(
    <GenreFilter genres={['a']} initialGenre={''} onSelect={onChange} />
  );
  act(() => {
    userEvent.click(getByText('A'));
  });
  expect(onChange).toHaveBeenCalledWith('a');
  expect(getByText('A')).toHaveClass('active');
});
