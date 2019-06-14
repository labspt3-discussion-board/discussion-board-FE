import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { useGlobal } from 'reactn';
import axios from 'axios';
import HOST from '../../../Host';
import SortBy from '../../PersistentComponents/SortBy/SortBy';
import Discussions from '../../Modules/Discussions/';

export default props => {
  const { classes } = props;
  const [discussonList, updateDiscussionList] = useGlobal('discussionList');


  return (
    <div className={props.classes.discussionsContainer}>
      <div className={props.classes.topDiscussionsHead}>
        <Typography className={props.classes.topDiscussionsTitle}>Top Discussions</Typography>
        <SortBy classes={classes} />
      </div>
      <Discussions discListType='topdiscussions'/>
    </div>
  )
}