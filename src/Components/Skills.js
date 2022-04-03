import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { tileData } from "../data/skills";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const Skills = () => {
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
      <GridList spacing={5} cellHeight={140} cols={getScreenWidth()}>
        {tileData.map((tile) => (
          <GridListTile key={tile.title} align="center">
            <tile.icon title={tile.title} size={50} color={tile.color} />
            <GridListTileBar
              titlePosition="bottom"
              size={25}
              title={tile.title}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default Skills;
