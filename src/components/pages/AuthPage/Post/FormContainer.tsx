import React from 'react';
import AuthPage from '../../AuthPage';
import FormPresentational from './FormPresentational';

export default function From() : JSX.Element {
  return (
    <AuthPage>
      <FormPresentational />
    </AuthPage>
  );
}
