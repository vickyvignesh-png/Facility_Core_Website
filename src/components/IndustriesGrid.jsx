import React from "react";
import { motion } from "framer-motion";
import { FiGrid } from "react-icons/fi";
import { industriesGrid } from "../data/industriesData";
import "../styles/IndustriesGrid.css";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const IndustriesGrid = () => {
  return (
    <section className="ind-grid-section" id="explore-grid">
      <div className="ind-grid-container">
        <div className="ind-section-header">
          <span className="ind-section-badge">
            <FiGrid /> COMPREHENSIVE SUITE
          </span>
          <h2 className="section-title">Built For Every Industry</h2>
          <p className="section-subtitle">
            Purpose-built facility solutions for diverse operational environments.
          </p>
        </div>

        <div className="ind-grid">
          {industriesGrid.map((ind, i) => (
            <motion.div
              key={i}
              className="ind-grid-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="ind-grid-circle">
                {ind.icon}
              </div>
              <h3 className="ind-grid-name">{ind.name}</h3>
              <p className="ind-grid-desc">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(IndustriesGrid);
