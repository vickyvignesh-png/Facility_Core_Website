import React from 'react';
import { motion } from 'framer-motion';
import { FiLayers } from 'react-icons/fi';
import "../styles/AboutIntro.css";

const AboutIntro = () => {
  return (
    <section className="about-intro-section">
      <div className="container">
        <div className="about-intro-grid">
          
          {/* Header Column: Badge and Heading */}
          <div className="about-intro-header-col">
            <span className="about-intro-badge">
              <FiLayers /> ABOUT FACILITYCORE
            </span>
            <h2 className="about-intro-heading">
              About FacilityCore
            </h2>
          </div>

          {/* Left Column: Image */}
          <motion.div 
            className="about-intro-img-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="/about_facility_image.png" 
              alt="Facility Management" 
              className="about-intro-img"
            />
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div 
            className="about-intro-text-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="about-intro-subtitle">
              Transforming Facility Management Through Experience, Innovation, and Technology
            </h3>
            
            <div className="about-intro-text">
              <p>
                FacilityCore is an intelligent Facilities, Asset, and Workplace Management platform designed to help organizations simplify operations, maximize asset performance, improve service delivery, and create exceptional workplace experiences.
              </p>
              <p>
                Developed with extensive real-world experience in facilities management across India and international markets, FacilityCore combines industry best practices with modern technology to address the evolving needs of facility managers, property owners, corporate organizations, service providers, and smart city operators.
              </p>
              <p>
                Our platform is built around one simple belief:
              </p>
              
              <div className="about-intro-callout">
                Technology should simplify facility operations—not complicate them.
              </div>
              
              <p>
                Whether managing a single commercial building or a portfolio of thousands of assets across multiple locations, FacilityCore provides complete operational visibility through one integrated cloud platform.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
