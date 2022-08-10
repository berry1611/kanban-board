import { storageKey } from 'constant/storageKey';
import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { Home, Login, Signup } from './pages';

const App = () => {
  const user = localStorage.getItem(storageKey.USER_INFO);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/v1" /> : <Navigate to="/v1/login" />} />
        <Route path="/v1" element={<Home />} />
        <Route path="/v1/login" element={<Login />} />
        <Route path="/v1/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/v1" />} />
      </Routes>
    </Router>
  );
};

export default App;
