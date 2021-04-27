import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="navbar">
      <h1>Melissa Pastore</h1>
      <Link className="navbar-link" to="/">
        About
      </Link>
      <Link className="navbar-link" to="/projects">
        Projects
      </Link>
      <Link className="navbar-link" to="/skills">
        Skills
      </Link>
      <Link className="navbar-link" to="/resume">
        Experience
      </Link>
    </nav>
  );
};

export default Navbar;
