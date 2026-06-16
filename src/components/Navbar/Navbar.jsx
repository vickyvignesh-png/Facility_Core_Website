import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { useState } from "react";
import '../../styles/Navbar.css';

const Navbar = () => {
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

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border border-gray-200 shadow-lg h-[88px] flex items-center">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 w-full">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src="/Facility_Core_logo.svg" alt="FacilityCore" className="h-[42px] md:h-[52px] w-auto transition-all" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item, idx) => (
              <a 
                key={idx} 
                href={item.link} 
                className="nav-link text-[15px] font-semibold text-brand-dark hover:text-brand-blue"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Side CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="#login" 
              className="px-5 py-2.5 rounded-full border border-gray-300 bg-transparent text-[15px] font-semibold text-brand-dark hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
            >
              Login
            </a>
            <motion.a 
              href="#demo"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-green text-white text-[15px] font-semibold shadow-[0_4px_14px_rgba(29,79,163,0.3)] hover:shadow-[0_6px_20px_rgba(29,79,163,0.4)] transition-all duration-200"
            >
              Book Demo
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-brand-dark hover:text-brand-blue p-1.5 rounded-full hover:bg-black/5 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="absolute top-[88px] left-0 w-full px-4 z-40 lg:hidden"
          >
            <div className="mobile-menu rounded-3xl p-6 flex flex-col gap-4 bg-white border border-gray-200 shadow-xl">
              {navItems.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.link} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2.5 px-4 text-base font-semibold text-brand-dark hover:text-brand-blue hover:bg-brand-blue/5 rounded-xl transition-all duration-200"
                >
                  {item.name}
                </a>
              ))}
              <div className="h-[1px] bg-gray-200/80 my-2" />
              <div className="flex flex-col gap-3">
                <a 
                  href="#login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-3 text-center text-base font-semibold text-brand-dark hover:bg-gray-50 border border-gray-300 rounded-xl transition-all duration-200"
                >
                  Login
                </a>
                <a 
                  href="#demo"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-3 text-center text-base font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-green rounded-xl shadow-md transition-all duration-200"
                >
                  Book Demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
