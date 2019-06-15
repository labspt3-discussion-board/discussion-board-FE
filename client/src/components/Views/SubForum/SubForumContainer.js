import React, { useEffect } from 'react';
import {
  withStyles, Typography, Grid, Button, ButtonGroup,
  Icon, IconButton
} from '@material-ui/core';
import { styles } from './SubForm.style';
import Discussions from '../../Modules/Discussions';
import SortBy from '../../PersistentComponents/SortBy/SortBy';
import { Link } from 'react-router-dom';

export default withStyles(styles)(props => {
  const { classes } = props;

  //will make axios call and input subtopic id from url params
  return (
    <Grid container className={classes.subForumContainer}>
      <Grid className={classes.subForumTop} container justify="space-between">
        <Typography variant="h3">/d/SubForm</Typography>
        <Button variant="contained" color='secondary'>Join!</Button>
        <ButtonGroup variant="contained">
          <Link to={`/subForum/${1}/discussions`}>
            <Button>Discussions</Button>
          </Link>
          <Link to={`/subForum/${1}/followers`}>
            <Button>Followers</Button>
          </Link>
        </ButtonGroup>
        <SortBy classes={classes} />
      </Grid>
      <Discussions view='subForum' />
    </Grid>
  )
})