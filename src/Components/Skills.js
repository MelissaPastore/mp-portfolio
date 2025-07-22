import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import React from "react";
import { tileData } from "../data/skills";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

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
      <ImageList gap={5} rowHeight={100} cols={getScreenWidth()}>
        {tileData.map((tile) => (
          <ImageListItem key={tile.title} sx={{ textAlign: "center" }}>
            <tile.icon title={tile.title} size={50} color={tile.color} />
            <ImageListItemBar
              position="bottom"
              size={25}
              title={tile.title}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Skills;
