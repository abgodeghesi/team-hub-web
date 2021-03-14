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
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Schedule() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Testando a Schedule
        </Typography>
        <Typography variant="h5">
          Lorem
        </Typography>
        <Typography className={classes.pos}>
          Ipsum
        </Typography>
        <Typography variant="body2" component="p">
          Adorius
        </Typography>
      </CardContent>
    </Card>
  );
}
