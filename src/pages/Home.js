import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: '88%',
    marginTop: 100,
    margin: 'auto',
    backgroundColor: '#02173d',
    color: 'white',
  },
  title: {
    fontSize: 14,
    color: 'white',
  },
  pos: {
    marginBottom: 12,
    color: 'white',
  },
  discord: {
    cursor: 'pointer',
  }
});

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Testando a Home
          </Typography>
          <Typography variant="h5" component="h2">
            Lorem
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Ipsum
          </Typography>
          <Typography variant="body2" component="p">
            Adorius
          </Typography>
        </CardContent>
      </Card>
      <img src='./public/joins_discord.png' alt="Join Us" onClick={console.log("Clicado")} className={classes.discord} />
    </>
  );
}
