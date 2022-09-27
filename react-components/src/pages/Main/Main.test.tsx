import { render, screen } from '@testing-library/react';
import React from 'react';
import Main from './Main';
import { MemoryRouter } from 'react-router-dom';

describe('Test all cards on the page', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );
  });
  test('There is should be card container!', () => {
    expect(screen.getByTestId('cards')).toBeInTheDocument();
  });
  test('There are should be 20 cards', () => {
    expect(screen.getAllByTestId('card')).toHaveLength(20);
  });
});
