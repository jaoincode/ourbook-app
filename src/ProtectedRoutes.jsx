import React from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Footer from './components/Footer';
import { UserContext, UserProvider } from './contexts/UserContext';
import { useContext } from 'react';
import { useState } from 'react';

function ProtectedRoutes() {
  const [loading, setLoading] = useState(false);

  function Private({ children }) {
    const { authenticated, loading } = useContext(UserContext);
    setLoading(loading);

    if (!authenticated) return <Navigate to="login" />;
    return children;
  }

  return (
    <BrowserRouter>
      <UserProvider>
        {loading && <h1>Loading</h1>}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <Private>
                <Home />
              </Private>
            }
          />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default ProtectedRoutes;
