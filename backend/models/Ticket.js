const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  serialNumber: { type: String, required: true },
  issue: { type: String, required: true },
  description: { type: String, required: true },
  assignee: { type: String, required: true },
  priority: { type: String, required: true },
  attachment: { type: Buffer },
}, { timestamps: true });

module.exports = mongoose.model('Ticket', ticketSchema);
