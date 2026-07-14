import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

// Responsive spacing configuration for mobile and tablet devices is managed in Navbar.css
const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Solutions', link: '/solutions' },
    { name: 'Industries', link: '/industries' },
    { name: 'Features', link: '/features' },
    { name: 'Pricing', link: '/pricing' },
    { name: 'About Us', link: '/about' },
    { name: 'Contact', link: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`navbar-wrapper`}>
      <div className="navbar-container">
        <div className="navbar-inner">

          {/* Logo */}
          <Link
            to="/"
            className="navbar-logo"
          >
            <img
              src="/Facility_Core_logo.svg"
              alt="FacilityCore"
              className="logo-img"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                className={`nav-link ${location.pathname === item.link
                  ? 'nav-link-active'
                  : ''
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side CTAs */}
          <div className="desktop-ctas">
            <a
              href="#login"
              className="btn-login"
            >
              Login
            </a>
            <motion.a
              href="#demo"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="btn-demo"
            >
              Book Demo
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Menu (Slide-in from right) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              className="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
              className="mobile-menu-drawer"
            >
              <div className="drawer-content">
                <nav className="mobile-nav-links">
                  {navItems.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.link}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`mobile-nav-link ${location.pathname === item.link
                        ? 'mobile-nav-link-active'
                        : ''
                        }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="drawer-divider" />
                <div className="mobile-ctas">
                  <a
                    href="#login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mobile-btn-login"
                  >
                    Login
                  </a>
                  <a
                    href="#demo"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mobile-btn-demo"
                  >
                    Book Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
