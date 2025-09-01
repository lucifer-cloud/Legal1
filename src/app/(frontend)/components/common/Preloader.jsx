
import React from 'react';

const Preloader = () => {
  return (
    <div id="preloader">
      <div className="preloader-inner">
        <div className="spinner"></div>
        <div className="loading-text">
          {['L', 'A', 'W', 'R', 'E', 'T', 'O'].map((char, index) => (
            <span key={index} data-preloader-text={char} className="characters">
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preloader;