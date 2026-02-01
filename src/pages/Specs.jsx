import React from 'react';
import { motion } from 'framer-motion';
import './Specs.css';

const specsData = [
  { label: "Engine", value: "4.4L V8 TwinPower Turbo" },
  { label: "Electric Motor", value: "Permanent-magnet Synchronous" },
  { label: "System Output", value: "727 hp / 737 lb-ft" },
  { label: "0-60 mph", value: "2.9 seconds" },
  { label: "Top Speed", value: "190 mph (with package)" },
  { label: "Weight", value: "5,390 lbs" },
  { label: "Drivetrain", value: "M xDrive AWD" },
  { label: "Transmission", value: "8-speed M Steptronic" }
];

const Specs = () => {
  return (
    <div className="page-container specs-page">
      <motion.h1 
        className="page-title"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Technical <span className="highlight">Specifications</span>
      </motion.h1>

      <div className="specs-grid">
        {specsData.map((item, index) => (
          <motion.div 
            className="spec-item" 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <span className="spec-label">{item.label}</span>
            <span className="spec-value">{item.value}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Specs;
