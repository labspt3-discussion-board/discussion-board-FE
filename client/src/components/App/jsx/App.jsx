import React                     from 'react';
import CssBaseline               from '@material-ui/core/CssBaseline';
import { TestComponent, Login, } from '../../components.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserAlt, } from '@fortawesome/free-solid-svg-icons';
import { fab, }           from '@fortawesome/free-brands-svg-icons';

library.add(faSignInAlt, faUserAlt, fab);

function App() {
  return (
    <>
      <CssBaseline />
      {/* <TestComponent /> */}
      <Login />

    </>
  );
}

export default App;
