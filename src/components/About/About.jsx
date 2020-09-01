import React from "react";
import styles from "./About.module.css";
import styled from "styled-components";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { Text, Flex, Badge } from "@chakra-ui/core";
// prettier-ignore

const skills = [
  "React.js",
  "Javascript ES6",
  "Typescript",
  "python",
  "vim"
]

const Skill = ({ title, color }) => {
  return (
    <Badge
      variant="outline"
      variantColor={color}
      fontSize="1em"
      m="5px"
      fontFamily="helvetica"
    >
      {title}
    </Badge>
  );
};

// create a social component for socials

const Social = () => {
  return (
    <div>
      <h3>feel free to reach out</h3>
    </div>
  );
};

const About = () => {
  return (
    <Flex className={styles.sidebar}>
      <div>
        <LazyLoadImage
          className={styles.profileimg}
          src="images/profile.png"
          alt="profile"
          effect="opacity"
        />
      </div>
      <Text fontSize="40px" px="2vw">
        Levinson D'souza
      </Text>
      <Flex wrap="wrap" justifyContent="center">
        <Skill title="Javascript (ES6)" color="red" />
        <Skill title="Typescript" color="blue" />
        <Skill title="Python" color="green" />
        <Skill title="node.js" color="yellow" />
      </Flex>
      <Flex>
        <Badge variant>React.js</Badge>
      </Flex>
      <Social className={styles.social} />
      <div>
        <FaInstagram size="3em" />
        <FaGithub size="3em" />
        <FaLinkedin size="3em" />
      </div>
    </Flex>
  );
};

export default About;
