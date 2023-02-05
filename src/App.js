import { useEffect, useState } from 'react';
import './App.css'
import clapping from './sounds/clapping.wav'
import SingleCard from './components/SingleCard/SingleCard';

const cardImages = [
  {
    "src": "/img/anna.jpg",
    "tag": "default"
  },
  {
    "src": "/img/bruni.jpg",
    "tag": "default"
  },
  {
    "src": "/img/elsa.jpg",
    "tag": "default"
  },
  {
    "src": "/img/kristoff.jpg",
    "tag": "default"
  },
  {
    "src": "/img/olaf.jpg",
    "tag": "default"
  },
  {
    "src": "/img/sven.jpg",
    "tag": "default"
  },
  {
    "src": "/img/hans.jpg",
    "tag": "default"
  },
  {
    "src": "/img/oaken.jpg",
    "tag": "default"
  },
  {
    "src": "/img/snowgies.jpg",
    "tag": "default"
  },
  {
    "src": "/img/marshmallow.jpg",
    "tag": "default"
  },
]

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setdisabled] = useState(false);
  const [flipped, setFlipped] = useState(false);

  //render cards
  const renderCards = (cards) => {
    setCards(cards);
  }

  const showToMemorize = () => {
    setFlipped(true);
    setTimeout(() => setFlipped(false), 3000);
  }

  //shuffle cards 
  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

      setChoiceOne(null);
      setChoiceTwo(null);
      renderCards(shuffleCards);
      setTurns(0);
  }

  //handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    console.log("handleChoice");
  }

  //compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setdisabled(true);
      
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched: true};
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  // reset choices & increse turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setdisabled(false);
  }

  // start clapping function
  const startClapping = () => {
    new Audio(clapping).play()
  }

  // check if all cards are flipped function
  const checkFlipped = () => {
    const allCardsFlipped = cards.every(card => card.matched === true);
    console.log("turns",turns)
    if (allCardsFlipped && turns !== 0) {
      startClapping()
    }
  }

  // call the checkFlipped
  useEffect(() => {
    checkFlipped()
  }, [choiceOne, choiceTwo, cards])

  //start a new game automatically
  useEffect(() => {
    shuffleCards()
    showToMemorize()
  }, []) 
  
  //start a new game by clicking on the New game button
  const resetGame = () => {
    shuffleCards()
    showToMemorize()
  }

  return (
    <div className="App">
      <h1>Memory Game</h1>
      
      <button onClick={resetGame}>New Game</button>

      <div className="card-grid">
        {cards
          .map(card => (
            <SingleCard 
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={flipped || card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          ))
          .slice(0, 20)
      }
      </div>

      <p>Turns: {turns}</p>
    </div>
  );
}

export default App