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
        <style>{`
          /* Hide scrollbars for the modal container */
          .modal-content {
            scrollbar-width: none !important; /* Firefox */
            -ms-overflow-style: none !important;  /* IE and Edge */
          }
          .modal-content::-webkit-scrollbar {
            display: none !important; /* Chrome, Safari, Opera */
            width: 0 !important;
            height: 0 !important;
          }

          /* Redesign Close Button */
          .modal-content .modal-close {
            position: absolute !important;
            top: 20px !important;
            right: 20px !important;
            width: 40px !important;
            height: 40px !important;
            border-radius: 50% !important;
            background: #ffffff !important;
            box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08) !important;
            border: none !important;
            cursor: pointer !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            z-index: 1010 !important;
            transition: all 0.3s ease !important;
            padding: 0 !important;
          }
          .modal-content .modal-close:hover {
            background: #f3f4f6 !important;
            transform: scale(1.05) !important;
            box-shadow: 0 6px 16px rgba(15, 23, 42, 0.12) !important;
          }

          /* Redesign Top Section Flex */
          .modal-content .modal-row {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            gap: 32px !important;
            margin-bottom: 0 !important;
          }
          .modal-content .modal-row-left {
            flex: 0 0 35% !important;
            width: 35% !important;
            max-width: 35% !important;
          }
          .modal-content .modal-image {
            width: 100% !important;
            height: 240px !important;
            object-fit: cover !important;
            border-radius: 24px !important;
            display: block !important;
          }
          .modal-content .modal-row-right {
            flex: 1 !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            gap: 18px !important;
            margin-bottom: 0 !important;
            padding-right: 40px !important;
          }

          /* Spacing and Readability for Right Side content */
          .modal-content .modal-title {
            font-size: 36px !important;
            font-weight: 800 !important;
            line-height: 1.2 !important;
            color: #111827 !important;
            margin: 0 !important;
          }
          .modal-content .modal-tagline {
            font-size: 16px !important;
            color: #64748b !important;
            margin: 0 !important;
            font-weight: 500 !important;
          }
          .modal-content .modal-description {
            font-size: 15px !important;
            line-height: 1.8 !important;
            color: #6b7280 !important;
            max-width: 100% !important;
            margin: 0 !important;
          }
          .modal-content .modal-tags {
            display: flex !important;
            flex-wrap: wrap !important;
            gap: 10px !important;
            margin: 0 !important;
          }

          /* Responsive Layouts */
          @media (max-width: 1024px) {
            .modal-content .modal-row-left {
              flex: 0 0 40% !important;
              width: 40% !important;
              max-width: 40% !important;
            }
            .modal-content .modal-row-right {
              padding-right: 0 !important;
            }
          }
          @media (max-width: 768px) {
            .modal-content .modal-row {
              flex-direction: column !important;
              align-items: stretch !important;
              gap: 24px !important;
            }
            .modal-content .modal-row-left {
              flex: 0 0 100% !important;
              width: 100% !important;
              max-width: 100% !important;
            }
            .modal-content .modal-image {
              height: 200px !important;
            }
          }
        `}</style>

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
