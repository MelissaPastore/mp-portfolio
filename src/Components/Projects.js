import React from "react";
import SingleProject from "./SingleProject";
import { projects } from "../assets/projects";

const Projects = () => {
  return (
    <div id="projects-container">
      {projects.map((project) => {
        return <SingleProject key={project.title} project={project} />;
      })}
    </div>
  );
};

export default Projects;
