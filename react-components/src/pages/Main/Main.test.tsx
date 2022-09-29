import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Main from './Main';

describe('Test Main component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );
  });
  test('There are should be 20 cards', () => {
    expect(screen.getAllByTestId('card')).toHaveLength(20);
  });
  test('Check link on the page', () => {
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
