import React, { Component, }                    from 'react';
import CssBaseline                              from '@material-ui/core/CssBaseline';
import { TestComponent, Login, Register,
         LandingPage, Navigation, }             from '../../components.js';
import { library }                              from '@fortawesome/fontawesome-svg-core';
import { faSignInAlt, faUserAlt, }              from '@fortawesome/free-solid-svg-icons';
import { fab, }                                 from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
      <Router>
        <CssBaseline />
        <Navigation handleLoginModal={ this.handleLoginModal } />
        <Login { ...this.state } handleLoginModal={ this.handleLoginModal } />

        <Route path="/" exact render={() => {
          return (
            <LandingPage
              handleLoginModal={ this.handleLoginModal }
            />)
          }}
        />

        <Route path="/register/" render={() => {
          return (
            <Register 
              handleLoginModal={ this.handleLoginModal }
            />)
          }} 
        />
      </Router>
    );
  }
}

export default App;
