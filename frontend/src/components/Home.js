// src/components/Home.js
import React from 'react';
import Navbar from './Navbar';
import '../auth.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="auth-form">
        <h2>Home Page</h2>
        <p>Welcome to the Home Page</p>
      </div>
    </div>
  );
};

export default Home;
