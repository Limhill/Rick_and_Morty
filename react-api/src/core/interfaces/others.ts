import { CharacterGender, CharacterStatus } from '../enums';

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

export interface CharacterInfo extends Pick<Character, 'name' | 'species' | 'gender' | 'type'> {
  status: string;
  origin: string;
  location: string;
}

export interface UserInfo extends Omit<CharacterInfo, 'gender' | 'type' | 'origin' | 'location'> {
  birthday: string;
  gender: string;
}

export interface AllCharactersResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}
