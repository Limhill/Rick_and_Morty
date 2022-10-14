import React from 'react';
import { fieldName } from 'core/enums';
import { Character } from 'core/interfaces/others';

export type OneSideCardProps = Pick<Character, 'name' | 'image'>;

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

export interface SearchBarProps {
  handler: (cards: Character[]) => void;
}

export interface ModalProps {
  isOpen: boolean;
  handler: () => void;
}

export interface CardsContainerProps {
  handler?: () => void;
  children: React.ReactNode;
}
