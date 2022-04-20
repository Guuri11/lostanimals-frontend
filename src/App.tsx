import { useMemo, useState } from 'react';
import React, { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './components/pages/container/AuthPage/Home';
import Profile from './components/pages/container/AuthPage/Profile';
import Login from './components/pages/container/Login';
import Registration from './components/pages/container/Registration';
import AppContext from './hooks/AppContext';
import { UserType } from './utils/types/user';

function App(): JSX.Element {
  const [token, setToken] = useState('');
  const [user, setUser] = useState<UserType | null>(null);
  const navigate = useNavigate();

  const handleToken = (tokenValue: string):void => {
    setToken(tokenValue);
  };

  const handleUser = (userValue: UserType | null):void => {
    setUser(userValue);
  };

  const providerData = useMemo(() => ({
    token, user, handleToken, handleUser, navigate,
  }), [token, user, navigate]);

  return (
    <AppContext.Provider
      value={providerData}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
