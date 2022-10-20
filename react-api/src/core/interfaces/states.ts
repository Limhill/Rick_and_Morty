import { Character, ModalCharacterInfo } from 'core/interfaces/others';
import { UserCardProps } from 'core/interfaces/props';
import { LoadingStatus } from 'core/enums';

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

export interface MainPageState {
  characters: Character[];
  modalIsOpen: boolean;
  modal: ModalCharacterInfo;
}

export interface AppState {
  loadingStatus: LoadingStatus;
  changeStatus: (newStatus: LoadingStatus) => void;
}