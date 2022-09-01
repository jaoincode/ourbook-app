import React from 'react';
import ReactDOM from 'react-dom/client';
import ProtectedRoutes from './ProtectedRoutes';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProtectedRoutes />
  </React.StrictMode>
);
