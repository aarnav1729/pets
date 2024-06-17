// src/components/Profile.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
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
      <Navbar />
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
