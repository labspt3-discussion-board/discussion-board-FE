import React from 'react';
import {
  withStyles, Modal, Grid, Typography,
  Button, TextField, Avatar
} from '@material-ui/core';
import { styles } from './DiscussionModal.style';
import { useGlobal } from 'reactn';

export default withStyles(styles)(props => {

  const { classes } = props;
  const [openModal, updateOpenModal] = useGlobal('openModal');


  const handleCloseModal = () => {
    updateOpenModal(false);
  };



  return (
    <Modal open={openModal} onClose={handleCloseModal}>
      <Grid container className={classes.modalContainer}>
        <Grid container className={classes.header}>
          <Typography variant="h2">
            Hi
        </Typography>
          <Button variant="contained">Save</Button>
        </Grid>
        <Grid container className={classes.userInformation}>
          <Avatar />
        </Grid>
        <Grid container className={classes.descriptionContainer}>
          <TextField multiline variant="outlined" margin="normal"
            placeholder="Description" />
        </Grid>
        <Grid container className={classes.commentsContainer}>
          <Typography>Comments</Typography>
        </Grid>
      </Grid>
    </Modal>
  )
})