import React from 'react';
import AuthPage from '../../../AuthPage';
import PostPresentational from '../../../presentational/AuthPage/Post/Post';

export default function Post() : JSX.Element {
  return (
    <AuthPage>
      <PostPresentational />
    </AuthPage>
  );
}
