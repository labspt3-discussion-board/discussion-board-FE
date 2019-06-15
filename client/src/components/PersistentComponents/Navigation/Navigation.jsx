import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { styles, useStyles } from './Navigation.style.js';
import SearchBar from '../SearchBar/SearchBar';
import SignIOU from '../SignIOU/SignIOU';
import {
  withStyles, Icon, Grid, IconButton, Avatar, SwipeableDrawer,
  List, ListItem, ListItemText, Divider, Button
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/images/logo.png';



export default withStyles(styles)(props => {
  const { classes } = props;
  const extraClasses = useStyles();


  const [drawerState, setDrawerState] = useState(false);

  const toggleDrawer = (open, e) => {
    setDrawerState(open)
  }

  const handleView = () => {
    props.history.push(`/subForum/:id/discussions`)
  }

  return (
    // <div className={props.classes.navigationContainer}>
    <>

      <AppBar className={`${classes.appBar} ${extraClasses.clip}`} >
        <Toolbar className={classes.navigationContainer}>
          <Grid container justify="space-between" alignItems="center" className={classes.navButtons}>
            <IconButton onClick={(e) => toggleDrawer(true, e)} >
              <Icon>menu</Icon>
            </IconButton>
            {/* <Grid container> */}
            <Link className={classes.navigationHome} to="/">
              <div className="Logo">
                <Avatar alt="Lambda Logo" src={logo} />
              </div>
            </Link>
          </Grid>
          {/* </Grid> */}
          <SearchBar classes={classes} />
          <SignIOU classes={classes} />
        </Toolbar>
      </AppBar>

      <SwipeableDrawer 
      open={drawerState}
      onClose={(e)=> toggleDrawer(false, e)} 
      onOpen={(e)=> toggleDrawer(true,e)}
      className={classes.drawer}>

        <List onClick={(e)=> toggleDrawer(false,e)}>
          <ListItem>
            <Button onClick={handleView}>
              SubForums
            </Button>
          </ListItem>
          <Divider />
          <ListItem>
            <Button>
              Create SubForums
            </Button>
          </ListItem>
        </List>

      </SwipeableDrawer>
    </>
    // </div>

  )
}
)