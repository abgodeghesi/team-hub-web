/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GameSlider from '../components/GameSlider';
import Alert from '../components/Alert';

import Games from '../mock/games';
import TextMock from '../mock/texts';

const useStyles = makeStyles({
  alert: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    width: 'calc(100vw - 140px)',
  },
});

export default function GameList() {
  const classes = useStyles();

  return (
    <>
      <section style={{ paddingLeft: '140px' }}>
        <div className={classes.alert}>
          <Alert text={TextMock.MissingGames} />
        </div>
        {Games.map((game, key) => (
          <div>
            <GameSlider key={key} title={game.title} items={game.details} />
          </div>
        ))}
      </section>
    </>
  );
}
