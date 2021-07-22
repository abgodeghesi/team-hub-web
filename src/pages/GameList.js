/* eslint-disable */
import React from 'react';
import GameSlider from '../components/GameSlider';

import Games from '../mock/games';

export default function GameList() {
  return (
    <>
      <section
        style={{
          marginTop: '60px',
          paddingTop: '4rem',
          height: '100vh',
          backgroundColor: '#00091a',
          overflow: 'scroll',
        }}
      >
        {Games.map((game, key) => (
          <div>
            <GameSlider key={key} title={game.title} items={game.details} />
          </div>
        ))}
      </section>
    </>
  );
}
