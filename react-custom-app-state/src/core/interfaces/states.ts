import { Character, ModalCharacterInfo } from 'core/interfaces/others';
import { LoadingStatus, SortBy } from 'core/enums';

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

export interface MainPageState {
  characters: Character[];
  modalIsOpen: boolean;
  modal: ModalCharacterInfo;
}

export interface AppState {
  loadingStatus: LoadingStatus;
  sortBy: SortBy;
  changeStatus: (newStatus: LoadingStatus) => void;
}
