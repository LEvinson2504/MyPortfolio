import React from "react";
import styles from "./Nav.module.css";
import {Link} from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <div>
      <ul className={styles.header}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/activity">My Activity</Link></li>
        <li><Link to="/mystuff">What I'm upto</Link></li>
      </ul>
    </div>
  );
};

export default Nav;
