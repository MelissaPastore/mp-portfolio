import { SiGmail } from "react-icons/si";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import React from "react";
import { styled } from "@mui/material/styles";

const icons = [
  { icon: FaGithub, url: "https://github.com/MelissaPastore", name: "GitHub" },
  {
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/melissalpastore/",
    name: "LinkedIn",
  },
  { icon: SiGmail, url: "mailto: melissa.pastore@gmail.com", name: "Email" },
];

const StyledGrid = styled(Grid)(({}) => ({
  flexGrow: 1,
  margin: 5,
}));

const Footer = () => {
  return (
    <div className="footer">
      <p>Contact</p>
      <StyledGrid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            {icons.map((iconData, i) => (
              <Grid key={i} item>
                <Link
                  href={iconData.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <iconData.icon size={30} color="white" />
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
