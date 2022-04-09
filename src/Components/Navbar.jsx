import React, { useState } from "react";

import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    console.log("Handle open");
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <nav id="navbar">
      <h1 id="navbar-heading">Melissa Pastore</h1>
      <Sidebar handleDrawerClose={handleDrawerClose} open={open} />
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
      <div id="menu-button">
        <IconButton
          onClick={handleDrawerOpen}
          color="inherit"
          aria-label="open drawer"
          edge="start"
        >
          <MenuIcon />
        </IconButton>
      </div>
    </nav>
  );
};

export default Navbar;
