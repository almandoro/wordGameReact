import { createContext, useContext } from "react";
import { GameSet } from "../../game/pages/GamePage";

export type GameContextType = {
  username: string | undefined;
  score: number | undefined;
  selectedWords: Set<string>;
  gameFinished: boolean;
  gameSet: GameSet | undefined;
  setUsername: (newUserName: string | undefined) => void;
  setScore: (newScore: number) => void;
  setSelectedWords: (newWord: Set<string>) => void;
  setGameFinished: (finished: boolean) => void;
  setGameSet: (set: GameSet | undefined) => void;
};

const defaultContext: GameContextType = {
  username: undefined,
  score: undefined,
  selectedWords: new Set(),
  gameFinished: false,
  gameSet: undefined,
  setUsername: (username) => console.log("Username not provided"),
  setScore: (score) => console.log("Score not provided"),
  setSelectedWords: (words) => console.log("Words not provided"),
  setGameFinished: (finished) => console.log("Game not finished"),
  setGameSet: (set) => console.log("Game set not provided"),
};

export const GameContext = createContext<GameContextType>(defaultContext);
export const useGameContext = () => useContext(GameContext);
