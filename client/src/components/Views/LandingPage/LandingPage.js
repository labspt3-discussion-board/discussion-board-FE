import React from 'react';
import { withStyles } from '@material-ui/core';
import TopDiscussionsContainer from './TopDiscussionsContainer';
import { styles } from './LandingPage.style.js';


export default withStyles(styles)(props => {
  const {classes} = props;

  return (
    <div>
      <TopDiscussionsContainer classes={classes}/>
    </div>
  )
})
