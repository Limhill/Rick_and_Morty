import {
  capitalize,
  isCardProps,
  isCharacterInfo,
  validateBirthday,
  validateGender,
  validateName,
  validateSpecies,
  validateStatus,
} from 'services/helpers';
import { CharacterGender, CharacterStatus, ErrorMessage } from 'core/enums';

describe('capitalize', () => {
  test('EmptyString_EmptyString', () => {
    expect(capitalize('')).toStrictEqual('');
  });
  test('hello_Hello', () => {
    expect(capitalize('hello!')).toStrictEqual('Hello!');
  });
  test('SpecialSymbol_SpecialSymbol', () => {
    expect(capitalize('!')).toStrictEqual('!');
  });
});

describe('validateName', () => {
  test('na_ErrorMessage.nameTooShort', () => {
    expect(validateName('na')).toStrictEqual({ nameError: ErrorMessage.nameTooShort });
  });
  test('123_ErrorMessage.nameIncorrect', () => {
    expect(validateName('123')).toStrictEqual({ nameError: ErrorMessage.nameIncorrect });
  });
  test('name_NoError', () => {
    expect(validateName('name')).toStrictEqual({ nameError: '' });
  });
});

describe('validateBirthday', () => {
  test('EmptyString_ErrorMessage.birthdayEmpty', () => {
    expect(validateBirthday('')).toStrictEqual({ dateError: ErrorMessage.birthdayEmpty });
  });
  test('DateInFuture_ErrorMessage.birthdayIncorrect', () => {
    expect(validateBirthday('2023-10-05')).toStrictEqual({
      dateError: ErrorMessage.birthdayIncorrect,
    });
  });
  test('DateInPast_NoError', () => {
    expect(validateBirthday('1987-06-05')).toStrictEqual({ dateError: '' });
  });
});

describe('validateStatus', () => {
  test('CharacterStatus_ErrorMessage.statusUnselected', () => {
    expect(validateStatus('Character status')).toStrictEqual({
      statusError: ErrorMessage.statusUnselected,
    });
  });
  test('Alive_NoError', () => {
    expect(validateStatus('Alive')).toStrictEqual({ statusError: '' });
  });
});

describe('validateSpecies', () => {
  test('False_ErrorMessage.speciesUnchecked', () => {
    expect(validateSpecies(false)).toStrictEqual({ speciesError: ErrorMessage.speciesUnchecked });
  });
  test('True_NoError', () => {
    expect(validateSpecies(true)).toStrictEqual({ speciesError: '' });
  });
});

describe('validateGender', () => {
  test('False_ErrorMessage.genderUnchecked', () => {
    expect(validateGender(false)).toStrictEqual({ genderError: ErrorMessage.genderUnchecked });
  });
  test('True_NoError', () => {
    expect(validateGender(true)).toStrictEqual({ genderError: '' });
  });
});

describe('isCardProps', () => {
  const file = new File(['mockFileHere'], 'image.png', { type: 'image/png' });
  test('UserCardProps_False', () => {
    expect(
      isCardProps({ name: '', birthday: '', status: '', species: false, gender: true, image: file })
    ).toBeFalsy();
  });
  test('CardProps_True', () => {
    expect(
      isCardProps({
        id: 1,
        name: '',
        status: CharacterStatus.alive,
        species: '',
        type: '',
        gender: CharacterGender.male,
        origin: { name: '', url: '' },
        location: { name: '', url: '' },
        image: '',
      })
    ).toBeTruthy();
  });
});

describe('isCharacterInfo', () => {
  test('UserInfo_False', () => {
    expect(
      isCharacterInfo({ name: '', status: '', species: '', gender: '', birthday: '' })
    ).toBeFalsy();
  });
  test('CharacterInfo_True', () => {
    expect(
      isCharacterInfo({
        name: '',
        status: '',
        species: '',
        gender: '',
        type: '',
        origin: '',
        location: '',
      })
    ).toBeTruthy();
  });
});
