import { Character } from 'core/interfaces/others';
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

export interface AppReduxState {
  /**
   * Status of data request
   */
  loadingStatus: LoadingStatus;
  /**
   * Search criteria
   */
  searchBy: SearchBy;
  /**
   * How many results would be on the page
   */
  resultsPerPage: number;
  /**
   * Current opened page
   */
  currentPage: number;
  /**
   * List of requested characters
   */
  characters: Character[];
  /**
   * Pages content on the Main page
   */
  pages: Array<Character[]>;
  /**
   * Value that is in SearchBar
   */
  searchBarValue: string;
}
