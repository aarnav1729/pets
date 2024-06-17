// src/components/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import '../auth.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Fetch users
    fetch('https://pets-k2iv.onrender.com/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));

    // Fetch tickets
    fetch('https://pets-k2iv.onrender.com/api/tickets')
      .then((response) => response.json())
      .then((data) => setTickets(data))
      .catch((error) => console.error('Error fetching tickets:', error));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="admin-container">
        <div className="auth-form">
          <h2>User Table ({users.length})</h2>
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

        <div className="auth-form">
          <h2>IT Tickets ({tickets.length})</h2>
          <table className="user-table">
            <thead>
              <tr>
                <th>Serial Number</th>
                <th>Issue</th>
                <th>Description</th>
                <th>Assignee</th>
                <th>Priority</th>
                <th>Attachment</th>
              </tr>
            </thead>
            <tbody>
              {tickets.length > 0 ? (
                tickets.map((ticket) => (
                  <tr key={ticket._id}>
                    <td>{ticket.serialNumber}</td>
                    <td>{ticket.issue}</td>
                    <td>{ticket.description}</td>
                    <td>{ticket.assignee}</td>
                    <td>{ticket.priority}</td>
                    <td>{ticket.attachment ? 'Yes' : 'No'}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No tickets found</td>
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