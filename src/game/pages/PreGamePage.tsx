import React, { useState } from "react";
import { Link as ReactLink, Redirect } from "react-router-dom";

import {
    Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
} from "@chakra-ui/react";

const PreGamePage = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value);

  const startGameHandler = () => {
    <Redirect to="/game/start"/>
  }

  return (
    <Flex direction={["column", "row"]}>
      <Heading>Please introduce yourself</Heading>
      <FormControl my={20}>
        <FormLabel>Provide your nickname</FormLabel>
        <Input value={inputValue} onChange={inputHandler} />
        <ReactLink to="/game/start">
        <Button mt={4} disabled={inputValue === ""} colorScheme="teal" onClick={startGameHandler}>          
            Start The Game        
        </Button>
        </ReactLink>
      </FormControl>
    </Flex>
  );
};

export default PreGamePage;
