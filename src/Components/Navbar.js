import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <nav id="navbar">
      <h1>Melissa Pastore</h1>
      <Sidebar />
      <Link className="link" to="/">
        About
      </Link>
      <Link className="link" to="/projects">
        Projects
      </Link>
      <Link className="link" to="/skills">
        Skills
      </Link>
      <Link className="link" to="/resume">
        Experience
      </Link>
    </nav>
  );
};

export default Navbar;
