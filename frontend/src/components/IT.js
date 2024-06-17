// src/components/IT.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import '../auth.css';

const IT = () => {
  const [formData, setFormData] = useState({
    serialNumber: '',
    issue: '',
    description: '',
    assignee: '',
    priority: '',
    attachment: null,
  });

  const assignees = ['Assignee 1', 'Assignee 2', 'Assignee 3']; // Replace with actual assignees

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'attachment') {
      setFormData({ ...formData, attachment: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ticketData = new FormData();
    ticketData.append('serialNumber', formData.serialNumber);
    ticketData.append('issue', formData.issue);
    ticketData.append('description', formData.description);
    ticketData.append('assignee', formData.assignee);
    ticketData.append('priority', formData.priority);
    if (formData.attachment) {
      ticketData.append('attachment', formData.attachment);
    }

    try {
      const response = await fetch('https://pets-k2iv.onrender.com/api/tickets', {
        method: 'POST',
        body: ticketData,
      });

      if (response.ok) {
        alert('Ticket created successfully');
        setFormData({
          serialNumber: '',
          issue: '',
          description: '',
          assignee: '',
          priority: '',
          attachment: null,
        });
      } else {
        alert('Failed to create ticket');
      }
    } catch (error) {
      console.error('Error creating ticket:', error);
      alert('Error creating ticket');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="auth-container">
        <div className="auth-form">
          <h2>Create IT Ticket</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Serial Number</label>
              <input
                type="text"
                name="serialNumber"
                value={formData.serialNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Issue</label>
              <input
                type="text"
                name="issue"
                value={formData.issue}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Assignee</label>
              <select
                name="assignee"
                value={formData.assignee}
                onChange={handleChange}
                required
              >
                <option value="">Select Assignee</option>
                {assignees.map((assignee) => (
                  <option key={assignee} value={assignee}>
                    {assignee}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>Priority</label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                required
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div>
              <label>File Attachment</label>
              <input
                type="file"
                name="attachment"
                onChange={handleChange}
              />
            </div>
            <button type="submit">Create Ticket</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IT;