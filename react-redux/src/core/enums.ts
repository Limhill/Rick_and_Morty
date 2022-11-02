export enum Pages {
  main = '/',
  aboutUs = '/about',
  create = '/create',
  pageNotFound = '*',
  characterId = '/:id',
}

export enum CharacterStatus {
  alive = 'Alive',
  dead = 'Dead',
  unknown = 'unknown',
}

export enum CharacterGender {
  female = 'Female',
  male = 'Male',
  genderless = 'Genderless',
  unknown = 'unknown',
}

export enum Color {
  black = '#040F16',
  white = '#F8F8F8',
  gray = '#6C6C6C',
  red = '#FF0000',
  lightBlue = '#BCF8EC',
  lightGreen = '#ACE4AA',
  cardBackground = '#E5D4ED',
  cardHighlight = 'rgba(109, 114, 195, 0.9)',
}

export enum formFieldName {
  name = 'name',
  date = 'date',
  status = 'status',
  species = 'species',
  gender = 'gender',
  avatar = 'avatar',
}

export enum ErrorMessage {
  nameTooShort = 'Name should contain at least 3 letters',
  nameIncorrect = 'Name could contain only english letters',
  birthdayEmpty = 'Please enter the date',
  birthdayIncorrect = 'Date should be less than current',
  statusUnselected = 'Please choose character status',
  speciesUnchecked = 'Only Premium users could create non-humans',
  genderUnchecked = 'Only Premium users could create male characters',
  imageNotUploaded = 'Please upload an image',
  imageExtensionIncorrect = 'Please upload .png, .jpg or .jpeg file.',
}

export enum LoadingStatus {
  initial = 'initial',
  loading = 'loading',
  success = 'success',
  error = 'error',
}

export enum ActionType {
  changeFormState = 'changeFormState',
}

export enum SearchBy {
  name = 'name',
  status = 'status',
  species = 'species',
  type = 'type',
  gender = 'gender',
}
