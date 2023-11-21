import { useEffect, useReducer, useState } from "react";
import Buttons from "./Components/Buttons";
import Result from "./Components/Result";
import History from "./Components/History";
import { myReducer } from "./Components/reducer";
import "./RockPaperScissors.css"

const findWinner = (choice) => {
  if (choice.user === "paper") {
    if (choice.computer === "paper") {
      return "It's a Tie";
    } else if (choice.computer === "rock") {
      return "You Lose";
    } else {
      return "You Win";
    }
  } else if (choice.user === "rock") {
    if (choice.computer === "rock") {
      return "It's a Tie";
    } else if (choice.computer === "paper") {
      return "You Lose";
    } else {
      return "You Win";
    }
  } else {
    if (choice.computer === "scissors") {
      return "It's a Tie";
    } else if (choice.computer === "rock") {
      return "You Lose";
    } else {
      return "You Win";
    }
  }
};

const RockPaperScissors = () => {
  const [winner, setWinner] = useState('');
  const [score, setScore] = useState(
    JSON.parse(localStorage.getItem("score")) || {
      Wins: 0,
      Losses: 0,
      Ties: 0,
    }
  );
  const [choice, dispatch] = useReducer(myReducer, { user: "", computer: "" });

  useEffect(() => {
    if (choice.user != "" && choice.computer != "") {
      let result = findWinner(choice);
      if (result === "You Win") {
        setScore({ ...score, Wins: score.Wins + 1 });
      } else if (result === "You Lose") {
        setScore({ ...score, Losses: score.Losses + 1 });
      } else {
        setScore({ ...score, Ties: score.Ties + 1 });
      }
      setWinner(result)
      localStorage.setItem("score", JSON.stringify(score));
    }
  }, [choice]);

  const handleReset = () => {
    setScore({ ...score, Wins: 0, Losses: 0, Ties: 0 });
    dispatch({type: "reset"});
    setWinner('');
    localStorage.setItem("score", JSON.stringify(score));
  };

  return (
    <div className="main-container">
      <h1>Rock Paper Scissors</h1>
      <Buttons dispatch={dispatch} />
      {choice.user != "" && choice.computer != "" && <Result choice={choice} />}
      <History score={score} winner={winner}/>
      <button className="reset-btn" onClick={handleReset}>Reset Score</button>
    </div>
  );
};

export default RockPaperScissors;
