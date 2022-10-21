import { BooleanStateAction, StringStateAction } from 'core/interfaces/others';

export const isBooleanStateAction = (
  data: BooleanStateAction | StringStateAction
): data is BooleanStateAction => {
  return typeof data.payload === 'boolean';
};
