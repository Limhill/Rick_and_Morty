import React from 'react';
import { CharacterGender, CharacterStatus, fieldName } from 'core/enums';

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

export interface SwitcherProps {
  handler: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  name?: fieldName;
}

export interface UserCardProps {
  name: string;
  birthday: string;
  status: string;
  species: boolean;
  gender: boolean;
  image: File;
}

export interface FormProps {
  handler: (data: UserCardProps) => void;
}
