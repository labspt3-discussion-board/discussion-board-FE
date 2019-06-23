import React, { useState, useEffect } from 'react';
import {
  withStyles, Typography, Grid, Button, ButtonGroup,
  Icon, IconButton
} from '@material-ui/core';
import axios from 'axios';
import { useGlobal } from 'reactn'
import { styles } from './SubForm.style';
import DiscussionsList from '../../Modules/DiscussionsList';
import SortBy from '../../Modules/SortBy';
import { Link, withRouter } from 'react-router-dom';
import { HOST } from '../../../constants';
import Members from './Members';

export default withRouter(withStyles(styles)(props => {
  const { classes } = props;
  const [hideDiscussions, updateHideDiscussions] = useState(false);
  const [hideFollowers, updateHideFollowers] = useState(true);
  const [subForum, updateSubForum] = useState({});
  const [members, updateMembers] = useGlobal('members');

  const handleHide = (view, e) => {
    if (view === 'discussions') {
      updateHideDiscussions(false);
      updateHideFollowers(true);
    } else {
      updateHideDiscussions(true);
      updateHideFollowers(false);
    }
  }

  useEffect(() => {
    //Call for subforum name
    axios.get(`${HOST}api/subforums/${props.match.params.id}/`)
    .then(res => {
      console.log(res.data)
      updateSubForum(res.data);
    }).catch(err => {
      console.log(err)
    });

    //Call for subforum members
    axios.get(`${HOST}api/subforums/${props.match.params.id}/members/`)
    .then(res => {
      updateMembers(res.data.results)
    }).catch(err => {
      console.log(err)
    });
  },[])

  console.log(props)

  //will make axios call and input subtopic id from url params
  return (

    <Grid container className={classes.subForumContainer}>
      <Grid className={classes.subForumTop} container justify="space-between">
        <Typography variant="h3">{`/f/${subForum.name}`}</Typography>
        <Button variant="contained" color='secondary'>Join!</Button>
        <ButtonGroup variant="contained">
          <Button onClick={(e) => handleHide('discussions', e)}>Discussions</Button>
          <Button onClick={(e) => handleHide('members', e)}>Members</Button>
        </ButtonGroup>
        <SortBy classes={classes} />
      </Grid>
      {!hideDiscussions ?
        <DiscussionsList discListType='subforums' subforum={props.match.params.id} />
        : null}
      {!hideFollowers ?
      <Members />
        : null}

    </Grid>
  )
}))