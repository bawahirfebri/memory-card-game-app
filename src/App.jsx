import { useState } from "react";

const LIST_CARDS = [
  {
    id: 1,
    value: "A",
    isFlipped: false,
  },
  {
    id: 2,
    value: "B",
    isFlipped: true,
  },
  {
    id: 3,
    value: "C",
    isFlipped: false,
  },
  {
    id: 4,
    value: "D",
    isFlipped: true,
  },
  {
    id: 5,
    value: "E",
    isFlipped: false,
  },
  {
    id: 6,
    value: "F",
    isFlipped: false,
  },
  {
    id: 7,
    value: "G",
    isFlipped: false,
  },
  {
    id: 8,
    value: "H",
    isFlipped: false,
  },
  {
    id: 9,
    value: "I",
    isFlipped: false,
  },
  {
    id: 10,
    value: "J",
    isFlipped: false,
  },
  {
    id: 11,
    value: "K",
    isFlipped: false,
  },
  {
    id: 12,
    value: "L",
    isFlipped: false,
  },
  {
    id: 13,
    value: "M",
    isFlipped: false,
  },
  {
    id: 14,
    value: "N",
    isFlipped: false,
  },
  {
    id: 15,
    value: "O",
    isFlipped: false,
  },
  {
    id: 16,
    value: "P",
    isFlipped: false,
  },
];

function App() {
  const [cards, setCards] = useState(LIST_CARDS);

  const handleFlipCard = (cardId) => {
    setCards(prevCards => prevCards.map(card => {
      if (card.id === cardId) return {...card, isFlipped: !card.isFlipped}
      return card
    }))
  }

  return (
    <div className="app">
      <div className="game-board">
        <p>time</p>
        <p>move</p>
        <div className="cards">
          {cards.map((card) => (
            <div key={card.id} className={`card ${card.isFlipped ? "flipped" : null}`} onClick={() => handleFlipCard(card.id)}>
              <div className="card__content">
                <p className="card__content-front">?</p>
                <p className="card__content-back">{card.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
