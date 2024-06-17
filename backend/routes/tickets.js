const express = require('express');
const multer = require('multer');
const router = express.Router();
const Ticket = require('../models/Ticket'); // Ensure you have a Ticket model created

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Create a new ticket
router.post('/', upload.single('attachment'), async (req, res) => {
  const { serialNumber, issue, description, assignee, priority } = req.body;
  const attachment = req.file ? req.file.buffer : null;

  try {
    const newTicket = new Ticket({
      serialNumber,
      issue,
      description,
      assignee,
      priority,
      attachment,
    });

    await newTicket.save();
    res.status(201).json({ message: 'Ticket created successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error creating ticket', error });
  }
});

module.exports = router;