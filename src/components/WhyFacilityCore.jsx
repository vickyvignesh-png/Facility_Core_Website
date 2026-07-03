import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiAward } from 'react-icons/fi';
import '../styles/WhyFacilityCore.css';

const WhyFacilityCore = () => {
  const points = [
    { title: 'Asset Visibility', desc: 'Real-time dashboard tracking of asset location, lifecycle logs, and current operational states.' },
    { title: 'Maintenance Automation', desc: 'Usage-based and calendar triggers to schedule preventive maintenance automatically.' },
    { title: 'Work Order Management', desc: 'Dispatch work orders to field technicians with digital checklists, routing, and logs.' },
    { title: 'Compliance Tracking', desc: 'Audit-ready safety checks, local code certifications, and digital signature records.' },
    { title: 'Vendor Management', desc: 'Collaborate with external contractors, verify insurance status, and check SLA metrics.' }
  ];

  return (
    <section id="about-us" className="whyfc-section bg-white overflow-hidden py-10">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

          {/* Left Side: Asymmetrical Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 whyfc-gallery"
          >
            {/* Left Column (Large Image) */}
            <div className="whyfc-gallery-left">
              <img
                src="/aboutimg1.png"
                alt="Facility Management Specialist"
                className="whyfc-collage-img"
              />
            </div>
            {/* Right Column (Stacked Small Images) */}
            <div className="whyfc-gallery-right">
              <div className="whyfc-gallery-item-small">
                <img
                  src="/aboutimg2.png"
                  alt="Facility Operations Automation"
                  className="whyfc-collage-img"
                />
              </div>
              <div className="whyfc-gallery-item-tall">
                <img
                  src="/aboutimg3.png"
                  alt="Workforce Coordination"
                  className="whyfc-collage-img"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side: Key Highlights Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 text-left flex flex-col justify-center whyfc-content-col"
          >
            <span className="whyfc-tag"><FiAward className="whyfc-tag-icon" />Why FacilityCore</span>
            <h2 className="whyfc-heading">Transforming Operations, Maximizing Lifecycles</h2>

            {/* Icon List Checklist */}
            <div className="whyfc-list">
              {points.map((point, index) => (
                <div key={index} className="whyfc-item">
                  <div className="whyfc-item-icon">
                    <FiCheckCircle className="whyfc-item-icon" />
                  </div>
                  <div className="whyfc-item-content">
                    <h3 className="whyfc-item-title">{point.title}</h3>
                    <p className="whyfc-item-desc">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyFacilityCore;
