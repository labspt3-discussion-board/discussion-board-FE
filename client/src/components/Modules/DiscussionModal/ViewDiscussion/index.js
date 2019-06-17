import React from 'react';
import { withStyles, Grid, Typography } from '@material-ui/core';
import { styles } from './ViewDiscussion.style';

export default withStyles(styles)(props => {

  const { classes } = props;

  return(
    <Grid className={classes.contaienr} container>
      <Grid className={classes.header} container>
        <Typography></Typography>
        <Button>Edit Post</Button>
      </Grid>
      <Grid className={classes.body} container>
        <Typography></Typography>
      </Grid>
      <Grid className={classes.comments} container>
        {/* Going to map over an array of objs that contain user info 
        and their comments and produce a card*/}
      </Grid>
    </Grid>
  )
})