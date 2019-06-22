import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography,
  withStyles, Icon, Grid, IconButton, Avatar, SwipeableDrawer,
  List, ListItem, ListItemText, Divider, Button
} from '@material-ui/core';
import { styles, useStyles } from './Navigation.style.js';
import SearchBar from '../SearchBar';
import SignIOU from '../SignIOU/SignIOU';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/images/logo.png';
import CreateDiscussion from '../CreateDiscussion';
import { useGlobal } from 'reactn'


export default withStyles(styles)(props => {
  const { classes } = props;
  const extraClasses = useStyles();


  const [drawerState, setDrawerState] = useState(false);
  const [openModal, updateOpenModal] = useGlobal('openModal');

  const toggleDrawer = (open, e) => {
    setDrawerState(open)
  }

  const handleView = () => {
    props.history.push(`/f/${1}/`)
  }

  const handleOpenModal = () => {
    updateOpenModal(true);
  };

  return (
    // <div className={props.classes.navigationContainer}>
    <>

      <AppBar className={`${classes.appBar} ${extraClasses.clip}`} >
        <Toolbar className={classes.navigationContainer}>
          <Grid container justify="space-between" alignItems="center" className={classes.navButtons}>
            <IconButton onClick={(e) => toggleDrawer(true, e)} >
              <Icon>menu</Icon>
            </IconButton>
            <Link className={classes.navigationHome} to="/">
              <Avatar alt="Lambda Logo" src={logo} />
            </Link>
          </Grid>
          {/* </Grid> */}
          <Grid container className={classes.searchBarContainer}>
            <SearchBar classes={classes} />
          </Grid>
          <Grid className={classes.userActions} container>
            <Grid container className={classes.createDiscussion}>
              <IconButton onClick={handleOpenModal}>
                <Icon >create</Icon>
              </IconButton>
            </Grid>
            {/* <CreateDiscussion /> */}
            <SignIOU classes={classes} />
          </Grid>
        </Toolbar>
      </AppBar>

      {/* <SwipeableDrawer
        open={drawerState}
        onClose={(e) => toggleDrawer(false, e)}
        onOpen={(e) => toggleDrawer(true, e)}
        className={classes.drawer}>

        <List onClick={(e) => toggleDrawer(false, e)}>
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

      </SwipeableDrawer> */}
    </>
    // </div>

  )
}
)