import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import GitHub from "../assets/GitHub-Mark-120px-plus.png";
import Link from "@material-ui/core/Link";
import LinkIcon from "@material-ui/icons/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
  },
  media: {
    height: 400,
    paddingTop: "1%",
    // 16:9
  },
}));

const SingleProject = ({ project }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader title={project.title} />
      <CardMedia
        component="img"
        className={classes.media}
        image={project.img}
        title="card-img"
      />
      <CardContent>
        <Typography variant="h6" component="p">
          {project.description}
        </Typography>
      </CardContent>

      <IconButton aria-label="github">
        <Link href={project.links[0]}>
          <img src={GitHub} height={35} width={35} />
        </Link>
        <Typography>Code</Typography>
      </IconButton>
      {project.links[1] && (
        <IconButton aria-label="demo">
          <Link href={project.links[1]}>
            <LinkIcon fontSize="large" color="action" />
          </Link>
          <Typography>Demo</Typography>
        </IconButton>
      )}
    </Card>
  );
};
export default SingleProject;
