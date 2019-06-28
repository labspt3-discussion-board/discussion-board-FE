import React, { Component, } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  Login, Register, Landing,
  Navigation, LoginMessageModal,
  NewSubforumModal, SearchResults, Discussion,
  SubForum
} from '../components.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSignInAlt, faUserAlt, } from '@fortawesome/free-solid-svg-icons';
import { fab, } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Cookies from 'js-cookie';
import Axios from 'axios';
import { HOST, CLIENT, } from '../../constants.js';

library.add(faSignInAlt, faUserAlt, fab);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        premium: false,
        avatarImg: '',
        loggedIn: false,
      },
      loginModal: {
        open: false,
        loading: true,
      },
      loginMessageModal: {
        open: false,
      },
      newSubforumModal: {
        open: false,
      }
    };
  }

  getSearchParams = () => {

    let searchParamsString = window.location.search.substring(1, window.location.search.length);
    searchParamsString = searchParamsString.split('&');

    const searchParamsArr = searchParamsString.map((param) => {
      return param.split('=');
    });

    const searchParams = {};

    for (let i in searchParamsArr) {
      searchParams[searchParamsArr[i][0]] = searchParamsArr[i][1];
    }

    return searchParams;
  }

  handleLoginModal = e => {
    this.setState({
      ...this.state,
      loginModal: {
        ...this.state.loginModal,
        open: !this.state.loginModal.open,
        loading: true,
      }
    });
  }

  handleLoginMessageModal = e => {
    this.setState({
      loginMessageModal: {
        open: !this.state.loginMessageModal,
      }
    });
  }

  handleLogin = (e, formData) => {
    e.preventDefault();

    Axios({
      url: `${HOST}api/users/login/`,
      method: 'post',
      data: {
        username: formData.email.value,
        password: formData.password.value,
      }
    }).then(res => {

      if (res.data.user) {
        const user = {
          id: res.data.user.id,
          firstName: res.data.user.first_name,
          lastName: res.data.user.last_name,
          email: res.data.user.email,
          username: res.data.user.username,
          premium: res.data.user.premium,
          avatarImg: res.data.user.avatar_img,
          loggedIn: true,
        }

        setTimeout(() => {
          this.setState({
            user,
            loginModal: {
              ...this.state.loginModal,
              loading: false,
            }
          });

        }, 400);
      }

      if (res.data.token) {
        localStorage.setItem('LAMBDA_FORUM_AUTH_TOKEN', res.data.token);
      }

    }).catch(err => console.log(err));

  }

  handleLogout = e => {

    Axios({
      url: `${HOST}api/users/logout/`,
      method: 'get',
      headers: {
        'Authorization': 'Token ' + localStorage.getItem('LAMBDA_FORUM_AUTH_TOKEN'),
      }
    }).then(res => {

      const user = {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        premium: '',
        loggedIn: false,
      }

      this.setState({
        user,
      });

      localStorage.removeItem('LAMBDA_FORUM_AUTH_TOKEN');
      localStorage.removeItem('avatarImg');

    }).catch(err => console.log(err));
  }

  handleRegister = (e, formData) => {
    e.preventDefault();

    Axios({
      url: HOST + 'api/users/register/',
      method: 'post',
      withCredentials: true,
      data: {
        firstName: formData.firstName.value,
        lastName: formData.lastName.value,
        email: formData.email.value,
        username: formData.username.value,
        password: formData.password.value,
      }
    }).then(res => {

      if (res.data.user) {
        const user = {
          id: res.data.user.id,
          firstName: res.data.user.first_name,
          lastName: res.data.user.last_name,
          email: res.data.user.email,
          username: res.data.user.username,
          premium: res.data.user.premium,
          loggedIn: true,
        }

        setTimeout(() => {
          this.setState({
            user,
            loginModal: {
              ...this.state.loginModal,
              loading: false,
            }
          });

        }, 400);
      }

      if (res.data.token) {
        localStorage.setItem('LAMBDA_FORUM_AUTH_TOKEN', res.data.token);
      }

    }).catch(err => console.log(err));

  }

  setUserState = user => {
    this.setState({ ...this.state, user, });
  }

  componentDidMount() {

    // Open login message modal.
    if (this.getSearchParams().hasOwnProperty('loggedIn')) {
      const loggedIn = this.getSearchParams()['loggedIn'];

      if (loggedIn) {

        window.location = `${CLIENT}`

        // this.setState({
        //   loginMessageModal: {
        //     open: true,
        //   }
        // });
      }
    }

    // Store token from search params.
    if (this.getSearchParams().hasOwnProperty('token')) {
      const token = this.getSearchParams().token;

      localStorage.setItem('LAMBDA_FORUM_AUTH_TOKEN', token);
    }

    // Store avatar image from search params.
    if (this.getSearchParams().hasOwnProperty('avatarImg')) {
      const avatarImg = this.getSearchParams().avatarImg;
      localStorage.setItem('avatarImg', avatarImg);
    }

    // Set avatar image to user state.
    if (localStorage.getItem('avatarImg')) {
      const avatarImg = localStorage.getItem('avatarImg');
      // localStorage.removeItem('avatarImg');

      this.setState({
        user: {
          ...this.state.user,
          avatarImg,
        }
      });
    }

    Axios({
      url: `${HOST}api/users/login/check/`,
      method: 'get',
      // withCredentials: true,
      headers: {
        'Authorization': 'Token ' + localStorage.getItem('LAMBDA_FORUM_AUTH_TOKEN'),
      }
    }).then(res => {

      if (res.data.user) {
        const user = {
          ...this.state.user,
          id: res.data.user.id,
          firstName: res.data.user.first_name,
          lastName: res.data.user.last_name,
          email: res.data.user.email,
          username: res.data.user.username,
          premium: res.data.user.premium,
          loggedIn: true,
        }

        this.setState({
          user,
        });

      } else {
        this.setUserState({
          user: {
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            premium: '',
          },
          loggedIn: false,
        });
      }
    }).catch(err => console.log(err));
  }

  handleModalOpen = (e, name) => {
    this.setState({
      [name]: {
        open: !this.state[name].open
      }
    })
  }

  render() {
    return (
      <Router>
        <CssBaseline />

        <Navigation
          {...this.state}
          handleLoginModal={this.handleLoginModal}
          handleLogout={this.handleLogout}
          setUserState={this.setUserState}
          handleModalOpen={this.handleModalOpen}
        />

        <LoginMessageModal
          {...this.state}
          handleLoginMessageModal={this.handleLoginMessageModal}
        />

        <NewSubforumModal
          {...this.state}
          handleModalOpen={this.handleModalOpen}
        />

        <Login
          {...this.state}
          handleLoginModal={this.handleLoginModal}
          handleLogin={this.handleLogin}
        />

        <Route path="/" exact render={() => {
          return (
            <Landing
              handleLoginModal={this.handleLoginModal}
            />)
        }}
        />

        <Route path="/register/" render={() => {
          return (
            <Register
              handleLoginModal={this.handleLoginModal}
              setUserState={this.setUserState}
              handleRegister={this.handleRegister}
            />)
        }}
        />

        <Route
          exact path="/searchResults/:input/"
          component={SearchResults}
        />

        <Route
          exact path='/f/:id/discussion/:id/'
          component={Discussion}
        />

        <Route
          exact path='/f/:id/'
          component={SubForum}
        />



      </Router>
    );
  }
}

export default App;
