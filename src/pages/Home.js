import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

import discordButton from '../assets/icons/join_discord.png'
import twitchButton from '../assets/icons/join_twitch.png'

const useStyles = makeStyles({
  socialMedia: {
    width: '100%',
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButtons: {
    marginRight: '24px',
    maxHeight: '50px',
    cursor: 'pointer',
  },
  homeCard: {
    width: '55%',
    marginTop: 112,
    marginLeft: 24,
    padding: 12,
    backgroundColor: '#00091a',
    color: 'white',
    borderRadius: 5,
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <>
    <Box className={classes.homeCard}>
      <Typography variant="h4" gutterBottom>
      Team Hub
      </Typography>
      <Typography variant="h6" gutterBottom paragraph="true">
      A plataforma criada para conectar a galera. Participe de infinitos campeonatosfsdfs dfsdfsdfsdfsdfsdsdfsd osdfhjnsodi jfosidj fsjd fijsdofisjd. dskm  sdasd asrew rsdaws.dasd. asd asa weadawrfaefsefdf .sd sdfsd.
      </Typography>
      <Typography variant="h6" gutterBottom paragraph="true">
      A plataforma criada para conectar a galera. Participe de infinitos campeonatosfsdfs dfsdfsdfsdfsdfsdsdfsd osdfhjnsodi jfosidj fsjd fijsdofisjd. dskm  sdasd asrew rsdaws.dasd. asd asa weadawrfaefsefdf .sd sdfsd.
      </Typography>
    </Box>
    <Box display="flex" className={classes.socialMedia}>
      <img alt='' src={discordButton} className={classes.socialButtons} />
      <img alt='' src={twitchButton} className={classes.socialButtons} />
    </Box>

    </>
  );
}
