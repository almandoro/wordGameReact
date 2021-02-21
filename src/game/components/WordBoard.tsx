import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";

import { Grid, HStack, useColorModeValue } from "@chakra-ui/react";
import WordGameItem from "./WordGameItem";
import { GameContext } from "../../shared/context/game-context";

type WordBoardProps = {
  //Add own props
};

const WordBoard: FunctionComponent<WordBoardProps> = (props) => {
  const ctx = useContext(GameContext);
  const [mappedWords, setMappedWords] = useState<JSX.Element[]>();

  const borderColor = useColorModeValue("black", "blue.600");

  useEffect(() => {
    const gameSet = ctx.gameSet;

    if (gameSet) {
      const gameItems = gameSet.all_words
        .map((el, i) => {
          const isCorrect = gameSet.good_words.includes(el);
          return <WordGameItem key={i} word={el} correct={isCorrect} />;
        })
        .sort(() => Math.random() - 0.5);

      setMappedWords(gameItems);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid>
      <HStack
        justifySelf="center"
        spacing={[6, 20]}
        mt={10}
        minH="60vh"
        maxW={["100%", "40%"]}
        border="2px solid"
        borderColor={borderColor}
        borderRadius="3xl"
        flexWrap="wrap"
        justify="space-evenly"
      >
        {mappedWords}
      </HStack>
    </Grid>
  );
};

export default WordBoard;
