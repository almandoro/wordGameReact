import { Button } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { Link as ReactLink } from "react-router-dom";

type FinishGameProps = {};

const FinishGame: FunctionComponent<FinishGameProps> = (props) => {
  return (
    <ReactLink to="/game/results">
      <Button
        colorScheme="teal"
        justifySelf="center"
        size="lg"
        w="max-content"
        mt={10}
      >
        Finish the Game
      </Button>
    </ReactLink>
  );
};

export default FinishGame;
