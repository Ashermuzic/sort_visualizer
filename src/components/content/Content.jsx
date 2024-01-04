import React from "react";
import "./content.scss";
import SortingVisualizer from "../SortingVisualizer/SortingVisualizer";

function Content() {
  return (
    <div className="content-container">
      <div className="content-card">
        <div className="content-card-main">
          <SortingVisualizer></SortingVisualizer>
        </div>
      </div>
    </div>
  );
}

export default Content;
