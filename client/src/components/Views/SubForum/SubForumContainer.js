import React, { useState, useEffect } from 'react';
import {
  withStyles, Typography, Grid, Button, ButtonGroup,
  Icon, IconButton
} from '@material-ui/core';
import { styles } from './SubForm.style';
import Discussions from '../../Modules/Discussions';
import SortBy from '../../PersistentComponents/SortBy/SortBy';
import { Link } from 'react-router-dom';
import Followers from './Followers';

export default withStyles(styles)(props => {
  const { classes } = props;
  const [hideDiscussions, updateHideDiscussions] = useState(false);
  const [hideFollowers, updateHideFollowers] = useState(true);

  const handleHide = (view, e) => {
    if (view === 'discussions') {
      updateHideDiscussions(false);
      updateHideFollowers(true);
    } else {
      updateHideDiscussions(true);
      updateHideFollowers(false);
    }
  }

  //will make axios call and input subtopic id from url params
  return (
    <Grid container className={classes.subForumContainer}>
      <Grid className={classes.subForumTop} container justify="space-between">
        <Typography variant="h3">/d/SubForm</Typography>
        <Button variant="contained" color='secondary'>Join!</Button>
        <ButtonGroup variant="contained">
          {/* <Link to={`/subForum/${1}/discussions`}> */}
          <Button onClick={(e) => handleHide('discussions', e)}>Discussions</Button>
          {/* </Link> */}
          {/* <Link to={`/subForum/${1}/followers`}> */}
          <Button onClick={(e) => handleHide('followers', e)}>Followers</Button>
          {/* </Link> */}
        </ButtonGroup>
        <SortBy classes={classes} />
      </Grid>
      {!hideDiscussions ?
        <Discussions view='subForum' />
        : null}
      {!hideFollowers ?
        <Followers />
        : null}

    </Grid>
  )
})