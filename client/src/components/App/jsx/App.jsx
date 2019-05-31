import React, { Component, }                     from 'react';
import CssBaseline               from '@material-ui/core/CssBaseline';
import { TestComponent, Login, Register, LandingPage } from '../../components.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserAlt, } from '@fortawesome/free-solid-svg-icons';
import { fab, }           from '@fortawesome/free-brands-svg-icons';

library.add(faSignInAlt, faUserAlt, fab);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginModal: {
        open: false,
      },
    };
  }

  handleLoginModal = props =>{
    this.setState({
      ...this.state,
      loginModal: {
        ...this.state.loginModal,
        open: !this.state.loginModal.open,
      }
    });
  }

  render() {
    return (
      <>
        <CssBaseline />
        <Login { ...this.state } handleLoginModal={ this.handleLoginModal } />
        { /* <Register handleLoginModal={ this.handleLoginModal } /> */ }
        <LandingPage />
      </>
    );
  }
}

export default App
