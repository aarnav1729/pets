// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../auth.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="home-boxes">
          <Link to="/it" className="home-box">
            <div className="home-box-content">
              <img src={require('../icons/it.png')} alt="IT" />
              <h3>IT</h3>
            </div>
          </Link>
          <Link to="/sap" className="home-box">
            <div className="home-box-content">
              <img src={require('')} alt="SAP" />
              <h3>SAP</h3>
            </div>
          </Link>
          <Link to="/other" className="home-box">
            <div className="home-box-content">
              <img src={require('')} alt="Other" />
              <h3>Other</h3>
            </div>
          </Link>
          <Link to="/contact-support" className="home-box">
            <div className="home-box-content">
              <img src={require('.../logo.png')} alt="Contact Support" />
              <h3>Contact Support</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;