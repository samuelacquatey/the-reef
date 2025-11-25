// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Youtube, Facebook } from 'lucide-react';
import logo from '../crialogo.png';


const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <Link to="/" className="logo">
            <div style={{ color: 'var(--coral)' }}>
                <img 
                    src={logo} 
                    alt="Coral Reef Innovation" 
                    style={{ 
                        width: '50px',
                        height: 'auto',
                        marginRight: '0px'
                    }}
                />
            </div>
              <div className="logo-text">
                <span className="logo-main">Coral Reef Innovation</span>
                <span className="logo-sub">Empowering tomorrow today</span>
              </div>
            </Link>
            <p style={{ marginTop: '20px', color: 'var(--text-light)', lineHeight: '1.6' }}>
              Empowering Africa's technological future through AI and robotics education.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <Twitter size={18} />
              </a>
              <a href="#" className="social-link">
                <Linkedin size={18} />
              </a>
              <a href="#" className="social-link">
                <Youtube size={18} />
              </a>
              <a href="#" className="social-link">
                <Facebook size={18} />
              </a>
            </div>
          </div>
          
          <div className="footer-column">
            <h3>Programs</h3>
            <ul className="footer-links">
              <li><Link to="/courses">AI Foundations</Link></li>
              <li><a href="#">Robotics Engineering</a></li>
              <li><a href="#">Machine Learning</a></li>
              <li><a href="#">Computer Vision</a></li>
              <li><a href="#">Industrial Automation</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Resources</h3>
            <ul className="footer-links">
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Learning Paths</a></li>
              <li><a href="#">Community Forum</a></li>
              <li><a href="#">Career Center</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Company</h3>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Mission</a></li>
              <li><a href="#">African Impact</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Coral Reef Innovation Africa. Empowering tomorrow, today!.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;