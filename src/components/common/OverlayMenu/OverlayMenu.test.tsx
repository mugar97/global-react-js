import { act, render } from '@testing-library/react';
import OverlayMenu from './OverlayMenu';
import userEvent from '@testing-library/user-event';

function Content() {
  return <div role='figure'></div>;
}

test('should render a menu button on content hover event', () => {
  const { queryByTitle, getByRole } = render(
    <OverlayMenu>
      <Content />
    </OverlayMenu>
  );
  const content = getByRole('figure');
  expect(queryByTitle('menu-button')).not.toBeInTheDocument();
  act(() => {
    userEvent.hover(content);
  });
  expect(queryByTitle('menu-button')).toBeInTheDocument();
});

test('should show menu on click with edit and delete options and a close button', () => {
  const { getByTestId, getByTitle, getByRole, getAllByRole } = render(
    <OverlayMenu>
      <Content />
    </OverlayMenu>
  );
  act(() => {
    userEvent.hover(getByRole('figure'));
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
    <OverlayMenu>
      <Content />
    </OverlayMenu>
  );
  act(() => {
    userEvent.hover(getByRole('figure'));
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
