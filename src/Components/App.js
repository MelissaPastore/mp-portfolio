import { Route, Routes } from "react-router-dom";

import About from "./About";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Projects from "./Projects";
import React from "react";
import Resume from "./Resume";
import Skills from "./Skills";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="*" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
