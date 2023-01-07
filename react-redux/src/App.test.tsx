import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import App from './App';

describe('App routing', () => {
  it('should handle routes', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
    const aboutUsPageLink = screen.getByTestId('about-us-page-link');
    userEvent.click(aboutUsPageLink);
    expect(screen.getByText(/this is an about us page/i)).toBeInTheDocument();
    const mainPageLink = screen.getByTestId('main-page-link');
    userEvent.click(mainPageLink);
    const searchBar = screen.getByPlaceholderText(/enter something/i);
    expect(searchBar).toBeInTheDocument();
    const createPageLink = screen.getByTestId('create-page-link');
    userEvent.click(createPageLink);
    expect(screen.getByText(/create your own character/i)).toBeInTheDocument();
  });
  it('should render PageNotFound when route is bad', () => {
    const badRoute = '/just/some/bad/route';
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });
});

describe('App work', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
  });
  it('should render correct response', async () => {
    const searchBar = screen.getByRole('textbox');
    userEvent.type(searchBar, 'ts{enter}');
    const items = await screen.findAllByTestId('card');
    expect(items).toHaveLength(6);
  });
  it('should find nothing if request is incorrect', async () => {
    const searchBar = screen.getByRole('textbox');
    userEvent.type(searchBar, '111111{enter}');
    const items = await screen.findByText(/there are no results/i);
    expect(items).toBeInTheDocument();
    userEvent.clear(searchBar);
  });
});
