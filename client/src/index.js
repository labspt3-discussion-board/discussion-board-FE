import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalState from './Global State';

import App from './components/App/App.jsx';

GlobalState();



ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('root'));
