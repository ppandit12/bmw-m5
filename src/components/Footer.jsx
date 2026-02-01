import React from 'react';
import './Footer.css';
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h4>BMW M5</h4>
          <p>Code the Power</p>
        </div>
        <div className="social-links">
          <a href="#"><FaGithub /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} BMW M Concept. Designed for Developers.
      </div>
    </footer>
  );
};

export default Footer;
