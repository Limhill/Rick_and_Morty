import axios from 'axios';
import { baseURL } from 'core/constants';
import { SearchBy } from 'core/enums';

export const getFilteredCharacters = async (name: string, searchBy: SearchBy) => {
  try {
    const response = await axios.get(`${baseURL}/character?${searchBy}=${name.toLowerCase()}`);
    return response.data.results;
  } catch (e) {
    return 'Nothing found';
  }
};
