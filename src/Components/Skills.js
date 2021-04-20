import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { tileData } from "../assets/skills";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    padding: 45,
  },
  gridList: {
    width: "80%",
    height: "80%",
  },

  titleBar: {
    background: "black",
  },
}));

const Skills = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList
        spacing={5}
        cellHeight={140}
        cols={4}
        className={classes.gridList}
      >
        <GridListTile
          key="Subheader"
          cols={5}
          style={{ height: "auto" }}
        ></GridListTile>
        {tileData.map((tile) => (
          <GridListTile
            className={classes.tile}
            key={tile.title}
            align="center"
          >
            <tile.icon title={tile.title} size={50} color={tile.color} />
            <GridListTileBar
              titlePosition="bottom"
              size={30}
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
