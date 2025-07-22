import { Route, Routes } from "react-router-dom";

import About from "./About";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Projects from "./Projects";
import React from "react";
import Resume from "./Resume";
import Skills from "./Skills";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: `'Barlow', sans-serif;`,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default App;
