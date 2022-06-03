import { PostType } from './post';

export type UserType = {
  '@context': string;
  '@id': string;
  '@type': string;
  created_at: string;
  image: string | null;
  posts: Array<PostType>;
  updated_at: string;
  username: string;
};
