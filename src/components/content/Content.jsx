import React from "react";
import "./content.scss";

function Content() {
  return (
    <div className="content-container">
      <div className="content-card">
        <div className="content-card-navbar">
          <div className="content-card-navbar-button">Generate new Array</div>
          <div className="content-card-navbar-button">
            <div className="button-range">
              <p>Change array size</p>
              <input type="range" />
            </div>
          </div>
          <div className="content-card-navbar-button">Merge Sort</div>
        </div>
        <div className="content-card-main"></div>
      </div>
    </div>
  );
}

export default Content;
