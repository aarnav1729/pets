// src/components/SAP.js
import React from 'react';
import Navbar from './Navbar';
import '../auth.css';

const SAP = () => {
  return (
    <div>
      <Navbar />
      <div className="auth-form">
        <h2>SAP Page</h2>
        <p>Welcome to the SAP Page</p>
      </div>
    </div>
  );
};

export default SAP;
