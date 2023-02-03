import { useEffect, useState } from 'react';
import './App.css'
import clapping from '../public/sounds/clapping'
import SingleCard from './components/SingleCard/SingleCard';
// import SelectControl from './components/SelectControl/SelectControl';

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
]

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setdisabled] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('defaultTheme'); 
  // const [selectedTag, setSelectedTag] = useState('');

  //filter cards
  // const filterCards = () => {
  //   setCards(prevCards => {
  //     return prevCards.filter(card => card.tag === selectedTag);
  //   });
  // };
  

  //shuffle cards 
  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

      setChoiceOne(null);
      setChoiceTwo(null);
      setCards(shuffleCards);
      setTurns(0);
      // filterCards();
  }

  //handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
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

  //reset choices & increse turn
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

  // check if all cards are flipped
  const checkFlipped = () => {
    
  }

  // useEffect(() => {
  //   filterCards();
  // }, [selectedTag]);

  //start a new game automatically
  useEffect(() => {
    shuffleCards()
  }, [])

  return (
    <div className="App">
      <h1>Memory Game</h1>
      
      {/* <SelectControl selectedTheme={selectedTheme} onChange={setSelectedTheme}/> */}

      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards
          .map(card => (
            <SingleCard 
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          ))
          .slice(0, 12)
      }
      </div>

      <p>Turns: {turns}</p>
    </div>
  );
}

export default App