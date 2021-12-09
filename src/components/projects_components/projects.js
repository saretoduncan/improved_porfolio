import React from "react";
import Cards from "./cards";
import "./projects.css";

const Projects = () => {
  return (
    <div className="container">
      <h2>
        <span className="projectTitle">Projects</span>
      </h2>
      <Cards />
    </div>
  );
};

export default Projects;
