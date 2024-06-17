// src/components/Home.js
import React from 'react';
import Navbar from './Navbar';
import '../auth.css';

const Home = () => {
  return (
    <div className="page-container">
      <Navbar />
      <div className="auth-container">
        <div className="auth-form">
          <h2>Home</h2>
          <p>Welcome to the Home Page!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
