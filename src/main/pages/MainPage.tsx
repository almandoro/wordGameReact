import React, { useContext } from "react";
import { Link as ReactLink } from "react-router-dom";

import {
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  Tag,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { GameContext } from "../../shared/context/game-context";
import ChangeNickRedirector from "../components/ChangeNickRedirector";

const MainPage = () => {
  const ctx = useContext(GameContext);
  const userColor = useColorModeValue("yellow.200", "purple.600");

  const linkText = ctx.username ? (
    <Button colorScheme="teal">
      <HStack fontSize="1.5em" align="baseline">
        <Text color={userColor}>
          <i>{ctx.username}.</i>
        </Text>
        <Text> Click to play again!</Text>
      </HStack>
    </Button>
  ) : (
    "Check the Game!"
  );

  const lastScore = ctx.username && (
    <Tag colorScheme="telegram" mt={10}>
      Your last score: {ctx.score ? ctx.score + " points" : "-"}
    </Tag>
  );

  return (
    <Flex align="center" direction="column" mt={20} p={10}>
      <Heading>Wordcloud Game</Heading>
      <Text>by Maciej Marcinkowski</Text>
      <Stack
        direction={["column", "row"]}
        m={20}
        spacing={10}
        align={["center", "baseline"]}
      >
        <VStack align="center">
          <Link as={ReactLink} to="/game">
            {linkText}
          </Link>
          {lastScore}
        </VStack>
        <ChangeNickRedirector />
      </Stack>
    </Flex>
  );
};

export default MainPage;
