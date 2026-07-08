import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import "../styles/SolutionCard.css";

const SolutionCard = ({ module, isActive, onMouseEnter, onClick }) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`feature-card ${isActive ? "active" : ""}`}
      onMouseEnter={onMouseEnter}
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
  );
};

export default React.memo(SolutionCard);
