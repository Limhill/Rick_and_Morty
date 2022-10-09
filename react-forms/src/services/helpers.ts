import { CardProps, UserCardProps } from '../core/interfaces/props';

export const capitalize = (str: string) => {
  return (str.at(0) || '').toUpperCase().concat(str.slice(1));
};

export const validateName = (name: string) => {
  if (name.length < 3) {
    return { nameError: 'Name should contain at least 3 letters' };
  } else if (name.match(/[^a-z]+/i)) {
    return { nameError: 'Name could contain only english letters' };
  } else {
    return { nameError: '' };
  }
};

export const validateDate = (formDate: string) => {
  const date = new Date(formDate);
  const currentDate = new Date(Date.now());
  if (!date.getDate() || !date.getMonth() || !date.getFullYear()) {
    return { dateError: 'Please enter the date' };
  } else if (date.getTime() > currentDate.getTime()) {
    return { dateError: 'Date should be less than current' };
  } else {
    return { dateError: '' };
  }
};

export const validateSelect = (value: string) => {
  if (value.match(/character/i)) {
    return { statusError: 'Please choose character status' };
  } else {
    return { statusError: '' };
  }
};

export const validateCheckbox = (isChecked: boolean) => {
  if (!isChecked) {
    return { speciesError: 'Only Premium users could create non-humans' };
  } else {
    return { speciesError: '' };
  }
};

export const validateSwitcher = (isChecked: boolean) => {
  if (!isChecked) {
    return { genderError: 'Only Premium users could create male characters' };
  } else {
    return { genderError: '' };
  }
};

export const validateFile = (filePath: string) => {
  if (!filePath) {
    return { avatarError: 'Please upload an image' };
  } else if (filePath.endsWith('.png') || filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) {
    return { avatarError: '' };
  } else {
    return { avatarError: 'Please upload .png, .jpg or .jpeg file.' };
  }
};

export const isCardProps = (object: CardProps | UserCardProps): object is CardProps => {
  return 'location' in object;
};
