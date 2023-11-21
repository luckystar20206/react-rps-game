import img1 from "../images/paper-emoji.png";
import img2 from "../images/rock-emoji.png";
import img3 from "../images/scissors-emoji.png";

const CHOICE_PAPER = "CHOICE PAPER";
const CHOICE_ROCK = "CHOICE ROCK";
const CHOICE_SCISSORS = "CHOICE SCISSORS";

const Buttons = ({ dispatch, getWinner }) => {
  return (
    <div className="input-container">
      <button
        onClick={() => {
          dispatch({ type: CHOICE_PAPER });
          getWinner();
        }}
      >
        <img src={img1} alt="paper" />
      </button>
      <button
        onClick={() => {
          dispatch({ type: CHOICE_ROCK });
          getWinner();
        }}
      >
        <img src={img2} alt="rock" />
      </button>
      <button
        onClick={() => {
          dispatch({ type: CHOICE_SCISSORS });
          getWinner();
        }}
      >
        <img src={img3} alt="scissors" />
      </button>
    </div>
  );
};

export default Buttons;
