import { render, screen } from '@testing-library/react';
import React from 'react';
import Form from 'components/organisms/Form';

describe('Form', () => {
  const mockHandler = jest.fn(() => {
    return;
  });
  beforeEach(() => render(<Form handler={mockHandler} />));
  it('should have 1 input with type="text', () => {
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  it('should have 1 input with type="date"', () => {
    expect(screen.getByLabelText(/date of birth/i)).toBeInTheDocument();
  });
  it('should have 1 select element', () => {
    expect(screen.getByLabelText(/pick character status/i)).toBeInTheDocument();
  });
  it('should have 1 species checkbox', () => {
    expect(screen.getByLabelText(/check species/i)).toBeInTheDocument();
  });
  it('should have 1 gender checkbox', () => {
    expect(screen.getByLabelText(/choose character gender/i)).toBeInTheDocument();
  });
  it('should have 1 input with type="file"', () => {
    expect(screen.getByLabelText(/choose avatar/i)).toBeInTheDocument();
  });
  it('should have 1 disabled button', () => {
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
