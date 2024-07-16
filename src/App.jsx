import { useState, useEffect } from "react";
import GameBoard from "./components/GameBoard";

const LIST_CARDS = [
  {
    id: 1,
    value: "A",
    isFlipped: false,
  },
  {
    id: 2,
    value: "B",
    isFlipped: false,
  },
  {
    id: 3,
    value: "C",
    isFlipped: false,
  },
  {
    id: 4,
    value: "D",
    isFlipped: false,
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
    value: "A",
    isFlipped: false,
  },
  {
    id: 10,
    value: "B",
    isFlipped: false,
  },
  {
    id: 11,
    value: "C",
    isFlipped: false,
  },
  {
    id: 12,
    value: "D",
    isFlipped: false,
  },
  {
    id: 13,
    value: "E",
    isFlipped: false,
  },
  {
    id: 14,
    value: "F",
    isFlipped: false,
  },
  {
    id: 15,
    value: "G",
    isFlipped: false,
  },
  {
    id: 16,
    value: "H",
    isFlipped: false,
  },
];

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5)
}
const shuffleCard = shuffle(LIST_CARDS)

function App() {
  const [isStart, setIsStart] = useState(true);
  const [cards, setCards] = useState(shuffleCard);
  const [prevCard, setPrevCard] = useState(null);
  const [currentCard, setCurrenCard] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60);
  const [countMoves, setCountMoves] = useState(0)

  useEffect(() => {
    if (isStart) {
      const timer = setTimeout(() => {
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1)
      }, 1000)

      if (timeLeft === 0 || cards.every(card => card.isFlipped)) {
        setIsStart(false)
        setCountMoves(0)
        clearTimeout(timer)
        setCards(shuffle(LIST_CARDS))
      }

      return () => clearTimeout(timer)
    }
  }, [isStart, timeLeft, cards])

  useEffect(() => {
    if (currentCard?.value !== prevCard?.value) {
      setTimeout(() => {
        setCards((prevCards) => {
          const updateCards = prevCards.map((card) => {
            if (card.id === currentCard.id || card.id === prevCard.id) return { ...card, isFlipped: false };
            return card;
          });

          return updateCards;
        });
      }, 1000);
    }
  }, [currentCard]);

  const handleFlipCard = (cardId) => {
    setCountMoves(prevCountMoves => prevCountMoves + 1)

    setCards((prevCards) => {
      const flippedCards = prevCards.filter((card) => card.isFlipped);
      const isEven = flippedCards.length % 2 === 0;

      const isCardFlipped = prevCards.find((card) => card.id === cardId)?.isFlipped;
      if (isCardFlipped) return prevCards;

      return prevCards.map((card) => {
        if (card.id === cardId) {
          if (isEven) setPrevCard(card);
          else setCurrenCard(card);

          return { ...card, isFlipped: true };
        }

        return card;
      });
    });
  };

  return (
    <div className="app">
      {/* {!isStart && <button onClick={() => setIsStart(true)}>Start</button>} */}
      {isStart && <GameBoard timeLeft={timeLeft} countMoves={countMoves} cards={cards} handleFlipCard={handleFlipCard} />}
    </div>
  );
}

export default App;
