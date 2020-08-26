import React from "react";
import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <div className={styles.intro}>
      <h1 className={styles.title}>
        Hi, I'm<br />
        Levinson D'souza
      </h1>
      <p className={styles.subtext}> I like creating web projects, learning and trying out new things, finding out why something works or why not. 
        </p>
    </div>
  );
};
export default Intro;
