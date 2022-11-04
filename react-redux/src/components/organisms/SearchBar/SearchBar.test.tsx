import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { placeholder } from 'core/constants';
import { store } from 'app/store';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('should be in the document', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const searchBar = screen.getByRole('textbox');
    expect(searchBar).toBeInTheDocument();
  });
  it('should have a placeholder', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const elementWithPlaceholder = screen.getByPlaceholderText(placeholder);
    expect(elementWithPlaceholder).toBeInTheDocument();
  });
});
