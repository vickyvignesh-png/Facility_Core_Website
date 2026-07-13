import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiLayers, FiArrowUpRight } from "react-icons/fi";
import SolutionModal from "./SolutionModal";
import { modules } from "../data/solutionsData";
import "../styles/DetailedModules.css";

const DetailedModules = () => {
  const [selectedModule, setSelectedModule] = useState(null);

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
    modules[6], // Vendor Management
    modules[5], // CRM Management & Task Management
    modules[7]  // Compliance Logs
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
            className="feature-card"
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
