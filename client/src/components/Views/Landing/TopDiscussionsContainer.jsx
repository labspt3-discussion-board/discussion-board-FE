import React from 'react';
import { Typography } from '@material-ui/core';
import { useGlobal } from 'reactn';
import SortBy from '../../Modules/SortBy';
import Discussions from '../../Modules/DiscussionsList';

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