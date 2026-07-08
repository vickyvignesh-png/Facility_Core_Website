import React from "react";
import { motion } from "framer-motion";
import {
  FiGrid,
  FiPackage,
  FiTool,
  FiZap,
  FiMessageSquare,
  FiUsers,
  FiClipboard
} from "react-icons/fi";
import "../styles/PlatformModules.css";

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const modulesData = [
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
];

const PlatformModules = () => {
  return (
    <section className="platform-modules !py-10">
      <div className="flex justify-center w-full mb-5">
        <span className="inline-flex items-center gap-2 px-[18px] h-[36px] bg-[#EAF8E8] text-[#69BC45] rounded-full font-semibold text-[13px] tracking-[1px] uppercase">
          <FiGrid size={16} />
          Platform Modules
        </span>
      </div>

      <motion.h2
        className="section-title !mb-5"
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
      >
        Complete Facility Suite
      </motion.h2>
      <p className="section-description !mb-5">
        Eliminate operational silos with integrated facility management modules.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 !mt-5">
        {modulesData.map((item, idx) => (
          <div key={idx} className="module-card">
            <div className="module-icon">{item.icon}</div>
            <h3 className="module-title">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(PlatformModules);
