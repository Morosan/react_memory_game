import React from 'react';

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
    const handleClick = () => {
        if (!disabled) {
            handleChoice(card);
        }
    }

    return (
    <div className={flipped ? "card flipped" : "card"}>
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
