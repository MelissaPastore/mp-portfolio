import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import {
  CssThree,
  Express,
  Git,
  Github,
  Googleanalytics,
  Heroku,
  Html5,
  Ibmwatson,
  Javascript,
  Json,
  MaterialUi,
  Mocha,
  NodeDotJs,
  Postgresql,
  Postman,
  ReactJs,
  Redux,
  Travisci,
  Webpack,
} from "@icons-pack/react-simple-icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

const tileData = [
  { title: "CSS", icon: CssThree, color: "#1572B6" },
  { title: "Express", icon: Express, color: "#000000" },
  { title: "Git", icon: Git, color: "#F05032" },
  { title: "GitHub", icon: Github, color: "#181717" },
  { title: "Google Analytics", icon: Googleanalytics, color: "#E37400" },
  { title: "Heroku", icon: Heroku, color: "#430098" },
  { title: "HTML", icon: Html5, color: "#E34F26" },
  { title: "IBM Watson", icon: Ibmwatson, color: "#BE95FF" },
  { title: "Javascript", icon: Javascript, color: "#F7DF1E" },
  { title: "Json", icon: Json, color: "#000000" },
  { title: "Material UI", icon: MaterialUi, color: "#0081CB" },
  { title: "Mocha", icon: Mocha, color: "#8D6748" },
  { title: "Node.js", icon: NodeDotJs, color: "#339933" },
  { title: "PostgreSQL", icon: Postgresql, color: "#336791" },
  { title: "Postman", icon: Postman, color: "#FF6C37" },
  { title: "React", icon: ReactJs, color: "#61DAFB" },
  { title: "Redux", icon: Redux, color: "#764ABC" },
  { title: "Travis CI", icon: Travisci, color: "#3EAAAF" },
  { title: "Webpack", icon: Webpack, color: "#8DD6F9" },
];

const Skills = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={150} className={classes.gridList}>
        <GridListTile
          key="Subheader"
          cols={5}
          style={{ height: "auto" }}
        ></GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.title} align="center">
            <tile.icon size={80} color={tile.color} />
            <GridListTileBar title={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default Skills;
