import { Button } from "@chakra-ui/react";
import Cookies from "js-cookie";
import React, { useContext } from "react";
import { Link as ReactLink } from "react-router-dom";
import { GameContext } from "../../shared/context/game-context";

const ChangeNickRedirector = () => {
  const ctx = useContext(GameContext);

  const onClickHandler = () => {
    Cookies.remove("username");
    ctx.setUsername(undefined);
  };

  return (
    <React.Fragment>
      {Cookies.get("username") && (
        <ReactLink to="/game">
          <Button colorScheme="telegram" onClick={onClickHandler}>
            Change nickname
          </Button>
        </ReactLink>
      )}
    </React.Fragment>
  );
};

export default ChangeNickRedirector;
