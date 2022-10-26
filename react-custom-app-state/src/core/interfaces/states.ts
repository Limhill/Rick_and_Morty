import { Character, ModalCharacterInfo } from 'core/interfaces/others';
import { LoadingStatus, SearchBy } from 'core/enums';

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
  /**
   * Status of data request
   */
  loadingStatus: LoadingStatus;
  /**
   * Search criteria
   */
  searchBy: SearchBy;
  /**
   * Function for changing App context
   * @param data
   */
  changeContext: (data: Partial<AppState>) => void;
}
