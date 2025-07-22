import React from "react";
import { Link } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { StyledDrawer } from "./styles";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function Sidebar({ open, handleDrawerClose }) {
  return (
    <div>
      <StyledDrawer
        anchor="right"
        elevation={10}
        variant="persistent"
        open={open}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 8px' }}>
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
      </StyledDrawer>
    </div>
  );
}

export default Sidebar;
