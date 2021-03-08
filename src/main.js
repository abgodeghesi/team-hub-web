import React from 'react';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/schedule' component={Schedule}/>
  </Switch>
);


export default Main;