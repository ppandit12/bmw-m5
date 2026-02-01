import React from 'react';
import { motion } from 'framer-motion';
import './Login.css';

const Login = () => {
  return (
    <div className="page-container login-page">
      <motion.div 
        className="login-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>BMW ID Login</h2>
        <p>Access your personalized M Experience.</p>
        
        <form>
          <div className="input-group">
            <label>Email / BMW ID</label>
            <input type="email" placeholder="driver@bmw-m.com" />
          </div>
          
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" />
          </div>

          <button type="button" className="btn-primary full-width">Sign In</button>
        </form>

        <div className="login-footer">
          <a href="#">Forgot Password?</a>
          <div className="divider"></div>
          <a href="#">Create Account</a>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
