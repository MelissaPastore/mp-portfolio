import { SiGithub, SiGmail } from "react-icons/si";

import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import React from "react";
import { styled } from "@mui/material/styles";

const icons = [
  { icon: SiGithub, url: "https://github.com/MelissaPastore", name: "GitHub" },
  { icon: null, url: "https://www.linkedin.com/in/melissalpastore/", name: "LinkedIn" },
  { icon: SiGmail, url: "mailto: melissa.pastore@gmail.com", name: "Email" },
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
            {icons.map((iconData, i) => (
              <Grid key={i} item>
                <Link href={iconData.url} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                  {iconData.icon ? (
                    <iconData.icon size={35} color="white" />
                  ) : (
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      width: 35,
                      height: 35,
                      border: '2px solid white',
                      borderRadius: '4px',
                      fontSize: '10px',
                      fontWeight: 'bold'
                    }}>
                      {iconData.name === 'LinkedIn' ? 'IN' : iconData.name.slice(0, 2)}
                    </div>
                  )}
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
