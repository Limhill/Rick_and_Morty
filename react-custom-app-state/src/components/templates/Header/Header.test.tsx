import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  });
  it('should have 3 links', () => {
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);
  });
});
