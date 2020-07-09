import React from 'react';
import projectData from '../../../data/data.jsx';
import styles from './Project.css';

const Project = () => {

  return (
    <section className={styles.Project}>
      <h1>{projectData.name}</h1>
      <img src={projectData.img} alt={projectData.name}/>
      <h4>{projectData.github}</h4>
      <h4>{projectData.site}</h4>
      <h3>{projectData.languages}</h3>
      <p>{projectData.description}</p>
    </section>
  );
};

export default Project;
