import { useEffect, useState } from 'react';
import './App.scss'
import Header from './components/basic/Header/Header'
import clapping from './sounds/clapping.wav'
import SingleCard from './components/SingleCard/SingleCard';
import { cardImages } from './data/cardImages';

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setdisabled] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [difficulty, setDifficulty] = useState(5);

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
    const slicedImagesByDifficulty = [...cardImages,]
    .slice(0, difficulty)
    
    const shuffleCards = [...slicedImagesByDifficulty, ...slicedImagesByDifficulty]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random()}));

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
              return {...card, matched: true, border: true};
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

  const changeDifficulty = (difficulty) => {
    setDifficulty(difficulty);
  };

  useEffect(() => {
    resetGame()
  }, [difficulty])

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
      <Header
        changeDifficulty={changeDifficulty}
        resetGame={resetGame}
      >
      </Header>

      <main className="card-grid">
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
          // .slice(0, difficulty)
      }
      </main>

      <p>Turns: {turns}</p>
    </div>
  );
}

export default App