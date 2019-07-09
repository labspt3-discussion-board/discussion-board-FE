import React from 'react';
import { withStyles } from '@material-ui/core';
import { styles } from './SubForm.style';
import SubForumContainer from './SubForumContainer';

export default withStyles(styles)(props => {
  return (
    <>
    <SubForumContainer/>
    </>
  )
})