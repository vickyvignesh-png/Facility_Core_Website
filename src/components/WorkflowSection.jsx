import React from "react";
import { motion } from "framer-motion";
import {
  FiGitBranch,
  FiEdit3,
  FiSettings,
  FiUsers,
  FiTool,
  FiClipboard,
  FiSend
} from "react-icons/fi";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import "../styles/WorkflowSection.css";

const slideLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const stepsData = [
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
];

const WorkflowSection = () => {
  return (
    <section className="workflow-section !py-10">
      <div className="workflow-header !mb-5">
        <div className="flex justify-center w-full mb-5">
          <span className="inline-flex items-center gap-2 px-[18px] h-[36px] bg-[#EAF8E8] text-[#69BC45] rounded-full font-semibold text-[13px] tracking-[1px] uppercase">
            <FiGitBranch size={16} />
            Workflow Overview
          </span>
        </div>

        <motion.h2
          className="section-title !mb-5"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
        >
          End-to-End Workflow Overview
        </motion.h2>

        <p className="section-subtitle !mb-0">
          Streamline every facility process from request creation to closure.
        </p>
      </div>

      <div className="workflow-steps !mt-5">
        {stepsData.map((step, i, arr) => (
          <div key={i} className="workflow-step">
            <div className="workflow-top">
              <div className="workflow-circle">{step.icon}</div>
              {i !== arr.length - 1 && (
                <div className="ind-timeline-line">
                  <svg className="ind-timeline-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
            <h4 className="step-title">{step.title}</h4>
            <p className="step-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(WorkflowSection);
