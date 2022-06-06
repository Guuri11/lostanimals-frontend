import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../../../hooks/AppContext';
import { checkToken, getMe } from '../../../services/user';
import Layout from '../../elements/Layout';

type Props = {
    children: JSX.Element | null,
};

export default function AuthPage({ children }: Props) : JSX.Element | null {
  const {
    token, navigate, handleCoords, handleAlert,
  } = useAppContext();
  const [isValid, setIsValid] = useState(false);
  const [redirectLogin, setRedirectLogin] = useState(false);
  useEffect(() => {
    if (navigate) {
      if (token === '') {
        setRedirectLogin(true);
      } else if (typeof token === 'string') {
        checkToken(token).then((valid) => {
          getMe(token).then((me) => setIsValid(valid && me !== null));
        });
      }
    }
  }, [navigate, token]);

  useEffect(() => {
    if ('geolocation' in navigator && handleAlert) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position.coords && handleCoords) {
          handleCoords();
        }
      }, (error) => {
        handleAlert(error.message, 'red');
      });
    } else if (handleAlert) {
      handleAlert('Geolocation not available', 'red');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (redirectLogin) {
    return (
      <Navigate to="/login" replace />
    );
  }

  if (isValid && children) {
    return (
      <Layout>
        {children}
      </Layout>
    );
  }
  return null;
}
