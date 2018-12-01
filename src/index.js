import React from 'react';
import { render } from 'react-dom';

import App from './App';
import Registro from './Registro';
import Sobre from './Sobre';

import { BrowserRouter, Switch, Route } from 'react-router-dom'


render(
  <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/registro" component={Registro} />
            <Route path="/sobre" component={Sobre} />
        </Switch>
    </ BrowserRouter>,
  document.getElementById('root')
);


