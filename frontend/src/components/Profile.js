import React from 'react';
import { useLocation } from 'react-router-dom';

const Profile = () => {
  const location = useLocation();
  const { user } = location.state;

  return (
    <div>
      <h2>My Profile</h2>
      <p>First Name: {user.fname}</p>
      <p>Last Name: {user.lname}</p>
      <p>Mobile Number: {user.mobileNumber}</p>
      <p>Email: {user.email}</p>
      <p>Employee ID: {user.employeeId}</p>
      <p>Company Code: {user.companyCode}</p>
      <p>Reporting Manager: {user.reportingManager}</p>
      <p>Department: {user.department}</p>
    </div>
  );
};

export default Profile;