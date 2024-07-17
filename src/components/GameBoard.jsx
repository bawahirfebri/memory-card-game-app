function GameBoard({timeLeft, countMoves, cards, handleFlipCard, setIsStart}) {
  return (
    <div className="game-board">
      <div className="game-navigation">
        <p>Time: {timeLeft}</p>
        <p>Moves: {countMoves}/{cards.length}</p>
      </div>
      <div className="cards">
        {cards.map((card) => (
          <div key={card.id} className="card" onClick={() => handleFlipCard(card.id)}>
            <div className={`card__content ${card.isFlipped ? "flipped" : null}`}>
              <p className="card__content-front">?</p>
              <p className="card__content-back">{card.value}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="start-btn" onClick={() => setIsStart(false)}>Stop</button>
    </div>
  );
}

export default GameBoard;
