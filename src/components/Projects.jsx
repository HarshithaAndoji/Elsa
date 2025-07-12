import React from "react";
import projectData from "../data/projectData.json";

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h1 className="projects-title reveal-left">
        <span id="letter">P</span>rojects
      </h1>
      <div className="projects-grid">
        {projectData.map((proj, index) => (
          <div key={index} className="project-card reveal-right">
            <img src={proj.img} alt={proj.title} className="project-image" />
            <div className="project-overlay">
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
