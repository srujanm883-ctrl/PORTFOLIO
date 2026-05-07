import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <span className="navbar-logo">
          PORTFOLIO
        </span>

        <button 
          className="mobile-toggle" 
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMobile}>HOME</Link>
          <Link to="/portfolio" className={`nav-link ${isActive('/portfolio')}`} onClick={closeMobile}>SERVICES</Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={closeMobile}>CONTACT</Link>
          <Link to="/contact" className="btn btn-primary nav-btn" onClick={closeMobile}>HIRE ME</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
