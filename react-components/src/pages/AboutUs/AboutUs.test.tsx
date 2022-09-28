import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import AboutUs from './AboutUs';

describe('Test AboutUs component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <AboutUs />
      </MemoryRouter>
    );
  });
  test('Test that AboutUs component has been rendered', () => {
    const text = screen.getByText(/About us/);
    expect(text).toBeInTheDocument();
  });
  test('Check that AboutUs component has a link', () => {
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    const linkText = screen.getByText(/bring me home/i);
    expect(linkText).toBeInTheDocument();
  });
});
