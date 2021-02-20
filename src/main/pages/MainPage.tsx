import React, { useContext } from "react";
import { Link as ReactLink } from "react-router-dom";

import { Grid, Heading, Link, Text } from "@chakra-ui/react";
import { GameContext } from "../../shared/context/game-context";

const MainPage = () => {
  const ctx = useContext(GameContext);

  const linkText = ctx.username
    ? `Hello, ${ctx.username}. Do you wanna play again?`
    : "Check the Game!";

  const lastScore = ctx.score ? (
    <Text color="green.300" m={10}>Good job, your last score was {ctx.score}!</Text>
  ) : null;

  return (
    <Grid direction="column" p={10}>
      <Heading>Wordcloud Game</Heading>
      <Text>by Maciej Marcinkowski</Text>
      {lastScore}
      <Link m={20} as={ReactLink} to="/game">
        {linkText}
      </Link>
    </Grid>
  );
};

export default MainPage;
