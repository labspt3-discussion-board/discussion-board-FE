import React from 'react';
import { useGlobal } from 'reactn'
import { withStyles, Grid, Icon, IconButton } from '@material-ui/core';
import { styles } from './CreateDiscussion.style.js';


export default withStyles(styles)(props => {
  const { classes } = props;
  const [openModal, updateOpenModal] = useGlobal('openModal');

  const handleOpenModal = () => {
    updateOpenModal(true);
  };

  return (
    <Grid container className={classes.createDiscussion}>
      <IconButton onClick={handleOpenModal}>
        <Icon >create</Icon>
      </IconButton>
    </Grid>
  )
})