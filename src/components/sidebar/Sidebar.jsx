import React from "react";
import "./sidebar.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar({ onSelectAlgorithm }) {
  const algorithms = [
    { type: "Merge Sort" },
    { type: "Quick Sort" },
    { type: "Bubble Sort" },
    { type: "Heap Sort" },
    { type: "... more " },
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
          <Link
            target="_blank"
            to="https://github.com/Ashermuzic/sort_visualizer"
          >
            <FaGithub className="side-links-icon" />
          </Link>
          <FaLinkedin className="side-links-icon" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
