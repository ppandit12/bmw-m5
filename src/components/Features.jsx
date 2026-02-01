import React from 'react';
import { BsSpeedometer2, BsLightningChargeFill, BsCpuFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import './Features.css';

const features = [
  {
    icon: <BsSpeedometer2 />,
    title: "Unmatched Speed",
    desc: "M xDrive with Active M Differential launches you from 0 to 60 mph in a blistering 2.9 seconds."
  },
  {
    icon: <BsLightningChargeFill />,
    title: "Hybrid V8 Power",
    desc: "The high-revving V8 engine combined with an electric motor delivers a system output of 727 hp."
  },
  {
    icon: <BsCpuFill />,
    title: "Intelligent Tech",
    desc: "BMW Curved Display featuring the latest iDrive 8.5 Operating System for seamless connectivity."
  }
];

const Features = () => {
  return (
    <section className="features" id="models">
      <div className="features-container">
        {features.map((feature, index) => (
          <motion.div 
            className="feature-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="icon-wrapper">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
