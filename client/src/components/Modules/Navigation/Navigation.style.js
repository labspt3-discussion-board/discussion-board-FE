import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
}));

export const styles = {
  appBar: {
    background: '#a0001e',
    // border: '1px solid white',
  },
  navigationContainer: {
    background: '#a0001e',
    display: 'flex',
    justifyContent: 'space-between',
    // border: '1px solid blue'
  },
  signContainer: {
    display: 'flex',
    // border: '1px solid white',
  },
  searchBar: {
    color: 'white',
    borderBottom: '1px solid white',
    width: 300
  },
  signShared:{
    color: 'white'
  },
  navigationHome:{
    // border: '1px solid black',
  },
  Logo: {
  },
  navButtons:{
    // border: '1px solid black',
    width: '25%',
    // marginLeft: '40px'
  },
  drawer: {
    width: 240
  },
  userActions:{
    justifyContent: 'space-between',
    // border: '1px solid white',
    width: '25%',
  },
  searchBarContainer: {
    width: '60%',
    justifyContent: 'center',
    // border: '1px solid green'
  },
  createDiscussion: {
    // border: '1px solid blue',
    width: '50%'
  }
};