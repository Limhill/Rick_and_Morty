import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import Form from 'components/organisms/Form';
import { ErrorMessage } from 'core/enums';

const mockHandler = jest.fn(() => {
  return;
});

describe('Form render', () => {
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

describe('Form errors', () => {
  beforeEach(() => {
    render(<Form handler={mockHandler} />);
  });

  it('should show all errors if form is empty', async () => {
    const nameError = new RegExp(ErrorMessage.nameTooShort, 'i');
    const birthdayError = new RegExp(ErrorMessage.birthdayEmpty, 'i');
    const statusError = new RegExp(ErrorMessage.statusUnselected, 'i');
    const speciesError = new RegExp(ErrorMessage.speciesUnchecked, 'i');
    const genderError = new RegExp(ErrorMessage.genderUnchecked, 'i');
    const imageError = new RegExp(ErrorMessage.imageNotUploaded, 'i');

    userEvent.type(screen.getByLabelText(/name/i), '1');
    userEvent.click(screen.getByRole('button'));

    expect(await screen.getByText(nameError)).toBeInTheDocument();
    expect(await screen.findByText(birthdayError)).toBeInTheDocument();
    expect(await screen.getByText(statusError)).toBeInTheDocument();
    expect(await screen.getByText(speciesError)).toBeInTheDocument();
    expect(await screen.getByText(genderError)).toBeInTheDocument();
    expect(await screen.getByText(imageError)).toBeInTheDocument();
  });
  it('should show correct error when name does not contain english letters', () => {
    const errorText = new RegExp(ErrorMessage.nameIncorrect, 'i');
    expect(screen.queryByText(errorText)).toBeNull();
    userEvent.type(screen.getByLabelText(/name/i), '1234');
    userEvent.click(screen.getByRole('button'));
    expect(screen.getByText(errorText)).toBeInTheDocument();
  });
  it('should show correct error when date is greater than current', async () => {
    const errorText = new RegExp(ErrorMessage.birthdayIncorrect, 'i');
    expect(screen.queryByText(errorText)).toBeNull();
    fireEvent.change(screen.getByLabelText(/date of birth/i), { target: { value: '2023-10-05' } });
    userEvent.click(screen.getByRole('button'));
    expect(await screen.findByText(errorText)).toBeInTheDocument();
  });
});
