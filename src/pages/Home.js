import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

import serverLogo from '../assets/logos/discord_server_logo.png';
import discordButton from '../assets/icons/join_discord.png';
import twitchButton from '../assets/icons/join_twitch.png';

import TextMock from '../mock/texts.js';

const useStyles = makeStyles({
  root:{
    marginTop: 84,
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  homeCard: {
    maxWidth: '80%',
    display: 'flex',
    flexDirection: 'column',
    padding: 12,
    backgroundColor: '#02173d',
    borderRadius: 5,
  },
  serverLogo: {
    maxWidth: '200px',
    alignSelf: 'center',
    marginBottom: '5px',
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
        <img alt='' src={serverLogo} className={classes.serverLogo}/>
        <Box mb={5}>
          <Typography variant="h3" align='center'>
            Team Hub
          </Typography>
        </Box>
        <Box mb={5}>
          <Typography variant="h5" align='center'>
            {TextMock.HomeIntro}
          </Typography>
        </Box>
        <Box mb={5}>
          <Typography variant="h5" align='center'>
            {TextMock.HomeContent}
          </Typography>
        </Box>
        <Typography variant="h9" align='center'>
          {TextMock.SocialMedia}
        </Typography>
        <div className={classes.socialMedia}>
          <img alt='' src={discordButton} className={classes.socialButtons} />
          <img alt='' src={twitchButton} className={classes.socialButtons} />
        </div>
      </div>
    </div>
    </>
  );
};
