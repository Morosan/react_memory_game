import React, { useState, useEffect } from 'react';
import DifficultySelector from './DifficultySelector';
import ResetButton from './ResetButton';
import clapping from '../sounds/clapping.wav';
import Card from './Card';
import { icons } from '../data/Icons';

// Utility function to shuffle an array
const shuffleArray = (array) => {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

// Utility function to select a random subset from an array
const getRandomIcons = (icons, count) => {
  const shuffledIcons = shuffleArray(icons);
  return shuffledIcons.slice(0, count);
};

const MemoryGame = () => {
  // State management
  const [difficulty, setDifficulty] = useState(5); // Difficulty level
  const [cards, setCards] = useState([]); // Cards on the board
  const [flippedCards, setFlippedCards] = useState([]); // Currently flipped cards
  const [matchedCards, setMatchedCards] = useState([]); // Matched cards
  const [showAll, setShowAll] = useState(false); // Show all cards for a brief period
  const [moveCount, setMoveCount] = useState(0); // Move counter

  // Initialize game on difficulty change
  useEffect(() => {
    initializeGame();
  }, [difficulty]);

  // Play clapping sound if all cards are matched
  useEffect(() => {
    if (matchedCards.length === difficulty) {
      startClapping();
    }
  }, [matchedCards, difficulty]);

  // Function to play clapping sound
  const startClapping = () => {
    new Audio(clapping).play();
  };

  // Function to initialize the game
  const initializeGame = () => {
    const selectedIcons = getRandomIcons(icons, difficulty); // Select random icons based on difficulty
    const gameIcons = [...selectedIcons, ...selectedIcons];
    const shuffledGameIcons = shuffleArray(gameIcons);

    // Set initial state for cards
    setCards(shuffledGameIcons.map((icon, index) => ({ id: index, icon, flipped: true })));
    setFlippedCards([]);
    setMatchedCards([]);
    setShowAll(true);

    // Hide all cards after 3 seconds
    setTimeout(() => {
      setCards(shuffledGameIcons.map((icon, index) => ({ id: index, icon, flipped: false })));
      setShowAll(false);
    }, 3000);
  };

  // Handle card click event
  const handleCardClick = (index) => {
    // Prevent action if two cards are already flipped, or if the clicked card is already flipped or matched
    if (flippedCards.length === 2 || flippedCards.includes(index) || cards[index].flipped || showAll) return;

    setMoveCount((prevCount) => prevCount + 1); // Increment move count
    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    // Update card state to show flipped card
    const newCards = cards.map((card, i) => (i === index ? { ...card, flipped: true } : card));
    setCards(newCards);

    // Check for match if two cards are flipped
    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards;
      if (cards[firstIndex].icon === cards[secondIndex].icon) {
        setMatchedCards([...matchedCards, cards[firstIndex].icon]);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setCards(cards.map((card, i) => (i === firstIndex || i === secondIndex ? { ...card, flipped: false } : card)));
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  // Reset game
  const resetGame = () => {
    initializeGame();
    setMoveCount(0); // Reset move count
  };

  return (
    <div className="memory-game">
      <header>
        <h1>Memory Game</h1>
        <ResetButton onClick={resetGame} />
      </header>
      <DifficultySelector difficulty={difficulty} setDifficulty={setDifficulty} />
      <div className="board-component">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            icon={card.icon}
            flipped={card.flipped}
            matched={matchedCards.includes(card.icon)}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
      <p className="move-counter">Moves: {moveCount}</p> {/* Display move count */}
    </div>
  );
};

export default MemoryGame;
