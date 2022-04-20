import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePresentational() : JSX.Element {
  return (
    <>
      <div>Home</div>
      <div>
        <Link to="/profile">Go to profile</Link>
      </div>
    </>
  );
}
