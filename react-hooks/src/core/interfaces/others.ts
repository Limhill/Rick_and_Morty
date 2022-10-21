import { ActionType, CharacterGender, CharacterStatus } from 'core/enums';
import { FormStringStates } from 'core/interfaces/states';

export interface Origin {
  name: string;
  url: string;
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

type StringState = {
  [state in keyof FormStringStates]: string;
};

export type BooleanStateAction = {
  type: ActionType.changeBooleanState;
  payload: boolean;
};

export type StringStateAction = {
  type: ActionType.changeStringState;
  payload: StringState;
};
