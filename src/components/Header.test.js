import '@testing-library/jest-dom';
import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import Header from './Header';

const ChangeRoute = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate('/skills')}>Change route</button>;
};

const renderHeader = (path = '/') =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Header />
      <ChangeRoute />
    </MemoryRouter>
  );

test.each([
  ['/', 'Home'],
  ['/skills', 'Skills'],
  ['/projects', 'Projects'],
  ['/education', 'Education'],
])('marks only the current page at %s', (path, label) => {
  renderHeader(path);
  const nav = screen.getByRole('navigation', { name: 'Main navigation' });
  expect(within(nav).getByRole('link', { name: label })).toHaveAttribute('aria-current', 'page');
  expect(within(nav).getAllByRole('link').filter((link) => link.hasAttribute('aria-current'))).toHaveLength(1);
});

test('opens and closes the menu with its toggle', () => {
  renderHeader();
  const button = screen.getByRole('button', { name: 'Open navigation menu' });
  expect(button).toHaveAttribute('aria-expanded', 'false');
  expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument();

  userEvent.click(button);
  expect(button).toHaveAttribute('aria-expanded', 'true');
  expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toHaveAttribute('id', button.getAttribute('aria-controls'));

  userEvent.click(button);
  expect(button).toHaveAttribute('aria-expanded', 'false');
  expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument();
});

test('Escape closes the menu and returns focus to the toggle', () => {
  renderHeader();
  const button = screen.getByRole('button', { name: 'Open navigation menu' });
  userEvent.click(button);
  const nav = screen.getByRole('navigation', { name: 'Mobile navigation' });
  within(nav).getByRole('link', { name: 'Skills' }).focus();

  fireEvent.keyDown(document, { key: 'Escape' });

  expect(button).toHaveAttribute('aria-expanded', 'false');
  expect(button).toHaveFocus();
});

test.each(['Home', 'Projects'])('selecting %s closes the mobile menu', (label) => {
  renderHeader();
  userEvent.click(screen.getByRole('button', { name: 'Open navigation menu' }));
  userEvent.click(within(screen.getByRole('navigation', { name: 'Mobile navigation' })).getByRole('link', { name: label }));
  expect(screen.getByRole('button', { name: 'Open navigation menu' })).toHaveAttribute('aria-expanded', 'false');
});

test('using the home brand closes the mobile menu', () => {
  renderHeader('/projects');
  userEvent.click(screen.getByRole('button', { name: 'Open navigation menu' }));
  userEvent.click(screen.getByRole('link', { name: 'BalaVardhan home' }));
  expect(screen.getByRole('button', { name: 'Open navigation menu' })).toHaveAttribute('aria-expanded', 'false');
});

test('a route change outside the menu closes it', () => {
  renderHeader();
  userEvent.click(screen.getByRole('button', { name: 'Open navigation menu' }));
  userEvent.click(screen.getByRole('button', { name: 'Change route' }));
  expect(screen.getByRole('button', { name: 'Open navigation menu' })).toHaveAttribute('aria-expanded', 'false');
  const nav = screen.getByRole('navigation', { name: 'Main navigation' });
  expect(within(nav).getByRole('link', { name: 'Skills' })).toHaveAttribute('aria-current', 'page');
});
