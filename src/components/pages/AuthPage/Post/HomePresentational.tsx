import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePresentational() : JSX.Element {
  return (
    <>
      <div>Home</div>
      <div>
        <Link to="/profile">Go to profile</Link>
        <Link to="/post/1">View post 1</Link>
        <Link to="/post/new">New post</Link>
        <Link to="/post/edit/1">Edit post</Link>
      </div>
    </>
  );
}
