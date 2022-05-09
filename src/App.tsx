import { useMemo, useState } from 'react';
import React, { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './components/pages/AuthPage/Home/HomeContainer';
import Form from './components/pages/AuthPage/Post/FormContainer';
import Post from './components/pages/AuthPage/Post/PostContainer';
import Profile from './components/pages/AuthPage/Profile/ProfileContainer';
import Login from './components/pages/Login/LoginContainer';
import Registration from './components/pages/Registration/RegistrationContainer';
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
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/new" element={<Form />} />
        <Route path="/post/edit/:id" element={<Form />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
