import { Github, Gmail, Linkedin } from "@icons-pack/react-simple-icons";

import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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
        I'm a software engineer, currently working on the frontend team at a
        fintech startup, with a focus on mobile development. I recently made a
        career change into software engineering and web development, after
        spending more than 10 years working in public relations, marketing and
        communications for retail and fashion brands. To help me make this
        transition, I completed the Web Development Fellowship at Fullstack
        Academy, a partnership with the NYC Tech Talent Pipeline.
      </p>
      <p className="about-text">
        I look forward to using my tech skills, along with the communication,
        management and problem-solving skills I gained in my previous career, to
        help an organization create and build applications that will make a
        positive impact on the tech landscape.
      </p>
    </div>
  );
};

export default Home;
