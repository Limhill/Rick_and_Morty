import { UserCardProps } from './props';

export interface SearchBarState {
  value: string;
}

export interface FormState {
  isSubmitDisabled: boolean;
  nameError: string;
  dateError: string;
  statusError: string;
  speciesError: string;
  genderError: string;
  avatarError: string;
}

export interface CreatePageState {
  cards: UserCardProps[];
}
