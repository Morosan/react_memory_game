import React from 'react';

export default function SingleCard({ card, handleChoice, flipped, disabled, border }) {
    const handleClick = () => {
        if (!disabled) {
            handleChoice(card);
        }
    }

    return (
    <div className={`card ${flipped ? "flipped" : ""} ${card.matched ? "border" : ""}`}>
        <img src={card.src} alt={card.src} className="front" />
        <img 
            src="/img/snowflake.jpg" 
            alt="card back" 
            className="back" 
            onClick={handleClick}
        />
    </div>
  )
}
