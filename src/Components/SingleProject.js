import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import LinkIcon from "@material-ui/icons/Link";
import Chip from "@material-ui/core/Chip";

const GitHub =
  "https://firebasestorage.googleapis.com/v0/b/portfolio-d7d24.appspot.com/o/GitHub-Mark-120px-plus.png?alt=media&token=8a0e5b17-89b4-4ef2-8b6b-253e42258795";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
    margin: 15,
    borderRadius: 10,
  },
  media: {
    paddingTop: "1%",
  },
  tech: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
    backgroundColor: "#13505B",
    color: "white",
  },
  header: {
    fontWeight: "bold",
    fontSize: 70,
  },

  buttonText: {
    size: 40,
    fontWeight: "bold",
    color: "black",
    margin: 3,
  },
}));

const SingleProject = ({ project }) => {
  const classes = useStyles();

  return (
    <Card elevation={10} className={classes.root}>
      <CardHeader className={classes.header} title={project.title} />
      <CardMedia
        component="img"
        className={classes.media}
        image={project.img}
        title="card-img"
        alt={`A screenshot of the the ${project.title} application`}
      />
      <CardContent>
        <Typography variant="h6" component="p">
          {project.description}
        </Typography>
      </CardContent>
      <CardContent component="ul" className={classes.tech}>
        <Typography variant="h6" component="p">
          Tech Stack:
        </Typography>
        {project.tech.map((tech, i) => {
          return (
            <li key={i}>
              <Chip className={classes.chip} label={tech} />
            </li>
          );
        })}
      </CardContent>
      <Link href={project.links[0]} target="_blank" rel="noopener noreferrer">
        <IconButton size="medium" edge="end" aria-label="github">
          <img src={GitHub} height={30} width={30} alt="GitHub logo" />
          <Typography className={classes.buttonText}>Code</Typography>
        </IconButton>
      </Link>
      {project.links[1] && (
        <Link href={project.links[1]} target="_blank" rel="noopener noreferrer">
          <IconButton aria-label="demo">
            <LinkIcon fontSize="large" color="action" />
            <Typography className={classes.buttonText}>Demo</Typography>
          </IconButton>
        </Link>
      )}
    </Card>
  );
};

export default SingleProject;
