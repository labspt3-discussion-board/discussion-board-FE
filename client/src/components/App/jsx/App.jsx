import React, { Component, }                    from 'react';
import CssBaseline                              from '@material-ui/core/CssBaseline';
import { TestComponent, Login, Register,
         LandingPage, Navigation, }             from '../../components.js';
import { library }                              from '@fortawesome/fontawesome-svg-core';
import { faSignInAlt, faUserAlt, }              from '@fortawesome/free-solid-svg-icons';
import { fab, }                                 from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

library.add(faSignInAlt, faUserAlt, fab);

// const HOST = 'https://discussion-board-api.herokuapp.com/';
const HOST = 'http://localhost:8000/'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        premium: false,
        loggedIn: false,
      },
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
        <Navigation 
          handleLoginModal={ this.handleLoginModal } 
        />

        <Login 
          { ...this.state } 
          handleLoginModal={ this.handleLoginModal }
          HOST={ HOST }
        />

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
              HOST={ HOST }
            />)
          }} 
        />
      </Router>
    );
  }
}

export default App;
