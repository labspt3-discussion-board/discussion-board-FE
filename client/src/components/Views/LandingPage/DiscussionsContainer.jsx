import React from 'react';
import SortBy from '../../PersistentComponents/SortBy/SortBy';
import TopDiscussionsList from './TopDiscussionsList';

export default props => {
  const { classes } = props;
  return (
    <div className={props.classes.discussionsContainer}>
      <div className={props.classes.topDiscussionsHead}>
        <h2 className={props.classes.topDiscussionsTitle}>Top Discussions</h2>
        <SortBy classes={classes} />
      </div>
      <TopDiscussionsList classes={classes} />
    </div>
  )
}