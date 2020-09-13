import React from "react";
import styles from "./About.module.css";
import styled from "styled-components";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Text, Flex, Badge, Stack } from "@chakra-ui/core";
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
      variant="solid"
      variantColor={color}
      fontSize="1em"
      m="7px"
      p="5px"
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
          src={process.env.PUBLIC_URL + "/images/profile.png"}
          alt="profile"
          effect="opacity"
        />
      </div>
      <Text fontSize="40px" px="2vw">
        Levinson D'souza
      </Text>

      <Flex wrap="wrap" justifyContent="center">
        <Skill title="Javascript (ES6)" color="red" />
        <Skill title="Typescript" color="yellow" />
        <Skill title="React" color="blue" />
        <Skill title="Python" color="green" />
        <Skill title="Vue.js" color="red" />
        <Skill title="node.js" color="green" />
        <Skill title="OOP" color="red" />
        <Skill title="DS & Algo" color="blue" />
        <Skill title="SQL and NoSQL" color="yellow" />
      </Flex>

      <Social className={styles.social} />

      <Stack isInline>
        <FaInstagram size="3em" />
        <FaGithub size="3em" />
        <FaLinkedin size="3em" />
      </Stack>
    </Flex>
  );
};

export default About;
