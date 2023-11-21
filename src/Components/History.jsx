const History = ({ score,winner }) => {
  return (
    <div className="history-container">
      <h2>{winner}</h2>
      <h4>{`Wins:${score.Wins} Losses:${score.Losses} Ties:${score.Ties}`}</h4>
    </div>
  );
};

export default History;
