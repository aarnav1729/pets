// src/components/Profile.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../auth.css';

const Profile = () => {
  const location = useLocation();
  const user = location.state.user;

  return (
    <div className="auth-container">
      <img src={require('../logo.png')} alt="Logo" className="auth-logo" />
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
      </div>
    </div>
  );
};

export default Profile;
