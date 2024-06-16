// src/components/Auth.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import '../auth.css';

const Auth = ({ onLogin }) => {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Router>
      <div className="auth-container">
        <img src={require('../logo.png')} alt="Logo" className="auth-logo" />
        <div className="auth-form">
          <div className="auth-tabs">
            <button
              className={activeTab === 'login' ? 'active' : ''}
              onClick={() => handleTabClick('login')}
            >
              Login
            </button>
            <button
              className={activeTab === 'register' ? 'active' : ''}
              onClick={() => handleTabClick('register')}
            >
              Signup
            </button>
          </div>
          {activeTab === 'login' && <Login onLogin={onLogin} />}
          {activeTab === 'register' && <Register />}
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login onLogin={onLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default Auth;