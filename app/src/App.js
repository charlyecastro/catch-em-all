import React from 'react';
import { HashRouter as Router, Switch, Redirect, Route } from 'react-router-dom';

import constants from "./components/constants.js";
import Home from "./components/home"
import Pokemon from "./components/pokemon"
import Pokedex from "./components/pokedex"
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={constants.routes.home} component={Home} />
        <Route exact path={constants.routes.pokemon} component={Pokemon} />
        <Route exact path={constants.routes.pokedex} component={Pokedex} />
        <Redirect to={constants.routes.signin} />
      </Switch>
    </Router>
  );
}

export default App;
