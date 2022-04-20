import React from 'react';
import AuthPage from '../../AuthPage';
import HomePresentational from '../../presentational/AuthPage/Home';

export default function Home() : JSX.Element {
  return (
    <AuthPage>
      <HomePresentational />
    </AuthPage>
  );
}
