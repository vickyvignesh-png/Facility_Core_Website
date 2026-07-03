import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiHome, FiPackage, FiTool,
  FiZap, FiMessageSquare,
  FiUsers, FiClipboard, FiGrid, FiGitBranch, FiEdit3,
  FiSettings,
  FiSend, FiX, FiArrowUpRight,
  FiDatabase, FiCalendar, FiTrendingUp, FiShield, FiDollarSign,
  FiCheckCircle, FiLayers, FiBarChart2, FiAward, FiActivity,
  FiCheck, FiArrowRightCircle
} from "react-icons/fi";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/SolutionsPage.css";

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
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [selectedModule, setSelectedModule] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedModule(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (selectedModule) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedModule]);

  const modules = [
    {
      title: "Asset & Maintenance",
      description: "Manage assets across their lifecycle.",
      modalDescription: "FacilityCore's Asset & Maintenance module helps you manage your assets throughout their entire life cycle—from acquisition to disposal. Plan preventive maintenance, handle breakdowns quickly, track costs, and extend asset life with data-driven decisions.",
      icon: <FiPackage />,
      img: "/sectionpagedashboard.png",
      link: "/solutions/asset-management",
      tagline: "Keep every asset reliable, safe and performing at its best.",
      tags: [
        "Lifecycle Management",
        "Preventive Maintenance",
        "Reactive Maintenance",
        "Work Orders",
        "SLA & Compliance",
        "Analytics & Reports"
      ],
      whatICanDoDetails: [
        { title: "Centralize All Assets", desc: "Maintain a single, accurate repository of all your assets with details, documents, warranty and locations." },
        { title: "Plan Preventive Maintenance", desc: "Create maintenance schedules based on time, usage or meter reading to prevent breakdowns and reduce downtime." },
        { title: "Manage Work Orders", desc: "Raise, assign and track work orders from one place. Monitor status, priority, SLA and resolution." },
        { title: "Track Asset Performance", desc: "Monitor asset health, service history, costs and performance metrics to make better decisions." },
        { title: "Ensure Compliance", desc: "Stay audit-ready with inspection checklists, compliance schedules and digital certifications." },
        { title: "Control Maintenance Costs", desc: "Analyze costs, vendors and resources to optimize budgets and improve operational efficiency." }
      ],
      whatICanDo: [],
      keyFeatures: [
        "Asset Register & Classification – Maintain all asset details, hierarchy, location, documents and lifecycle.",
        "Preventive Maintenance (PPM) – Create PPM plans, checklists and auto-generate work orders.",
        "Reactive Maintenance – Raise service requests and convert them into work orders instantly.",
        "Work Order Management – Assign, track and close work orders with time, cost and resource details.",
        "SLA Management – Define SLA rules, track breaches and take corrective actions.",
        "Asset Condition Monitoring – Track condition, readings, warranty, AMC and spare parts.",
        "Cost Tracking – Monitor maintenance cost, parts cost, labor cost and overall asset cost.",
        "Reports & Analytics – Get real-time insights on assets, breakdowns, MTTR, costs and more."

      ],
      benefits: [
        "Reduced breakdowns and unplanned downtime",
        "Extended asset life and better performance",
        "Lower maintenance and repair costs",
        "Improved compliance and safety",
        "Data-driven decisions with real-time insights"
      ]
    },
    {
      title: "Visitor Management",
      description: "Automate schedules and routine maintenance.",
      modalDescription: "FacilityCore's Visitor Management system helps you manage pre-registrations, approvals, digital check-ins, visitor passes, meetings and logs—all in one place. Ensure better security, improve compliance and create a modern visitor experience.",
      icon: <FiTool />,
      img: "/pmworking.png",
      link: "/solutions/preventive-maintenance",
      tagline: "Secure every entry. Delight every visitor.",
      whatICanDo: [
        "Schedule calendar-based recurring maintenance automatically",
        "Assign tasks to qualified technicians dynamically",
        "Log hours and verify tasks using checklist verification",
        "Track compliance with safety regulations and vendor SLAs"
      ],
      keyFeatures: [
        "Intelligent Calendar Scheduling UI",
        "Dynamic Run-Hours & Threshold Triggering",
        "SLA Tracking and Auto-Escalation alerts",
        "Mobile-Friendly Checksheets for technicians"
      ],
      benefits: [
        "Prevent costly downtime with timely checkups",
        "Extend average equipment lifespan significantly",
        "Reduce emergency reactive repairs by over 40%"
      ]
    },
    {
      title: "Vendor Management",
      description: "Centralize contracts and vendor performance.",
      icon: <FiUsers />,
      img: "/vendormangemnt.png",
      link: "/solutions/vendor-management",
      tagline: "Collaborate seamlessly with third-party service providers",
      whatICanDo: [
        "Centralize contract repositories and renewal dates",
        "Log and track vendor service hours and compliance levels",
        "Enable safe communication and invoice routing",
        "Rate performance based on completed SLA metrics"
      ],
      keyFeatures: [
        "Centralized Vendor Registry & Profile logs",
        "Automated Renewal and Compliance alerts",
        "Secure External Vendor Dispatch portal",
        "KPI and Performance Rating Scorecards"
      ],
      benefits: [
        "Mitigate liability and safety violations",
        "Boost quality of work via continuous evaluation",
        "Reduce administration and vendor overhead costs"
      ]
    },
    {
      title: "Reactive Maintenance",
      description: "Respond quickly to breakdowns and service requests.",
      icon: <FiZap />,
      img: "/workflowautomation.png",
      link: "/solutions/reactive-maintenance",
      tagline: "Resolve emergencies and unexpected failures instantly",
      whatICanDo: [
        "Log maintenance requests and breakdowns instantly",
        "Route tickets to the nearest available technician automatically",
        "Send real-time progress updates to requesters",
        "Diagnose issues remotely using photos and comments"
      ],
      keyFeatures: [
        "Rapid Ticketing Request & Dispatch Form",
        "SMS, Email, and Push Notification warnings",
        "Real-Time Technician Location & Map updates",
        "Direct Photo, Video, and Document uploads"
      ],
      benefits: [
        "Slash overall average response times in half",
        "Restore core services immediately after failures",
        "Increase tenant and stakeholder communication quality"
      ]
    },
    {
      title: "Helpdesk Portal",
      description: "Centralized support requests and issue tracking.",
      icon: <FiMessageSquare />,
      img: "/sectionpagedashboard.png",
      link: "/solutions/helpdesk-portal",
      tagline: "Empower your team with a simple, branded service portal",
      whatICanDo: [
        "Provide users with a portal to submit issues",
        "Log ticket progress and reference knowledge articles",
        "Send automatic status emails as tickets update",
        "Gather customer feedback with custom ratings"
      ],
      keyFeatures: [
        "Brandable Tenant & Client Web Portal interface",
        "Automated Priority Routing & Ticket Assignment",
        "Built-in FAQs & Knowledge Base library system",
        "Post-Resolution Satisfaction Surveys"
      ],
      benefits: [
        "Improve tenant and user satisfaction scores",
        "Eliminate cluttered emails and messy calls",
        "Understand response performance with exact metrics"
      ]
    },
    {
      title: "Compliance Logs",
      description: "Maintain audit-ready compliance records and reports.",
      icon: <FiClipboard />,
      img: "/qrtracking.png",
      link: "/solutions/compliance-logs",
      tagline: "Guarantee safety compliance and pass audits effortlessly",
      whatICanDo: [
        "Schedule and enforce mandatory safety checks",
        "Digitally store licenses, permits, and inspection certs",
        "Track compliance progress with audit dashboards",
        "Log security and safety violations instantly"
      ],
      keyFeatures: [
        "Digital Checksheets with digital signatures",
        "License & Certificate expiry trackers",
        "Exportable PDF/Excel Reports for audit checks",
        "Encrypted Immutable Safety and Log history"
      ],
      benefits: [
        "Achieve complete peace of mind during inspections",
        "Ensure compliance with local code and standards",
        "Eliminate paper records and audit prep stress"
      ],
    },
  ];

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
          <span className="badge"><FiHome /> FACILITYCORE SOLUTIONS</span>
          <h1 className="hero-title">Smart Solutions For Every Facility</h1>
          <p className="hero-desc">
            Stay audit-ready with automated compliance tracking.
          </p>
        </motion.div>
      </section>

      {/* Platform Modules Section */}
      <section className="platform-modules">
        <span className="section-badge">
          <FiGrid /> PLATFORM MODULES
        </span>

        <motion.h2
          className="section-title"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
        >
          Complete Facility Suite
        </motion.h2>
        <p className="section-description">
          Eliminate operational silos with integrated facility management modules.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[
            {
              title: "Asset Management",
              icon: <FiPackage />,
              desc: "Track and manage assets across their complete lifecycle."
            },
            {
              title: "Preventive Maintenance",
              icon: <FiTool />,
              desc: "Automate maintenance schedules and inspections."
            },
            {
              title: "Reactive Maintenance",
              icon: <FiZap />,
              desc: "Respond quickly to breakdowns and service requests."
            },
            {
              title: "Helpdesk Portal",
              icon: <FiMessageSquare />,
              desc: "Centralized support requests and issue tracking."
            },
            {
              title: "Vendor Management",
              icon: <FiUsers />,
              desc: "Manage vendors, contracts, and service providers."
            },
            {
              title: "Compliance Logs",
              icon: <FiClipboard />,
              desc: "Maintain audit-ready compliance records and reports."
            }

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
        <div className="detailed-modules-header">
          <h2 className="detailed-modules-heading">Detailed Solution Modules</h2>
        </div>

        <div className="solutions-split-layout">
          {/* LEFT SIDE */}
          <div className="solutions-layout-left">
            <img
              src={modules[hoveredIndex]?.img || modules[0]?.img}
              alt={modules[hoveredIndex]?.title || "Solution Image"}
              className="solutions-large-img"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="solutions-layout-right">
            {modules.map((module, index) => (
              <Link
                key={index}
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedModule(module);
                }}
                className={`feature-card ${hoveredIndex === index ? "active" : ""}`}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <div className="card-left">
                  <div className="card-icon-container">
                    {module.icon}
                  </div>
                  <div className="card-info">
                    <h3 className="card-heading">{module.title}</h3>
                    <p className="card-description">{module.description}</p>
                  </div>
                </div>
                <div className="card-arrow-container">
                  <div className="arrow-btn">
                    <FiArrowUpRight />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for selected module */}
      {selectedModule && (
        <div className="modal-overlay" onClick={() => setSelectedModule(null)}>
          <motion.div
            className="modal-content"
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setSelectedModule(null)}>
              <FiX size={24} />
            </button>
            <div className="modal-row">
              <div className="modal-row-left">
                <img src={selectedModule.img} alt={selectedModule.title} className="modal-image" />
              </div>
              <div className="modal-row-right">
                <h2 className="modal-title">{selectedModule.title}</h2>
                <p className="modal-tagline">{selectedModule.tagline}</p>
                <p className="modal-description">{selectedModule.modalDescription}</p>
                <div className="modal-tags">
                  {selectedModule.tags?.map((tag, i) => (
                    <span key={i} className="modal-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-card modal-whatcando">
              <h3 className="modal-section-title">What You Can Do</h3>
              <div className="whatcando-grid">
                {(() => {
                  const icons = [<FiPackage />, <FiTool />, <FiSettings />, <FiClipboard />, <FiShield />, <FiBarChart2 />];
                  return selectedModule.whatICanDoDetails?.map((item, i) => (
                    <div key={i} className="whatcando-item">
                      <div className="whatcando-icon">{icons[i % icons.length]}</div>
                      <div className="whatcando-content">
                        <h4 className="whatcando-title">{item.title}</h4>
                        <p className="whatcando-desc">{item.desc}</p>
                      </div>
                    </div>
                  ));
                })()}
              </div>
            </div>

            <div className="modal-features-grid">
              <div className="modal-card">
                <h3 className="modal-section-title">Key Features</h3>
                <ul className="modal-keyfeatures-list">
                  {selectedModule.keyFeatures?.map((item, i) => {
                    const parts = item.split(' – ');
                    const title = parts[0];
                    const desc = parts.slice(1).join(' – ');
                    return (
                      <li key={i} className="modal-keyfeatures-item">
                        <FiCheckCircle size={22} className="modal-keyfeatures-icon" />
                        <div className="modal-keyfeatures-text">
                          <span className="modal-keyfeatures-title">{title}</span>{desc && (<span className="modal-keyfeatures-desc"> – {desc}</span>)}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="modal-card">
                <h3 className="modal-section-title">Benefits</h3>
                <ul className="modal-benefits-list">
                  {selectedModule.benefits?.map((item, i) => {
                    const parts = item.split(' – ');
                    const title = parts[0];
                    const desc = parts.slice(1).join(' – ');
                    return (
                      <li key={i} className="modal-benefits-item">
                        <FiCheckCircle size={22} className="modal-benefits-icon" />
                        <div className="modal-benefits-text">
                          <span className="modal-benefits-title">{title}</span>{desc && (<span className="modal-benefits-desc"> – {desc}</span>)}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Workflow Section */}
      <section className="workflow-section">

        <div className="workflow-header">

          <span className="section-badge">
            <FiGitBranch />
            WORKFLOW PROCESS
          </span>

          <motion.h2
            className="section-title"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
          >
            End-to-End Workflow Overview
          </motion.h2>

          <p className="section-subtitle">
            Streamline every facility process from request creation to closure.
          </p>

        </div>

        <div className="workflow-steps">

          {[
            {
              icon: <FiEdit3 />,
              title: "Input / Request",
              desc: "The process begins with a request, data, or trigger."
            },
            {
              icon: <FiSettings />,
              title: "Initial Assessment",
              desc: "Review the request to confirm scope and feasibility."
            },
            {
              icon: <FiUsers />,
              title: "Planning & Setup",
              desc: "Resources, roles and timelines are prepared."
            },
            {
              icon: <FiTool />,
              title: "Execution",
              desc: "Planned activities are carried out according to procedures."
            },
            {
              icon: <FiClipboard />,
              title: "Review & Control",
              desc: "Results are checked to ensure quality and compliance."
            },
            {
              icon: <FiSend />,
              title: "Final Output",
              desc: "Completed output is delivered to stakeholders."
            }
          ].map((step, i, arr) => (
            <div key={i} className="workflow-step">
              <div className="workflow-top">
                <div className="workflow-circle">
                  {step.icon}
                </div>
                {i !== arr.length - 1 && (
                  <div className="workflow-arrow">
                    <HiOutlineArrowLongRight />
                  </div>
                )}
              </div>
              <h4 className="step-title">
                {step.title}
              </h4>
              <p className="step-desc">
                {step.desc}
              </p>
            </div>
          ))}

        </div>

      </section>



      <Footer />
    </div>
  );
};

export default SolutionsPage;
