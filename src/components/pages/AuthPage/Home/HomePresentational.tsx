import React from 'react';
import { posts } from '../../../../utils/types/dummy/post';
import FloatButton from '../../../elements/FloatButton';
import Post from '../../../elements/Post/Post';
import PostFilter from '../../../elements/Post/PostFilter';
import { PostFilterProps } from './HomeContainer';

export default function HomePresentational({
  register, handleSubmit, errors, onSubmit, watch,
}: PostFilterProps): JSX.Element {
  return (
    <div className="md:flex">
      <div className="md:w-[33%] md:pr-3 mb-3">
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
          { posts.map((post) => <Post key={post['@id']} post={post} />) }
        </div>
      </div>
      <FloatButton />
    </div>
  );
}
