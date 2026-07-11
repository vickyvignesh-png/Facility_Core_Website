import React from 'react';
import { motion } from 'framer-motion';
import {
  FiBriefcase,
  FiSettings,
  FiHome,
  FiGlobe,
  FiUsers,
  FiTool,
  FiHeart,
  FiBookOpen,
  FiCoffee,
  FiShield,
  FiCpu
} from 'react-icons/fi';
import "../styles/IndustryExperience.css";

const industries = [
  { name: "Integrated Facility Management", icon: <FiSettings /> },
  { name: "Commercial Real Estate", icon: <FiHome /> },
  { name: "Smart Cities", icon: <FiGlobe /> },
  { name: "Residential Communities", icon: <FiUsers /> },
  { name: "Corporate Campuses", icon: <FiBriefcase /> },
  { name: "Manufacturing Facilities", icon: <FiTool /> },
  { name: "Healthcare Institutions", icon: <FiHeart /> },
  { name: "Educational Campuses", icon: <FiBookOpen /> },
  { name: "Hospitality Operations", icon: <FiCoffee /> },
  { name: "Government Facilities", icon: <FiShield /> },
  { name: "Industrial Infrastructure", icon: <FiCpu /> }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const IndustryExperience = () => {
  return (
    <section className="industry-experience-section">
      <div className="container">
        
        {/* Header Block */}
        <motion.div 
          className="industry-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="industry-badge">
            <FiBriefcase /> INDUSTRY EXPERIENCE
          </span>
          <h2 className="industry-heading">
            Built on Real Industry Experience
          </h2>
          <p className="industry-intro-p">
            Unlike traditional software developed purely from a technical perspective, FacilityCore is designed around practical operational challenges experienced by facility professionals.
          </p>
          <h3 className="industry-blue-title">
            Our platform incorporates proven workflows and best practices gained from years of managing:
          </h3>
        </motion.div>

        {/* Industry Grid */}
        <motion.div 
          className="industry-cards-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              className="industry-card"
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              <div className="industry-icon-circle">
                {ind.icon}
              </div>
              <h4 className="industry-card-title">{ind.name}</h4>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Concluding Description */}
        <motion.div
          className="industry-footer"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="industry-bottom-desc">
            Every module within FacilityCore reflects practical day-to-day operational requirements, ensuring that the software works the way facility teams actually work.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default IndustryExperience;
