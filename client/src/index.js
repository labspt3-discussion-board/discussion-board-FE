import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/jsx/App';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalState from './Global State';

GlobalState();


// import { setGlobal } from 'reactn';

// import { dummyData } from './DummyData';


//   setGlobal({
//     discussionList: dummyData,
//     openModal: false
//   });



ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('root'));

