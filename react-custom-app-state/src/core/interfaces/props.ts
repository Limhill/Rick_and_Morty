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

export interface DoubleSideCardProps {
  name: string;
  birthday: string;
  status: string;
  species: boolean;
  gender: boolean;
  image: File;
}

export interface FormProps {
  addCard: (data: DoubleSideCardProps) => void;
}

export interface ModalProps extends ModalCharacterInfo {
  isOpen: boolean;
  handler: (e: React.MouseEvent) => void;
}

export interface ModalWindowImageProps {
  imagePath: string;
}

export type CloseIconProps = Pick<ModalProps, 'handler'>;

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

export interface SearchParametersProps {
  characters: Character[];
  setPages: (pages: Array<Character[]>) => void;
}
