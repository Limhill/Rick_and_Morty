import { render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { placeholder, searchBarValue } from 'core/constants';
import SearchBar from './SearchBar';

const mockFn = jest.fn();

describe('SearchBar', () => {
  it('should be in the document', () => {
    render(<SearchBar handler={mockFn} />);
    const searchBar = screen.getByRole('textbox');
    expect(searchBar).toBeInTheDocument();
  });
  it('should have a placeholder', () => {
    render(<SearchBar handler={mockFn} />);
    const elementWithPlaceholder = screen.getByPlaceholderText(placeholder);
    expect(elementWithPlaceholder).toBeInTheDocument();
  });
  it('should save text in localStorage', () => {
    const { unmount } = render(<SearchBar handler={mockFn} />);
    const text = 'JavaScript!';
    userEvent.type(screen.getByRole('textbox'), text);
    expect(window.localStorage.getItem(searchBarValue)).toBeFalsy();
    unmount();
    expect(window.localStorage.getItem(searchBarValue)).toStrictEqual(text);
    render(<SearchBar handler={mockFn} />);
    expect(screen.getByDisplayValue(text)).toBeInTheDocument();
  });
});
