import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { loginAccount } from '../services/auth';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fakeLoginToTests = () => {
    localStorage.setItem(
      'token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsaWNlQGVtYWlsLmNvbSIsImlhdCI6MTY2MjAzNjczNywiZXhwIjoxNjY0NjI4NzM3fQ.QlPlYN9bLA2-Tw_3z-YgFFInU9UZKM6V2IfROE6WDfg'
    );
    localStorage.setItem(
      'user',
      '{"user": {"_id": "6310aaed646a513471b03061","name": "Alice","email": "alice@email.com","password": "$2b$10$6MS4KRhLXeFRg.zeQI/hNescp1H.El3Ixx8oKf.Q4CEgBZbsBF.wu","created_at": "2022-09-01T12:40:01.833Z","updated_at": "2022-09-01T12:40:01.833Z","__v": 0},"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsaWNlQGVtYWlsLmNvbSIsImlhdCI6MTY2MjAzNjczNywiZXhwIjoxNjY0NjI4NzM3fQ.QlPlYN9bLA2-Tw_3z-YgFFInU9UZKM6V2IfROE6WDfg"}'
    );
  };

  useEffect(() => {
    fakeLoginToTests();
    const recoveredUser = localStorage.getItem('user');

    if (recoveredUser) setUser(JSON.parse(recoveredUser));
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      setLoading(true);
      const response = await loginAccount(email, password);
      if (response.data.error) return setError(response.data.error);

      setUser(response.data);
      localStorage.setItem('token', JSON.stringify(response.data.token));
      localStorage.setItem('user', JSON.stringify(response.data.user));
    } catch (err) {
      return { error: err.message };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setUser(null);
    setLoading(true);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setLoading(false);
  };

  return (
    <UserContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout, error }}
    >
      {children}
    </UserContext.Provider>
  );
};
