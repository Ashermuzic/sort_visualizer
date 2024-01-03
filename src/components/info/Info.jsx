import React from "react";
import "./info.scss";

function Info() {
  return (
    <div className="info-container">
      <div className="info-card">
        <div className="info-card-title">Merge Sort</div>
        <div className="info-card-info">
          <p>
            Merge sort is one of the most efficient sorting algorithms. It works
            on the principle of Divide and Conquer based on the idea of breaking
            down a list into several sub-lists until each sublist consists of a
            single element and merging those sublists in a manner that results
            into a sorted list.
          </p>
          <p className="add-on">
            "Merge Sort: where disarray takes a break and chaos joins the
            orderly dance party, one sorted move at a time!"
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
