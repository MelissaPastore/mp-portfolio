import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useStyles } from "./styles";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MenuIcon from "@material-ui/icons/Menu";

function Sidebar() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  console.log("IS IT OPEN", open);

  return (
    <div>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        className={classes.drawer}
        anchor="right"
        elevation={10}
        variant="persistent"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton color="inherit" onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Toolbar />
        <List>
          <ListItem>
            <Link className="menu-item" to="/">
              <ListItemText>About</ListItemText>
            </Link>
          </ListItem>

          <ListItem>
            <Link className="menu-item" to="/projects">
              <ListItemText>Projects</ListItemText>
            </Link>
          </ListItem>
          <ListItem>
            <Link className="menu-item" to="/skills">
              <ListItemText>Skills</ListItemText>
            </Link>
          </ListItem>
          <ListItem>
            <Link className="menu-item" to="/resume">
              <ListItemText>Resume</ListItemText>
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

require("react-dom");
window.React2 = require("react");
console.log("does react1 = react2", window.React1 === window.React2);

export default Sidebar;
