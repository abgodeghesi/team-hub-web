import React from 'react';
import GameSlider from '../components/GameSlider';
import Alert from '../components/Alert'

import Games from '../mock/games';

const mockedGames = Games;

export default function GameList() {
  return(
    <>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Alert />
      </div>
      <section>
        {mockedGames.map((game, key) => (
          <div>
            <GameSlider key={key} title={game.title} items={game.details} />
          </div>
        ))}
      </section>
    </>
  );
}
