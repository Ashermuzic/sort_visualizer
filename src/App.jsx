// App.js
import React, { useState } from "react";
import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Content from "./components/content/Content";
import Info from "./components/info/Info";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("Merge Sort");

  const handleAlgorithmSelect = (algorithmType) => {
    setSelectedAlgorithm(algorithmType);
  };

  return (
    <>
      <Router>
        <div className="container">
          <div>
            <Sidebar onSelectAlgorithm={handleAlgorithmSelect} />
          </div>
          <div>
            <Content />
          </div>
          <div>
            <Info selectedAlgorithm={selectedAlgorithm} />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
