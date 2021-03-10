import React from 'react';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
// import GameList from './pages/GameList';
// import History from './pages/History';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/schedule' component={Schedule}/>
    {/* <Route path='/games' component={GameList}/>
    <Route path='/history' component={History}/> */}
  </Switch>
);  


export default Main;