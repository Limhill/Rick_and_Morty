import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import AboutUs from 'pages/AboutUs';

describe('AboutUs', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <AboutUs />
      </MemoryRouter>
    );
  });
  it('should render a title', () => {
    const text = screen.getByRole('heading');
    expect(text).toBeInTheDocument();
  });
  it('should have a header', () => {
    const link = screen.getAllByRole('link');
    expect(link).toHaveLength(3);
  });
});
