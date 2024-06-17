// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={require('../logo.png')} alt="Logo" />
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/it" className="nav-links" onClick={toggleMenu}>
              IT
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sap" className="nav-links" onClick={toggleMenu}>
              SAP
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-links" onClick={toggleMenu}>
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-links" onClick={toggleMenu}>
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;