import { UserContext, UserProvider } from './contexts/UserContext';
import React, { useState, useContext } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';

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
          <Route
            path="/create"
            element={
              <Private>
                <CreatePost />
              </Private>
            }
          />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default ProtectedRoutes;
