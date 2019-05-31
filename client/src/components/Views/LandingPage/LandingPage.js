import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Navigation from '../../PersistentComponents/Navigation/Navigation';
import DiscussionContainer from './DiscussionsContainer';
import { styles } from './LandingPage.style.js';

export default withStyles(styles)(props => {
  const {classes} = props;
  return (
    <div>      
      <DiscussionContainer classes={classes}/>
    </div>
  )
})

// LandingPage.propTypes = {
//   classes: PropTypes.object.isRequired,
// };