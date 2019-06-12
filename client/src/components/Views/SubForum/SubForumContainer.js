import React from 'react';
import { withStyles, Typography, Grid, Button, ButtonGroup } from '@material-ui/core';
import { styles } from './SubForm.style';
import Discussions from '../../Modules/Discussions';
import SortBy from '../../PersistentComponents/SortBy/SortBy'

export default withStyles(styles)(props => {
  const { classes } = props;
  //will make axios call and input subtopic id from url params
  return (
    <Grid container className={classes.subForumContainer}>
      <Grid className={classes.subForumTop} container justify="space-between">
      <Typography variant="h3">/d/SubForm</Typography>
      <Button variant="contained" color='secondary'>Join!</Button>
      <ButtonGroup variant="contained">
        <Button>Discussions</Button>
        <Button>Followers</Button>
      </ButtonGroup>
      <SortBy classes={classes}/>
      </Grid>

      <Discussions />
    </Grid>
  )
})