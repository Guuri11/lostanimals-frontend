import React from 'react';
import AuthPage from '../../AuthPage';
import PostPresentational from './PostPresentational';

export default function Post() : JSX.Element {
  return (
    <AuthPage>
      <PostPresentational />
    </AuthPage>
  );
}
