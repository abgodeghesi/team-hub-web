import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';

import discordButton from '../assets/icons/join_discord.png'

const useStyles = makeStyles({
  socialMedia: {
    width: '100%',
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButtons: {
    marginRight: '24px',
    maxHeight: '60px',
    cursor: 'pointer',
  },
  homeCard: {
    width: '55%',
    marginTop: 80,
    marginLeft: 16,
    padding: 8,
    backgroundColor: '#00091a',
    color: 'white',
    borderRadius: 5,
    justifyContent: 'center',
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <>
    <div className={classes.homeCard} >
      <Typography variant="h4" gutterBottom align='center' >
      Team Hub
      </Typography>
      <Typography variant="h6" gutterBottom paragraph="true">
      ' A plataforma criada para conectar a galera. Participe de infinitos campeonatosfsdfs dfsdfsdfsdfsdfsdsdfsd osdfhjnsodi jfosidj fsjd fijsdofisjd. dskm  sdasd asrew rsdaws.dasd. asd asa weadawrfaefsefdf .sd sdfsd.
      </Typography>
      <Typography variant="h6" gutterBottom paragraph="true">
      A plataforma criada para conectar a galera. Participe de infinitos campeonatosfsdfs dfsdfsdfsdfsdfsdsdfsd osdfhjnsodi jfosidj fsjd fijsdofisjd. dskm  sdasd asrew rsdaws.dasd. asd asa weadawrfaefsefdf .sd sdfsd.
      </Typography>
    </div>
    <Container className={classes.socialMedia}>
      <img alt='' src={discordButton} className={classes.socialButtons} />
      <img alt='' src={discordButton} className={classes.socialButtons} />
      <img alt='' src={discordButton} className={classes.socialButtons} />
    </Container>
    </>
  );
}
