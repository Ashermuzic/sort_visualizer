// Sidebar.js
import React from "react";
import "./sidebar.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Sidebar({ onSelectAlgorithm }) {
  const algorithms = [
    { type: "Merge Sort" },
    { type: "Quick Sort" },
    { type: "Bubble Sort" },
    { type: "Selection Sort" },
    { type: "Insertion Sort" },
    { type: "Heap Sort" },
  ];

  return (
    <div className="side-container">
      <div className="side-card">
        <div className="side-title">SnapSort</div>
        <div className="side-content">
          {algorithms.map((algo) => (
            <div
              key={algo.type}
              className="side-content-card"
              onClick={() => onSelectAlgorithm(algo.type)}
            >
              {algo.type}
            </div>
          ))}
        </div>
        <div className="side-links">
          <FaGithub className="side-links-icon" />
          <FaLinkedin className="side-links-icon" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
