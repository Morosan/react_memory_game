import { useEffect, useState } from 'react';
import './App.css'
import SingleCard from './components/SingleCard/SingleCard';
import SelectControl from './components/SelectControl/SelectControl';

const cardImages = [
  {
    "src": "/img/helmet-1.png",
    "tag": "default"
  },
  {
    "src": "/img/potion-1.png",
    "tag": "default"
  },
  {
    "src": "/img/ring-1.png",
    "tag": "default"
  },
  {
    "src": "/img/scroll-1.png",
    "tag": "default"
  },
  {
    "src": "/img/shield-1.png",
    "tag": "default"
  },
  {
    "src": "/img/sword-1.png",
    "tag": "default"
  },
  {
    "src": "/img/frozen-snowflake.png",
    "tag": "frozen"
  },
  {
    "src": "/img/frozen-snowflake.png",
    "tag": "frozen"
  },
  {
    "src": "/img/frozen-snowflake.png",
    "tag": "frozen"
  },
  {
    "src": "/img/frozen-snowflake.png",
    "tag": "frozen"
  },
  {
    "src": "/img/frozen-snowflake.png",
    "tag": "frozen"
  },
  {
    "src": "/img/frozen-snowflake.png",
    "tag": "frozen"
  },
]

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [dissabled, setDissabled] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('defaultTheme'); 
  const [selectedTag, setSelectedTag] = useState('');

  //shuffle cards 
  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

      setChoiceOne(null);
      setChoiceTwo(null);
      setCards(shuffleCards);
      setTurns(0);
  }

  //handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  //compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDissabled(true);
      
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

  console.log("cards", cards)

  //reset choices & increse turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDissabled(false);
  }

  //start a new game automatically
  useEffect(() => {
    shuffleCards()
  }, [])

  const filteredCards = cardImages.filter((card) => card.tag === selectedTag);
  const cardList = filteredCards.slice(0, 6).map((card, index) => (
    <SingleCard
      key={card.id}
      card={card}
      handleChoice={handleChoice}
      flipped={card === choiceOne || card === choiceTwo || card.matched}
      dissabled={dissabled}
    />
  ));

  console.log("filteredCards", filteredCards)
  console.log("cardList", cardList)

  return (
    <div className="App">
      <h1>Memory Game</h1>
      
      <SelectControl selectedTheme={selectedTheme} onChange={setSelectedTheme}/>

      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.slice(0, 12).map(card => (
          <SingleCard 
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            dissabled={dissabled}
          />
        ))}
      </div>

      <p>Turns: {turns}</p>
    </div>
  );
}

export default App