import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ name, img, github, site, languages, description }) => (

  <>
    <h1>{name}</h1>
    <a href={github}>gitHub</a>||
    <a href={site}>site</a>
    <img src={img} alt={name}/>
    <h3>{languages}</h3>
    <p>{description}</p>
  </>

);

Project.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
  languages: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Project;
