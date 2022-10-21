import { Character, ModalCharacterInfo } from 'core/interfaces/others';
import { DoubleSideCardProps } from 'core/interfaces/props';
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

export type FormStringStates = Omit<FormState, 'isSubmitDisabled'>;

export interface CreatePageState {
  cards: DoubleSideCardProps[];
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
