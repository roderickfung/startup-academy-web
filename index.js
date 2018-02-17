import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, hashHistory } from 'react-router-dom';
import App from './containers/app';

ReactDOM.render((
  <Router history='hashHistory'>
    <App />
  </Router>
), document.getElementById('app'))