import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSmartphone,
  FiBarChart2,
  FiPackage,
  FiTool,
  FiZap,
  FiGrid,
  FiCheckCircle,
} from "react-icons/fi";
import "../styles/Features.css";

/* ─── Tab data ───────────────────────────────────── */
const tabs = [
  {
    id: "mobile",
    label: "Mobile Workforce",
    icon: <FiSmartphone />,
    image: "/mobileworkforceplatform.png",
    title: "Mobile Workforce Platform",
    overview:
      "Empower managers, technicians, and occupants with real-time access to facility operations from anywhere. Improve response times, streamline field activities, and boost workforce productivity.",
    bullets: [
      "FC Admin App",
      "FC Employee App",
      "FC Occupant App",
      "Real-Time Notifications",
      "QR Asset Scanning",
      "Offline Capability",
    ],
  },
  {
    id: "dashboard",
    label: "Dashboard & Analytics",
    icon: <FiBarChart2 />,
    image: "/dashboard.png",
    title: "Dashboard & Analytics",
    overview:
      "Gain complete operational visibility with executive dashboards and real-time analytics. Monitor KPIs, SLAs, workforce performance, and facility health from a centralized platform.",
    bullets: [
      "Executive Dashboards",
      "KPI Monitoring",
      "SLA Tracking",
      "Workforce Analytics",
      "Custom Reports",
      "Performance Insights",
    ],
  },
  {
    id: "asset",
    label: "Asset & QR Tracking",
    icon: <FiPackage />,
    image: "/qrtracking.png",
    title: "Asset & QR Tracking",
    overview:
      "Track, monitor, and manage every asset across your facilities using QR-based identification. Maintain complete lifecycle history and improve asset accountability.",
    bullets: [
      "QR Code Scanning",
      "Asset Lifecycle Tracking",
      "Asset Location Mapping",
      "Warranty Management",
      "Maintenance History",
      "Barcode Integration",
    ],
  },
  {
    id: "maintenance",
    label: "Preventive Maintenance",
    icon: <FiTool />,
    image: "/pmworking.png",
    title: "Preventive Maintenance",
    overview:
      "Automate recurring inspections and maintenance schedules to minimize downtime, extend asset life, and improve operational efficiency.",
    bullets: [
      "Automated PM Scheduling",
      "Recurring Tasks",
      "Inspection Planner",
      "Technician Alerts",
      "Compliance Checklists",
      "Downtime Reports",
    ],
  },
  {
    id: "automation",
    label: "Workflow Automation",
    icon: <FiZap />,
    image: "/workflowautomation.png",
    title: "Workflow Automation",
    overview:
      "Automate routine processes with intelligent workflows. Trigger actions, route approvals, escalate issues, and streamline facility operations without manual intervention.",
    bullets: [
      "No-Code Rule Builder",
      "Auto Routing",
      "Multi-Level Approvals",
      "Escalation Rules",
      "SLA Automation",
      "Email & SMS Alerts",
    ],
  },
];

/* ─── Animation variants ─────────────────────────── */
const contentVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

/* ─── Component ──────────────────────────────────── */
const Features = () => {
  const [activeTab, setActiveTab] = useState("mobile");
  const activeData = tabs.find((t) => t.id === activeTab);

  return (
    <section id="features" className="features-section">
      <div className="features-container">

        {/* ── Section Header ── */}
        <div className="features-header">
          <span className="features-label">
            <FiGrid />
            PLATFORM FEATURES
          </span>
          <h2 className="features-heading">Essential Facility Features</h2>
          <p className="features-paragraph">
            FacilityCore delivers a complete suite of tools to streamline
            facility operations, enhance visibility, and boost productivity.
          </p>
        </div>

        {/* ── Tab Navigation ── */}
        <div className="features-tabs-wrapper">
          <nav className="features-tabs">
            {/* Animated indicator */}
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`features-tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-icon">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* ── Content Card ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="features-content-card"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Left — image */}
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <img
                src={activeData.image}
                alt={activeData.title}
                className="features-image"
              />
            </motion.div>

            {/* Right — content */}
            <div className="features-text-col">
              <h3 className="features-feature-title">{activeData.title}</h3>
              <p className="features-overview">{activeData.overview}</p>

              {/* Bullet grid */}
              <ul className="features-bullets">
                {activeData.bullets.map((point, i) => (
                  <li key={i} className="features-bullet-item">
                    <FiCheckCircle className="bullet-icon" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Features;
