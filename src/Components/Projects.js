import React from "react";
import SingleProject from "./SingleProject";
import { projects } from "../assets/projects";
const Projects = () => {
  return (
    <div id="projects-container">
      <h1>Projects</h1>
      {projects.map((project) => {
        return <SingleProject key={project.title} project={project} />;
      })}
    </div>
  );
};

export default Projects;
