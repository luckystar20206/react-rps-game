import img1 from "../images/paper-emoji.png";
import img2 from "../images/rock-emoji.png";
import img3 from "../images/scissors-emoji.png";

const CHOICE_PAPER = "CHOICE PAPER";
const CHOICE_ROCK = "CHOICE ROCK";
const CHOICE_SCISSORS = "CHOICE SCISSORS";


export const myReducer = (prevState, action) => {
  let computerChoice = pickComputerMove();
  let computerImg =
    computerChoice === "paper" ? img1 : computerChoice === "rock" ? img2 : img3;
  if (action.type === CHOICE_PAPER) {
    return {
      ...prevState,
      user: "paper",
      computer: computerChoice,
      computerImg,
      userImg: img1,
    };
  } else if (action.type === CHOICE_ROCK) {
    return {
      ...prevState,
      user: "rock",
      computer: computerChoice,
      computerImg,
      userImg: img2,
    };
  } else if (action.type === CHOICE_SCISSORS) {
    return {
      ...prevState,
      user: "scissors",
      computer: computerChoice,
      computerImg,
      userImg: img3,
    };
  } else if (action.type === "reset") {
    return {
      ...prevState,
      user: "",
      computer: "",
    };
  }
};

function pickComputerMove() {
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}
