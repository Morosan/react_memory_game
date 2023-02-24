import React from 'react';
import './Header.scss';

const Header = ({ changeDifficulty, resetGame }) => {
  return (
      <header className="header">
        <div className="logo-wrapper">
          <h1 className="logo">Logo</h1>
          <button className="reset-game" onClick={resetGame}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M252.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-184 184c-15.6 15.6-15.6 40.9 0 56.6l184 184c15.6 15.6 40.9 15.6 56.6 0l184-184c15.6-15.6 15.6-40.9 0-56.6l-184-184zM248 224c0 13.3-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24zM96 248c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24zm128 80c13.3 0 24 10.7 24 24s-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24zm128-80c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24zM224 72c13.3 0 24 10.7 24 24s-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24zm96 392c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H472.5c13.4 26.9 8.8 60.5-13.6 82.9L320 413.8V464zm160-88c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z"/></svg>
          </button>
        </div>

      <ul className="difficulty-list">
        <li className="difficulty-item">
          <button onClick={() => changeDifficulty(5)}>Easy</button>
        </li>
        <li className="difficulty-item">
          <button onClick={() => changeDifficulty(7)}>Medium</button>
        </li>
        <li className="difficulty-item">
          <button onClick={() => changeDifficulty(10)}>Hard</button>
        </li>
      </ul>

    </header>
  );
}

export default Header;
