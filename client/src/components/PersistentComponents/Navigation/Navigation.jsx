import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { styles } from './Navigation.style.js';
import SearchBar from '../SearchBar/SearchBar';
import SignIOU from '../SignIOU/SignIOU';
import { withStyles, Icon, Grid, IconButton, Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/images/logo.png';



export default withStyles(styles)(props => {
  const { classes } = props;


  return (
    // <div className={props.classes.navigationContainer}>

    <AppBar className={classes.appBar} >
      <Toolbar className={classes.navigationContainer}>
        <Grid  container justify="space-between" alignItems="center" className={classes.navButtons}>
        <IconButton>
          <Icon>menu</Icon>
        </IconButton>
        {/* <Grid container> */}
        <Link className={classes.navigationHome} to="/">
          <div className="Logo">
            <Avatar alt="Lambda Logo" src={logo}/>
            {/* <img src="https://pbs.twimg.com/profile_images/1119017796954808322/F1pUmZtW.png" alt="Lambda" /> */}
          </div>
          {/* <Icon>home</Icon> */}
          {/* <Typography variant="h5" component="h1" color="inherit">
              Lambda Forum */}
          {/* <img src="../../../../public/images/LambdaLogo.png"/> */}
          {/* </Typography> */}
        </Link>
        </Grid>
        {/* </Grid> */}
        <SearchBar classes={classes} />
        <SignIOU classes={classes} />
      </Toolbar>
    </AppBar>
    // </div>

  )
}
)