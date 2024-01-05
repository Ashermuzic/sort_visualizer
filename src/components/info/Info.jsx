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
      addon: `"They call me 'Merge Sort' because I'm so good at merging traffic... or 
      maybe it's because I like to take my time and enjoy the scenery."`,
    },
    "Quick Sort": {
      info: `Quicksort is a divide-and-conquer algorithm. It works by selecting
      a 'pivot' element from the array and partitioning the other elements into two 
      sub-arrays, according to whether they are less than or greater than the pivot. 
      For this reason, it is sometimes called partition-exchange sort.`,
      addon: `"Quicksort: the 'fastest' sorting algorithm, unless you get a bad pivot. 
      Then it's the 'oh no, my life is ruined' algorithm."`,
    },
    "Bubble Sort": {
      info: `Bubble Sort is the simplest sorting algorithm that works by repeatedly 
      swapping the adjacent elements if they are in the wrong order. This algorithm 
      is not suitable for large data sets as its average and worst-case time complexity 
      is quite high.`,
      addon: `"Want to watch paint dry? Try Bubble Sort on a dataset bigger than 5. 
      It's the same feeling, only with numbers."`,
    },
    "... more ": {
      info: `You're welcome to enhance our repository by implementing additional algorithms through GitHub contributions.`,
      addon: "happy coding :)",
    },
    "Heap Sort": {
      info: `Heap sort is a sorting algorithm that organizes elements in an array
      to be sorted into a binary heap by repeatedly moving the largest element 
      front he heap and inserting it into the array being sorted. Priority queues 
      are implemented with a heap, a tree-like data structure also used in the heap 
      sort algorithm.`,
      addon: `"Heap Sort: not the fastest, but definitely not the slowest. 
      It's like the Goldilocks of sorting algorithms - just right."`,
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
