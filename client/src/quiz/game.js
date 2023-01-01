/**
 * The Games is responsible for orchestrating the flow of the quiz game.
 */

import {useState} from "react";
import EndScreen from "./end-screen";
import Stats from "./stats";
import TriviaItem from "./trivia-item";

function Game() {
  const [gameState, setGameState] = useState({
     score: 0,
     triviaIndex: 0,
     isGameOver: false,
  });
  // The next line is to pull out the three individual values score,triviaIndex and isGameOver from gameState and put them in variables to show them on page later.
  const { score, triviaIndex, isGameOver } = gameState;


  return (
    <> 
      <p>{score}</p>
      <p>{triviaIndex}</p>
      <p>{isGameOver ? "Game is over" : "Game is not over"}</p>
      <Stats />
      <TriviaItem />
      <EndScreen />

    </>

  );


}

export default Game;
