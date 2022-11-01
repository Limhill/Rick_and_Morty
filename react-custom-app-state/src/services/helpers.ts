import { Character } from 'core/interfaces/others';

export const capitalize = (str: string) => {
  return (str.at(0) || '').toUpperCase().concat(str.slice(1));
};

export const splitArrayOnChunks = (array: Character[], chunkSize: number) => {
  if (array.length <= chunkSize) return [array];

  const result = [];
  let chunk: Character[] = [];
  for (let i = 0; i <= array.length; i++) {
    if (array[i] && chunk.length < chunkSize) {
      chunk.push(array[i]);
    } else {
      result.push(chunk);
      chunk = [array[i]];
    }
  }
  return result;
};
