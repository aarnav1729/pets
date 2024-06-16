// src/components/Register.js
import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    mobileNumber: '',
    email: '',
    employeeId: '',
    companyCode: '',
    reportingManager: '',
    department: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://pets-k2iv.onrender.com/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('User registered successfully');
      } else {
        alert('Failed to register');
      }
    } catch (err) {
      alert('Error registering user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="fname"
          value={formData.fname}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lname"
          value={formData.lname}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Mobile Number</label>
        <input
          type="text"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Employee ID</label>
        <input
          type="text"
          name="employeeId"
          value={formData.employeeId}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Company Code</label>
        <input
          type="text"
          name="companyCode"
          value={formData.companyCode}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Reporting Manager</label>
        <input
          type="text"
          name="reportingManager"
          value={formData.reportingManager}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Department</label>
        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
