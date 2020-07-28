import React from 'react';
import Project from './Project.jsx';
import projectData from '../../../data/data.jsx';
import styles from './ProjectList.css';

const ProjectList = () => {
  const projectItems = projectData.map(project => (
    <li key={project.id}>
      <Project {...project} />
    </li>
  ));

  return (
    <ul className={styles.ProjectList}>
      {projectItems}
    </ul>
  );
};

export default ProjectList;
