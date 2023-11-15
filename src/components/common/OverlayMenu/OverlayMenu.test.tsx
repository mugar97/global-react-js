import { act, render } from '@testing-library/react';
import { OverlayMenu } from './OverlayMenu';
import userEvent from '@testing-library/user-event';

const content = <div data-testid='child-element'>Child Element</div>;

test('should render the children', () => {
  const { getByTestId } = render(
    <OverlayMenu onEdit={jest.fn()} onDelete={jest.fn()}>
      {content}
    </OverlayMenu>
  );

  const childElement = getByTestId('child-element');
  expect(childElement).toBeInTheDocument();
  expect(childElement.textContent).toBe('Child Element');
});

test('should render a menu button on content hover event', () => {
  const { queryByTitle, getByTestId } = render(
    <OverlayMenu onEdit={jest.fn()} onDelete={jest.fn()}>
      {content}
    </OverlayMenu>
  );
  expect(queryByTitle('menu-button')).not.toBeInTheDocument();
  act(() => {
    userEvent.hover(getByTestId('child-element'));
  });
  expect(queryByTitle('menu-button')).toBeInTheDocument();
});

test('hould hide the menu button when mouse leaves the component', () => {
  const { queryByTitle, getByTestId } = render(
    <OverlayMenu onEdit={jest.fn()} onDelete={jest.fn()}>
      {content}
    </OverlayMenu>
  );
  expect(queryByTitle('menu-button')).not.toBeInTheDocument();
  act(() => {
    userEvent.hover(getByTestId('child-element'));
  });
  expect(queryByTitle('menu-button')).toBeInTheDocument();
  act(() => {
    userEvent.unhover(getByTestId('child-element'));
  });
  expect(queryByTitle('menu-button')).not.toBeInTheDocument();
});

test('should render a menu button on content hover event', () => {
  const { queryByTitle, getByTestId } = render(
    <OverlayMenu onEdit={jest.fn()} onDelete={jest.fn()}>
      {content}
    </OverlayMenu>
  );
  expect(queryByTitle('menu-button')).not.toBeInTheDocument();
  act(() => {
    userEvent.hover(getByTestId('child-element'));
  });
  expect(queryByTitle('menu-button')).toBeInTheDocument();
});

test('should show menu on click with edit and delete options and a close button', () => {
  const { getByTestId, getByTitle, getByRole, getAllByRole } = render(
    <OverlayMenu onEdit={jest.fn()} onDelete={jest.fn()}>
      {content}
    </OverlayMenu>
  );
  act(() => {
    userEvent.hover(getByTestId('child-element'));
  });
  act(() => {
    userEvent.click(getByTitle('menu-button'));
  });
  expect(getByRole('menu')).toBeInTheDocument();
  expect(getAllByRole('menuitem').length).toBe(2);
  getAllByRole('menuitem').forEach((item) => {
    expect(item).toBeVisible();
  });
  expect(getByTestId('menu-close-button')).toBeVisible();
});

test('close menu button should close menu on click', () => {
  const { getByTestId, getByTitle, getByRole, queryByRole } = render(
    <OverlayMenu onEdit={jest.fn()} onDelete={jest.fn()}>
      {content}
    </OverlayMenu>
  );
  act(() => {
    userEvent.hover(getByTestId('child-element'));
  });
  act(() => {
    userEvent.click(getByTitle('menu-button'));
  });
  expect(getByRole('menu')).toBeInTheDocument();
  act(() => {
    userEvent.click(getByTestId('menu-close-button'));
  });
  expect(queryByRole('menu')).not.toBeInTheDocument();
});

test('should trigger callback on Edit', () => {
  const onEdit = jest.fn();
  const { getByText, getByTitle, getByRole, getByTestId } = render(
    <OverlayMenu onEdit={onEdit} onDelete={jest.fn()}>
      {content}
    </OverlayMenu>
  );
  act(() => {
    userEvent.hover(getByTestId('child-element'));
  });
  act(() => {
    userEvent.click(getByTitle('menu-button'));
  });
  expect(getByRole('menu')).toBeInTheDocument();
  act(() => {
    userEvent.click(getByText('Edit'));
  });
  expect(onEdit).toHaveBeenCalledTimes(1);
});

test('should trigger callback on Delete', () => {
  const onDelete = jest.fn();
  const { getByText, getByTitle, getByRole, getByTestId } = render(
    <OverlayMenu onEdit={jest.fn()} onDelete={onDelete}>
      {content}
    </OverlayMenu>
  );
  act(() => {
    userEvent.hover(getByTestId('child-element'));
  });
  act(() => {
    userEvent.click(getByTitle('menu-button'));
  });
  expect(getByRole('menu')).toBeInTheDocument();
  act(() => {
    userEvent.click(getByText('Delete'));
  });
  expect(onDelete).toHaveBeenCalledTimes(1);
});
