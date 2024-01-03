import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Content from "./components/content/Content";
import Info from "./components/info/Info";

function App() {
  return (
    <>
      <div className="container">
        <div>
          <Sidebar />
        </div>
        <div>
          <Content />
        </div>
        <div>
          <Info />
        </div>
      </div>
    </>
  );
}

export default App;
