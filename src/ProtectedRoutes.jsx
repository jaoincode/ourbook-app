import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { UserContext, UserProvider } from './contexts/UserContext';
import React, { useContext } from 'react';
import CreatePost from './pages/CreatePost';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Home from './pages/Home';
import Loading from './pages/Loading';

function ProtectedRoutes() {
  function Private({ children }) {
    const { authenticated, loading } = useContext(UserContext);

    if (loading) return <Loading />;
    if (!authenticated) return <Navigate to="/login" />;
    return children;
  }

  return (
    <BrowserRouter>
      <UserProvider>
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
          <Route
            path="/user/:id"
            element={
              <Private>
                <Profile />
              </Private>
            }
          />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default ProtectedRoutes;
