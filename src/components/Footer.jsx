import React from 'react';
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { FiChevronsRight, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      {/* Tailwind container mx-auto wrapper for page width consistency */}
      <div className="container mx-auto footer-container">
        <div className="footer-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-left">
            <a href="#" className="footer-logo-link">
              <img src="/Facility_Core_logo.svg" alt="FacilityCore" className="footer-logo" />
            </a>
            <p className="footer-description">
              FacilityCore simplifies facility operations through intelligent asset, maintenance, and workforce management.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="LinkedIn" className="footer-social-icon">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="Twitter" className="footer-social-icon">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Facebook" className="footer-social-icon">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="YouTube" className="footer-social-icon">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Wrapper for Company & Legal Links - side by side on mobile */}
          <div className="footer-links-wrapper">
            {/* Column 2: Company Links */}
            <div className="footer-column">
              <h4 className="footer-heading">COMPANY</h4>
              <ul className="footer-links">
                <li>
                  <a href="#about-us" className="footer-link">
                    <FiChevronsRight className="footer-link-icon" />
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="footer-link">
                    <FiChevronsRight className="footer-link-icon" />
                    Solutions
                  </a>
                </li>
                <li>
                  <a href="#industries" className="footer-link">
                    <FiChevronsRight className="footer-link-icon" />
                    Industries
                  </a>
                </li>
                <li>
                  <a href="#features" className="footer-link">
                    <FiChevronsRight className="footer-link-icon" />
                    Features
                  </a>
                </li>
                <li>
                  <a href="#contact" className="footer-link">
                    <FiChevronsRight className="footer-link-icon" />
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Legal Links */}
            <div className="footer-column">
              <h4 className="footer-heading">LEGAL</h4>
              <ul className="footer-links">
                <li>
                  <a href="#privacy" className="footer-link">
                    <FiChevronsRight className="footer-link-icon" />
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="footer-link">
                    <FiChevronsRight className="footer-link-icon" />
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Contact Details */}
          <div className="footer-column">
            <h4 className="footer-heading">CONTACT DETAILS</h4>
            <ul className="footer-contact-list">
              <li>
                <FiMail className="footer-contact-icon" />
                <a href="mailto:sales@facilitycore.com">
                  sales@facilitycore.com
                </a>
              </li>
              <li>
                <FiPhone className="footer-contact-icon" />
                <a href="tel:+919876543210">
                  +91 9876543210
                </a>
              </li>
              <li>
                <FiMapPin className="footer-contact-icon" />
                <span>
                  FacilityCore Technologies Pvt. Ltd.<br />
                  123, Anyware Road,<br />
                  Any City, State - 123456
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom separator & Copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} FacilityCore Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
