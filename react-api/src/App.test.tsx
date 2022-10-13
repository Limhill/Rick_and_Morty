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
    const aboutUsPageLink = screen.getByTestId('about-us-page-link');
    userEvent.click(aboutUsPageLink);
    expect(screen.getByText(/this is an about us page/i)).toBeInTheDocument();
    const mainPageLink = screen.getByTestId('main-page-link');
    userEvent.click(mainPageLink);
    const searchBar = screen.getByPlaceholderText(/введите поисковый запрос/i);
    expect(searchBar).toBeInTheDocument();
    const createPageLink = screen.getByTestId('create-page-link');
    userEvent.click(createPageLink);
    expect(screen.getByText(/create your own character/i)).toBeInTheDocument();
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
