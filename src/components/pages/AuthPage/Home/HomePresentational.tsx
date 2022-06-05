import React from 'react';
import { PostType } from '../../../../utils/types/post';
import FloatButton from '../../../elements/FloatButton';
import { Map } from '../../../elements/Map/Map';
import Post from '../../../elements/Post/Post';
import PostFilter from '../../../elements/Post/PostFilter';
import PostTemplate from '../../../elements/Post/PostTemplate/PostTemplateContainer';
import { PostFilterProps } from './HomeContainer';

type Props = {
  posts: Array<PostType>;
  showNoPostsNear: boolean;
  handleAddPost: () => void;
  addPost: boolean;
}

export default function HomePresentational({
  register, handleSubmit, errors, onSubmit, watch, posts, showNoPostsNear, handleAddPost, addPost,
}: PostFilterProps & Props): JSX.Element {
  return (
    <div className="md:flex">
      <div className="md:w-[33%] md:pr-3 mb-3">
        <div className="mb-2">
          <Map posts={posts} />
        </div>
        <PostFilter
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmit={onSubmit}
          watch={watch}
        />
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          { addPost ? <PostTemplate /> : null }
          { posts.map((post) => <Post key={post['@id']} post={post} />) }
          { showNoPostsNear && (
          <div>
            <h1>No posts near</h1>
          </div>
          ) }
        </div>
      </div>
      <FloatButton handleAddPost={handleAddPost} />
    </div>
  );
}
