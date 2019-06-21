import React, { useState, useEffect } from 'react';
import { withStyles, Grid, List, ListItem, 
  ListItemAvatar, Avatar, ListItemText, CircularProgress } from '@material-ui/core';
import { useGlobal } from 'reactn';
import { styles } from './SubForm.style';
import logo from '../../../Assets/images/logo.png';

export default withStyles(styles)(props => {
  const { classes } = props;
  const [Members, updateMembers] = useGlobal('members');

  console.log(Members)

  return(
    <Grid container>
      <List>
        {Members.length !== 0 ? Members.map((Member, index) => {
          return(
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar alt="user avatar" src={logo} />
            </ListItemAvatar>
            <ListItemText primary={Member.username}/>
          </ListItem>
          )
        }): 
        <CircularProgress color="secondary"/>}
      </List>
    </Grid>
  )
})