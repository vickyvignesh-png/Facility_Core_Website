import React from 'react';
import { motion } from 'framer-motion';
import { FiUserCheck, FiSliders, FiMessageSquare } from 'react-icons/fi';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import "../styles/MobileFirst.css";

const appCards = [
  {
    icon: <FiUserCheck />,
    title: 'FC Admin App',
    desc: 'For supervisors to manage dispatches, track performance, and approve requests instantly.'
  },
  {
    icon: <FiSliders />,
    title: 'FC Employee App',
    desc: 'For field technicians to log work, scan QR codes, update checklist status, and receive alerts.'
  },
  {
    icon: <FiMessageSquare />,
    title: 'FC Occupant App',
    desc: 'For tenants to report issues, communicate with front desk, and track service history.'
  }
];

const MobileFirst = () => {
  return (
    <section className="mobile-first-section">
      <div className="container mx-auto px-6 lg:px-8 xl:px-10">
        <div className="mobile-first-grid">

          {/* Heading Block */}
          <div className="mobile-first-header">
            <span className="premium-tag">Mobile First</span>
            <h2 className="mobile-first-heading">Work On The Go with Native Mobile Apps</h2>
            <p className="mobile-first-desc">
              FacilityCore is built for modern distributed workforces. We provide specialized, native applications for admins, technicians, and building occupants to stay aligned in real time.
            </p>
          </div>

          {/* Left: Mobile Mockup */}
          <motion.div
            className="mobile-first-mockup"
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/FacilityCore-Mobile-App.svg"
              alt="FacilityCore Mobile Applications"
              className="mobile-mockup-img"
            />
          </motion.div>

          {/* Right: Three App Cards */}
          <div className="mobile-first-cards">
            {appCards.map((app, i) => (
              <motion.div
                key={i}
                className="app-card"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="app-card-icon">{app.icon}</div>
                <div className="app-card-text">
                  <h4 className="app-card-title">{app.title}</h4>
                  <p className="app-card-desc">{app.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Store Buttons */}
          <div className="mobile-first-buttons">
            <a href="#" className="store-btn google-play-btn" onClick={(e) => e.preventDefault()}>
              <FaGooglePlay className="store-icon" />
              <div className="store-btn-text">
                <span className="store-sub">GET IT ON</span>
                <span className="store-main">Google Play</span>
              </div>
            </a>
            <a href="#" className="store-btn apple-store-btn" onClick={(e) => e.preventDefault()}>
              <FaApple className="store-icon" />
              <div className="store-btn-text">
                <span className="store-sub">Download on the</span>
                <span className="store-main">App Store</span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MobileFirst;
