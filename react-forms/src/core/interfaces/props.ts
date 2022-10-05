import { CharacterGender, CharacterStatus } from 'core/enums';

export interface Origin {
  name: string;
  url: string;
}

export interface CardProps {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: Origin;
  location: Origin;
  image: string;
  episode?: string[];
  url?: string;
  created?: string;
}

export interface CardSideProps {
  isBackSide?: boolean;
}

export interface LinkProps {
  marginTop?: number;
}

export interface SwitcherProps {
  handler: () => void;
}
