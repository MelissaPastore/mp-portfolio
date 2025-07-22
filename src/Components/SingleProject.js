import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import LinkIcon from "@mui/icons-material/Link";
import Chip from "@mui/material/Chip";

const GitHub =
  "https://firebasestorage.googleapis.com/v0/b/portfolio-d7d24.appspot.com/o/GitHub-Mark-120px-plus.png?alt=media&token=8a0e5b17-89b4-4ef2-8b6b-253e42258795";

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 700,
  margin: 15,
  borderRadius: 10,
}));

const StyledCardMedia = styled(CardMedia)({
  paddingTop: "1%",
});

const TechContainer = styled(CardContent)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  listStyle: "none",
  padding: theme.spacing(0.5),
  margin: 0,
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: "#13505B",
  color: "white",
}));

const HeaderTypography = styled(Typography)({
  fontWeight: "bold",
  fontSize: 70,
});

const ButtonTypography = styled(Typography)({
  fontSize: 40,
  fontWeight: "bold",
  color: "black",
  margin: 3,
});

const SingleProject = ({ project }) => {
  return (
    <StyledCard elevation={10}>
      <CardHeader title={project.title} />
      <StyledCardMedia
        component="img"
        image={project.img}
        title="card-img"
        alt={`A screenshot of the the ${project.title} application`}
      />
      <CardContent>
        <Typography variant="h6" component="p">
          {project.description}
        </Typography>
      </CardContent>
      <TechContainer component="ul">
        <Typography variant="h6" component="p">
          Tech Stack:
        </Typography>
        {project.tech.map((tech, i) => {
          return (
            <li key={i}>
              <StyledChip label={tech} />
            </li>
          );
        })}
      </TechContainer>
      <Link href={project.links[0]} target="_blank" rel="noopener noreferrer">
        <IconButton size="medium" edge="end" aria-label="github">
          <img src={GitHub} height={30} width={30} alt="GitHub logo" />
          <ButtonTypography>Code</ButtonTypography>
        </IconButton>
      </Link>
      {project.links[1] && (
        <Link href={project.links[1]} target="_blank" rel="noopener noreferrer">
          <IconButton aria-label="demo">
            <LinkIcon fontSize="large" color="action" />
            <ButtonTypography>Demo</ButtonTypography>
          </IconButton>
        </Link>
      )}
    </StyledCard>
  );
};

export default SingleProject;
