import React from 'react';
import { Link } from 'react-router-dom';

export default function ProfilePresentational() : JSX.Element {
  return (
    <>
      <div>Profile</div>
      <div>
        <Link to="/">Go to homepage</Link>
      </div>

    </>
  );
}
