import React from 'react';
import {withStyles, Typography} from '@material-ui/core';
import { styles } from './Votes.style';


export default withStyles(styles)(props => {

  const { classes } = props;
  let votesClass = '';

  if(props.upvote > props.downvote){
    votesClass=classes.netUpvote;
  }else if(props.downvote > props.upvote){
    votesClass=classes.netDownvote;
  }

  return (
        <>
          <Typography className={`${votesClass} ${classes.votes}`}>
            {Math.abs(props.upvote - props.downvote)}
          </Typography>
        </>
  )
})