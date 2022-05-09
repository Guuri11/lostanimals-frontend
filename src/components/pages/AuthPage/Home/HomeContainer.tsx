import React from 'react';
import AuthPage from '../../AuthPage';
import HomePresentational from '../Post/HomePresentational';

export default function Home() : JSX.Element {
  return (
    <AuthPage>
      <HomePresentational />
    </AuthPage>
  );
}
