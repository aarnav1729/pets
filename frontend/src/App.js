// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Auth from './components/Auth';
import Profile from './components/Profile';
import Home from './components/Home';
import IT from './components/IT';
import SAP from './components/SAP';
import Dashboard from './components/Dashboard';
import './App.css';
import './auth.css';
import './navbar.css';

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
        {isAuthenticated && <Navbar />}
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Home /> : <Auth onLogin={handleLogin} />}
          />
          <Route
            path="/profile"
            element={<Profile user={user} onLogout={handleLogout} />}
          />
          <Route path="/it" element={<IT />} />
          <Route path="/sap" element={<SAP />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;