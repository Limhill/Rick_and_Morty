import axios from 'axios';
import { AllCharactersResponse } from 'core/interfaces/others';
import { baseURL } from 'core/constants';

export const getAllCharacters = async () => {
  const response: AllCharactersResponse = await axios.get(process.env.BASE_URL as string);
  return response.results;
};

export const getFilteredCharacters = async (name: string) => {
  try {
    const response = await axios.get(`${baseURL}/character?name=${name.toLowerCase()}`);
    return response.data.results;
  } catch (e) {
    console.log(e);
  }
};
