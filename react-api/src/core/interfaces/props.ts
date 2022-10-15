import React from 'react';
import { fieldName } from 'core/enums';
import { Character, ModalCharacterInfo } from 'core/interfaces/others';

export interface OneSideCardProps extends Omit<Character, 'id' | 'episode' | 'url'> {
  handler: (data: ModalCharacterInfo) => void;
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

export interface SearchBarProps {
  handler: (cards: Character[]) => void;
}

export interface ModalProps extends ModalCharacterInfo {
  isOpen: boolean;
  handler: () => void;
}
