import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Specs from './pages/Specs'
import Experience from './pages/Experience'
import TestDrive from './pages/TestDrive'
import Footer from './components/Footer'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <div className="ambient-background">
          <div className="glow-orb purple"></div>
          <div className="glow-orb blue"></div>
        </div>

        <div className="content-wrapper">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/specs" element={<Specs />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/test-drive" element={<TestDrive />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
