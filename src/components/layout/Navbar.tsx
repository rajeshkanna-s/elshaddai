import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa';
import '../../styles/navbar.css';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/products', label: 'Products' },
  { path: '/manufacturing', label: 'Manufacturing' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/team', label: 'Team' },
  { path: '/certificates', label: 'Certificates' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isHome = location.pathname === '/';

  return (
    <nav className={`navbar-elshaddai ${scrolled || !isHome ? 'navbar-scrolled' : 'navbar-transparent'}`}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/" className="navbar-brand-wrapper">
            <img 
              src="/images/home/logo.svg" 
              alt="El Shaddai Logo" 
              className="navbar-logo"
            />
            <div className="navbar-brand-text">
              <span className="navbar-brand-name">El Shaddai</span>
              <span className="navbar-brand-tagline">Wood Packing</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="d-none d-lg-flex align-items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="navbar-cta">
              <a href="tel:+919042988267" className="btn-gold">
                <FaPhone /> Call Now
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`navbar-toggler-custom d-lg-none ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-collapse-mobile d-lg-none ${mobileOpen ? 'show' : ''}`}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
        <div className="navbar-cta">
          <a href="tel:+919042988267" className="btn-gold">
            <FaPhone /> Call Now
          </a>
        </div>
      </div>
    </nav>
  );
}
