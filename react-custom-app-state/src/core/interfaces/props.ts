import React from 'react';
import { formFieldName } from 'core/enums';
import { Character, ModalCharacterInfo } from 'core/interfaces/others';

export type OneSideCardProps = Omit<Character, 'id' | 'episode' | 'url'>;

export interface CardSideProps {
  isBackSide?: boolean;
}

export interface SwitcherProps {
  resetErrorMessages: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  name?: formFieldName;
}

export interface DoubleSideCardProps {
  name: string;
  birthday: string;
  status: string;
  species: boolean;
  gender: boolean;
  image: File;
}

export interface FormProps {
  addNewCard: (data: DoubleSideCardProps) => void;
}

export interface ModalProps extends ModalCharacterInfo {
  isOpen: boolean;
  handler: (e: React.MouseEvent) => void;
}

export interface SelectProps {
  /**
   * min-width in %
   */
  minWidth?: number;
  /**
   * padding in rem
   */
  padding?: number;
}

export interface DetailedInfoProps {
  character: Character;
}
