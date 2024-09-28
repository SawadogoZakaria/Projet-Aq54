import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import CreateAccount from './components/CreateAcount';
import Dashboard from './components/dashboard';
import SensorInsights from './components/SensorInsight';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sensor-insights" element={<SensorInsights />} />
      </Routes>
    </Router>
  );
};

export default App;