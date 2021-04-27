import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Github, Linkedin, Gmail } from "@icons-pack/react-simple-icons";
import Link from "@material-ui/core/Link";

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

const icons = [
  { icon: Github, url: "https://github.com/MelissaPastore" },
  { icon: Linkedin, url: "https://www.linkedin.com/in/melissalpastore/" },
  { icon: Gmail, url: "mailto: melissa.pastore@gmail.com" },
];

const Home = () => {
  const classes = useStyles();
  return (
    <div id="home">
      <img id="home-img" src="src/assets/MPAbout.png" />
      <p id="about-text">
        Specializing in full stack JavaScript. After studying journalism and
        working in public relations and communications, I made a career
        transition into software engineering. I love solving problems and
        telling stories through web and software development.
      </p>
      <h2>Contact</h2>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {icons.map((icon, i) => (
              <Grid key={i} item>
                <Link href={icon.url}>
                  <icon.icon size={40} color="white" />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
