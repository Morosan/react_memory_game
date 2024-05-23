import React from 'react';

const DifficultySelector = ({ difficulty, setDifficulty }) => {
  return (
    <section className="difficulty-component">
      <ul className="difficulty-list">
        <li className="difficulty-item">
          <button onClick={() => setDifficulty(5)} className={difficulty === 5 ? 'active' : ''}>Easy</button>
        </li>
        <li className="difficulty-item">
          <button onClick={() => setDifficulty(7)} className={difficulty === 7 ? 'active' : ''}>Medium</button>
        </li>
        <li className="difficulty-item">
          <button onClick={() => setDifficulty(10)} className={difficulty === 10 ? 'active' : ''}>Hard</button>
        </li>
      </ul>
    </section>
  );
};

export default DifficultySelector;
