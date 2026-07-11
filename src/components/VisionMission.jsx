import React from 'react';
import { motion } from 'framer-motion';
import { FiEye, FiTarget } from 'react-icons/fi';
import "../styles/VisionMission.css";

const VisionMission = () => {
  return (
    <section className="vision-mission-section">
      <div className="container mx-auto px-6 lg:px-8 xl:px-10">

        {/* Header Block */}
        <div className="section-header-centered">
          <span className="premium-tag">Purpose</span>
          <h2 className="section-title">Our Vision & Mission</h2>
          <p className="section-desc centered">
            We are driven by a singular focus: resolving complex facility operational challenges through clear, accessible software.
          </p>
        </div>

        {/* Two Premium Cards Grid */}
        <div className="vision-mission-grid">

          {/* Vision Card */}
          <motion.div
            className="vision-card-container"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-top-accent vision-accent" />
            <div className="vision-mission-card-content">
              <div className="vm-icon-circle vision-icon">{<FiEye />}</div>
              <h3 className="vm-card-title">Our Vision</h3>
              <p className="vm-card-desc">
                To build the world's most trusted facility management ecosystem, driving zero-downtime operations, sustainable resource usage, and frictionless workplace experiences globally.
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="mission-card-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-top-accent mission-accent" />
            <div className="vision-mission-card-content">
              <div className="vm-icon-circle mission-icon">{<FiTarget />}</div>
              <h3 className="vm-card-title">Our Mission</h3>
              <p className="vm-card-desc">
                To empower facility teams with mobile-first tools that eliminate manual errors, extend asset longevity, automate checklists, and improve compliance reporting.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default VisionMission;
