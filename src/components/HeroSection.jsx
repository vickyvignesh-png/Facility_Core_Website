import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import "../styles/HeroSection.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <motion.div
        className="hero-content"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
      >
        <nav className="breadcrumb">
          <Link to="/">Home</Link> / <span>Solutions</span>
        </nav>
        <span className="badge">
          <FiHome /> FACILITYCORE SOLUTIONS
        </span>
        <h1 className="hero-title">Smart Solutions For Every Facility</h1>
        <p className="hero-desc">
          Stay audit-ready with automated compliance tracking.
        </p>
      </motion.div>
    </section>
  );
};

export default React.memo(HeroSection);
