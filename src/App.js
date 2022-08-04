import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/v1" />} />
        <Route path="/v1" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
