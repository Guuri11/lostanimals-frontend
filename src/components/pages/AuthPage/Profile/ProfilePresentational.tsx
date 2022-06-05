import React from 'react';
import { PostType } from '../../../../utils/types/post';
import { UserType } from '../../../../utils/types/user';
import FloatButton from '../../../elements/FloatButton';
import Post from '../../../elements/Post/Post';
import PostTemplate from '../../../elements/Post/PostTemplate/PostTemplateContainer';

type Props = {
  user: UserType;
  posts: Array<PostType>;
  showNoPosts: boolean;
  handleAddPost: () => void;
  addPost: boolean;
}

export default function ProfilePresentational({
  user, posts, showNoPosts, handleAddPost, addPost,
}: Props) : JSX.Element {
  return (
    <div className="md:flex">
      <div className="md:w-[33%] md:pr-3 mb-3">
        { user.image && (
          <img src={user.image} alt={user.username} />
        ) }
        <h1 className="font-bold uppercase">{user.username}</h1>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          { addPost ? <PostTemplate /> : null }
          { posts.map((post) => <Post key={post['@id']} post={post} />) }
          { showNoPosts && (
          <div>
            <h1>No posts</h1>
          </div>
          ) }
        </div>
      </div>
      <FloatButton handleAddPost={handleAddPost} />
    </div>
  );
}
