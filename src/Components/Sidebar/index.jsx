import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { useStyles } from "./styles";

function Sidebar({ open, handleDrawerClose }) {
  const classes = useStyles();

  return (
    <div>
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
              <ListItemText>Experience</ListItemText>
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default Sidebar;
