// src/components/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import '../auth.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://pets-k2iv.onrender.com/api/users'); // Ensure this endpoint is correct
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data); // Log the response data
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="admin-container">
      <Navbar />
      <div className="auth-container">
        <div className="auth-form">
          <h2>User Table</h2>
          <table className="user-table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Mobile Number</th>
                <th>Email</th>
                <th>Employee ID</th>
                <th>Company Code</th>
                <th>Reporting Manager</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user._id}>
                    <td>{user.fname}</td>
                    <td>{user.lname}</td>
                    <td>{user.mobileNumber}</td>
                    <td>{user.email}</td>
                    <td>{user.employeeId}</td>
                    <td>{user.companyCode}</td>
                    <td>{user.reportingManager}</td>
                    <td>{user.department}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8">No users found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;