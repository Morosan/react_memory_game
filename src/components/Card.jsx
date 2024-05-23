import React from 'react';

const Card = ({ icon, flipped, onClick, matched }) => (
  <div className={`card-component ${flipped ? 'flipped' : ''} ${matched ? 'border' : ''}`} onClick={onClick}>
    <span className="front">{icon}</span>
    <span className="back"></span>
  </div>
);

export default Card;
