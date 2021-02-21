import { Button } from "@chakra-ui/react";
import React, { FunctionComponent, useContext } from "react";
import { GameContext } from "../../shared/context/game-context";

type CheckAnswersProps = {
  // TODO implement props
};

const CheckAnswers: FunctionComponent<CheckAnswersProps> = (props) => {
  const ctx = useContext(GameContext);

  const onClickHandler = () => {
    // Game ends.
    ctx.setGameFinished(true);

    // Count points
    const gameSet = ctx.gameSet;

    if (gameSet) {
      const goodAnswers = gameSet.good_words;

      const selectedAnswers = ctx.selectedWords;

      let goodSelected = 0;
      let badSelected = 0;

      selectedAnswers.forEach((el) => {
        const isGoodAnswer = goodAnswers.includes(el);

        if (isGoodAnswer) {
          goodSelected++;
        } else {
          badSelected++;
        }
      });

      const notSelectedGoodAnswers = goodAnswers.length - goodSelected;

      const score = goodSelected * 2 - (badSelected + notSelectedGoodAnswers);

      ctx.setScore(score);
    } else {
      console.error("Game set wasn't provided! This should not happen");
    }
  };

  return (
    <Button
      colorScheme="teal"
      justifySelf="center"
      size="lg"
      w="max-content"
      mt={10}
      onClick={onClickHandler}
      disabled={ctx.selectedWords.size === 0}
    >
      Check The Answers
    </Button>
  );
};

export default CheckAnswers;
