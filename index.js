import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, hashHistory } from 'react-router-dom';
import App from './containers/app';

ReactDOM.render((
  <BrowserRouter history='hashHistory'>
    <App />
  </BrowserRouter>
), document.getElementById('app'))