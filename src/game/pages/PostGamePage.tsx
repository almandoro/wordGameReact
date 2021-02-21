import React, { useContext } from "react";
import { Link as ReactLink } from "react-router-dom";

import { Button, Flex, Heading, HStack, VStack, Text } from "@chakra-ui/react";
import { Redirect } from "react-router-dom";
import { GameContext } from "../../shared/context/game-context";

const PostGamePage = () => {
  const ctx = useContext(GameContext);

  const redirect = ctx.selectedWords.size === 0 ? <Redirect to="/" /> : null;

  return (
    <Flex mt={20} direction="column">
      {redirect}
      <VStack spacing={8}>
        <Heading>Congratulations, {ctx.username}</Heading>
        <Text fontSize="1.5em">Your score:</Text>
        <Text fontSize="2em" color="blue.300">
          {ctx.score} points
        </Text>
        <HStack alignSelf="center" spacing={5} mt={10}>
          <ReactLink to="/">
            <Button colorScheme="cyan">Go to Main Page!</Button>
          </ReactLink>
          <ReactLink to="/game">
            <Button colorScheme="teal">Play Again</Button>
          </ReactLink>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default PostGamePage;
