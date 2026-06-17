import React from 'react';
import { motion } from 'framer-motion';
import {
  FiSmartphone,
  FiBarChart2,
  FiTarget,
  FiCheckCircle,
  FiClock,
  FiZap,
  FiLayers,
} from 'react-icons/fi';
import '../../styles/Features.css';

// Fade‑up animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const features = [
  {
    id: 'mobile',
    icon: <FiSmartphone size={24} />, // Mobile Applications
    title: 'Mobile Applications',
    description: 'Role‑based apps for managers, technicians and occupants.',
  },
  {
    id: 'analytics',
    icon: <FiBarChart2 size={24} />, // Dashboard Analytics
    title: 'Dashboard Analytics',
    description: 'Real‑time KPIs, operational visibility and insights.',
  },
  {
    id: 'asset',
    icon: <FiTarget size={24} />, // Asset Management
    title: 'Asset Management',
    description: 'Track assets from acquisition to replacement.',
  },
  {
    id: 'workorder',
    icon: <FiCheckCircle size={24} />, // Work Order Management
    title: 'Work Order Management',
    description: 'Create, prioritize and close work orders in seconds.',
  },
  {
    id: 'maintenance',
    icon: <FiClock size={24} />, // Preventive Maintenance
    title: 'Preventive Maintenance',
    description: 'Schedule recurring tasks to keep equipment running.',
  },
  {
    id: 'automation',
    icon: <FiZap size={24} />, // Workflow Automation
    title: 'Workflow Automation',
    description: 'No‑code rules that route work to the right team.',
  },
  {
    id: 'integrations',
    icon: <FiLayers size={24} />, // Integrations & APIs
    title: 'Integrations & APIs',
    description: 'Connect BMS, IoT, ERP and other systems seamlessly.',
  },
];

const Features = () => (
  <section id="features" className="py-24 bg-white overflow-hidden">
    <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-sm font-bold uppercase tracking-wider text-[#69BC45]">
          Platform Features
        </span>
        <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[#111827]">
          Everything You Need To Manage Facilities Efficiently
        </h2>
        <p className="mt-4 text-base text-[#6B7280]">
          FacilityCore combines asset management, maintenance automation, workforce mobility, analytics, and compliance tools into one intelligent platform.
        </p>
      </div>
      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        {features.map((item, idx) => (
          <motion.div
            key={item.id}
            className="feature-card"
            custom={idx}
            variants={fadeUp}
          >
            <div className="icon-box">{item.icon}</div>
            <h3 className="feature-title">{item.title}</h3>
            <p className="feature-desc">{item.description}</p>
            <a href="#" className="learn-more">
              Learn More <span className="arrow">→</span>
            </a>
          </motion.div>
        ))}
      </motion.div>
      {/* Bottom CTA */}
      <div className="cta-section">
        <h3 className="cta-title">Ready To See FacilityCore In Action?</h3>
        <p className="cta-text">
          Discover how FacilityCore helps organizations improve productivity, optimize maintenance operations, and gain complete operational visibility.
        </p>
        <a href="#" className="cta-button">
          Request Demo
        </a>
      </div>
    </div>
  </section>
);

export default Features;
