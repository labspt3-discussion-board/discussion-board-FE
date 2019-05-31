import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { styles } from './Navigation.style.js';
import SearchBar from '../SearchBar/SearchBar';
import SignIOU from '../SignIOU/SignIOU';
import { withStyles } from '@material-ui/core';

const DEV_HOST = 'http://localhost:8000';
const HOST = 'https://discussion-board-api.herokuapp.com/'


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
        <SignIOU classes={classes} handleLoginModal={ props.handleLoginModal } />
      </Toolbar>
    </AppBar>
    // </div>

  )
}
)