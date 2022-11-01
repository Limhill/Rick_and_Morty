import { render, screen } from '@testing-library/react';
import React from 'react';
import { placeholder } from 'core/constants';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('should be in the document', () => {
    render(<SearchBar />);
    const searchBar = screen.getByRole('textbox');
    expect(searchBar).toBeInTheDocument();
  });
  it('should have a placeholder', () => {
    render(<SearchBar />);
    const elementWithPlaceholder = screen.getByPlaceholderText(placeholder);
    expect(elementWithPlaceholder).toBeInTheDocument();
  });
});
