import React from 'react';
import { useAppContext } from '../../../../hooks/AppContext';
import AuthPage from '../../AuthPage';
import ProfilePresentational from './ProfilePresentational';

export default function Profile() : JSX.Element {
  const { user } = useAppContext();
  return (
    <AuthPage>
      {user ? <ProfilePresentational /> : null }
    </AuthPage>
  );
}
