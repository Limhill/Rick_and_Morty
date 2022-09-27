import { CardInfo } from '../core/interfaces';

export const capitalize = (str: string) => {
  return (str.at(0) || '').toUpperCase().concat(str.slice(1));
};
export const randomPickFromArray = (arr: CardInfo[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
