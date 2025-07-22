import { Github, Gmail, Linkedin } from "@icons-pack/react-simple-icons";

import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import React from "react";
import { styled } from "@mui/material/styles";

const icons = [
  { icon: Github, url: "https://github.com/MelissaPastore" },
  { icon: Linkedin, url: "https://www.linkedin.com/in/melissalpastore/" },
  { icon: Gmail, url: "mailto: melissa.pastore@gmail.com" },
];

const StyledGrid = styled(Grid)(({ theme }) => ({
  flexGrow: 1,
  margin: 5,
}));

const Footer = () => {
  return (
    <div className="footer">
      <h2>Contact</h2>
      <StyledGrid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            {icons.map((icon, i) => (
              <Grid key={i} item>
                <Link href={icon.url} target="_blank" rel="noopener noreferrer">
                  <icon.icon size={35} color="white" />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </StyledGrid>
    </div>
  );
};

export default Footer;
