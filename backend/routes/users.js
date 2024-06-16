const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register new user
router.post('/register', async (req, res) => {
  const {
    fname, lname, mobileNumber, email, employeeId, companyCode, reportingManager, department,
  } = req.body;

  try {
    const newUser = new User({
      fname,
      lname,
      mobileNumber,
      email,
      employeeId: employeeId.toLowerCase(),
      companyCode,
      reportingManager,
      department,
    });
    await newUser.save();
    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    res.status(400).json({ message: 'Error registering user', error });
  }
});

// Login user
router.post('/login', async (req, res) => {
  const { employeeId, mobileNumber } = req.body;

  try {
    const user = await User.findOne({ employeeId: employeeId.toLowerCase(), mobileNumber });
    if (user) {
      res.status(200).json({ message: 'Login successful', user });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;