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

  useEffect(() => {
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
