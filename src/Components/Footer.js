import { Github, Gmail, Linkedin } from "@icons-pack/react-simple-icons";

import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const icons = [
  { icon: Github, url: "https://github.com/MelissaPastore" },
  { icon: Linkedin, url: "https://www.linkedin.com/in/melissalpastore/" },
  { icon: Gmail, url: "mailto: melissa.pastore@gmail.com" },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 5,
  },
  paper: {
    height: 60,
    width: 60,
    background: "black",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className="footer">
      <h2>Contact</h2>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {icons.map((icon, i) => (
              <Grid key={i} item>
                <Link href={icon.url} target="_blank" rel="noopener noreferrer">
                  <icon.icon size={35} color="white" />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
