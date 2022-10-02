import React from 'react';
import { CharacterGender, CharacterStatus } from 'core/enums';

export interface SearchBarState {
  value: string;
}

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

export interface ParentProps {
  children: React.ReactNode;
}

export interface CardSideProps extends ParentProps {
  back?: boolean;
}
