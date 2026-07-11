import React from 'react';
import { motion } from 'framer-motion';
import {
  FiFolder,
  FiTool,
  FiRefreshCw,
  FiTrendingUp,
  FiSmile,
  FiClock,
  FiShield,
  FiPercent
} from 'react-icons/fi';
import "../styles/WhyChooseFacilityCore.css";

const features = [
  {
    icon: <FiFolder />,
    title: 'Digitize Operations',
    desc: 'Eliminate manual paper logs and spreadsheets with a single, cloud-based source of truth.'
  },
  {
    icon: <FiTool />,
    title: 'Improve Assets',
    desc: 'Extend asset lifetime value with preventive maintenance checklists and tracking.'
  },
  {
    icon: <FiRefreshCw />,
    title: 'Automate Workflows',
    desc: 'Auto-assign tickets, trigger schedules, and keep maintenance operations synchronized.'
  },
  {
    icon: <FiTrendingUp />,
    title: 'Increase Productivity',
    desc: 'Empower technicians with step-by-step guidance on their mobile devices.'
  },
  {
    icon: <FiSmile />,
    title: 'Enhance Occupants',
    desc: 'Increase occupant satisfaction with easy request submission and real-time updates.'
  },
  {
    icon: <FiClock />,
    title: 'Improve SLA',
    desc: 'Track response and resolution times automatically to meet critical SLAs.'
  },
  {
    icon: <FiShield />,
    title: 'Compliance',
    desc: 'Stay audit-ready and comply with local regulations using automated verification logs.'
  },
  {
    icon: <FiPercent />,
    title: 'Reduce Costs',
    desc: 'Identify cost leaks, optimize vendor spend, and lower overhead expenses.'
  }
];

const WhyChooseFacilityCore = () => {
  return (
    <section className="why-choose-section">
      <div className="container mx-auto px-6 lg:px-8 xl:px-10">

        {/* Header Block */}
        <div className="section-header-centered">
          <span className="premium-tag">Why Choose Us</span>
          <h2 className="section-title">Drive Excellence in Facility Operations</h2>
          <p className="section-desc centered">
            FacilityCore brings together all aspects of asset management, workforce tracking, and tenant experience under one modern and unified system.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="why-choose-grid">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="why-choose-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="why-choose-icon-wrapper">{feature.icon}</div>
              <h3 className="why-choose-card-title">{feature.title}</h3>
              <p className="why-choose-card-desc">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseFacilityCore;
