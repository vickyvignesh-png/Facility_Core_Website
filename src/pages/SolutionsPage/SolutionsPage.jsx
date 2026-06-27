import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "../../styles/SolutionsPage.css";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideRight = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const SolutionsPage = () => {
  return (
    <div className="solutions-page">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <motion.div
          className="hero-content"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          <nav className="breadcrumb">
            <Link to="/">Home</Link> / <span>Solutions</span>
          </nav>
          <span className="badge">Enterprise Facility Solutions</span>
          <h1 className="hero-title">Smart Facility Solutions For Modern Enterprises</h1>
          <p className="hero-desc">
            Streamline facility operations, automate maintenance workflows, improve compliance, and maximize operational efficiency through a unified FacilityCore platform.
          </p>
          <div className="hero-cta">
            <Link to="/solutions" className="btn btn-primary">
              Explore Modules
            </Link>
            <Link to="/demo" className="btn btn-secondary">
              Request Demo
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Platform Modules Section */}
      <section className="platform-modules">
        <motion.h2
          className="section-title"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
        >
          Platform Modules
        </motion.h2>
        <div className="modules-grid">
          {[
            { title: "Asset Management", icon: "🛠" },
            { title: "Preventive Maintenance", icon: "🔧" },
            { title: "Reactive Maintenance", icon: "⚡" },
            { title: "Helpdesk Portal", icon: "💬" },
            { title: "Vendor Management", icon: "🏢" },
            { title: "Compliance Logs", icon: "📋" },
          ].map((item, idx) => (
            <div key={idx} className="module-card">
              <div className="module-icon">{item.icon}</div>
              <h3 className="module-title">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Solution Modules */}
      <section className="detailed-modules">
        {[
          {
            title: "Asset Management",
            description: "Comprehensive tracking and lifecycle management for all facility assets.",
            bullets: [
              "Real‑time asset location",
              "Predictive maintenance alerts",
              "Custom lifecycle stages",
              "Integrated cost tracking",
              "Barcode & RFID support",
              "Analytics dashboard",
            ],
            img: "/assets/asset-dashboard.png",
          },
          {
            title: "Preventive Maintenance",
            description: "Schedule and automate routine maintenance to reduce downtime.",
            bullets: [
              "Dynamic work order generation",
              "AI‑driven frequency optimization",
              "Mobile technician app",
              "Resource allocation tools",
              "Compliance reporting",
              "Performance KPIs",
            ],
            img: "/assets/preventive-dashboard.png",
          },
          {
            title: "Vendor Management",
            description: "Centralize vendor contracts, performance, and communication.",
            bullets: [
              "Contract repository",
              "SLAs & KPI tracking",
              "Automated vendor rating",
              "Integrated purchase orders",
              "Secure document exchange",
              "Vendor performance analytics",
            ],
            img: "/assets/vendor-dashboard.png",
          },
        ].map((module, index) => (
          <motion.div
            key={index}
            className={`detail-card ${index % 2 === 0 ? "layout-left" : "layout-right"}`}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
          >
            <div className="detail-left">
              <h3 className="detail-title">{module.title}</h3>
              <p className="detail-desc">{module.description}</p>
              <ul className="detail-bullets">
                {module.bullets.map((b, i) => (
                  <li key={i}>
                    <span className="check-icon">✔</span> {b}
                  </li>
                ))}
              </ul>
              <Link to="/solutions" className="btn btn-primary detail-cta">
                Explore Solution
              </Link>
            </div>
            <div className="detail-right">
              <img src={module.img} alt={`${module.title} dashboard`} className="detail-img" />
            </div>
          </motion.div>
        ))}
      </section>

      {/* Workflow Section */}
      <section className="workflow-section">
        <motion.h2
          className="section-title"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
        >
          End‑to‑End Workflow Overview
        </motion.h2>
        <p className="section-subtitle">
          Streamline every facility process from request creation to closure.
        </p>
        <div className="workflow-steps">
          {[
            { num: "01", title: "Input / Request", desc: "User submits a service request" },
            { num: "02", title: "Initial Assessment", desc: "Team evaluates request viability" },
            { num: "03", title: "Planning & Setup", desc: "Allocate resources and schedule" },
            { num: "04", title: "Execution", desc: "Field technicians perform work" },
            { num: "05", title: "Review & Control", desc: "Quality check and approval" },
            { num: "06", title: "Final Output", desc: "Close request and report" },
          ].map((step, i) => (
            <div key={i} className="workflow-step">
              <div className="step-icon">{step.num}</div>
              <h4 className="step-title">{step.title}</h4>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-bg" />
        <div className="benefits-overlay" />
        <h2 className="benefits-title">Driving Measurable Facility Excellence</h2>
        <div className="benefits-counters">
          {[
            { percent: "30%", label: "Reduction in Downtime" },
            { percent: "40%", label: "Faster Response Times" },
            { percent: "25%", label: "Lower Maintenance Costs" },
            { percent: "95%", label: "SLA Compliance" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="counter-card"
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
            >
              <div className="counter-icon">📈</div>
              <div className="counter-value">{item.percent}</div>
              <div className="counter-label">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <motion.div
          className="cta-content"
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="cta-title">Ready to Transform Your Facility Operations?</h2>
          <p className="cta-desc">
            Book a personalized demo and discover how FacilityCore can optimize your operations.
          </p>
          <div className="cta-buttons">
            <Link to="/demo" className="btn btn-primary">
              Request Demo
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Sales
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionsPage;
