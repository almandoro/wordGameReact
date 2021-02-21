import * as React from "react";
import { ChakraProvider, theme, Flex } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { GameContext } from "./shared/context/game-context";
import { useEffect, useState } from "react";
import Router from "./router/Router";
import { GameSet } from "./game/pages/GamePage";
import Cookies from "js-cookie";

export const App = () => {
  const [username, setUsername] = useState<string>();
  const [score, setScore] = useState<number>();
  const [selectedWords, setSelectedWords] = useState<Set<string>>(
    new Set<string>()
  );
  const [gameSet, setGameSet] = useState<GameSet>();
  const [gameFinished, setGameFinished] = useState<boolean>(false);

  useEffect(() => {
    const cookie = Cookies.get("username");
    if (cookie) {
      setUsername(cookie);
    }
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <GameContext.Provider
        value={{
          score,
          username,
          selectedWords,
          gameSet,
          gameFinished,
          setScore,
          setUsername,
          setSelectedWords,
          setGameSet,
          setGameFinished,
        }}
      >
        <Flex
          textAlign="center"
          fontSize="xl"
          minH="100vh"
          p={2}
          m={0}
          direction="column"
        >
          <ColorModeSwitcher left={0} position="fixed" />
          <Router />
        </Flex>
      </GameContext.Provider>
    </ChakraProvider>
  );
};
