import axios from 'axios';
import { baseURL } from 'core/constants';
import { SearchBy } from 'core/enums';
import { Character, ResponseData } from 'core/interfaces/others';

export const getFilteredCharacters = async (name: string, searchBy: SearchBy) => {
  const charactersList: Character[] = [];
  let response;

  try {
    response = await axios.get(`${baseURL}/character?${searchBy}=${name.toLowerCase()}`);
  } catch (e) {
    return 'Nothing found';
  }

  let { data }: { data: ResponseData } = response;

  while (data.info.next) {
    charactersList.push(...data.results);
    response = await axios.get(data.info.next);
    data = response.data;
  }
  charactersList.push(...data.results);

  return charactersList;
};
