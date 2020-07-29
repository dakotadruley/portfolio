import React from 'react';
import Project from './Project.jsx';
import projectData from '../../../data/data.jsx';
import styles from './ProjectList.css';

const ProjectList = () => {
  const projectItems = projectData.map(project => (
    <section key={project.id}>
      <Project {...project} />
    </section>
  ));

  return (
    <main className={styles.ProjectList}>
      {projectItems}
    </main>
  );
};

export default ProjectList;
