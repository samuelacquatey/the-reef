// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Bell, User } from 'lucide-react';
import logo from '../crialogo.png';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header>
      <div className="container">
        <div className="header-content">
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

          <nav>
            <ul>
              <li><Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
              <li><Link to="/courses" className={isActive('/courses') ? 'active' : ''}>Courses</Link></li>
              <li><a href="#">Learning Paths</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </nav>

          <div className="header-actions">
            <div className="search-bar">
              <Search size={18} className="icon" />
              <input 
                type="text" 
                placeholder="Search courses..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="user-actions">
              <button className="icon-btn">
                <Bell size={18} />
              </button>
              <button className="icon-btn">
                <User size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;