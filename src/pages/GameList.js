import React from 'react';
import GameSlider from '../components/GameSlider';
import Alert from '../components/Alert'

import Games from '../mock/games';
import TextMock from '../mock/texts';

export default function GameList() {
  return(
    <>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Alert text={TextMock.MissingGames} />
      </div>
      <section>
        {Games.map((game, key) => (
          <div>
            <GameSlider key={key} title={game.title} items={game.details} />
          </div>
        ))}
      </section>
    </>
  );
}
