import { render, screen } from '@testing-library/react';
import React from 'react';
import SearchBar from './SearchBar';
import userEvent from '@testing-library/user-event';
import { localStorageKey } from 'core/enums';

describe('Test work with localStorage', () => {
  const text = 'JavaScript!';
  const { unmount } = render(<SearchBar />);
  test('Check saving text in localStorage', () => {
    userEvent.type(screen.getByRole('textbox'), text);
    expect(window.localStorage.getItem(localStorageKey.value)).toBeNull();
    unmount();
    expect(window.localStorage.getItem(localStorageKey.value)).toStrictEqual(text);
  });
});
