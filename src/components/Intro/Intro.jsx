import React from "react";
import { Box, Text } from "@chakra-ui/core";

const Intro = () => {
  return (
    <Box p={5} h="100%" mt="14em" mx="5vw">
      <Text fontSize="7vw" color="white" fontFamily="prata">
        Hi, I'm
        <br />
        Levinson D'souza
      </Text>
      <Text fontSize="2vw" w="50%" fontStyle="italic" fontFamily="prata">
        I like creating web projects, learning and trying out new things,
        finding out why something works or why not.
      </Text>
    </Box>
  );
};
export default Intro;
