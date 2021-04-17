import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
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
          Resume
        </Link>
        <Link className="navbar-link" to="/contact">
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
