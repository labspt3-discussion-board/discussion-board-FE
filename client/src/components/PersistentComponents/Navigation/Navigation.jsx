import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button, } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { styles } from './Navigation.style.js';
import SearchBar from '../SearchBar/SearchBar';
import SignIOU from '../SignIOU/SignIOU';
import { withStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom'

const DEV_HOST = 'http://localhost:8000';
const HOST = 'https://discussion-board-api.herokuapp.com/'

const LoginLink = props => {

  const { classes } = props;

  return (
    <>
      <Typography variant='body1' className={ classes.loginLink }>Log In</Typography>
    </>
  );
}

const SignUpButton = props => {

  const { classes } = props;

  return (
    <NavLink to='/register' className={ classes.signUpButtonLink }>
      <Button 
      size='small'
        variant='contained'
        classes={{ contained: classes.signUpButton }}
      >
        Sign Up
      </Button>
    </NavLink>
  );
}


export default withStyles(styles)(props => {
  const { classes } = props;


  return (
    // <div className={props.classes.navigationContainer}>

    <AppBar className={classes.appBar} position="static">
      <Toolbar className={classes.navigationContainer}>
        <Typography variant="h6" color="inherit">
          Lambda Forum
          {/* <img src="../../../../public/images/LambdaLogo.png"/> */}
      </Typography>
        <SearchBar classes={classes}/>

        <div className={ classes.containerRight }>
          <LoginLink classes={ classes } />
          <SignUpButton classes={ classes } />
        </div>
        


      </Toolbar>
    </AppBar>
    // </div>

  )
}
)