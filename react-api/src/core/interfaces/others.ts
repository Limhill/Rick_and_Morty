export type CharacterInfo = {
  name: string;
  status: string;
  species: string;
  gender: string;
  type: string;
  origin: string;
  location: string;
};

export interface UserInfo extends Omit<CharacterInfo, 'type' | 'origin' | 'location'> {
  birthday: string;
}
