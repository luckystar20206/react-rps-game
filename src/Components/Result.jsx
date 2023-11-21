const Result = ({choice}) => {
  return (
    <div className="result-container">
      <div>
        Your Choice<img src={choice.userImg} alt="" />
      </div>
      <div>
        <img src={choice.computerImg} alt="" />
        Computer Choice
      </div>
    </div>
  );
};

export default Result;
