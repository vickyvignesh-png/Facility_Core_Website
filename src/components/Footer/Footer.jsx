import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaYoutube } from 'react-icons/fa';
import '../../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', url: '#about-us' },
        { name: 'Careers', url: '#careers' },
        { name: 'Newsroom', url: '#press' },
        { name: 'Security Center', url: '#security' },
        { name: 'Privacy Policy', url: '#privacy' },
        { name: 'Terms of Use', url: '#terms' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Asset Management', url: '#solutions' },
        { name: 'Preventive Maintenance', url: '#solutions' },
        { name: 'Reactive Maintenance', url: '#solutions' },
        { name: 'Helpdesk Portal', url: '#solutions' },
        { name: 'Vendor Manager', url: '#solutions' },
        { name: 'Compliance Logs', url: '#solutions' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Product Blog', url: '#blog' },
        { name: 'Case Studies', url: '#cases' },
        { name: 'Product Guides', url: '#guides' },
        { name: 'API Reference', url: '#api' },
        { name: 'ROI Calculator', url: '#roi' },
        { name: 'System Status', url: '#status' }
      ]
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-200/80 pt-20 pb-12">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 text-left">
          
          {/* Brand details and newsletter column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <a href="#" className="inline-block">
              <img src="/Facility_Core_logo.svg" alt="FacilityCore" className="h-14 w-auto" />
            </a>
            
            <p className="text-sm text-[#6B7280] font-medium leading-relaxed max-w-sm">
              FacilityCore is the leading intelligent CMMS and facility management platform built to optimize uptime, streamline maintenance, and keep facilities audit-ready.
            </p>

            {/* Newsletter input */}
            <div className="flex flex-col gap-2.5">
              <label className="text-xs font-bold text-[#111827] uppercase tracking-wider">
                Subscribe to our Newsletter
              </label>
              <div className="flex items-center bg-gray-50 p-1.5 rounded-full border border-gray-200 max-w-sm">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-transparent pl-4 pr-2 text-xs text-[#111827] focus:outline-none flex-1 font-medium placeholder-gray-400"
                />
                <button className="px-5 py-2.5 bg-[#1D4FA3] hover:bg-[#69BC45] text-white text-xs font-bold rounded-full transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links columns */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-6">
            {sections.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h4 className="text-xs font-bold text-[#111827] uppercase tracking-widest">
                  {section.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a 
                        href={link.url}
                        className="footer-link text-xs font-semibold text-[#6B7280] hover:text-[#1D4FA3] inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-bold text-[#111827] uppercase tracking-widest">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4 text-xs text-[#6B7280] font-semibold">
              <li className="flex items-center gap-3">
                <FiMail className="text-[#1D4FA3] shrink-0 w-4 h-4" />
                <a href="mailto:sales@facilitycore.com" className="hover:text-[#1D4FA3]">
                  sales@facilitycore.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-[#69BC45] shrink-0 w-4 h-4" />
                <a href="tel:+18005550199" className="hover:text-[#69BC45]">
                  +1 (800) 555-0199
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="text-[#1D4FA3] shrink-0 w-4 h-4 mt-0.5" />
                <span>
                  100 Pine Street, 24th Floor<br />
                  San Francisco, CA 94111
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Social Icons & Copyright bottom bar */}
        <div className="pt-8 border-t border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs font-bold text-[#6B7280] text-center sm:text-left">
            © {currentYear} FacilityCore Technologies, Inc. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a href="#" aria-label="LinkedIn" className="footer-social-icon w-9 h-9 rounded-full bg-gray-50 text-slate-500 flex items-center justify-center text-sm shadow-sm">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Twitter" className="footer-social-icon w-9 h-9 rounded-full bg-gray-50 text-slate-500 flex items-center justify-center text-sm shadow-sm">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Facebook" className="footer-social-icon w-9 h-9 rounded-full bg-gray-50 text-slate-500 flex items-center justify-center text-sm shadow-sm">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="YouTube" className="footer-social-icon w-9 h-9 rounded-full bg-gray-50 text-slate-500 flex items-center justify-center text-sm shadow-sm">
              <FaYoutube />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
