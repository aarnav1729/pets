// src/components/ContactSupport.js
import React from 'react';
import Navbar from './Navbar';
import '../auth.css';

const ContactSupport = () => {
  const contactDetails = [
    {
      company: 'Company A',
      email: 'support@companya.com',
      phone: '123-456-7890',
    },
    {
      company: 'Company B',
      email: 'support@companyb.com',
      phone: '123-456-7891',
    },
    {
      company: 'Company C',
      email: 'support@companyc.com',
      phone: '123-456-7892',
    },
    {
      company: 'Company D',
      email: 'support@companyd.com',
      phone: '123-456-7893',
    },
    {
      company: 'Company E',
      email: 'support@companye.com',
      phone: '123-456-7894',
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <div className="contact-form">
          <h2>Contact Support</h2>
          <ul className="contact-list">
            {contactDetails.map((contact, index) => (
              <li key={index} className="contact-item">
                <h3>{contact.company}</h3>
                <p>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
                <p>Phone: <a href={`tel:${contact.phone}`}>{contact.phone}</a></p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;