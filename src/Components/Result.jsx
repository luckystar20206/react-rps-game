const Result = ({choice}) => {
  return (
    <div className="result-container">
      <div>
        <img src={choice.userImg} alt="" />
        <b>Your Choice</b>
      </div>
      <div>
        <img src={choice.computerImg} alt="" />
        <b>Computer Choice</b>
      </div>
    </div>
  );
};

export default Result;
