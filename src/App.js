import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { Home, Login, Signup } from './pages';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/v1" />} />
        <Route path="/v1" element={<Home />} />
        <Route path="/v1/login" element={<Login />} />
        <Route path="/v1/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
