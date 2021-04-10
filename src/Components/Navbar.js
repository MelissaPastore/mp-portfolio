import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav id="navbar">
        <h1>Melissa Pastore</h1>
        <Link className="navbar-link" to="/">
          About
        </Link>
        <Link className="navbar-link" to="/">
          Projects
        </Link>
        <Link className="navbar-link" to="/">
          Skills
        </Link>
        <Link className="navbar-link" to="/">
          Resume
        </Link>
        <Link className="navbar-link" to="/">
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
