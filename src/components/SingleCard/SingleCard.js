import React from 'react';
import './SingleCard.css';

export default function SingleCard({ card, handleChoice, flipped, dissabled }) {
    const handleClick = () => {
        if (!dissabled) {
            handleChoice(card)
        }
    }
  
    return (
    <div className="card">
        <div className={flipped ? "flipped" : ""}>
            <img src={card.src} alt={card.src} className="front" />
            <img 
                src="/img/cover.png" 
                alt="card back" 
                className="back" 
                onClick={handleClick}
            />
        </div>
    </div>
  )
}
