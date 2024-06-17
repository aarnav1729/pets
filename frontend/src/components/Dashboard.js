// src/components/Dashboard.js
import React from 'react';
import Navbar from './Navbar';
import '../auth.css';

const Dashboard = () => {
  return (
    <div className="page-container">
      <Navbar />
      <div className="auth-container">
        <div className="auth-form">
          <h2>Dashboard</h2>
          <p>Welcome to the Dashboard!</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
