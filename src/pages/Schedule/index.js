import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core/';

import TextMock from '../../mock/texts';
import events from '../../mock/events';
import Alert from '../../components/Alert';
import ScheduleCard from '../../components/ScheduleCard';

const useStyles = makeStyles({
  alert: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: '12px',
  },
  container: {
    padding: 12,
    borderRadius: 5,
    margin: '0 auto',
    '@media(max-width: 780px)' : {
      paddingLeft: '140px',
    }
  },
  cardRow: {
    display: 'flex',
    justifyContent: 'center',
    '@media(max-width: 780px)' : {
      alignItems: 'center',
      flexDirection: 'column',
    }
  },
  rocketContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minWidth: '280px',
    padding: '12px',
    background: 'linear-gradient(263deg, rgba(47,102,226,1) 0%, rgba(13,74,212,1) 100%)',
    margin: '16px',
    userSelect: 'none',
  },
  tftContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minWidth: '280px',
    padding: '12px',
    background: 'linear-gradient(263deg, rgba(244,155,54,1) 0%, rgba(255,181,98,1) 100%)',
    margin: '16px',
    userSelect: 'none',
  },
  leagueContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minWidth: '280px',
    padding: '12px',
    background: 'linear-gradient(263deg, rgba(44,200,222,1) 0%, rgba(39,131,158,1) 100%)',
    margin: '16px',
    userSelect: 'none',
  },
  cardTitle: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: '5px',
  },
  cardLogo: {
    maxHeight: '110px',
    marginBottom: '16px',
  },
  cardDetails: {
    marginBottom: '8px',
    marginTop: '8px',
  },
  wheat: {
    color: 'wheat',
    textShadow: '2px 2px black',
  },
});

export default function Schedule() {
  const classes = useStyles();

  return (
    <>
      <main className={classes.container}>
        <div className={classes.alert}>
          <Alert text={TextMock.ScheduleDetails} />
        </div>
        <Typography variant="h3" align="center" className={classes.wheat}>
          ESSA SEMANA NO TEAM HUB
        </Typography>
        <section className={classes.cardRow}>
          <ScheduleCard data={events} />
        </section>
      </main>
    </>
  );
}
