import { CardProps, UserCardProps } from 'core/interfaces/props';
import { CharacterInfo, UserInfo } from 'core/interfaces/others';
import { ErrorMessage } from 'core/enums';

export const capitalize = (str: string) => {
  return (str.at(0) || '').toUpperCase().concat(str.slice(1));
};

export const validateName = (name: string) => {
  if (name.length < 3) {
    return { nameError: ErrorMessage.nameTooShort };
  } else if (name.match(/[^a-z]+/i)) {
    return { nameError: ErrorMessage.nameIncorrect };
  } else {
    return { nameError: '' };
  }
};

export const validateBirthday = (formDate: string) => {
  const date = new Date(formDate);
  const currentDate = new Date(Date.now());
  if (!date.getDate() || !date.getMonth() || !date.getFullYear()) {
    return { dateError: ErrorMessage.birthdayEmpty };
  } else if (date.getTime() > currentDate.getTime()) {
    return { dateError: ErrorMessage.birthdayIncorrect };
  } else {
    return { dateError: '' };
  }
};

export const validateStatus = (value: string) => {
  if (value.match(/character/i)) {
    return { statusError: ErrorMessage.statusUnselected };
  } else {
    return { statusError: '' };
  }
};

export const validateSpecies = (isChecked: boolean) => {
  if (!isChecked) {
    return { speciesError: ErrorMessage.speciesUnchecked };
  } else {
    return { speciesError: '' };
  }
};

export const validateGender = (isChecked: boolean) => {
  if (!isChecked) {
    return { genderError: ErrorMessage.genderUnchecked };
  } else {
    return { genderError: '' };
  }
};

export const validateImage = (filePath: string) => {
  if (!filePath) {
    return { avatarError: ErrorMessage.imageNotUploaded };
  } else if (filePath.endsWith('.png') || filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) {
    return { avatarError: '' };
  } else {
    return { avatarError: ErrorMessage.imageExtensionIncorrect };
  }
};

export const isCardProps = (object: CardProps | UserCardProps): object is CardProps => {
  return 'location' in object;
};

export const isCharacterInfo = (data: CharacterInfo | UserInfo): data is CharacterInfo => {
  return 'location' in data;
};
