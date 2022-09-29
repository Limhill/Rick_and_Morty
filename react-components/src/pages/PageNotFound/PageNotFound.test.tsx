import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import PageNotFound from './PageNotFound';

describe('Test PageNotFound component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>
    );
  });
  test('Test that PageNotFound component has been rendered', () => {
    const text = screen.getByText(/page not found/i);
    expect(text).toBeInTheDocument();
  });
  test('Check that PageNotFound component has a link', () => {
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    const linkText = screen.getByText(/back to home/i);
    expect(linkText).toBeInTheDocument();
  });
});
