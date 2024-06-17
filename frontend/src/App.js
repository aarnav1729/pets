// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import './App.css';
import './auth.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setIsAuthenticated(true);
    setUser(user);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={!isAuthenticated ? <Auth onLogin={handleLogin} /> : <Profile user={user} onLogout={handleLogout} />}
          />
          <Route
            path="/profile"
            element={<Profile user={user} onLogout={handleLogout} />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;