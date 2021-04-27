import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { tileData } from "../assets/skills";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    padding: 45,
    width: "80%",
    height: "80%",
  },
  gridList: {},

  tile: {
    alignSelf: "baseline",
  },

  titleBar: {
    background: "black",
    margin: 5,
    borderRadius: 10,
  },
}));

const Skills = () => {
  const classes = useStyles();
  const theme = useTheme();

  const screenXL = useMediaQuery(theme.breakpoints.only("xl"));
  const screenL = useMediaQuery(theme.breakpoints.only("lg"));
  const screenM = useMediaQuery(theme.breakpoints.only("md"));
  const screenS = useMediaQuery(theme.breakpoints.only("sm"));
  const screenXS = useMediaQuery(theme.breakpoints.only("xs"));
  const screenNarrow = useMediaQuery("(max-width:340px)");

  const getScreenWidth = () => {
    if (screenXL) {
      return 6;
    } else if (screenL) {
      return 5;
    } else if (screenM) {
      return 4;
    } else if (screenS) {
      return 3;
    } else if (screenXS) {
      return 2;
    } else if (screenNarrow) {
      return 1;
    } else {
      return 3;
    }
  };

  return (
    <div>
      <h1 id="skills">Technical Skills</h1>
      <GridList
        className={classes.root}
        spacing={5}
        cellHeight={140}
        cols={getScreenWidth()}
        className={classes.gridList}
      >
        {tileData.map((tile) => (
          <GridListTile
            className={classes.tile}
            key={tile.title}
            align="center"
          >
            <tile.icon title={tile.title} size={50} color={tile.color} />
            <GridListTileBar
              titlePosition="bottom"
              size={25}
              title={tile.title}
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default Skills;
