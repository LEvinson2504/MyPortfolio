import React, { useState, useEffect } from "react";
import styles from "./Activity.module.css";
import { Box, Flex, Avatar, Text } from "@chakra-ui/core";

// const Commit = ({commit}) => {
//   return <div className={styles.commit}>
//     <div className={styles.profile}>
//       <img src={commit.actor.avatar_url} />
//       <a href={commit.actor.url}>{commit.actor.login}</a>
//       <span className={styles.date}>
//         {new Date(commit.created_at).toDateString()}
//       </span>
//     </div>
//     <div className={styles.event}><p>{commit.type}</p></div>
//     <div>to <a href={commit.repo.url}>{commit.repo.name}</a></div>
//   </div>
// }

const Commit = ({ commit }) => {
  return (
    <Box background="white" m="20px" p="6px" w="25vw" borderRadius="md">
      <Flex justify="center" direction="column">
        <Flex justify="space-evenly">
          <Avatar src={commit.actor.avatar_url} h="40px" w="40px" />
          <Flex direction="column">
            <Text fontSize="20px">@{commit.actor.login}</Text>
            <Text alignSelf="center" fontSize="10px">
              {new Date(commit.created_at).toDateString()}
            </Text>
          </Flex>
        </Flex>
        <Flex justify="space-evenly">
          <Text fontSize="15px">{commit.type} to </Text>
          <Text fontSize="15px">
            <Text as="a" href={`https://github.com/${commit.repo.name}`}>
              {commit.repo.name}
            </Text>
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

const Activity = () => {
  const url = "https://api.github.com/users/LEvinson2504/events";
  const getCommitData = async (url) => {
    return await fetch(url).then((r) => r.json());
  };
  const [commits, setCommits] = useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await getCommitData(url);
      setCommits(response);
    }
    fetchData();
  }, []);

  console.log(commits);
  return (
    <div className={styles.container}>
      {commits && commits.map((commit) => <Commit commit={commit} />)}
    </div>
  );
};

export default Activity;
