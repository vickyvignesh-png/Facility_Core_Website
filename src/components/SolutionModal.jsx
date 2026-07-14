import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiX,
  FiCheckCircle,
  FiPackage,
  FiTool,
  FiSettings,
  FiClipboard,
  FiShield,
  FiBarChart2
} from "react-icons/fi";
import "../styles/SolutionModal.css";

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const SolutionModal = ({ module, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const icons = [
    <FiPackage />,
    <FiTool />,
    <FiSettings />,
    <FiClipboard />,
    <FiShield />,
    <FiBarChart2 />
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="modal-content"
        variants={scaleIn}
        initial="hidden"
        animate="visible"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <FiX size={20} />
        </button>

        <div className="modal-row">
          <div className="modal-row-left">
            <img
              src={module.img}
              alt={module.title}
              className="modal-image"
            />
          </div>
          <div className="modal-row-right">
            <h2 className="modal-title">{module.title}</h2>
            <p className="modal-tagline">{module.tagline}</p>
            <p className="modal-description">{module.modalDescription}</p>
            <div className="modal-tags">
              {module.tags?.map((tag, i) => (
                <span key={i} className="modal-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-card modal-whatcando">
          <h3 className="modal-section-title">What You Can Do</h3>
          <div className="whatcando-grid">
            {module.whatICanDoDetails?.map((item, i) => (
              <div key={i} className="whatcando-item">
                <div className="whatcando-icon">
                  {icons[i % icons.length]}
                </div>
                <div className="whatcando-content">
                  <h4 className="whatcando-title">{item.title}</h4>
                  <p className="whatcando-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="modal-features-grid">
          <div className="modal-card">
            <h3 className="modal-section-title">Key Features</h3>
            <ul className="modal-keyfeatures-list">
              {module.keyFeatures?.map((item, i) => {
                const parts = item.split(" – ");
                const title = parts[0];
                const desc = parts.slice(1).join(" – ");
                return (
                  <li key={i} className="modal-keyfeatures-item">
                    <FiCheckCircle
                      size={22}
                      className="modal-keyfeatures-icon"
                    />
                    <div className="modal-keyfeatures-text">
                      <span className="modal-keyfeatures-title">{title}</span>
                      {desc && (
                        <span className="modal-keyfeatures-desc">
                          {" "}
                          – {desc}
                        </span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="modal-card">
            <h3 className="modal-section-title">Benefits</h3>
            <ul className="modal-benefits-list">
              {module.benefits?.map((item, i) => {
                const parts = item.split(" – ");
                const title = parts[0];
                const desc = parts.slice(1).join(" – ");
                return (
                  <li key={i} className="modal-benefits-item">
                    <FiCheckCircle
                      size={22}
                      className="modal-benefits-icon"
                    />
                    <div className="modal-benefits-text">
                      <span className="modal-benefits-title">{title}</span>
                      {desc && (
                        <span className="modal-benefits-desc">
                          {" "}
                          – {desc}
                        </span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default React.memo(SolutionModal);
