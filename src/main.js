import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import GameList from './pages/GameList';
import Streamers from './pages/Streamers';
import Registrar from './pages/Registrar';
import Hof from './pages/HallofFame';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/agenda" component={Schedule} />
    <Route path="/jogos" component={GameList} />
    <Route path="/streamers" component={Streamers} />
    <Route path="/registrar" component={Registrar} />
    <Route path="/halloffame" component={Hof} />
  </Switch>
);

export default Main;
