import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App routing', () => {
  it('should handle routes', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const link = screen.getByRole('link');
    userEvent.click(link);
    expect(screen.getByText(/this is an about us page/i)).toBeInTheDocument();
    const backToHome = screen.getByRole('link');
    userEvent.click(backToHome);
    expect(screen.getByText(/main page/i)).toBeInTheDocument();
  });
  it('should render PageNotFound when route is bad', () => {
    const badRoute = '/just/some/bad/route';
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });
});
