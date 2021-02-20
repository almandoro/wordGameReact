import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { GameContext } from "./shared/context/game-context";
import { useState } from "react";
import Router from "./router/Router";

export const App = () => {

  const [username, setUsername] = useState<string>()
  const [score, setScore] = useState<number>()

  return (
    <ChakraProvider theme={theme}>
      <GameContext.Provider
        value={{
          score,
          username,
          setScore,
          setUsername,
        }}
      >
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={1}>
            <ColorModeSwitcher justifySelf="flex-start" />
            <VStack minH="100%" height="100%">
              <Router />
            </VStack>
          </Grid>
        </Box>
      </GameContext.Provider>
    </ChakraProvider>
  );
};
