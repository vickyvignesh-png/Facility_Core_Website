import React from "react";
import { motion } from "framer-motion";
import {
  FiPackage,
  FiCalendar,
  FiAlertCircle,
  FiHeadphones,
  FiUsers,
  FiShield,
  FiLayers,
} from "react-icons/fi";
import "../../styles/Solutions.css";

/* ─── Animation variants ─────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ─── Data ───────────────────────────────────────── */
const solutions = [
  {
    title: "Asset Management",
    description:
      "Track equipment locations, operational health, depreciation schedules, and maintenance history in one central register.",
    icon: <FiPackage />,
  },
  {
    title: "Preventive Maintenance",
    description:
      "Automate schedule routines, calendar recurring inspections, and receive alerts to prevent unplanned downtime.",
    icon: <FiCalendar />,
  },
  {
    title: "Reactive Maintenance",
    description:
      "Respond instantly to unexpected breakages. Log, assign, and track reactive repairs through dispatch routes.",
    icon: <FiAlertCircle />,
  },
  {
    title: "Helpdesk Portal",
    description:
      "Provide tenants and occupants an easy portal to submit tickets, track live progress, and leave ratings.",
    icon: <FiHeadphones />,
  },
  {
    title: "Vendor Management",
    description:
      "Manage external contractors, verify compliance insurance documents, assign work, and log payments.",
    icon: <FiUsers />,
  },
  {
    title: "Compliance Logs",
    description:
      "Verify local code safety inspections, fire safety compliance, and maintain records to simplify audits.",
    icon: <FiShield />,
  },
];

/* ─── Component ──────────────────────────────────── */
const Solutions = () => (
  <section id="solutions" className="solutions-section">
    {/* Decorative blobs */}
    <div className="solutions-blob-left" />
    <div className="solutions-blob-right" />

    <div className="solutions-container">
      {/* Header */}
      <div className="solutions-header">
        <span className="solutions-label">
          <FiLayers />
          Platform Modules
        </span>
        <h2 className="solutions-heading">Complete Facility Suite</h2>
        <p className="solutions-paragraph">
          Eliminate operational silos. Our modular software suite provides
          everything you need to run high-performance facility structures.
        </p>
      </div>

      {/* Card Grid */}
      <motion.div
        className="solutions-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {solutions.map((item, idx) => (
          <motion.div
            key={idx}
            className="solution-card"
            variants={cardVariants}
          >
            <div className="icon-wrapper">{item.icon}</div>
            <h3 className="solution-title">{item.title}</h3>
            <p className="solution-description">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Solutions;
