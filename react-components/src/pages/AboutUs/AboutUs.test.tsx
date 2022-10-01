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
    const text = screen.getByText(/About us/);
    expect(text).toBeInTheDocument();
  });
  it('should have a link', () => {
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    const linkText = screen.getByText(/bring me home/i);
    expect(linkText).toBeInTheDocument();
  });
});
