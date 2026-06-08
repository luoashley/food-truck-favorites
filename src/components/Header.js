import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="awning-wrap">
        <svg
          className="awning"
          viewBox="0 0 520 110"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <clipPath id="awning-clip">
              <path d="M10,0 Q260,-30 510,0 L480,100 Q260,130 40,100 Z" />
            </clipPath>
          </defs>
          <g clipPath="url(#awning-clip)">
            <rect x="0" y="0" width="520" height="110" fill="white" />
            <rect x="0"   y="0" width="40" height="110" fill="#E53E3E" />
            <rect x="80"  y="0" width="40" height="110" fill="#E53E3E" />
            <rect x="160" y="0" width="40" height="110" fill="#E53E3E" />
            <rect x="240" y="0" width="40" height="110" fill="#E53E3E" />
            <rect x="320" y="0" width="40" height="110" fill="#E53E3E" />
            <rect x="400" y="0" width="40" height="110" fill="#E53E3E" />
            <rect x="480" y="0" width="40" height="110" fill="#E53E3E" />
          </g>
          <path
            d="M10,0 Q260,-30 510,0 L480,100 Q260,130 40,100 Z"
            fill="none"
            stroke="rgba(0,0,0,0.1)"
            strokeWidth="1.5"
          />
          <path
            d="M40,100 Q60,115 80,100 Q100,115 120,100 Q140,115 160,100 Q180,115 200,100 Q220,115 240,100 Q260,115 280,100 Q300,115 320,100 Q340,115 360,100 Q380,115 400,100 Q420,115 440,100 Q460,115 480,100"
            fill="none"
            stroke="#E53E3E"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <h1 className="header-title">Food Truck Favorites</h1>
      <p className="header-subtitle">NYC's best street food, all in one place 🍜</p>
    </header>
  );
}

export default Header;
