import React from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <div>
      <ul className={styles.header}>
        <li>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" className={styles.link}>
            My Projects
          </Link>
        </li>
        <li>
          <Link to="/activity" className={styles.link}>
            My Activity
          </Link>
        </li>
        <li>
          <Link to="/mystuff" className={styles.link}>
            What I'm upto
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
