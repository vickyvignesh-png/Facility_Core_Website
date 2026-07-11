import React from 'react';
import { motion } from 'framer-motion';
import { FiLayout, FiAward, FiCpu, FiUsers } from 'react-icons/fi';
import "../styles/OurApproach.css";

const approaches = [
  {
    step: '01',
    icon: <FiLayout />,
    title: 'Simplicity',
    desc: 'We design intuitive, user-friendly interfaces that require zero training, ensuring high adoption rates across teams.'
  },
  {
    step: '02',
    icon: <FiAward />,
    title: 'Operational Excellence',
    desc: 'We automate redundant tasks, structure processes, and focus on delivering reliable data outputs to make audit-readiness simple.'
  },
  {
    step: '03',
    icon: <FiCpu />,
    title: 'Innovation',
    desc: 'We integrate modern technologies like QR-code asset mapping, mobile offline-first syncing, and IoT triggers.'
  },
  {
    step: '04',
    icon: <FiUsers />,
    title: 'Customer Success',
    desc: 'We prioritize customer satisfaction, offering dedicated support, rapid iterations, and platform reliability updates.'
  }
];

const OurApproach = () => {
  return (
    <section className="our-approach-section">
      <div className="container mx-auto px-6 lg:px-8 xl:px-10">

        {/* Header Block */}
        <div className="section-header-centered">
          <span className="premium-tag">Our Approach</span>
          <h2 className="section-title">How We Do Things</h2>
          <p className="section-desc centered">
            Our operating philosophy is centered on building high-value, easy-to-use software that solves actual ground-level facility bottlenecks.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="approach-grid">
          {approaches.map((app, i) => (
            <motion.div
              key={i}
              className="approach-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="approach-card-header">
                <span className="approach-step">{app.step}</span>
                <div className="approach-icon-wrapper">{app.icon}</div>
              </div>
              <h3 className="approach-card-title">{app.title}</h3>
              <p className="approach-card-desc">{app.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurApproach;
