// src/components/Admin.js
import React from 'react';
import Navbar from './Navbar';
import '../auth.css';

const Admin = () => {
  return (
    <div className="page-container">
      <Navbar />
      <div className="auth-container">
        <div className="auth-form">
          <h2>Admin</h2>
          <p>Welcome to the Admin Page!</p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
