import { ActionType, CharacterGender, CharacterStatus } from 'core/enums';
import { FormState } from 'core/interfaces/states';

export interface Origin {
  name: string;
  url: string;
}

export interface ResponseData {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

export interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: Origin;
  location: Origin;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export type ModalCharacterInfo = Omit<Character, 'id' | 'episode' | 'url'>;

export type ChangeFormStateAction = {
  type: ActionType.changeFormState;
  payload: Partial<FormState>;
};
