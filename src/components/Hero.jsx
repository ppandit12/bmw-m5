import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import m5Hero from '../assets/m5-hero.png';
import './Hero.css';

const Hero = () => {
  const { scrollY } = useScroll();
  const yBackend = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-text"
        >
          <h2 className="brand-subtitle">The New Era</h2>
          <h1 className="hero-title">
            BMW M5 <br />
            <span className="text-gradient">CODE THE POWER</span>
          </h1>
          <p className="hero-tagline">
            Luxury meets high-performance for the modern developer workspace.
          </p>
          
          <div className="hero-cta">
            <Link to="/specs">
              <button className="btn-primary">Explore Specs</button>
            </Link>
            <Link to="/test-drive">
              <button className="btn-secondary">Book Test Drive</button>
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="val">727</span>
              <span className="lbl">HP</span>
            </div>
            <div className="stat">
              <span className="val">2.9s</span>
              <span className="lbl">0-60</span>
            </div>
            <div className="stat">
              <span className="val">HYBRID</span>
              <span className="lbl">V8 System</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="hero-image-wrapper"
        style={{ y: yBackend, opacity }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <img src={m5Hero} alt="BMW M5 Concept" className="hero-car" />
        <div className="car-glow" />
      </motion.div>
    </section>
  );
};

export default Hero;
