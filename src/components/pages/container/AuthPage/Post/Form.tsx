import React from 'react';
import AuthPage from '../../../AuthPage';
import FormPresentational from '../../../presentational/AuthPage/Post/Form';

export default function From() : JSX.Element {
  return (
    <AuthPage>
      <FormPresentational />
    </AuthPage>
  );
}
