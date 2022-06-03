import React from 'react';
import { Link } from 'react-router-dom';

export default function FormPresentational() : JSX.Element {
  return (
    <>
      <div>Form</div>
      <div>
        <Link to="/profile">Go to profile</Link>
        <Link to="/post/new">New post</Link>
        <Link to="/post/edit/1">Edit post</Link>
      </div>

    </>
  );
}
