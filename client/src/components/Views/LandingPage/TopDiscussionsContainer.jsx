import React from 'react';
import { Typography } from '@material-ui/core';
import SortBy from '../../PersistentComponents/SortBy/SortBy';
import Discussions from '../../Modules/Discussions/';

export default props => {
  const { classes } = props;
  return (
    <div className={props.classes.discussionsContainer}>
      <div className={props.classes.topDiscussionsHead}>
        <Typography className={props.classes.topDiscussionsTitle}>Top Discussions</Typography>
        <SortBy classes={classes} />
      </div>
      <Discussions/>
    </div>
  )
}