import React, { useState } from 'react';
import './GameSlider.css';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const GameSlider = ({ title, items }) => {
  const[slideX, setSlideX] = useState(35);

  const handleLeftSlide = () => {
    let horSlide = slideX + Math.round(window.innerWidth / 2);
    if(horSlide > 35) {
      horSlide = 35;
    }
    setSlideX(horSlide);
  };

  const handleRightSlide = () => {
    let horSlide = slideX - Math.round(window.innerWidth / 2);
    let gameList = items.length * 150 + 25;
    if((window.innerWidth - gameList) > horSlide) {
      horSlide = (window.innerWidth - gameList) - 30;
    }
    setSlideX(horSlide);
  };

  return(
    <div className="gameSlider">
      <h2>{title}</h2>
      <div className="gameSlider--left" onClick={handleLeftSlide}>
        <NavigateBeforeIcon style={{ fontSize: 30 }} />
      </div>
      <div className="gameSlider--right" onClick={handleRightSlide}>
        <NavigateNextIcon style={{ fontSize: 30 }} />
      </div>
      <div className="gameSlider--listarea">
        <div className="gameSlider--list" style={{ 
          marginLeft: slideX,
          width: items.length * 180,
        }}>
          {items.map((game, key) => (
            <div className="gameSlider--item" key={key}>
              <img alt='' src={game.cover} />
              <div className="gameSlider--itemName">{game.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameSlider;
