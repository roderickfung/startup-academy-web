import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// main app
import App from './containers/App';

ReactDOM.render((
  <Router>
    <App />
  </Router>
), document.getElementById('app'))