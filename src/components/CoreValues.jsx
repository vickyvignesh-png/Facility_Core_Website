import React from 'react';
import { motion } from 'framer-motion';
import {
  FiHeart,
  FiZap,
  FiAward,
  FiShield,
  FiUsers,
  FiLayout,
  FiGlobe,
  FiTrendingUp
} from 'react-icons/fi';
import "../styles/CoreValues.css";

const coreValues = [
  {
    icon: <FiHeart />,
    title: 'Customer First',
    desc: 'Customer growth and satisfaction remain our top priority in every feature we build.'
  },
  {
    icon: <FiZap />,
    title: 'Innovation',
    desc: 'We continuously innovate to simplify facility operations and predictive maintenance.'
  },
  {
    icon: <FiAward />,
    title: 'Excellence',
    desc: 'We strive for exceptional quality and reliability in every solution we deliver.'
  },
  {
    icon: <FiShield />,
    title: 'Integrity',
    desc: 'We build trust through absolute transparency, data security, and accountability.'
  },
  {
    icon: <FiUsers />,
    title: 'Collaboration',
    desc: 'Strong teamwork and shared goals drive better outcomes and platform growth.'
  },
  {
    icon: <FiLayout />,
    title: 'Simplicity',
    desc: 'We believe that the best enterprise solutions are straightforward, clean, and intuitive.'
  },
  {
    icon: <FiGlobe />,
    title: 'Sustainability',
    desc: 'We design tools that minimize paper waste, optimize energy, and support green goals.'
  },
  {
    icon: <FiTrendingUp />,
    title: 'Continuous Improvement',
    desc: 'We constantly evolve our skills and platform capabilities to deliver more value.'
  }
];

const CoreValues = () => {
  return (
    <section className="core-values-section">
      <div className="container mx-auto px-6 lg:px-8 xl:px-10">

        {/* Header Block */}
        <div className="section-header-centered">
          <span className="premium-tag">Our Values</span>
          <h2 className="section-title">Core Values That Drive Us</h2>
          <p className="section-desc centered">
            These values shape our culture, guide our decisions, and define how we support facility teams around the globe.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="core-values-grid">
          {coreValues.map((val, i) => (
            <motion.div
              key={i}
              className="value-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="value-card-icon-wrapper">{val.icon}</div>
              <h3 className="value-card-title">{val.title}</h3>
              <p className="value-card-desc">{val.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoreValues;
