import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box, Typography } from '@material-ui/core/';

import TextMock from '../mock/texts';
import Alert from '../components/Alert';

import rocketIcon from '../assets/icons/ricket-icon.png';
import tftIcon from '../assets/icons/tft-icon.png'
import leagueIcon from '../assets/icons/lol-icon.png'

const useStyles = makeStyles({
  alert: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: '12px',
  },
  container: {
    padding: 12,
    backgroundColor: '#02173d',
    borderRadius: 5,
  },
  cardRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rocketContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minWidth: '280px',
    padding: '12px',
    background: 'linear-gradient(110deg, #062c7f 60%, #0a47cc 60%);',
    margin: '16px',
  },
  tftContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minWidth: '280px',
    padding: '12px',
    background: 'linear-gradient(110deg, #DF6F11 60%, #EC9144 60%);',
    margin: '16px'
    
  },
  leagueContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minWidth: '280px',
    padding: '12px',
    background: 'linear-gradient(110deg, #0E5F7F 60%, #227EA3 60%);',
    margin: '16px'
  },
  cardTitle: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: '5px',
  },
  cardLogo: {
    maxHeight: '110px',
    marginBottom: '16px'
  },
  cardDetails: {
    marginBottom: '8px',
    marginTop: '8px',
  },
});

export default function Schedule() {
  const classes = useStyles();

  return (
    <>
    <div className={classes.alert}>
      <Alert text={TextMock.ScheduleDetails} />
    </div>
      <main className={classes.container}>
        <Typography variant="h3" align="center">
          ESSA SEMANA NO TEAM HUB
        </Typography>
        <section className={classes.cardRow}>
          <Box className={classes.rocketContainer} boxShadow={3}>
            <div className={classes.cardTitle}>
              <img className={classes.cardLogo} alt='' src={rocketIcon} />
              <Typography variant="h5" align="center">
                Rocket League
              </Typography>
            </div>
            <Typography variant="h9" align="center">
              <Box className={classes.cardDetails}>
                Quinta-Feira 01/04<br/>A partir das 20:00
              </Box>
            </Typography>
            <Typography variant="h5" align="center">
              <Box className={classes.cardDetails}>
                  3 vs 3
              </Box>
              <Box className={classes.cardDetails}>
                  8 Vagas
              </Box>
            </Typography>
            <Button variant="contained" color="primary" disableElevation>
              Registrar
            </Button>
          </Box>
          <Box className={classes.tftContainer} boxShadow={3}>
            <div className={classes.cardTitle}>
              <img className={classes.cardLogo} alt='' src={tftIcon} />
              <Typography variant="h5" align="center">
                TFT
              </Typography>
            </div>
            <Typography variant="h9" align="center">
              <Box className={classes.cardDetails}>
                Sexta-Feira 02/04<br/>A partir das 18:00
              </Box>
            </Typography>
            <Typography variant="h5" align="center">
              <Box className={classes.cardDetails}>
                  Pontos Corridos
              </Box>
              <Box className={classes.cardDetails}>
                  16 Vagas
              </Box>
            </Typography>
            <Button variant="contained" color="primary" disableElevation>
              Registrar
            </Button>
          </Box>
          <Box className={classes.leagueContainer} boxShadow={3}>
            <div className={classes.cardTitle}>
              <img className={classes.cardLogo} alt='' src={leagueIcon} />
              <Typography variant="h5" align="center">
                League of Legends
              </Typography>
            </div>
            <Typography variant="h9" align="center">
              <Box className={classes.cardDetails}>
                Sábado 03/04<br/>A partir das 21:00
              </Box>
            </Typography>
            <Typography variant="h5" align="center">
              <Box className={classes.cardDetails}>
                  5x5 da Zoeira
              </Box>
              <Box className={classes.cardDetails}>
                  10 Vagas
              </Box>
            </Typography>
            <Button variant="contained" color="primary" disableElevation>
              Registrar
            </Button>
          </Box>
        </section>
      </main>
    </>
  );
}
