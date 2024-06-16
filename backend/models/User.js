const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  email: { type: String, required: true },
  employeeId: { type: String, required: true, unique: true },
  companyCode: { type: String, required: true },
  reportingManager: { type: String, required: true },
  department: { type: String, required: true },
});

module.exports = mongoose.model('User', UserSchema);