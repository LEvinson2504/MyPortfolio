import React from "react";
import styles from "./About.module.css";
import styled from "styled-components";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';

// prettier-ignore
const Skills = styled.div`
  border: solid 1px purple;
  padding: 2px 6px;
  margin: 8px 2px;
  border-radius: 3px;
  background-color: ${props => props.color};
`;

// create a social component for socials

const Social = () => {
  return <div> 
    <h3>feel free to reach out</h3>
  </div>;
};

const About = () => {
  return (
    <>
      <div className={styles.sidebar}>
        <div>
          <img 
            className={styles.profileimg}
            src="../../images/profile.png" 
            alt="profile" />
          </div>
        <h1 className={styles.profile_name}>Levinson D'souza</h1>
        <div className={styles.skills_container}>
          <Skills color="#ff6666"> React.js </Skills>
          <Skills color="#ccffcc"> JavaScript (ES6) </Skills>
          <Skills color="limegreen"> Typescript </Skills>
          <Skills color="lightblue"> SQL & NoSQL </Skills>
          <Skills color="limegreen"> DS & Alg. </Skills>
          <Skills color="orange"> Python </Skills>
          <Skills color="green"> Vim </Skills>
        </div>
        <Social className={styles.social} /> 
        <div>
          <FaInstagram size="3em"/>
          <FaGithub size="3em" />
          <FaLinkedin size="3em" />
        </div>
      </div>
    </>
  );
};

export default About;
