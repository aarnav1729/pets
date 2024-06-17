// src/components/Dashboard.js
import React from 'react';
import Navbar from './Navbar';
import '../auth.css';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="auth-form">
        <h2>Dashboard Page</h2>
        <p>Welcome to the Dashboard Page</p>
      </div>
    </div>
  );
};

export default Dashboard;
