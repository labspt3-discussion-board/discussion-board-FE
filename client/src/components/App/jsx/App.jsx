import React, { Component, }                           from 'react';
import CssBaseline                                     from '@material-ui/core/CssBaseline';
import { TestComponent, Login, Register, LandingPage,
         Navigation, LoginMessageModal, }              from '../../components.js';
import { library }                                     from '@fortawesome/fontawesome-svg-core';
import { faSignInAlt, faUserAlt, }                     from '@fortawesome/free-solid-svg-icons';
import { fab, }                                        from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Router, Route, Link }        from "react-router-dom";
import Cookies                                         from 'js-cookie';
import Axios                                           from 'axios';
import { HOST, }                                       from '../../../constants.js';

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
        loggedIn: false,
      },
      loginModal: {
        open: false,
        loading: true,
      },
      loginMessageModal: {
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

  handleLogin = (e, formData, cb) => {
		e.preventDefault();

		Axios({
			url: `${ HOST }api/users/login/`,
			method: 'post',
			withCredentials: true,
			data: {
				email: formData.email.value,
				password: formData.password.value,
			}
		}).then(res => {

      console.log(res)

			const user = {
				id:        res.data[0].id,
				firstName: res.data[0].first_name,
				lastName:  res.data[0].last_name,
				email:     res.data[0].email,
				username:  res.data[0].username,
				premium:   res.data[0].premium,
				loggedIn:  res.data[1].loggedIn,
			}
      
      setTimeout(() => {
      this.setUserState(user);
        this.setState({
          loginModal: {
            ...this.state.loginModal,
            loading: false,
          }
        });

      }, 400);

		}).catch(err => console.log(err));

  }
  
  handleLogout = e => {

    Axios({
      url: `${ HOST }api/users/logout/`,
      method: 'get',
      withCredentials: true,
      headers: { 'X-CSRFToken': Cookies.get('csrftoken') },
    }).then(res => {

      const user = {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        premium: false,
        loggedIn: false,
      }

      this.setUserState(user);

      Cookies.remove('csrftoken');
      Cookies.remove('sessionid');

    }).catch(err => console.log(err));
  }

  handleRegister = (e, formData) => {
		e.preventDefault();

		Axios({
			url: HOST + 'api/users/',
			method: 'post',
			withCredentials: true,
			data: {
				firstName: formData.firstName.value,
				lastName:  formData.lastName.value,
				email:     formData.email.value,
				username:  formData.username.value,
				password:  formData.password.value,
			}
		}).then(res => {

			const user = {
				id:        res.data[0].id,
				firstName: res.data[0].first_name,
				lastName:  res.data[0].last_name,
				email:     res.data[0].email,
				username:  res.data[0].username,
				premium:   res.data[0].premium,
				loggedIn:  res.data[1].loggedIn,
			}
			
			this.setUserState(user);

		}).catch(err => console.log(err));

	}

  setUserState = user => {
    this.setState({ ...this.state, user, });
  }

  componentDidMount() {

    Axios({
      method: 'get',
      url: 'https://discussion-board-api-test.herokuapp.com/api/',
      withCredentials: true,
    }).then(res => {
      console.log(res)
    }).catch(err => console.log(err))


    if (this.getSearchParams().hasOwnProperty('loggedIn')) {
      const loggedIn = this.getSearchParams()['loggedIn'];

      if (loggedIn) {
        this.setState({
          loginMessageModal: {
            open: true,
          }
        });
      }
    }

    Axios({
      url: `${ HOST }api/users/login/check/`,
      method: 'get',
      withCredentials: true,
    }).then(res => {
      if (res.data[1].loggedIn === true) {
        this.setUserState({
          id:        res.data[0].id,
          firstName: res.data[0].first_name,
          lastName:  res.data[0].last_name,
          email:     res.data[0].email,
          username:  res.data[0].username,
          premium:   res.data[0].premium,
          loggedIn:  res.data[1].loggedIn,
        });
      } else {
        this.setUserState({
          ...this.state.user,
          loggedIn: false,
        });
      }
      

    }).catch(err => console.log(err));

  }

  render() {
    return (
      <Router>
        <CssBaseline />

        <LoginMessageModal
          { ...this.state}
          handleLoginMessageModal={ this.handleLoginMessageModal }
        />

        <Navigation
          { ...this.state }
          handleLoginModal={ this.handleLoginModal }
          setUserState={ this.setUserState }
        />

        <Login 
          { ...this.state } 
          handleLoginModal={ this.handleLoginModal }
          handleLogin={ this.handleLogin }
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
              setUserState={ this.setUserState }
              handleRegister={ this.handleRegister }
            />)
          }} 
        />
      </Router>
    );
  }
}

export default App;
