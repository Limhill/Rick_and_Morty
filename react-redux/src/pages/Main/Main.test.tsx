import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Main from 'pages/Main';
import { store } from 'app/store';

describe('Main', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Main />
        </Provider>
      </MemoryRouter>
    );
  });
  it('should not contain any card', () => {
    expect(screen.queryByTestId('card')).toBeNull();
  });
  it('should have links', () => {
    expect(screen.getAllByRole('link')).toHaveLength(3);
  });
});
