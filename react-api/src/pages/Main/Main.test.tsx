import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Main from 'pages/Main';

describe('Main', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Main />
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
