import axios from 'axios';
import { baseURL } from 'core/constants';

export const getFilteredCharacters = async (name: string) => {
  try {
    const response = await axios.get(`${baseURL}/character?name=${name.toLowerCase()}`);
    return response.data.results;
  } catch (e) {
    console.log(e);
  }
};
