import React from "react";

import styles from "./Projects.module.css";
import styled from "styled-components";

// Project component 
// { imageUrl, Title, Githublink}

const Project = ({image, title, gh}) => {
  return (
    <div className={styles.project}>
      <img url={image} alt="" />
      <a href={gh}> {title} </a>
    </div>
  )
}


const Projects = () => {
  return <div className={styles.container}>
    <div className={styles.project}> Sample project 1</div>
    <div className={styles.project}> Sample project 2 </div>
    <div className={styles.project}> Sample project 2 </div>
    <Project image="" title="my new project" gh="www.com" />
  </div>
}

export default Projects;
