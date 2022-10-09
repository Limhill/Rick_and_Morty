export type CharacterInfo = {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: string;
  location: string;
};

export interface UserInfo extends Pick<CharacterInfo, 'name' | 'status'> {
  birthday: string;
  species: string;
  gender: string;
}
