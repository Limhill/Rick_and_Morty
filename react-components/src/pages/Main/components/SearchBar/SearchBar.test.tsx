import { render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { placeholder, searchBarValue } from 'core/constants';
import SearchBar from './SearchBar';

describe('Test how it works with localStorage', () => {
  test('Check saving text in localStorage', () => {
    const { unmount } = render(<SearchBar />);
    const text = 'JavaScript!';
    userEvent.type(screen.getByRole('textbox'), text);
    expect(window.localStorage.getItem(searchBarValue)).toBeNull();
    unmount();
    expect(window.localStorage.getItem(searchBarValue)).toStrictEqual(text);
    render(<SearchBar />);
    expect(screen.getByDisplayValue(text)).toBeInTheDocument();
  });
});

describe('Check component render', () => {
  beforeEach(() => render(<SearchBar />));
  test('Check if there is an input', () => {
    const searchBar = screen.getByRole('textbox');
    expect(searchBar).toBeInTheDocument();
  });
  test('Check that input has a placeholder', () => {
    const elementWithPlaceholder = screen.getByPlaceholderText(placeholder);
    expect(elementWithPlaceholder).toBeInTheDocument();
  });
});
