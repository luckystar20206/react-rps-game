const History = ({ score, winner }) => {
  return (
    <div className="history-container">
      <h2>{winner}</h2>
      <h4 className="history">
        <div>Wins: {score.Wins}</div>
        <div>Losses:{score.Losses}</div>
        <div>Ties:{score.Ties}</div>
      </h4>
    </div>
  );
};

export default History;
