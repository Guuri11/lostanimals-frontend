import { useEffect, useState } from 'react';
import { useAppContext } from '../../hooks/AppContext';
import { checkToken, getMe } from '../../services/user';

type Props = {
    children: JSX.Element,
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

  if (isValid) {
    return (
      children
    );
  }
  return null;
}
