import React from 'react';
import Project from './Project.jsx';
import projectData from '../../../data/data.jsx';

const ProjectList = () => {
  const projectItems = projectData.map(project => (
    <li key={project.id}>
      <Project {...project} />
    </li>
  ));

  return (
    <ul>
      {projectItems}
    </ul>
  );
};

export default ProjectList;
