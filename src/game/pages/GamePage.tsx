import { Flex, Heading, HStack, Spinner, Tag } from "@chakra-ui/react";
import React, {
  FunctionComponent,
  useCallback,
  useContext,
  useEffect,
} from "react";

import { GameContext } from "../../shared/context/game-context";
import CheckAnswers from "../components/CheckAnswers";
import FinishGame from "../components/FinishGame";
import WordBoard from "../components/WordBoard";
import { API_MOCK } from "./mock-data";
import { AiOutlineReload } from "react-icons/ai";

export type GameSet = {
  question: string;
  all_words: string[];
  good_words: string[];
};

const GamePage: FunctionComponent = () => {
  const ctx = useContext(GameContext);

  const fetchApi = useCallback(async () => {
    ctx.setGameSet(undefined);
    ctx.setSelectedWords(new Set<string>());
    // TODO API Call
    await new Promise((resolve) => setTimeout(resolve, 500));

    const arrSize = API_MOCK.length;
    const randomSetIndex = Math.floor(Math.random() * arrSize);

    ctx.setGameSet(API_MOCK[randomSetIndex]);
  }, [ctx]);

  // Component mounts
  useEffect(() => {
    ctx.setGameFinished(false);
    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex direction="column" mt={20} alignItems="center">
      {ctx.gameSet ? (
        <>
          <Heading>Question:</Heading>
          <HStack spacing="20px">
            {!ctx.gameFinished && (
              <AiOutlineReload onClick={() => fetchApi()} />
            )}
            <Tag fontSize="lg" mt={3} colorScheme="teal">
              {ctx.gameSet.question.toUpperCase()}
            </Tag>
          </HStack>
          <WordBoard />
          {ctx.gameFinished ? <FinishGame /> : <CheckAnswers />}
        </>
      ) : (
        <>
          <Heading color="red.400">Loading Game Set!</Heading>
          <Spinner size="xl" />
        </>
      )}
    </Flex>
  );
};

export default GamePage;
