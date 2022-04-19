import { useEffect } from 'react';
import { useAppContext } from '../../hooks/AppContext';

type Props = {
    children: JSX.Element,
};

export default function AuthPage({ children }: Props) : JSX.Element {
  const { token, navigate } = useAppContext();

  useEffect(() => {
    if (token === '' && navigate) {
      navigate('/login');
    }
  }, [navigate, token]);

  return (
    children
  );
}
