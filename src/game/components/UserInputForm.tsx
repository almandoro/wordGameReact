import React, { useContext, useState } from "react";
import { Link as ReactLink } from "react-router-dom";

import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { GameContext } from "../../shared/context/game-context";
import Cookies from "js-cookie";

const UserInputForm = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const ctx = useContext(GameContext);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);    
  };

  const submitUsernameHandler = () => {
    ctx.setUsername(inputValue);
    Cookies.set("username", inputValue);
  };

  return (
    <React.Fragment>
      <FormControl my={20} w={["100%","20%"]} alignSelf="center">
        <FormLabel>Provide your nickname</FormLabel>
        <Input value={inputValue} onChange={inputHandler} />
        <ReactLink to="/game/play">
          <Button
            mt={4}
            disabled={inputValue === ""}
            colorScheme="teal"
            onClick={submitUsernameHandler}
          >
            Start The Game
          </Button>
        </ReactLink>
      </FormControl>
    </React.Fragment>
  );
};

export default UserInputForm;
