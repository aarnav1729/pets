import React, { useState } from 'react';
import axios from 'axios';

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
      const res = await axios.post('http://localhost:5000/api/users/register', formData);
      alert(res.data.message);
    } catch (err) {
      alert('Error registering user');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <h3>Personal Details</h3>
        <input type="text" name="fname" placeholder="First Name" required onChange={handleChange} />
        <input type="text" name="lname" placeholder="Last Name" required onChange={handleChange} />
        <input type="text" name="mobileNumber" placeholder="Mobile Number" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
        
        <h3>Company Details</h3>
        <input type="text" name="employeeId" placeholder="Employee ID" required onChange={handleChange} />
        <input type="text" name="companyCode" placeholder="Company Code" required onChange={handleChange} />
        <input type="text" name="reportingManager" placeholder="Reporting Manager" required onChange={handleChange} />
        <input type="text" name="department" placeholder="Department" required onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;