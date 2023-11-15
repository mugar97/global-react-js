import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';

const label = 'Click me';

test('renders with default style and label', () => {
  const { getByRole, getByText } = render(<Button label={label} />);
  const buttonElement = getByRole('button');
  expect(buttonElement).toHaveClass('button');
  expect(buttonElement).toHaveClass('button--primary');
  expect(getByText(label)).toBeInTheDocument();
});

test('renders with the label passed as prop', () => {
  const label = 'Test Label';
  const { getByText } = render(<Button label={label} />);
  expect(getByText(label)).toBeInTheDocument();
});

test('renders with custom style and label', () => {
  const { getByRole, getByText } = render(<Button label={label} customStyle='secondary' />);
  const buttonElement = getByRole('button');
  expect(buttonElement).toHaveClass('button');
  expect(buttonElement).toHaveClass('button--secondary');
  expect(getByText(label)).toBeInTheDocument();
});

test('calls onClick function', () => {
  const onClickMock = jest.fn();
  const { getByRole } = render(<Button label={label} onClick={onClickMock} />);
  const buttonElement = getByRole('button');
  fireEvent.click(buttonElement);
  expect(onClickMock).toHaveBeenCalled();
});
