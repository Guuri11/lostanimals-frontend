import { UserType } from './user';

export type PostType = {
  '@context': string;
  '@id': string;
  '@type': string;
  description: string;
  type: 'LOST' | 'FOUND';
  state: boolean;
  latitude: number;
  longitude: number;
  image: string;
  imageUrl: string;
  owner: UserType;
  created_at: string;
  updated_at: string;
};
