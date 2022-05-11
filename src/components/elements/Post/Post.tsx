import React from 'react';
import { Link } from 'react-router-dom';
import { PostType } from '../../../utils/types/post';

type Props = {
  post: PostType
}

export default function Post({ post }:Props): JSX.Element {
  return (
    <div className="max-w-sm bg-white relative rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className={`absolute right-3 px-4 rounded top-3 text-white ${post.type === 'LOST' ? 'bg-red' : 'bg-green'}`}>{post.type}</div>
      <img className="rounded-t-lg w-full" src={post.image} alt="" />
      <div className="p-5">
        <p className="mb-2 text-xl font-bold tracking-tight text-gray-900">{post.description}</p>
        <p>{post.owner.username}</p>
        <p className="text-xs">{post.created_at}</p>
        <p className="text-xs">{post.location}</p>
        <p className="text-xs">{post.state ? 'State: 0' : 'State: 1'}</p>
      </div>
    </div>
  );
}
