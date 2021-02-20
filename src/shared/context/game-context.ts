import { createContext, useContext } from "react";

export type GameContextType = {
    username: string |undefined,
    score: number | undefined,
    setUsername: (newUserName: string) => void,
    setScore: (newScore: number) => void,
}

const defaultContext:GameContextType = {
    username: undefined,
    score: undefined,
    setUsername: username => console.log("username not provided"),
    setScore: score => console.log("score not provided")
}

export const GameContext = createContext<GameContextType>(defaultContext)
export const useGameContext = () => useContext(GameContext)