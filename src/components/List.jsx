import React from 'react';
import ProjectWrapperMajor from './ProjectWrapperMajor';
import ProjectWrapperLesser from './ProjectWrapperLesser';

const List = ({ projects }) => {
  return (
    <div className='list'>
      {projects.map((project) => 
        project.type === 'major' ? (
          <ProjectWrapperMajor key={project.id} project={project} />
        ) : (
          <ProjectWrapperLesser key={project.id} project={project} />
        )
      )}
    </div>
  );
};

export default List;
