import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/Hero.css';
import { FiGrid } from "react-icons/fi";

const Hero = () => {
  return (<section className="hero-bg-section">
    {/* Background */}
    <div className="hero-bg-image"></div>

    {/* Overlay */}
    <div className="hero-overlay"></div>

    {/* Container */}
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
      <div className="hero-wrapper">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="hero-content"
        >

          <div className="hero-badge">
            <FiGrid />
            Next-Gen Enterprise CMMS & Facility Platform
          </div>

          <h1 className="hero-title">
            Transform Facility Operations With One
            <span className="hero-highlight">
              Intelligent Platform
            </span>
          </h1>

          <p className="hero-description">
            FacilityCore helps organizations streamline maintenance operations,
            automate workflows, manage assets, improve compliance, and gain
            complete operational visibility.
          </p>

          <div className="hero-buttons">

            <motion.a
              href="#demo"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="hero-btn-primary"
            >
              Book Demo
            </motion.a>

            <motion.a
              href="#solutions"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="hero-btn-secondary"
            >
              Explore Solutions
            </motion.a>

          </div>

        </motion.div>

      </div>
    </div>

  </section>

  );
};

export default Hero;
