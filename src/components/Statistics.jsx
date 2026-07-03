import React from 'react';
import { motion } from 'framer-motion';
import { FiPackage, FiGlobe, FiGrid } from 'react-icons/fi';
import '../../styles/Statistics.css';

// Fade‑up animation variants with stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stats = [
  {
    id: 'packages',
    icon: <FiPackage size={48} />, // Package shipments
    number: '1,200+',
    label: 'Packages Delivered',
    description: 'Trusted by global enterprises for fast, reliable delivery.',
  },
  {
    id: 'global',
    icon: <FiGlobe size={48} />, // Global reach
    number: '35+',
    label: 'Countries Served',
    description: 'Our platform powers facilities across dozens of nations.',
  },
  {
    id: 'integration',
    icon: <FiGrid size={48} />, // Integrations
    number: '200+',
    label: 'Integrations',
    description: 'Seamlessly connect with BMS, IoT, ERP and more.',
  },
];

const Statistics = () => (
  <section id="statistics" className="statistics-section py-24 bg-white">
    <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
      {/* Header */}
      <div className="text-center mb-12 header-section">
        <h2 className="statistics-heading">Our Impact</h2>
        <p className="statistics-paragraph">
          FacilityCore enables enterprises to manage facilities at scale with measurable results.
        </p>
      </div>
      {/* Stats Grid */}
      <motion.div
        className="stats-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {stats.map((item, idx) => (
          <motion.div
            key={item.id}
            className="stat-card"
            custom={idx}
            variants={itemVariants}
          >
            <div className="icon-circle">{item.icon}</div>
            <h3 className="stat-number">{item.number}</h3>
            <h4 className="stat-label">{item.label}</h4>
            <p className="stat-description">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Statistics;
