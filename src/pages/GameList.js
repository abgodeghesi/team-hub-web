import React from 'react';
import GameSlider from '../components/GameSlider';

import Games from '../mock/games';

const mockedGames = Games;

export default function GameList() {
  return(
    <section>
      {mockedGames.map((game, key) => (
        <div>
          <GameSlider key={key} title={game.title} items={game.details} />
        </div>
      ))}
    </section>
  );
}
