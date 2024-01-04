// App.js
import React, { useState } from "react";
import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Content from "./components/content/Content";
import Info from "./components/info/Info";

function App() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("");

  const handleAlgorithmSelect = (algorithmType) => {
    setSelectedAlgorithm(algorithmType);
  };

  return (
    <>
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
    </>
  );
}

export default App;
