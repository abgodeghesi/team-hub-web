/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box, Typography } from '@material-ui/core/';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '280px',
    padding: '12px',
    margin: '16px',
    userSelect: 'none',
    color: 'white',
    '@media (max-width: 444px)': {
      width: '250px',
    },
  },
  rocketBg: {
    background:
      'linear-gradient(263deg, rgba(47,102,226,1) 0%, rgba(13,74,212,1) 100%)',
  },
  tftBg: {
    background:
      'linear-gradient(263deg, rgba(244,155,54,1) 0%, rgba(255,181,98,1) 100%)',
  },
  leagueBg: {
    background:
      'linear-gradient(263deg, rgba(44,200,222,1) 0%, rgba(39,131,158,1) 100%)',
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
  },
});

const ScheduleCard = events => {
  const classes = useStyles();

  return (
    <>
      {events.data.map(item => (
        <Box
          className={[classes.container, classes[item.bgColor]]}
          boxShadow={3}
        >
          <div className={classes.cardTitle}>
            <img className={classes.cardLogo} alt="" src={item.icon} />
            <Typography variant="h5" align="center">
              <h3
                style={{
                  padding: 0,
                  margin: 0,
                  textTransform: 'capitalize',
                  fontSize: 24,
                }}
              >
                {item.title}
              </h3>
            </Typography>
          </div>
          <Typography variant="h9" align="center">
            <Box>
              <h4
                style={{
                  padding: 0,
                  margin: 0,
                  textTransform: 'capitalize',
                  fontSize: 16,
                  fontWeight: 400,
                }}
              >
                {item.day}
              </h4>
            </Box>
          </Typography>
          <Typography variant="h9" align="center">
            <Box className={classes.cardDetails}>
              <h4
                style={{ padding: 0, margin: 0, fontSize: 16, fontWeight: 400 }}
              >
                {item.hour}
              </h4>
            </Box>
          </Typography>
          <Typography variant="h5" align="center">
            <Box className={classes.cardDetails}>
              <h5
                style={{
                  padding: 0,
                  margin: 0,
                  textTransform: 'capitalize',
                  fontSize: 24,
                  fontWeight: 400,
                }}
              >
                {item.eventName}
              </h5>
            </Box>
            <Box className={classes.cardDetails}>
              <h5
                style={{
                  padding: 0,
                  margin: 0,
                  textTransform: 'capitalize',
                  fontSize: 24,
                  fontWeight: 400,
                }}
              >
                {`${item.vacancies} vagas`}
              </h5>
            </Box>
          </Typography>
          <Button
            href={item.callToAction}
            target="_blank"
            variant="contained"
            color={item.button}
            disabled={item.disabled}
            disableElevation
          >
            Registrar
          </Button>
        </Box>
      ))}
    </>
  );
};

export default ScheduleCard;
