import React from "react";
import "../styles/PricingTable.css";

const PricingTable = ({ tableData }) => {
  const { columns, rows } = tableData;

  return (
    <div className="pricing-table-wrapper">
      <table className="pricing-table">
        <thead>
          <tr>
            <th className="feature-header-col">Feature Comparison</th>
            {columns.map((col) => (
              <th
                key={col.id}
                className={`package-header-col ${
                  col.highlighted ? "highlighted" : ""
                }`}
              >
                <div className="header-cell-content">
                  {col.highlighted && (
                    <span className="table-badge">Recommended</span>
                  )}
                  <span className="package-name">{col.name}</span>
                  <span className="package-subtitle">{col.subtitle}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr key={rowIdx}>
              <td className="feature-label-cell">{row.label}</td>
              {columns.map((col) => {
                const val = row[col.id];
                return (
                  <td
                    key={col.id}
                    className={`feature-value-cell ${
                      col.highlighted ? "highlighted" : ""
                    }`}
                  >
                    {typeof val === "boolean" ? (
                      val ? (
                        <span className="tick-yes">✓</span>
                      ) : (
                        <span className="dash-no">—</span>
                      )
                    ) : (
                      <span className="value-text">{val}</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
          {/* Action Row */}
          <tr className="action-row">
            <td className="feature-label-cell"></td>
            {columns.map((col) => (
              <td
                key={col.id}
                className={`action-cell ${
                  col.highlighted ? "highlighted" : ""
                }`}
              >
                <button
                  className={`btn ${
                    col.highlighted ? "btn-primary" : "btn-secondary"
                  }`}
                  style={{ width: "100%" }}
                >
                  {col.id === "enterprise" ? "Talk to Sales" : "Book Demo"}
                </button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(PricingTable);
