import React from "react";
import "./info.scss";

function Info({ selectedAlgorithm }) {
  const AlgorithmDetails = {
    "Merge Sort": {
      info: `Merge sort is one of the most efficient sorting algorithms. It works
      on the principle of Divide and Conquer based on the idea of breaking
      down a list into several sub-lists until each sublist consists of a
      single element and merging those sublists in a manner that results
      into a sorted list.`,
      addon: `Merge Sort: where disarray takes a break and chaos joins the
      orderly dance party, one sorted move at a time!`,
    },
    "Quick Sort": {
      info: "quick sort info",
      addon: "quick sort addon",
    },
    "Bubble Sort": {
      info: "bubble sort info",
      addon: "bubble sort addon",
    },
    "Selection Sort": {
      info: "selection sort info",
      addon: "selection sort addon",
    },
    "Insertion Sort": {
      info: "insertion sort info",
      addon: "insertion sort addon",
    },
    "Heap Sort": {
      info: "heap sort info",
      addon: "heap sort addon",
    },
  };
  return (
    <div className="info-container">
      <div className="info-card">
        <div className="info-card-title">{selectedAlgorithm}</div>
        <div className="info-card-info">
          <p>{AlgorithmDetails[selectedAlgorithm].info}</p>
          <p className="add-on">{AlgorithmDetails[selectedAlgorithm].addon}</p>
        </div>
      </div>
    </div>
  );
}

export default Info;
