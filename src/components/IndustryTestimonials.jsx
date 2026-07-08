import React from "react";
import { motion } from "framer-motion";
import {
  FiCpu,
  FiEye,
  FiTrendingDown,
  FiShield,
  FiZap,
  FiTrendingUp
} from "react-icons/fi";
import "../styles/IndustryTestimonials.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const IndustryTestimonials = () => {
  const steps = [
    {
      num: "01",
      icon: <FiCpu />,
      title: "Centralized Operations",
      desc: "Integrate all maintenance requests, schedules, and communication channels into a single unified control dashboard."
    },
    {
      num: "02",
      icon: <FiEye />,
      title: "Real-time Visibility",
      desc: "Monitor active team locations, asset health status, and operational SLA performance dynamically in real time."
    },
    {
      num: "03",
      icon: <FiTrendingDown />,
      title: "Reduced Operational Cost",
      desc: "Implement predictive maintenance workflows to save on emergency repairs and optimize facility utility bills."
    },
    {
      num: "04",
      icon: <FiShield />,
      title: "Compliance & Safety",
      desc: "Maintain digital audit logs, inspection protocols, and health check schedules to remain 100% compliance-ready."
    },
    {
      num: "05",
      icon: <FiZap />,
      title: "Higher Productivity",
      desc: "Automate task assignments based on technician skill-sets and proximity to resolve tickets faster."
    },
    {
      num: "06",
      icon: <FiTrendingUp />,
      title: "Business Growth",
      desc: "Leverage deep analytical insights to extend equipment lifespans and support scalable business expansions."
    }
  ];

  return (
    <section className="ind-testimonials-section">
      <div className="ind-testimonials-container">
        {/* Premium Section Header */}
        <div className="ind-section-header">
          <span className="ind-premium-tag">Key Benefits</span>
          <h2 className="ind-main-heading">Why Industries Choose FacilityCore</h2>
          <p className="ind-section-description">
            Explain overall business value.
          </p>
        </div>

        {/* Workflow/Timeline Area */}
        <div className="ind-timeline-steps">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="ind-timeline-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Header section with circle icon and connecting line */}
              <div className="ind-timeline-icon-row">
                <div className="ind-timeline-circle">{step.icon}</div>
                {idx < steps.length - 1 && (
                  <div className="ind-timeline-line">
                    <svg className="ind-timeline-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="ind-timeline-card-content">
                <span className="ind-timeline-num">{step.num}</span>
                <h4 className="ind-timeline-title">{step.title}</h4>
                <p className="ind-timeline-desc">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(IndustryTestimonials);
