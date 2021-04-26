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
    alignItems: "baseline",
  },
  gridList: {
    width: "80%",
    height: "80%",
  },

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

  const screenExtraLarge = useMediaQuery(theme.breakpoints.only("xl"));
  const screenLarge = useMediaQuery(theme.breakpoints.only("lg"));
  const screenMedium = useMediaQuery(theme.breakpoints.only("md"));
  const screenSmall = useMediaQuery(theme.breakpoints.only("sm"));
  const screenExtraSmall = useMediaQuery(theme.breakpoints.only("xs"));
  const screenNarrow = useMediaQuery("(max-width:340px)");

  const getScreenWidth = () => {
    if (screenExtraLarge) {
      return 6;
    } else if (screenNarrow) {
      return 1;
    } else if (screenLarge) {
      return 5;
    } else if (screenMedium) {
      return 4;
    } else if (screenSmall) {
      return 3;
    } else if (screenExtraSmall) {
      return 2;
    } else {
      return 3;
    }
  };

  return (
    <div className={classes.root}>
      <GridList
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
