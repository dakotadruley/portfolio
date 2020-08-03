import React from 'react';
import styles from './Home.css';

const Home = () => {

  return (
    <section className={styles.Home}>
      <h1>Dakota Mills Druley</h1>
      <hr></hr>

      <aside>
        <a href="https://www.linkedin.com/in/dakota-druley/">linkedIn</a>||
        <a href="https://github.com/dakotadruley">gitHub</a>
        <h4>dakotadruley@gmail.com</h4>
        <h4>503.602.2053</h4>
      </aside>

      <img src="public/mebwsquare.jpeg" />
      <p>I'm a full stack developer with passion for creative problem solving and finding innovative ways to increase efficiency. The planning, organization and communication skills I honed in IT project management increase my productivity and ability to write clean and functional code. As a dynamic coder, I excel at both individually and collaboratively contributing. </p>
    
    </section>

  );
};

export default Home;
