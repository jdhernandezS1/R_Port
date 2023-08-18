import React from 'react';
import "../../style/Project.css"
import projects from "./Content"

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.imageUrl} alt={project.title} className="project-image" />
      <div className="project-details">
        <h2 className='SecondTitle'>{project.title}</h2>
        <h3 className='SecondTitle'> Description: </h3>
        <ul>
          {project.description.split('\n').map((point, index) => (
            <li key={index} className="project-description">{point.trim()}</li>
          ))}
        </ul>
        <div className="project-links">
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
          <a href={project.sourceLink} target="_blank" rel="noopener noreferrer"> Source</a>
        </div>
        <div className="project-technologies">
          <h3 className='SecondTitle'> Technologies</h3>
          <ul>
            {project.technologies.map((technologies, index) => (
              <li key={index}>{technologies}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Portafolio = () => {
  return (
    <div className="Portafolio">
      <h1 className='MainTitle'>
        Projects
      </h1>
      <div className='ProfPicContainer'>
        <picture>
          <img className='ProfilePic' src="https://avatars.githubusercontent.com/u/48605281?v=4" alt="David Profile foto" />
        </picture>
      </div>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

    </div>
  );
};

export default Portafolio;