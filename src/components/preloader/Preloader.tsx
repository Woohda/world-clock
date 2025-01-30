import React from "react";
import "./Preloader.scss";
const Preloader = () => {
  return (
    <div className="clock">
      <svg width="200" height="200" viewBox="0 0 200 200">
        <circle
          cx="100"
          cy="100"
          r="98"
          stroke="black"
          strokeWidth="2"
          fill="white"
        />
        {[...Array(12)].map((_, i) => (
          <line
            key={i}
            x1="100"
            y1="5"
            x2="100"
            y2="15"
            transform={`rotate(${i * 30} 100 100)`}
            stroke="black"
            strokeWidth="2"
          />
        ))}
        <line x1="100" y1="100" x2="100" y2="60" className="hourHand" />
        <line x1="100" y1="100" x2="100" y2="20" className="minuteHand" />
        <line x1="100" y1="100" x2="100" y2="10" className="secondHand" />
      </svg>
    </div>
  );
};

export default Preloader;
