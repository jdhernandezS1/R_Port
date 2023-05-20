import React from 'react';
import "./style/Project.css"
import projects from "./Content"


const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.imageUrl} alt={project.title} className="project-image" />
      <div className="project-details">
        <h2>{project.title}</h2>
        <p className="project-description">{project.description}</p>
        <div className="project-links">
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
          <a href={project.sourceLink} target="_blank" rel="noopener noreferrer"> Source</a>
        </div>
        <div className="project-technologies">
          {project.technologies.map((technology, index) => (
            <span key={index}>{technology}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Portafolio = () => {
  return (
    <div className="Portafolio">
      <h1>My Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portafolio;