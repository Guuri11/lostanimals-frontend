import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../hooks/AppContext';
import { checkToken, getMe } from '../../services/user';
import Layout from '../elements/Layout';

type Props = {
    children: JSX.Element | null,
};

export default function AuthPage({ children }: Props) : JSX.Element | null {
  const { token, navigate } = useAppContext();
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    if (navigate) {
      if (token === '') {
        navigate('/login');
      } else if (typeof token === 'string') {
        checkToken(token).then((valid) => {
          getMe(token).then((me) => setIsValid(valid && me !== null));
        });
      }
    }
  }, [navigate, token]);

  if (isValid && children) {
    return (
      <Layout>
        {children}
      </Layout>
    );
  }
  return null;
}
