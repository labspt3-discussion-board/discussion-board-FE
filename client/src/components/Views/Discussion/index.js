import React, { useState, useEffect } from 'react';
import {
  withStyles, Grid, Typography, Avatar, Button, Card,
  CardMedia, CircularProgress
} from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios'
import { styles } from './Discussion.style';
import logo from '../../../Assets/images/logo.png';
import { HOST } from '../../../constants';

export default withRouter(withStyles(styles)(props => {
  const [currentDiscussion, updateCurrentDiscussion] = useState({});
  const [commentsList, updateCommentsList] = useState([]);

  console.log(props.match.params)

  useEffect(() => {
    //axios call to fetch specific discussion data
    const { subforumId, discussionId } = props.match.params;
    axios.get(`${HOST}api/discussions/${discussionId}/`)
      .then(res => {
        console.log(res.data)
        updateCurrentDiscussion(res.data);
      }).catch(err => {
        console.log(err);
      });
  }, [])

  //Another axios call for user info, comments, and users of comments
  useEffect(() => {
    const { id, owner } = currentDiscussion;

    //Call for user info. Want to use users/:id/ Need to wait for endpoint to be setup.
    //Doing a for loop through general end point is performance costly.
    // axios.get(`${HOST}api/users/${owner}/`)

    //Call for comments
    axios.get(`${HOST}api/discussions/${id}/comments/`)
      .then(res => {
        console.log(res.data.results)
        updateCommentsList(res.data.results)
      }).catch(err => {
        console.log(err);
      });

    //Call for users of comments. Need to grab user id from comments call.


  }, [currentDiscussion])

  const { classes } = props;

  //Need to add upvote/downvote module for user post and comments. Going to have to add
  // further funcitonality for upvote/downvote for comments
  return (
    <Grid className={classes.container} container>
      <Grid className={classes.header} container>
        <Typography variant="h4">{currentDiscussion.title}</Typography>
        <Button variant="contained">Edit</Button>
      </Grid>
      <Grid className={classes.userInfo} container>
        <Avatar className={classes.userAvatar} src={logo} alt="user avatar" />
        <Typography>{`${currentDiscussion.owner} - ${currentDiscussion.created_at}`}</Typography>
      </Grid>
      <Grid className={classes.body} container>
        <Typography className={classes.bodyText} >
          {currentDiscussion.description}
        </Typography>
      </Grid>
      <Grid className={classes.comments} container>
        {/* Going to map over an array of objs that contain user info 
        and their comments and produce a card*/}
        <Typography className={classes.commentsTitle} variant="h5">Comments</Typography>
        {commentsList.length !== 0 ? commentsList.map(comment => {
          return (
            <Card className={classes.commentCard} raised>
              <CardMedia
                className={props.classes.commentImg}
                image={logo}
                title="comment user logo"
              />
              <Typography>{`${comment.owner} - ${comment.created_at}`}</Typography>
              <Typography>{comment.text}</Typography>
            </Card>
          )
        }) : <CircularProgress color="secondary" />}
      </Grid>
    </Grid>
  )
}))