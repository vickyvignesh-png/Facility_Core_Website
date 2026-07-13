import React from 'react';
import { motion } from 'framer-motion';
import {
  FiShield,
  FiUsers,
  FiCpu,
  FiAward,
  FiLink,
  FiFeather,
  FiGlobe,
  FiTrendingUp,
} from 'react-icons/fi';
import '../styles/CoreValues.css';

const coreValues = [
  {
    icon: <FiUsers />,
    title: 'Customer First',
    desc: 'We listen, understand, and deliver solutions that create lasting value for our customers.',
  },
  {
    icon: <FiCpu />,
    title: 'Innovation',
    desc: 'We embrace new ideas and technologies that transform the future of facility management.',
  },
  {
    icon: <FiAward />,
    title: 'Excellence',
    desc: 'We strive for quality, reliability, and continuous improvement in everything we do.',
  },
  {
    icon: <FiShield />,
    title: 'Integrity',
    desc: 'We build trust through transparency, accountability, and ethical business practices.',
  },
  {
    icon: <FiLink />,
    title: 'Collaboration',
    desc: 'We believe successful facility management is built on teamwork, communication, and strong partnerships.',
  },
  {
    icon: <FiFeather />,
    title: 'Simplicity',
    desc: 'We design technology that is intuitive, user-friendly, and focused on productivity.',
  },
  {
    icon: <FiGlobe />,
    title: 'Sustainability',
    desc: 'We help organizations create efficient, responsible, and future-ready facilities.',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Continuous Improvement',
    desc: 'We continuously enhance our platform to meet the evolving needs of modern facility management.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const CoreValues = () => {
  return (
    <section className="cv-section">
      <div className="container mx-auto px-4 md:px-8">

        {/* ── Header ───────────────────────────────────────── */}
        <motion.div
          className="cv-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.span className="cv-badge" variants={headerVariants}>
            <FiShield className="cv-badge-icon" />
            CORE VALUES
          </motion.span>
          <motion.h2 className="cv-heading" variants={headerVariants}>
            Our Core Values
          </motion.h2>
          <motion.p className="cv-intro" variants={headerVariants}>
            These values define our culture, guide every decision we make, and inspire our team to deliver exceptional facility management solutions.
          </motion.p>
        </motion.div>

        {/* ── Cards Grid ───────────────────────────────────── */}
        <motion.div
          className="cv-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {coreValues.map((val, i) => (
            <motion.div
              key={i}
              className="cv-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div
                className="cv-icon-circle"
                variants={{ hover: { scale: 1.08 } }}
                transition={{ duration: 0.3 }}
              >
                {val.icon}
              </motion.div>
              <h3 className="cv-card-title">{val.title}</h3>
              <p className="cv-card-desc">{val.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CoreValues;
