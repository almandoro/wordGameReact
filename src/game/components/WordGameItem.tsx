import { Button, Flex, Tag, useColorModeValue } from "@chakra-ui/react";
import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { GameContext } from "../../shared/context/game-context";

type WordGameProps = {
  word: string;
  correct: boolean;
};

const WordGameItem: FunctionComponent<WordGameProps> = (props) => {
  const [selected, setSelected] = useState(false);
  const [answerTag, setAnswerTag] = useState<JSX.Element>();

  const ctx = useContext(GameContext);

  const selectedItemBg = useColorModeValue("teal.200", "cyan.400");
  const notSelectedItemBg = useColorModeValue("gray.100", "blue.800");

  useEffect(() => {
    const selectedWords = new Set(ctx.selectedWords);

    if (selected) {
      selectedWords.add(props.word);
    } else {
      if (selectedWords.has(props.word)) {
        selectedWords.delete(props.word);
      }
    }
    ctx.setSelectedWords(selectedWords);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  useEffect(() => {
    setSelected(false);
  }, [props.word]);

  const onClickHandler = () => {
    setSelected(!selected);
  };

  useEffect(() => {
    if (ctx.gameFinished && selected) {
      const corr = props.correct;
      const tag = (
        <Tag
          alignSelf="center"
          borderRadius="xl"
          w="max-content"
          px={2}
          size=""
          bg={corr ? "green.500" : "red.400"}
        >
          {props.correct ? "Good" : "Bad"}
        </Tag>
      );

      setAnswerTag(tag);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ctx.gameFinished]);

  return (
    <Flex direction="column">
      {answerTag}
      <Button
        my={2}
        mx={8}
        h="max-content"
        bg={selected ? selectedItemBg : notSelectedItemBg}
        size="md"
        px={3}
        py={1}
        borderRadius="3xl"
        onClick={onClickHandler}
        disabled={ctx.gameFinished}
      >
        {props.word}
      </Button>
    </Flex>
  );
};

export default WordGameItem;
