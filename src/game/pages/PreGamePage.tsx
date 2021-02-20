import React, { useState } from "react";
import { Link as ReactLink } from "react-router-dom";

import {
    Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
} from "@chakra-ui/react";

const PreGamePage = () => {
  const [inputValue, setInputValue] = useState<string>();

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value);

  return (
    <div>
      <Heading>Please introduce yourself</Heading>
      <FormControl my={20}>
        <FormLabel>Provide your nickname</FormLabel>
        <Input value={inputValue} onChange={inputHandler} />
        <Box mt={4} colorScheme="teal" type="submit">
         <Link as={ReactLink} to="/game/start">
              Start The Game        
          </Link>
        </Box>
      </FormControl>
    </div>
  );
};

export default PreGamePage;
