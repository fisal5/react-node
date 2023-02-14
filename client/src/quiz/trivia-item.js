import shuffle from "../common/utils/shuffle";
import "./trivia-item.css";
/**
 * The TrivaItem compenent renders an individual trivia question and waits for a user's answer
 */

function TriviaItem({ correctAnswer, incorrectAnswers, question, onNextClick }) {
  const allAnswers = [correctAnswer, ...incorrectAnswers];
  const shuffledAnswers = shuffle(allAnswers);
  
  
  
  return (
    <div>
      <p className="trivia-item__question">{question}</p>
      <ul className="trivia-item__answers">
        {shuffledAnswers.map((answer, i) => {
          return (
            <li key={answer}>
              <button className="trivia-item__button">{answer}</button>
            </li>
          );
        })}    
      </ul>
      <button className="trivia-item__button trivia-item__next-button" onClick={onNextClick}>
        Next ⏭️ 
      </button>
    </div>
  );
}

export default TriviaItem;
