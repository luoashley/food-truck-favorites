import React from 'react';
import './TruckCard.css';

function TruckCard({ truck }) {
  return (
    <article className="card">
      <div className="card-emoji">{truck.emoji}</div>
      <div className="card-body">
        <h2 className="card-name">{truck.name}</h2>
        <p className="card-cuisine">{truck.cuisine}</p>
        <p className="card-location">📍 {truck.location}</p>
        <a
          className="btn-menu"
          href={truck.menuUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Menu
        </a>
      </div>
    </article>
  );
}

export default TruckCard;
