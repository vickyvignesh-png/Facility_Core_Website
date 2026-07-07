import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiLayers, FiUsers, FiClipboard, FiArrowUpRight } from "react-icons/fi";
import SolutionModal from "./SolutionModal";
import { modules } from "../data/solutionsData";
import "../styles/DetailedModules.css";

const DetailedModules = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [selectedModule, setSelectedModule] = useState(null);

  // Local detailed data for Vendor Management
  const vendorManagementModule = {
    title: "Vendor Management",
    description: "Manage vendors, contracts, and service providers.",
    modalDescription: "FacilityCore's Vendor Management module helps you manage your external contractors, track their compliance documents, assign work orders, and log service payments—all from a single platform.",
    icon: React.createElement(FiUsers),
    img: "/sectionpagedashboard.png",
    link: "/solutions/vendor-management",
    tagline: "Manage contractors. Verify compliance. Track performance.",
    tags: [
      "Vendor Database",
      "Compliance Documents",
      "Work Allocation",
      "Vendor Ratings",
      "Payment Tracking",
      "Performance Audits"
    ],
    whatICanDoDetails: [
      { title: "Centralize Vendor Directory", desc: "Maintain all contact info, trade categories, and contracts in one search-friendly list." },
      { title: "Verify Compliance Docs", desc: "Upload and track insurance certificates, tax compliance, and local licenses with auto-expiry alerts." },
      { title: "Dispatch Work Orders", desc: "Assign jobs directly to vendors, monitor response times, and approve resolutions online." },
      { title: "Track Billing & Payments", desc: "Process contractor invoices, track payments, and review actual spend against budgets." },
      { title: "Assess Vendor Quality", desc: "Collect stakeholder feedback and rate contractor performance based on SLA speed and quality." },
      { title: "Streamline Communication", desc: "Provide a vendor communication trail to keep everyone aligned on job details and scope." }
    ],
    whatICanDo: [],
    keyFeatures: [
      "Vendor Database – Centralize onboarding, classifications, locations, and documents.",
      "Compliance Tracking – Auto-alerts for expiring vendor insurance and licenses.",
      "Contractor Work Orders – Assign and monitor external work orders and SLAs.",
      "Invoice & Payment Logs – Upload vendor bills, track approvals, and log payments.",
      "SLA Performance Ratings – Track response times, completion rates, and feedback.",
      "Secure Documents – Archive historical contractor agreements and pricing lists."
    ],
    benefits: [
      "Better control over contractor compliance and liability",
      "Reduced time spent on manual dispatching and follow-ups",
      "Improved work quality with ratings and performance logs",
      "Greater transparency on vendor expenditures and contracts"
    ]
  };

  // Local detailed data for Compliance Logs
  const complianceLogsModule = {
    title: "Compliance Logs",
    description: "Maintain audit-ready compliance records.",
    modalDescription: "FacilityCore's Compliance Logs module helps you verify local code safety inspections, fire safety compliance, track certifications, and schedule recurring audits to ensure your building remains fully compliant and safe.",
    icon: React.createElement(FiClipboard),
    img: "/sectionpagedashboard.png",
    link: "/solutions/compliance-logs",
    tagline: "Stay safe. Ensure building code compliance. Simplify audits.",
    tags: [
      "Safety Audits",
      "Inspection Logs",
      "Certifications",
      "Fire Safety",
      "Asset Compliance",
      "Audit Reports"
    ],
    whatICanDoDetails: [
      { title: "Automate Inspections", desc: "Setup periodic checklists for elevator inspections, fire safety, and HVAC certifications." },
      { title: "Log Audit Trails", desc: "Record every compliance task with digital timestamps, signatures, and document uploads." },
      { title: "Track Certification Expiries", desc: "Receive automated email and system alerts before crucial building certificates expire." },
      { title: "Manage Risk Checks", desc: "Run proactive hazards inspections to mitigate safety risks and code violations." },
      { title: "Generate Audit Reports", desc: "Export comprehensive compliance history logs for municipal inspectors or internal audits." },
      { title: "Enforce Checklists", desc: "Force technicians to complete step-by-step verification lists during physical inspections." }
    ],
    whatICanDo: [],
    keyFeatures: [
      "Inspection Schedules – Plan recurring compliance reviews and safety checklists.",
      "Certificate Register – Track safety certificates, permit approvals, and renewal dates.",
      "Digital Sign-Offs – Log inspector names, dates, digital signatures, and comments.",
      "Fire & Safety Logs – Dedicated logging for sprinklers, alarms, extinguishers, and exits.",
      "Compliance Reports – Instant summaries of inspections, outstanding tasks, and audit logs.",
      "Historical Archives – Search and review all past inspections to verify remediation."
    ],
    benefits: [
      "Always remain prepared for government or safety audits",
      "Reduce liability and risk of municipal code compliance penalties",
      "Ensure building equipment runs safely for all occupants",
      "Automated tracking eliminates missed inspection deadlines"
    ]
  };

  // 8 modules mapped in row-major order:
  // Row 1: Left 1 (Asset & Maintenance) | Right 1 (Visitor Management)
  // Row 2: Left 2 (HR Management) | Right 2 (Parking, Vehicle & Visitor Management)
  // Row 3: Left 3 (Occupant Management) | Right 3 (Vendor Management)
  // Row 4: Left 4 (CRM Management & Task Management) | Right 4 (Compliance Logs)
  const detailedList = [
    modules[0], // Asset & Maintenance
    modules[1], // Visitor Management
    modules[2], // HR Management
    modules[3], // Parking, Vehicle & Visitor Management
    modules[4], // Occupant Management
    vendorManagementModule,
    modules[5], // CRM Management & Task Management
    complianceLogsModule
  ];

  return (
    <section className="detailed-modules !py-10">
      <div className="detailed-modules-header !mb-5">
        <div className="flex justify-center w-full mb-5">
          <span className="inline-flex items-center gap-2 px-[18px] h-[36px] bg-[#EAF8E8] text-[#69BC45] rounded-full font-semibold text-[13px] tracking-[1px] uppercase">
            <FiLayers size={16} />
            Detailed Solution Modules
          </span>
        </div>
        <h2 className="detailed-modules-heading">Detailed Solution Modules</h2>
      </div>

      <div className="solutions-split-layout !mt-5">
        {detailedList.map((module, index) => (
          <Link
            to="#"
            key={index}
            onClick={(e) => {
              e.preventDefault();
              setSelectedModule(module);
            }}
            className={`feature-card ${hoveredIndex === index ? "active" : ""}`}
            onMouseEnter={() => setHoveredIndex(index)}
          >
            <div className="card-left">
              <div className="card-icon">{module.icon}</div>
              <div className="card-content">
                <h3 className="card-title">{module.title}</h3>
                <p className="card-description">{module.description}</p>
              </div>
            </div>
            <div className="card-arrow">
              <div className="arrow-btn">
                <FiArrowUpRight />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Modal for selected module */}
      {selectedModule && (
        <SolutionModal
          module={selectedModule}
          onClose={() => setSelectedModule(null)}
        />
      )}
    </section>
  );
};

export default React.memo(DetailedModules);
