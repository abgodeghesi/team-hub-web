import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import GameList from './pages/GameList';
import Tools from './pages/Tools';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/agenda" component={Schedule} />
    <Route path="/jogos" component={GameList} />
    <Route path="/ferramentas" component={Tools} />
    {/* <Route path='/historico' component={History}/> */}
  </Switch>
);

export default Main;
