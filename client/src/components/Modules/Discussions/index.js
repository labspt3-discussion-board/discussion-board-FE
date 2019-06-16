/* Module will be used for landing page, 
search results page, subtopic page, etc. 
Basically whenever a list of discussions need to be displayed*/
import React, { useEffect } from 'react';
import { useGlobal } from 'reactn';
import LazyLoad from 'react-lazyload';
import {
  withStyles, Card, CardMedia,
  Typography, CircularProgress,
  Icon, Grid, IconButton
} from '@material-ui/core';
import moment from 'moment';
import axios from 'axios';
import { Link } from 'react-router-dom';

import logo from '../../../Assets/images/logo.png';
import { styles } from './Discussions.style';
import Votes from '../../Modules/Votes'
import DiscussionModal from '../DiscussionModal';

import HOST from '../../../Host';

const Loading = () => {
  return (
    <>
      <p>Loading..</p>
    </>
  )
}

export default withStyles(styles)(props => {
  const [discussionList, updateDiscussionList] = useGlobal('discussionList');
  const [openModal, updateOpenModal] = useGlobal('openModal');

  const { classes } = props;
  //Axios call for discussion data from database
  // useEffect(() => {
  //   axios.get(`${HOST}api/${props.discListType}/`)
  //     .then(res => {
  //       console.log(res.data.slice(0, 10))
  //       updateDiscussionList(res.data.slice(0, 20))
  //     }).catch(err => {
  //       console.log(err);
  //     });
  // }, [])

  // //Axios call for users and subforums related to each discussion,
  // //call must be made after getting initial discussion list
  // useEffect(() => {
  //   axios.get(`${HOST}api/users/`)
  //     .then(res => {
  //       console.log(res.data)
  //       let userList = res.data;
  //       let discussionOwner = discussionList;

  //       for (let n = 0; n < userList.length; n++) {

  //         for (let i = 0; i < discussionOwner.length; i++) {
  //           if (discussionOwner[i]['owner'] === userList[n]['id']) {
  //             discussionOwner[i].ownerName = userList[n]['username'];
  //           }
  //         }
  //       }
  //       updateDiscussionList(discussionOwner)
  //     }).catch(err => {
  //       console.log(err)
  //     });

  //   axios.get(`${HOST}api/subforums/`)
  //     .then(res => {
  //       console.log(res.data)
  //       let subForumsList = res.data;
  //       let discussionSubForums = discussionList;

  //       for (let n = 0; n < subForumsList.length; n++) {

  //         for (let i = 0; i < discussionSubForums.length; i++) {
  //           if (discussionSubForums[i]['subforum'] === subForumsList[n]['id']) {
  //             discussionSubForums[i].subForumName = subForumsList[n]['name'];
  //           }
  //         }
  //       }
  //       updateDiscussionList(discussionSubForums)
  //     }).catch(err => {
  //       console.log(err)
  //     });
  // }, [discussionList]);

  //Uncomment code up


  const handleVote = (discId, voteType, e) => {

    if (voteType === 'upvote') {
      //after modifying data have to update state with new call
      // axios.get(`${HOST}api/discussions/${1}/`)
      // .then(res => {
      //   console.log(res)
      // }).catch(err => {
      //   console.log(err)
      // });
      console.log(discId)
    } else {
      console.log(discId)

    }

    //Going to separate into its own file.

    //axios call to add to upvote/downvote

    //   axios.put(`${HOST}api/topdiscussions/`)
    //     .then(res => {
    //       console.log(res.data)
    //       updateDiscussionList(res.data)
    //     }).catch(err => {
    //       console.log(err);
    //     })

    //axios call to update discussion state
    //Will update state specific to current view by passing in a prop string
    //that will identify current view being used and then set up conditionals
    //to initiate correct axios call. ex. top discussions vs subForum discussions
  }

  const handleOpenModal = () => {
    updateOpenModal(true);
  };

  return (
    <>
      {props.view === 'subForum' ?
        <>
          <Grid container className={classes.createDiscussion}>
            <IconButton onClick={handleOpenModal}>
              <Icon >add_circle</Icon>
              <Typography>Create a new discussion</Typography>
            </IconButton>
          </Grid>
          <DiscussionModal />
        </>
        : null
      }
      {discussionList.length !== 0 ? discussionList.map((discussion, index) => {
        return (
          <LazyLoad key={index} placeholder={<Loading />}>
            <Card raised="true" key={index} className={props.classes.discussion}>
              <Link className={props.classes.clickableCard} to="/subForum/:id/discussions">
                <CardMedia
                  className={props.classes.discussionImg}
                  image={logo}
                  title="Lambda Logo"
                />
                <Grid container className={props.classes.topDiscussionContainer}>
                  <Typography variant="h6" component="h3" className={props.classes.discussionTitle}>{discussion.title}</Typography>
                  <Typography variant="caption" className={props.classes.subForum}>{`/f/${discussion.subForumName}`}</Typography>
                  {/* switch back to ownerName */}
                  <Typography variant="body" >{` Posted by ${discussion.ownerName} - ${moment(discussion.created_at).fromNow()}`}</Typography>
                  <Typography>{discussion.description}</Typography>
                </Grid>
              </Link>
              <Grid container direction="column" className={props.classes.rightContainer}>
                <Grid container direction="column" justify="center" className={props.classes.comments}>
                  <Typography className={classes.comment}>Comments</Typography>
                  <Typography className={props.classes.commentsNumber}>{discussion.comment_count}</Typography>
                </Grid>
                <Grid container justify="center" className={props.classes.votes}>
                  <Grid container direction="column">
                    {/* Add conditional to make one button have color based on
                    whether user voted */}
                    <IconButton className={props.classes.upvoteBtn} name="upvote" onClick={(e) => handleVote(discussion.id, 'upvote', e)}>
                      <Icon>arrow_upward</Icon>
                    </IconButton>
                    <Votes
                      upvote={discussion.upvote}
                      downvote={discussion.downvote}
                      netUpvote={props.classes.netUpvote}
                      netDownvote={props.classes.netDownvote}
                    />
                    <IconButton className={props.classes.downvoteBtn} name="downvote" onClick={(e) => handleVote(discussion.id, 'downvote', e)}>
                      <Icon>arrow_downward</Icon>
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Card>

          </LazyLoad>
        )
      }) :
        <Grid container className={props.classes.loading} justify="center" alignItems="center" >
          <CircularProgress color="secondary" />
        </Grid>
      }
    </>
  )
})