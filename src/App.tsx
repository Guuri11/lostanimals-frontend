import { useMemo, useState } from 'react';
import React, { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';
import AppContext from './hooks/AppContext';

function App(): JSX.Element {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const providerData = useMemo(() => ({
    token, user,
  }), [token, user]);

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
