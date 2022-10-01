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
  it('should contain 20 cards', () => {
    expect(screen.getAllByTestId('card')).toHaveLength(20);
  });
  it('should have a link', () => {
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
