import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import PageNotFound from './PageNotFound';

describe('PageNotFound', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>
    );
  });
  it('should render correct title', () => {
    const text = screen.getByText(/page not found/i);
    expect(text).toBeInTheDocument();
  });
});
