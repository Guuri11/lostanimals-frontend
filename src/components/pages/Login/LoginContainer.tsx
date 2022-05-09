import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../../hooks/AppContext';
import { login } from '../../../services/user';
import LoginPresentational from './LoginPresentational';

export default function Login() : JSX.Element {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {
    handleToken, token, navigate, handleUser,
  } = useAppContext();

  useEffect(() => {
    if (token !== '' && navigate) {
      navigate('/');
    }
  }, [token, navigate]);
  const handleSubmit = ():void => {
    login(username, password, handleToken, handleUser);
  };

  return (
    <LoginPresentational
      handleSubmit={handleSubmit}
      setUsername={setUsername}
      setPassword={setPassword}
    />
  );
}
