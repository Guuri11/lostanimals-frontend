import React from 'react';
import { Link } from 'react-router-dom';

export default function PostPresentational() : JSX.Element {
  return (
    <>
      <div>Post</div>
      <div>
        <Link to="/profile">Go to profile</Link>
        <Link to="/post/new">New post</Link>
        <Link to="/post/edit/1">Edit post</Link>
      </div>

    </>
  );
}
