import React from 'react';
import { motion } from 'framer-motion';
import './TestDrive.css';

const TestDrive = () => {
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleBooking = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      form.reset();
    }, 3000);
  };

  return (
    <div className="page-container test-drive-page">
      <motion.div 
        className="booking-form-wrapper"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {!submitted ? (
          <>
            <h1>Experience the <span className="highlight-red">Power</span></h1>
            <p className="subtitle">Book your exclusive test drive at a verified M Dealer.</p>

            <form className="booking-form" onSubmit={handleBooking}>
              <div className="form-row">
                <div className="input-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
                <div className="input-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" required />
                </div>
              </div>

              <div className="input-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" required />
              </div>

              <div className="form-row">
                <div className="input-group">
                  <label>Preferred Date</label>
                  <input type="date" required />
                </div>
                <div className="input-group">
                  <label>Location / Zip Code</label>
                  <input type="text" placeholder="90210" required />
                </div>
              </div>

              <button 
                type="submit" 
                className="btn-primary full-width"
                disabled={loading}
                style={{ opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
              >
                {loading ? 'Booking...' : 'Request Booking'}
              </button>
            </form>
          </>
        ) : (
          <motion.div 
            className="success-message"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="success-icon">✓</div>
            <h1>Booking Confirmed</h1>
            <p className="subtitle">Thanks for choosing the ultimate driving machine. An M Specialist will contact you shortly.</p>
            <button className="btn-secondary" onClick={() => setSubmitted(false)}>Book Another</button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default TestDrive;
