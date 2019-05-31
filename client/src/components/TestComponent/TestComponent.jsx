import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { styles, } from './TestComponent.style.js';
import axios from 'axios';

import { useState, useEffect } from 'react';

//Testing Delete once done
import LandingPage from '../Views/LandingPage/LandingPage'


const DEV_HOST = 'http://localhost:8000';
const HOST = 'https://discussion-board-api.herokuapp.com/'

const Navbar = props => (
  <div className={props.classes.root}>
    <AppBar  color='primary' position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Lambda Forum
				</Typography>
      </Toolbar>
    </AppBar>
  </div>
);

const FormContainer = props => (
  <div className={props.classes.formContainer}>
    <div className={props.classes.textContainer}>
      <ul>
        {props.displayUsers()}
      </ul>
    </div>
    <Input
      name='usernameInput'
      value={props.usernameInput.value}
      className={props.classes.input}
      placeholder='Enter a username...'
      required
      onChange={props.handleInputChange}
    />
    <Button
      variant='contained'
      color='primary'
      className={props.classes.button}
      onClick={props.handleButtonClick}
    >Submit</Button>

  </div>
);


//React Hooks Refactor Test

const TestComponent = (props) => {

  const [usernameInput, setUsernameInput] = useState('')
  const [data, setData] = useState([]);


  const handleInputChange = e => {
    setUsernameInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();

    axios.post(HOST + 'api/create-user/', {
      username: usernameInput,
    }).then(res => {
      setData(res.data);
    }).catch(err => {
      console.log(err);
    });
  }

  //runs effect function after each render, including first render
  // useEffect(() => {
  //   axios.get(`${HOST}api/create-user/`)
  //     .then((res) => {
  //       console.log(res.data)
  //       setData(res.data);
  //     }).catch(err => console.log(err));
  // });

  const displayUsers = () => {
    return data.map((user, i) => <li key={i}>{user.fields.username}</li>);
  }

  const { classes } = props;


  return (
    <>
      <Navbar classes={classes} />
      <LandingPage/>
      <FormContainer
        classes={classes}
        usernameInput={usernameInput}
        handleInputChange={handleInputChange}
        handleButtonClick={handleSubmit}
        displayUsers={displayUsers}
      />

    </>
  );
}

TestComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TestComponent);