import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../hooks/AppContext';
import { login } from '../../services/user';

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
    <div className="text-center my-5">
      <h2>Login</h2>
      <div className="my-4">
        <input type="text" className="px-4 py-2" placeholder="Enter username" onChange={(event) => { setUsername(event.target.value); }} />
      </div>
      <div className="my-4">
        <input type="password" className="px-4 py-2" placeholder="Enter password" onChange={(event) => { setPassword(event.target.value); }} />
      </div>
      <button onClick={handleSubmit} type="button">Submit</button>
      <div>
        <Link to="/register">Register</Link>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}
