import React from 'react';
import "./style/Project.css"
import projects from "./Content"



const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.imageUrl} alt={project.title} className="project-image" />
      <div className="project-details">
        <h2 className='SecondTitle'>{project.title}</h2>
        <h3 className='SecondTitle'> Description: </h3>
        <p className="project-description">{project.description}</p>
        <div className="project-links">
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
          <a href={project.sourceLink} target="_blank" rel="noopener noreferrer"> Source</a>
        </div>
        <div className="project-technologies">
          <h3 className='SecondTitle'> Technologies</h3>
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
      <h1 className='MainTitle'>
        Wellcome To David's Portfolio
      </h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portafolio;