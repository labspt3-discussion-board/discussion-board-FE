/* Module will be used for landing page, 
search results page, subtopic page, etc. 
Basically whenever a list of discussions need to be displayed*/
import React, { useState, useEffect } from 'react';
import { useGlobal } from 'reactn';
import LazyLoad from 'react-lazyload';
import {
  withStyles, Card, CardMedia,
  Typography, CircularProgress,
  Icon, Grid, IconButton, Button
} from '@material-ui/core';
import moment from 'moment';
import axios from 'axios';
import { Link } from 'react-router-dom';

import logo from '../../../Assets/images/logo.png';
import { styles } from './DiscussionsList.style';
import Votes from '../Votes'

import { HOST } from '../../../constants';
import { number } from 'prop-types';

const Loading = () => {
  return (
    <>
      <p>Loading..</p>
    </>
  )
}

export default withStyles(styles)(props => {
  const [discussionList, updateDiscussionList] = useGlobal('discussionList');
  const [upvoteState, updateUpvoteState] = useGlobal('upvoteState');
  const [downvoteState, updateDownvoteState] = useGlobal('downvoteState');
  const [pageNumbers, updatePageNumbers] = useState(0);

  console.log(discussionList)
  const { classes } = props;
  //Axios call for discussion data from database
  useEffect(() => {
    if (props.discListType === 'topdiscussions') {
      axios.get(`${HOST}api/${props.discListType}/`)
        .then(res => {
          console.log(res.data)
          updateDiscussionList(res.data.results);

          const roundedPageNumber = Math.ceil(res.data.count / 50);
          let placeholderPageNumbers = [];
          for (let i = roundedPageNumber; i > 0; i--) {
            placeholderPageNumbers.unshift(i);
          }
          updatePageNumbers(placeholderPageNumbers);
        }).catch(err => {
          console.log(err);
        });
    } else if (props.discListType === 'subforums') {
      axios.get(`${HOST}api/${props.discListType}/${props.subforum}/discussions/`)
        .then(res => {
          console.log(res.data)
          updateDiscussionList(res.data.results);

          const roundedPageNumber = Math.ceil(res.data.count / 50);
          let placeholderPageNumbers = [];
          for (let i = roundedPageNumber; i > 0; i--) {
            placeholderPageNumbers.unshift(i);
          }
          updatePageNumbers(placeholderPageNumbers);
        }).catch(err => {
          console.log(err)
        });
    }
  }, [])

  //Axios call for users and subforums related to each discussion,
  //call must be made after getting initial discussion list
  // useEffect(() => {
  //     axios.get(`${HOST}api/users/`)
  //       .then(res => {
  //         console.log(res.data)
  //         let userList = res.data;
  //         let discussionOwner = discussionList;

  //         for (let n = 0; n < userList.length; n++) {

  //           for (let i = 0; i < discussionOwner.length; i++) {
  //             if (discussionOwner[i]['owner'] === userList[n]['id']) {
  //               discussionOwner[i].ownerName = userList[n]['username'];
  //             }
  //           }
  //         }
  //         updateDiscussionList(discussionOwner)
  //       }).catch(err => {
  //         console.log(err)
  //       });

  //     // axios.get(`${HOST}api/subforums/`)
  //     //   .then(res => {
  //     //     console.log(res.data)
  //     //     let subForumsList = res.data;
  //     //     let discussionSubForums = discussionList;

  //     //     for (let n = 0; n < subForumsList.length; n++) {

  //     //       for (let i = 0; i < discussionSubForums.length; i++) {
  //     //         if (discussionSubForums[i]['subforum'] === subForumsList[n]['id']) {
  //     //           discussionSubForums[i].subForumName = subForumsList[n]['name'];
  //     //         }
  //     //       }
  //     //     }
  //     //     updateDiscussionList(discussionSubForums)
  //     //   }).catch(err => {
  //     //     console.log(err)
  //     //   });
  // }, [discussionList]);

  //Uncomment code up


  const handleVote = (discId, prevVoteNum, voteType, upvoteState, downvoteState, e) => {

    if (voteType === 'upvote') {
      //after modifying data have to update state with new call
      // axios.get(`${HOST}api/discussions/${1}/`)
      // .then(res => {
      //   console.log(res)
      // }).catch(err => {
      //   console.log(err)
      // });
      if (!upvoteState.includes(discId) && !downvoteState.includes(discId)) {
        let copyState = upvoteState;
        copyState.push(discId);
        updateUpvoteState(copyState);
        //axios call to add upvote to discussion

        // axios.put(`${HOST}api/discussions/${discId}/`, {upvote: prevVoteNum + 1 })
        // .then(res => {
        //   console.log(res)
        // }).catch(err => {
        //   console.log(err)
        // });
      } else if (upvoteState.includes(discId) && !downvoteState.includes(discId)) {
        let filterUpvoteState = upvoteState.filter((value, index, arr) => {
          return value !== discId;
        });
        updateUpvoteState(filterUpvoteState)
        //axios call to remove upvote from discussion

        // axios.put(`${HOST}api/discussions/${discId}/`, {upvote: prevVoteNum -1 })
        // .then(res => {
        //   console.log(res)
        // }).catch(err => {
        //   console.log(err)
        // });
      } else if (!upvoteState.includes(discId) && downvoteState.includes(discId)) {
        //axios call to remove downvote
        let filterDownvoteState = downvoteState.filter((value, index, arr) => {
          return value !== discId;
        });
        updateDownvoteState(filterDownvoteState);

        //axios call to add upvote

        let copyState = upvoteState;
        copyState.push(discId);
        updateUpvoteState(copyState);

      }
    } else if (voteType === 'downvote') {
      if (!downvoteState.includes(discId) && !upvoteState.includes(discId)) {
        let copyState = downvoteState;
        copyState.push(discId);
        updateDownvoteState(copyState);
        //axios call to add downvote to discussion

      } else if (downvoteState.includes(discId) && !upvoteState.includes(discId)) {

        let filterDownvoteState = downvoteState.filter((value, index, arr) => {
          return value !== discId;
        });
        updateDownvoteState(filterDownvoteState)

        //axios call to remove downvote from discussion

      } else if (!downvoteState.includes(discId) && upvoteState.includes(discId)) {

        //axios call to remove upvote

        let filterUpvoteState = upvoteState.filter((value, index, arr) => {
          return value !== discId;
        });
        updateUpvoteState(filterUpvoteState);

        //axios call to add downvote

        let copyState = downvoteState;
        copyState.push(discId);
        updateDownvoteState(copyState);

      }



    }

    //Going to separate into its own file.
    //axios call to update discussion state
    //Will update state specific to current view by passing in a prop string
    //that will identify current view being used and then set up conditionals
    //to initiate correct axios call. ex. top discussions vs subForum discussions
  }

  const handleNextList = (num) => {
    // "https://discussion-board-api-test.herokuapp.com/api/topdiscussions/?page=2"
    console.log(num)
    if (props.discListType === 'topdiscussions') {
      if (num === 1) {
        axios.get(`${HOST}api/${props.discListType}/`)
          .then(res => {
            updateDiscussionList(res.data.results)
          }).catch(err => {
            console.log(err);
          });
      } else {
        axios.get(`${HOST}api/${props.discListType}/?page=${num}`)
          .then(res => {
            updateDiscussionList(res.data.results)
            console.log(res)
          }).catch(err => {
            console.log(err);
          });
      }
    } else if (props.discListType === 'subforums') {
      if (num === 1) {
        axios.get(`${HOST}api/${props.discListType}/${props.subforum}/discussions/`)
          .then(res => {
            updateDiscussionList(res.data.results)
          }).catch(err => {
            console.log(err);
          });
      } else {
        axios.get(`${HOST}api/${props.discListType}/${props.subforum}/discussions/?page=${num}`)
          .then(res => {
            updateDiscussionList(res.data.results)
          }).catch(err => {
            console.log(err);
          });
      }
    }
  }

  return (
    <>
      {/* Can add additional condition as long as discussionList
      does not have a prop called subForumName, don't run */}
      {discussionList.length !== 0 ? discussionList.map((discussion, index) => {
        return (
          <LazyLoad key={index} placeholder={<Loading />}>
            <Card raised="true" key={index} className={props.classes.discussion}>
              <Link className={props.classes.clickableCard} to={`/f/${discussion.subforum}/discussion/${discussion.id}/`}>
                <CardMedia
                  className={props.classes.discussionImg}
                  image={logo}
                  title="Lambda Logo"
                />
                <Grid container className={props.classes.topDiscussionContainer}>
                  <Typography variant="h6" component="h3" className={props.classes.discussionTitle}>{discussion.title}</Typography>
                  <Link to={`/f/${discussion.subforum}`}>
                    {/* change back to subForumName */}
                    <Typography variant="caption" className={props.classes.subForum}>{`/f/${discussion.subforum}`}</Typography>
                  </Link>
                  {/* Change back to ownerName */}
                  <Typography variant="body" >{` Posted by ${discussion.owner} - ${moment(discussion.created_at).fromNow()}`}</Typography>
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

                    <IconButton className={upvoteState.includes(discussion.id) ? props.classes.upvoteBtn : null}
                      name="upvote" onClick={(e) => handleVote(discussion.id, discussion.upvote, 'upvote', upvoteState, downvoteState, e)}>
                      <Icon>arrow_upward</Icon>
                    </IconButton>
                    <Votes
                      upvote={discussion.upvote}
                      downvote={discussion.downvote}
                      netUpvote={props.classes.netUpvote}
                      netDownvote={props.classes.netDownvote}
                    />
                    <IconButton className={downvoteState.includes(discussion.id) ? props.classes.downvoteBtn : null}
                      name="downvote" onClick={(e) => handleVote(discussion.id, discussion.downvote, 'downvote', upvoteState, downvoteState, e)}>
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
      {/* {nextList.length !== 0 ? nextList.map(list => {
        return(
          <Button onClick={(e) => handleNextList(e)}></Button>
        )
      }): 'Loading'} */}
      {pageNumbers.length > 0 ? pageNumbers.map(pageNum => {
        return (
          <Button onClick={() => handleNextList(pageNum)}>{pageNum}</Button>
        )
      }) : null}
    </>
  )
})