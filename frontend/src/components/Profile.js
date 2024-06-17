// src/components/Profile.js
import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import '../auth.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = ({ onLogout }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state ? location.state.user : {};

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div className="profile-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img src={require('../logo.png')} alt="Logo" className="navbar-logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="auth-container">
        <div className="auth-form">
          <h2>User Profile</h2>
          <div>
            <label>First Name:</label>
            <p>{user.fname}</p>
          </div>
          <div>
            <label>Last Name:</label>
            <p>{user.lname}</p>
          </div>
          <div>
            <label>Mobile Number:</label>
            <p>{user.mobileNumber}</p>
          </div>
          <div>
            <label>Email:</label>
            <p>{user.email}</p>
          </div>
          <div>
            <label>Employee ID:</label>
            <p>{user.employeeId}</p>
          </div>
          <div>
            <label>Company Code:</label>
            <p>{user.companyCode}</p>
          </div>
          <div>
            <label>Reporting Manager:</label>
            <p>{user.reportingManager}</p>
          </div>
          <div>
            <label>Department:</label>
            <p>{user.department}</p>
          </div>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;