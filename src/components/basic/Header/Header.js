import React, { useEffect, useState } from 'react';

const Header = ({ changeDifficulty, resetGame }) => {
  const [currentDifficulty, setCurrentDifficulty] = useState(5);

  useEffect(() => {
    // Retrieve the difficulty from local storage when the component mounts
    const storedDifficulty = localStorage.getItem('currentDifficulty');
    if (storedDifficulty) {
      setCurrentDifficulty(parseInt(storedDifficulty, 10));
    }
  }, []);

  useEffect(() => {
    // Update the class of the main element based on the current difficulty
    const mainElement = document.querySelector('main');
    mainElement.classList.remove('easy', 'medium', 'hard');
    if (currentDifficulty === 5) {
      mainElement.classList.add('easy');
    } else if (currentDifficulty === 7) {
      mainElement.classList.add('medium');
    } else if (currentDifficulty === 10) {
      mainElement.classList.add('hard');
    }
    
    // Store the current difficulty in local storage
    localStorage.setItem('currentDifficulty', currentDifficulty.toString());
  }, [currentDifficulty]);

  const handleDifficultyChange = (newDifficulty) => {
    changeDifficulty(newDifficulty);
    setCurrentDifficulty(newDifficulty);
  };

  return (
      <header className="header">
        <div className="logo-wrapper">
          <h2 className="logo">Memory Game</h2>
          <button className="reset-game" onClick={resetGame}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M252.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-184 184c-15.6 15.6-15.6 40.9 0 56.6l184 184c15.6 15.6 40.9 15.6 56.6 0l184-184c15.6-15.6 15.6-40.9 0-56.6l-184-184zM248 224c0 13.3-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24zM96 248c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24zm128 80c13.3 0 24 10.7 24 24s-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24zm128-80c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24zM224 72c13.3 0 24 10.7 24 24s-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24zm96 392c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H472.5c13.4 26.9 8.8 60.5-13.6 82.9L320 413.8V464zm160-88c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z"/></svg>
          </button>
        </div>

      <ul className="difficulty-list">
        <li className="difficulty-item">
          <button onClick={() => handleDifficultyChange(5)}>Easy</button>
        </li>
        <li className="difficulty-item">
          <button onClick={() => handleDifficultyChange(7)}>Medium</button>
        </li>
        <li className="difficulty-item">
          <button onClick={() => handleDifficultyChange(10)}>Hard</button>
        </li>
      </ul>

    </header>
  );
}

export default Header;
