import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">BMW <span className="m-badge">///M</span></Link>
      <div className="nav-links">
        <Link to="/specs">Models</Link>
        <Link to="/test-drive">Configurator</Link>
        <Link to="/experience">Experience</Link>
      </div>
      <div className="nav-cta">
        <Link to="/login">
          <button className="btn-outline">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
