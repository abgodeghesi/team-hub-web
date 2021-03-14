import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import discordButton from '../assets/icons/join_discord.png'
import twitchButton from '../assets/icons/join_twitch.png'

const useStyles = makeStyles({
  root:{
    display: 'flex',
    marginTop: 84,
    width: '100%',
    flexDirection: 'column',
  },
  homeCard: {
    width: '50%',
    margin: 'auto',
    padding: 12,
    backgroundColor: '#00091a',
    borderRadius: 5,
  },
  socialMedia: {
    marginTop: '24px',
    margin: 'auto',
  },
  socialButtons: {
    marginRight: '24px',
    maxHeight: '50px',
    cursor: 'pointer',
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <>
    <div className={classes.root}>
      <div className={classes.homeCard}>
        <Typography variant="h4" gutterBottom align='center'>
        Team Hub Web v0.1.2
        </Typography>
        <Typography variant="h5" gutterBottom>
        Features disponíveis até o momento:
        </Typography>
        <Typography variant="h6" gutterBottom paragraph='true'>
        • Header responsivo<br />• Home (BG desabilitado)<br />• Slider de games na página "Nossos Jogos"
        </Typography>
      </div>
      <div className={classes.socialMedia}>
        <img alt='' src={discordButton} className={classes.socialButtons} />
        <img alt='' src={twitchButton} className={classes.socialButtons} />
      </div>
    </div>
    </>
  );
};
