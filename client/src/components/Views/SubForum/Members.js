import React, { useState, useEffect } from 'react';
import { withStyles, Grid, List, ListItem, 
  ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';
import { styles } from './SubForm.style';
import logo from '../../../Assets/images/logo.png';

export default withStyles(styles)(props => {
  const { classes } = props;

  const dummydata = 
  [{ username: 'Duke Nukem' },
  { username: 'Black Swordsman' },
  {username: 'Chocolate Rain'}
  ];

  const [followers, updateFollowers] = useState(dummydata);

  return(
    <Grid container>
      <List>
        {followers.length > 0 ? followers.map((follower, index) => {
          return(
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar alt="user avatar" src={logo} />
            </ListItemAvatar>
            <ListItemText primary={follower.username}/>
          </ListItem>
          )
        }): '...Loading'}
      </List>
    </Grid>
  )
})