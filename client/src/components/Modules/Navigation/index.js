import React, { Component, } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button, Avatar, } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { styles } from './Navigation.style.js';
import SearchBar from '../SearchBar';
import DrawerButton from '../Drawer/DrawerButton';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/images/logo.png';
import CreateDiscussion from '../CreateDiscussion';
import CreateDiscButton from '../CreateDiscussion/CreateDiscButton';
import Drawer from '../Drawer';
import { withStyles, IconButton, Menu, MenuItem, Tooltip } from '@material-ui/core';
import { AccountCircle, NoteAdd, } from '@material-ui/icons';
import { NavLink } from 'react-router-dom'
import Axios from 'axios';
import Cookies from 'js-cookie';
import { HOST, } from '../../../constants.js';

const LoginLink = props => {

  const { classes } = props;

  return (
    <>
      <Typography
        variant='body1' className={classes.loginLink}
        onClick={props.handleLoginModal}
      >
        Log In
      </Typography>
    </>
  );
}

const SignUpButton = props => {

  const { classes } = props;

  return (
    <NavLink to='/register' className={classes.signUpButtonLink}>
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

const AccountMenu = props => {
  return (
    <Menu
      id='account-menu'
      anchorEl={document.querySelector('#navigation-account-menu-button')}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={props.accountMenu.isOpen}
      onClose={props.handleAccountMenuClose}
    >
      <MenuItem>My Account</MenuItem>
      <MenuItem
        onClick={() => {
          props.handleLogout();
          props.handleAccountMenuClose();
        }
        }
      >Log Out</MenuItem>
    </Menu>
  );
}


class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountMenu: {
        isOpen: false,
      }
    };

  }

  handleAccountMenuOpen = e => {
    this.setState({
      ...this.state,
      accountMenu: {
        ...this.state.accountMenu,
        isOpen: true,
      }
    });
  }

  handleAccountMenuClose = e => {
    this.setState({
      ...this.state,
      accountMenu: {
        ...this.state.accountMenu,
        isOpen: false,
      }
    });
  }


  render() {

    const { classes } = this.props;

    const getInitials = (first, last) => {
      return (first.substr(0, 1) + last.substr(0, 1)).toUpperCase();
    }

    const renderNavOptions = () => {
      return !this.props.user.loggedIn ? (
        <div className={classes.containerRightOne}>
          <LoginLink
            handleLoginModal={this.props.handleLoginModal}
            classes={classes}
          />
          <SignUpButton classes={classes} />
        </div>
      ) : (
          <div className={classes.containerRightTwo}>

            <Tooltip title='New Subforum'>
              <IconButton
                color="inherit"
                onClick={e => this.props.handleModalOpen(e, 'newSubforumModal')}
              >
                <NoteAdd />
              </IconButton>
            </Tooltip>
            {
              this.props.user.avatarImg === '' ? (
                <Avatar
                  id='navigation-account-menu-button'
                  edge="end"
                  aria-owns={this.state.accountMenu.anchorEl ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  color="inherit"
                  onClick={this.handleAccountMenuOpen}
                  className={classes.avatar}
                >
                  {getInitials(this.props.user.firstName, this.props.user.lastName)}
                </Avatar>
              ) :
                (
                  <Avatar
                    id='navigation-account-menu-button'
                    edge="end"
                    aria-owns={this.state.accountMenu.anchorEl ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    color="inherit"
                    src={this.props.user.avatarImg}
                    className={classes.avatar}
                    onClick={this.handleAccountMenuOpen}
                  />
                )
            }

          </div>
        )
    }

    return (
      <>
        <AppBar className={classes.appBar} position="static">
          <Toolbar className={classes.navigationContainer}>
            <DrawerButton/>
            <Link className={classes.navigationHome} to="/">
              <Avatar alt="Lambda Logo" src={logo} />
            </Link>
            <SearchBar classes={classes} />
            <CreateDiscButton/>
            <CreateDiscussion />
            <AccountMenu
              {...this.state}
              handleLogout={this.props.handleLogout}
              handleAccountMenuOpen={this.handleAccountMenuOpen}
              handleAccountMenuClose={this.handleAccountMenuClose}
            />
            {renderNavOptions()}

          </Toolbar>
        </AppBar>
        <Drawer />

      </>
    );
  }
}

export default withStyles(styles)(Navigation);
