import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Textbreaker from './pages/textbreaker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path='/textbreaker' component={Textbreaker} />
        <Route path='/' component={App} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();