// src/components/ContactSupport.js
import React from 'react';
import Navbar from './Navbar';
import '../auth.css';

const ContactSupport = () => {
  const contactDetails = [
    {
      company: 'PEL - Premier Energies Limited',
      email: 'support@companya.com',
      code: '1000',
      phone: '123-456-7890',
    },
    {
      company: 'PEPPL - Premier Energies Photovoltaic Private Limited',
      code: '2000',
      email: 'support@companyb.com',
      phone: '123-456-7891',
    },
    {
      
      company: 'PSPT - Premier Solar Power Tech Private Limited',
      code: '3000',
      email: 'support@companyc.com',
      phone: '123-456-7892',
    },
    {
      company: 'PEIPL - Premier Energies International Private Limited',
      code: '4000',
      email: 'support@companyd.com',
      phone: '123-456-7893',
    },
    {
      company: 'PEGPL - Premier Energies Global Environmental Private Limited',
      code: '5000',
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
                <h4>{contact.code}</h4>
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