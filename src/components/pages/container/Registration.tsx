import React, { useState } from 'react';
import { useAppContext } from '../../../hooks/AppContext';
import { register } from '../../../services/user';
import RegistrationPresentational from '../presentational/Registration';

export default function Registration() : JSX.Element {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { handleToken, handleUser } = useAppContext();

  const handleSubmit = ():void => {
    register(username, password, handleToken, handleUser);
  };

  return (
    <RegistrationPresentational
      setUsername={setUsername}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
}
