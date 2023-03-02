import {useState} from "react";
import EndScreen from "./end-screen";
import Stats from "./stats";
import TriviaItem from "./trivia-item";
import triviaData from "./trivia-data";

function Game() {
  const [gameState, setGameState] = useState({
     score: 0,
     triviaIndex: 0,
     isGameOver: false,
  });
  // The next line is to pull out the three individual values score,triviaIndex and isGameOver from gameState and put them in variables to show them on page later.
  const { score, triviaIndex, isGameOver } = gameState;
  const questionNumber = triviaIndex + 1;
  const numQuestions = triviaData.length;

  
  
  const onRestartGame = () => {
    setGameState({
      score: 0,
      triviaIndex: 0,
      isGameOver: false,

    });
  };

  const onLoadNextQuestion = () => {
    if (triviaIndex >= triviaData.length - 1){
      setGameState({ ...gameState, isGameOver: true });
    } else {
      setGameState({...gameState, triviaIndex: triviaIndex + 1 });
    }
  };

  const onAnswerSelected = (wasPlayerCorrect) => {
    if (wasPlayerCorrect) {
      setGameState({
        ...gameState,
        score: score + 1,
      });
    }
  };

  let pageContent;
  if (isGameOver) {
    pageContent = <EndScreen score={score} bestScore={0} onRetryClick={onRestartGame} />;
  } else {
    const triviaQuestion = triviaData[triviaIndex];
    const{correct_answer, incorrect_answers, question} = triviaQuestion; //to understand this line see vidoe 17 Unique coderz academy (React list data map)
    pageContent = (
      <TriviaItem 
        key={triviaIndex}
        question={question}
        correctAnswer={correct_answer}
        incorrectAnswers={incorrect_answers}
        onNextClick={onLoadNextQuestion}
        onAnswerSelected={onAnswerSelected}
        
      />
    );
  }


  return (
    <> 
      
      <Stats score = {score} questionNumber={questionNumber} totalQuestions={numQuestions} />
      {pageContent}
      

    </>

  );


}

export default Game;
