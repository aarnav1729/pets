// src/components/IT.js
import React from 'react';
import Navbar from './Navbar';
import '../auth.css';

const IT = () => {
  return (
    <div>
      <Navbar />
      <div className="auth-form">
        <h2>IT Page</h2>
        <p>Welcome to the IT Page</p>
      </div>
    </div>
  );
};

export default IT;
