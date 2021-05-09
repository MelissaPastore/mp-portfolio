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
      <img
        id="home-img"
        alt="Site creator's image"
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-d7d24.appspot.com/o/MPAbout.png?alt=media&token=970aedbe-0ba2-4412-bed7-ec8db60c2646"
      />
      <p className="about-text">
        After studying journalism and working in public relations and
        communications, I made a career transition into software engineering. I
        recently completed the Web Development Fellowship at Fullstack Academy,
        a partnership with the NYC Tech Talent Pipeline. I love solving problems
        and telling stories through web and software development.
      </p>
      <p className="about-text">
        I look forward to using the communication, management and
        problem-solving skills I gained in my previous career, along with the
        technical skills I acquired at Fullstack Academy, to help an
        organization create and build applications that will make a positive
        impact on the tech landscape.
      </p>
      <h2>Contact</h2>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {icons.map((icon, i) => (
              <Grid key={i} item>
                <Link href={icon.url} target="_blank" rel="noopener noreferrer">
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
