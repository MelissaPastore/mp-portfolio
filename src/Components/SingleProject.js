import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AppleIcon from "@material-ui/icons/Apple";
import GitHub from "../assets/GitHub-Mark-120px-plus.png";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

export default function SingleProject({ project }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title={project.title} />
      <CardMedia
        component="img"
        className={classes.media}
        src="https://images.app.goo.gl/AMC7EqD162z6fPe18"
        title="Good Citizen Assistant"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {project.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <AppleIcon />
        </IconButton>
        <IconButton aria-label="github">
          <img src={GitHub} height={40} width={40} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
