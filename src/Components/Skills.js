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
      <ImageList gap={5} sx={{ height: 'auto' }} cols={getScreenWidth()}>
        {tileData.map((tile) => {
          const IconComponent = tile.icon;
          
          return (
            <ImageListItem key={tile.title} sx={{ textAlign: "center", height: 120 }}>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                height: '100%',
                padding: '10px'
              }}>
                {/* Render the icon component */}
                {IconComponent ? (
                  <IconComponent 
                    size={50} 
                    color={tile.color} 
                    style={{ 
                      color: tile.color,
                      filter: tile.color === 'white' ? 'drop-shadow(0 0 2px rgba(255,255,255,0.8))' : 'none'
                    }} 
                  />
                ) : (
                  <div style={{
                    width: 50,
                    height: 50,
                    backgroundColor: tile.color,
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: tile.color === 'white' ? '#000' : '#fff'
                  }}>
                    {tile.title.substring(0, 3).toUpperCase()}
                  </div>
                )}
                <div style={{ marginTop: '8px', fontSize: '12px', fontWeight: 'bold', color: 'white' }}>
                  {tile.title}
                </div>
              </div>
            </ImageListItem>
          );
        })}
      </ImageList>
    </div>
  );
};

export default Skills;
