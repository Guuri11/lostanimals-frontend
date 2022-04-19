import { useEffect, useState } from 'react';
import { useAppContext } from '../../hooks/AppContext';
import { checkToken } from '../../services/user';

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
        checkToken(token).then((valid) => setIsValid(valid));
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
