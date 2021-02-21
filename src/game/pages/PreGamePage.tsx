import React, { useContext } from "react";

import { Flex, Heading } from "@chakra-ui/react";
import UserInputForm from "../components/UserInputForm";
import { GameContext } from "../../shared/context/game-context";
import { Redirect } from "react-router-dom";

const PreGamePage = () => {
  const ctx = useContext(GameContext);
  const redirect = ctx.username ? <Redirect to="/game/play" /> : null;

  return (
    <Flex textAlign="center" mt={20} direction="column">
      {redirect}
      <Heading>Please introduce yourself</Heading>
      <UserInputForm />
    </Flex>
  );
};

export default PreGamePage;
