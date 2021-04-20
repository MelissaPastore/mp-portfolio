import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav id="sidebar">
      <Link className="menu-item" to="/">
        About
      </Link>
      <Link className="menu-item" to="/projects">
        Projects
      </Link>
      <Link className="menu-item" to="/skills">
        Skills
      </Link>
      <Link className="menu-item" to="/resume">
        Resume
      </Link>
      <Link className="menu-item" to="/contact">
        Contact
      </Link>
    </nav>
  );
};

export default Sidebar;
