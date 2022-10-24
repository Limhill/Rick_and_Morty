import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from 'pages/NotFound';

describe('NotFound', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
  });
  it('should render correct title', () => {
    const text = screen.getByText(/page not found/i);
    expect(text).toBeInTheDocument();
  });
});
