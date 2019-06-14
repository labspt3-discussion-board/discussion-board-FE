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

  //Axios call for discussion data from database
  useEffect(() => {
    //List of discussions
    // axios.get(`${HOST}api/discussions/`)
    //   .then(res => {
    //     console.log(res.data)
    //     updateDiscussionList(res.data);
    //   }).catch(err => {
    //     console.log(err);
    //   });
      axios.get(`${HOST}api/${props.discListType}/`)
        .then(res => {
          console.log(res.data.slice(0, 10))
          updateDiscussionList(res.data.slice(0, 10))
        }).catch(err => {
          console.log(err);
        });

    /* Comments model doesn't currently store any info on number
    of comments per discussion. Implement once I can get that
    info
    axios.get(`${HOST}api/comments/`)
    .then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    });*/


    // //Need to get users and subtopics 
    // // by respective ids to get thier info for display

    //subtopic
    // axios.get(`${HOST}api/subtopics/`)
    // .then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })
  }, [])

  useEffect(()=> {
    axios.get(`${HOST}api/users/`)
      .then(res => {
        console.log(res.data)
        let userList = res.data;
        let discussionOwner = discussionList;

        for (let n = 0; n < userList.length; n++) {

          for (let i = 0; i < discussionOwner.length; i++) {
            if (discussionOwner[i]['owner'] === userList[n]['id']) {
              discussionOwner[i].ownerName = userList[n]['username'];
            }
          }
        }
        updateDiscussionList(discussionOwner)
      }).catch(err => {
        console.log(err)
      });

      axios.get(`${HOST}api/subforums/`)
      .then(res => {
        console.log(res.data)
        let subForumsList = res.data;
        let discussionSubForums = discussionList;

        for (let n = 0; n < subForumsList.length; n++) {

          for (let i = 0; i < discussionSubForums.length; i++) {
            if (discussionSubForums[i]['subforum'] === subForumsList[n]['id']) {
              discussionSubForums[i].subForumName = subForumsList[n]['name'];
            }
          }
        }
        updateDiscussionList(discussionSubForums)
      }).catch(err => {
        console.log(err)
      });

  },[discussionList]);

  // let counter = 0;

  // useEffect(() => {
  //   //user
  //   /*Need to modify data getting sent back on request. 
  //   Should not be getting back password*/
  //   // function discussionModification(AppendedList, propName1, propName2,propName3, res){
  //   //   let tempList = res;
  //   //     let outputList = discussionList;
  //   //     //might have to use a double for in loop or just use for loop
  //   //     // for(let user in userList) {
  //   //     for (let n = 0; n < tempList.length; n++) {


  //   //       // console.log(userList[n])
  //   //       for (let i = 0; i < outputList.length; i++) {
  //   //         // console.log(userList[n])
  //   //         if (outputList[i][propName1] === tempList[n][propName2]) {
  //   //           // console.log(userList[n])
  //   //           // console.log(discussionOwner[i].owner)
  //   //           outputList[i][propNam] = tempList[n][propName3];
  //   //         }
  //   //       }
  //   //     }
  //   //     // }
  //   //     function doSomething(){
  //   //       if(counter === 0){
  //   //         updateDiscussionList(discussionOwner)
  //   //         counter++
  //   //       }else{

  //   //       }
  //   // }


  //   axios.get(`${HOST}api/users/`)
  //     .then(res => {
  //       console.log(discussionList)
  //       let userList = res.data;
  //       let discussionOwner = discussionList;
  //       //might have to use a double for in loop or just use for loop
  //       // for(let user in userList) {
  //       for (let n = 0; n < userList.length; n++) {


  //         // console.log(userList[n])
  //         for (let i = 0; i < discussionOwner.length; i++) {
  //           // console.log(userList[n])
  //           if (discussionOwner[i]['owner'] === userList[n]['id']) {
  //             // console.log(userList[n])
  //             // console.log(discussionOwner[i].owner)
  //             discussionOwner[i].ownerName = userList[n]['username'];
  //           }
  //         }
  //       }
  //       // }
  //       function doSomething() {
  //         if (counter === 0) {
  //           updateDiscussionList(discussionOwner)
  //           counter++
  //         } else {

  //         }
  //         // updateDiscussionList(discussionOwner)
  //         // counter++
  //       }
  //       // doSomething();
  //       // updateDiscussionList(discussionOwner)
  //       console.log(res.data)
  //       console.log(discussionOwner)
  //     }).catch(err => {
  //       console.log(err)
  //     });

  //   axios.get(`${HOST}api/subtopics/`)
  //     .then(res => {
  //       console.log(res.data)
  //       let subtopicList = res.data;
  //       let discussionSubtopic = discussionList;

  //       for (let n = 0; n < subtopicList.length; n++) {

  //       }
  //     }).catch(err => {
  //       console.log(err)
  //     })
  // }, [discussionList])


  const handleVote = (e) => {
    const vote = e.target.name;
    console.log(e.target.color)

    if (vote === 'upvote') {
      // axios.put(`${HOST}api/discussions/`)
    } else {

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

  return (
    <>
      {discussionList.length !== 0 ? discussionList.map((discussion, index) => {
        return (
          <LazyLoad key={index} placeholder={<Loading />}>
            <Card key={index} className={props.classes.discussion}>
              <CardMedia
                className={props.classes.discussionImg}
                image={logo}
                title="Lambda Logo"
              />
              <div className={props.classes.topDiscussionContainer}>
                <Typography variant="h6" component="h3" className={props.classes.discussionTitle}>{discussion.title}</Typography>
                <Typography variant="caption" className={props.classes.subForum}>{`/f/${discussion.subForumName}`}</Typography>
                {/* switch back to ownerName */}
                <Typography variant="body" >{` Posted by ${discussion.ownerName} - ${moment(discussion.created_at).fromNow()}`}</Typography>
                <Typography>{discussion.description}</Typography>
              </div>
              <Grid container direction="column" className={props.classes.rightContainer}>
                <Grid container direction="column" justify="center" className={props.classes.comments}>
                  <Typography>Comments</Typography>
                  <Typography className={props.classes.commentsNumber}>{discussion.comment_count}</Typography>
                </Grid>
                <Grid container justify="center" className={props.classes.votes}>
                  <Grid container direction="column">
                    {/* Add conditional to make one button have color based on
                    whether user voted */}
                    <IconButton className={props.classes.upvoteBtn} name="upvote" onClick={(e) => { handleVote(e) }}>
                      <Icon>arrow_upward</Icon>
                    </IconButton>
                    <Votes
                      upvote={discussion.upvote}
                      downvote={discussion.downvote}
                      netUpvote={props.classes.netUpvote}
                      netDownvote={props.classes.netDownvote}
                    />
                    <IconButton className={props.classes.downvoteBtn} name="downvote" onClick={(e) => { handleVote(e) }}>
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