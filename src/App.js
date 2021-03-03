import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import Disposition from './pages/Disposition';
import NotFound from './pages/NotFound';

function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/disposition" component={Disposition} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
