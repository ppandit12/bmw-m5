import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  return (
    <div className="page-container experience-page">
      <motion.div 
        className="experience-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>The M <span className="highlight-purple">Lifestyle</span></h1>
        <p>Immerse yourself in the world of high performance.</p>
      </motion.div>

      <div className="gallery-grid">
        <motion.div 
          className="gallery-item item-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="overlay">
            <h3>Track Days</h3>
            <p>Push the limits on world-class circuits.</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="gallery-item item-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="overlay">
            <h3>M Town</h3>
            <p>Where too much is just right.</p>
          </div>
        </motion.div>

        <motion.div 
          className="gallery-item item-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
           <div className="overlay">
            <h3>Individual</h3>
            <p>Customize every detail to your vision.</p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="experience-cta"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2>Ready to join?</h2>
        <button className="btn-primary">Find an Event</button>
      </motion.div>
    </div>
  );
};

export default Experience;
