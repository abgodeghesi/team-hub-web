import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import viego from '../assets/icons/viego-full.jpg'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'column',
  },
  bannerContainer: {
    padding: '8px',
    alignContent: 'center',
    backgroundColor: '#02173d',
    color: 'white',
    marginBottom: '8px',
  },
  cardsContainer: {
    maxWidth: '100%',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
  },
  card: {

    width: '300px',
    height: '400px',
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#02173d',
    alignItems: 'center',
    margin: '16px',
    justifyContent: 'space-around',
  },
});

export default function Schedule() {
  const classes = useStyles();

  return (
    <>
    <div className={classes.container}>
      <div className={classes.bannerContainer}>
        <Typography variant="h4"  align='center'>ESSA SEMANA NO TEAM HUB</Typography>
      </div>
      <div className={classes.cardsContainer}>
        <div className={classes.card}>
          <img  style={{maxWidth: '220px'}} src={'https://www.nasef.org/media/2800/v_lockup_horizontal_pos_red.png'}/> 
          <Typography variant="h9" align='center'>Sexta-feira 19/03<br />A partir das 20:00</Typography>
          <Typography variant="h4" align='center'>5 X 5</Typography>
          <Typography variant="h4" align='center'>VAGAS ILIMITADAS</Typography>
          <Button variant="contained" color="primary">
            Participar
          </Button>
        </div>
        <div className={classes.card}>
          <img  style={{maxWidth: '220px'}} src={'https://logodownload.org/wp-content/uploads/2014/09/lol-league-of-Legends-logo.png'}/> 
          <Typography variant="h9" align='center'>Sábado 20/03<br />A partir das 18:00</Typography>
          <Typography variant="h4" align='center'>ARAM</Typography>
          <Typography variant="h4" align='center'>4 VAGAS</Typography>
          <Button variant="contained" color="primary">
            Participar
          </Button>
        </div>
        <div className={classes.card}>
          <img  style={{maxWidth: '220px'}} src={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c2daf28-6d53-4685-b5a8-6d44472af47e/d71eqkg-18444bae-57f5-40b6-b2a0-d218b6523bda.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi83YzJkYWYyOC02ZDUzLTQ2ODUtYjVhOC02ZDQ0NDcyYWY0N2UvZDcxZXFrZy0xODQ0NGJhZS01N2Y1LTQwYjYtYjJhMC1kMjE4YjY1MjNiZGEucG5nIn1dXX0.4Unn5RBBPxz0PMUDTZzBffwOjxfd_WU2ODBGX7JUri4'}/> 
          <Typography variant="h9" align='center' gutterbottom={true}>Sábado 20/03<br />A partir das 20:00</Typography>
          <Typography variant="h4" align='center'>Random Battles</Typography>
          <Typography variant="h4" align='center' gutterbottom={true}>8 VAGAS</Typography>
          <Button variant="contained" color="primary">
            Participar
          </Button>
        </div>
      </div>
    </div>
    </>
  );
}
