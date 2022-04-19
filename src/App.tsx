import { useMemo, useState } from 'react';
import React, { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';
import AppContext from './hooks/AppContext';

function App(): JSX.Element {
  const [token, setToken] = useState('');
  const [user, setUser] = useState<string>('');
  const navigate = useNavigate();

  const handleToken = (tokenValue: string):void => {
    setToken(tokenValue);
  };

  const handleUser = (userValue: string):void => {
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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
