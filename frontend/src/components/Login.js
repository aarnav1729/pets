import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', { employeeId, mobileNumber });
      if (res.data.message === 'Login successful') {
        navigate('/profile', { state: { user: res.data.user } });
      } else {
        alert('Invalid credentials');
      }
    } catch (err) {
      alert('Error logging in');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <p>Your username is your employee ID and your password is your mobile number.</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Employee ID" required onChange={(e) => setEmployeeId(e.target.value)} />
        <input type="text" placeholder="Mobile Number" required onChange={(e) => setMobileNumber(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;