import React from 'react';
import { motion } from 'framer-motion';
import './TestDrive.css';

const TestDrive = () => {
  return (
    <div className="page-container test-drive-page">
      <motion.div 
        className="booking-form-wrapper"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Experience the <span className="highlight-red">Power</span></h1>
        <p className="subtitle">Book your exclusive test drive at a verified M Dealer.</p>

        <form className="booking-form">
          <div className="form-row">
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className="input-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="+1 (555) 000-0000" />
            </div>
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="john@example.com" />
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Preferred Date</label>
              <input type="date" />
            </div>
            <div className="input-group">
              <label>Location / Zip Code</label>
              <input type="text" placeholder="90210" />
            </div>
          </div>

          <button type="button" className="btn-primary full-width">Request Booking</button>
        </form>
      </motion.div>
    </div>
  );
};

export default TestDrive;
