import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import '../../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', link: '#' },
    { name: 'Solutions', link: '#solutions' },
    { name: 'Industries', link: '#industries' },
    { name: 'Features', link: '#features' },
    { name: 'Resources', link: '#resources' },
    { name: 'Pricing', link: '#pricing' },
    { name: 'About Us', link: '#about-us' },
    { name: 'Contact', link: '#contact' }
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

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-inner">

          {/* Logo */}
          <a href="#" className="navbar-logo" onClick={() => setActiveItem('Home')}>
            <img src="/Facility_Core_logo.svg" alt="FacilityCore" className="logo-img" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className={`nav-link ${activeItem === item.name ? 'nav-link-active' : ''}`}
                onClick={() => setActiveItem(item.name)}
              >
                {item.name}
              </a>
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
              transition={{ type: 'tween', duration: 0.35, ease: 'easeOut' }}
              className="mobile-menu-drawer"
            >
              <div className="drawer-header">
                <button
                  className="drawer-close-btn"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <HiX />
                </button>
              </div>
              <div className="drawer-content">
                <nav className="mobile-nav-links">
                  {navItems.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.link}
                      onClick={() => {
                        setActiveItem(item.name);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`mobile-nav-link ${activeItem === item.name ? 'mobile-nav-link-active' : ''}`}
                    >
                      {item.name}
                    </a>
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

