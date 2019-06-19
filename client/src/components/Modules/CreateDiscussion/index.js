import React from 'react';
import {
  withStyles, Modal, Grid, Typography,
  Button, TextField, Avatar
} from '@material-ui/core';
import { styles } from './CreateDiscussion.style';
import { useGlobal } from 'reactn';

import logo from '../../../Assets/images/logo.png';

export default withStyles(styles)(props => {

  const { classes } = props;
  const [openModal, updateOpenModal] = useGlobal('openModal');


  const handleCloseModal = () => {
    updateOpenModal(false);
  };



  return (
    <Modal open={openModal} onClose={handleCloseModal}>
      <Grid container className={classes.modalContainer}>
        <Avatar alt="user avatar" src={logo} />
        <TextField className={classes.inputField}
          multiline variant="outlined" margin="normal"
          placeholder="Title" />
        <TextField className={classes.inputField}
          autoComplete multiline variant="outlined"
          margin="normal" placeholder="Description" rows='5' />
        <TextField multiline variant="outlined" margin="normal"
          placeholder="SubForum" />
        <Button variant="contained">Submit</Button>
      </Grid>
    </Modal>
  )
})