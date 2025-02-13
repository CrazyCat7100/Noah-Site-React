import React from 'react';
import { Link } from 'react-router-dom';

const ProjectWrapperLesser = ({ project }) => {
  return (
    <div className='project-wrapper-lesser'>
      <Link to={project.link}>
        <img src={project.image} alt={`${project.name} Splash Screen`} className='splash-image'/>
        <div className="pointer pointer-hovering"></div>
        <div className="splash-text">
            <b>{project.name}</b>
        </div>
      </Link>
    </div>
  );
};

export default ProjectWrapperLesser;
