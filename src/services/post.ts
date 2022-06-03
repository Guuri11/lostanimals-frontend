import { PostCreate } from '../components/elements/Post/PostTemplate/PostTemplateContainer';
import { HOST } from '../utils/constants/host';
import { PostType } from '../utils/types/post';
import { UserType } from '../utils/types/user';

type Posts = {
  '@context': string;
  '@id': string;
  '@type': string;
  'hydra:member': Array<PostType>,
  'hydra:search': string
  'hydra:totalItems': number
}

export type PostUpdate = {
  type: string;
  description: string;
  state: boolean;
  location: string;
}

export const getPosts = async (token: string, params: string): Promise<Posts> => {
  const postsResponse = await fetch(`${HOST}/posts${params}`, {
    headers: new Headers({
      'Content-Type': 'application/ld+json',
      Authorization: `Bearer ${token}`,
    }),
  });
  return postsResponse.json();
};

export const updatePost = async (token: string, id: string, post: PostUpdate)
: Promise<PostType> => {
  const postsResponse = await fetch(`${HOST}${id}`, {
    body: JSON.stringify(post),
    method: 'PUT',
    headers: new Headers({
      'Content-Type': 'application/ld+json',
      Authorization: `Bearer ${token}`,
    }),
  });
  return postsResponse.json();
};

export const createPost = async (token: string, user: UserType, post: PostCreate)
: Promise<PostType> => {
  const { image } = post;
  const data = new FormData();
  const reader = new FileReader();
  reader.readAsBinaryString(image[0]);
  data.append('file', image[0]);

  const imageResponse = await fetch(`${HOST}/media_objects`, {
    body: data,
    method: 'POST',
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  });

  if (imageResponse.status === 201) {
    const imageResult = await imageResponse.json();
    const postData = {
      description: post.description,
      type: post.type,
      state: post.state,
      location: post.location,
      owner: user['@id'],
      image: imageResult['@id'],
    };

    const postsResponse = await fetch(`${HOST}/posts`, {
      body: JSON.stringify(postData),
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/ld+json',
        Authorization: `Bearer ${token}`,
      }),
    });
    return postsResponse.json();
  }
  return imageResponse.json();
};

export const deletePost = async (token: string, id: string)
: Promise<number> => {
  const postsResponse = await fetch(`${HOST}${id}`, {
    method: 'DELETE',
    headers: new Headers({
      'Content-Type': 'application/ld+json',
      Authorization: `Bearer ${token}`,
    }),
  });
  return postsResponse.status;
};
