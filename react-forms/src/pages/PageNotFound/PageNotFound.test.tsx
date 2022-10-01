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
  it('should have a link', () => {
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    const linkText = screen.getByText(/back to home/i);
    expect(linkText).toBeInTheDocument();
  });
});
