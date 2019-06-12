import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Navigation from '../../PersistentComponents/Navigation/Navigation';
import TopDiscussionsContainer from './TopDiscussionsContainer';
import { styles } from './LandingPage.style.js';
import axios from 'axios';


// const HOST = 'https://discussion-board-api-test.herokuapp.com/'


export default withStyles(styles)(props => {
  const {classes} = props;


  // useEffect(()=> {
  //   //List of discussions
  //   axios.get(`${HOST}api/discussions/`)
  //   .then(res => {
  //     console.log(res.data)
  //   }).catch(err => {
  //     console.log(err);
  //   });

  //   axios.get(`${HOST}api/comments/`)
  //   .then(res => {
  //     console.log(res)
  //   }).catch(err => {
  //     console.log(err)
  //   });
  //   // //Need to get users and subtopics 
  //   // // by respective ids to get thier info for display

  //   //user
  //   axios.get(`${HOST}api/users/`)
  //   .then(res => {
  //     console.log(res)
  //   }).catch(err => {
  //     console.log(err)
  //   });

  //   //subtopic
  //   // axios.get(`${HOST}api/subtopics/`)
  //   // .then(res => {
  //   //   console.log(res)
  //   // }).catch(err => {
  //   //   console.log(err)
  //   // })
  // })

//create user

//subtopic

//create discussion

  return (
    <div>
      {/* <Navigation /> */}
      <TopDiscussionsContainer classes={classes}/>
    </div>
  )
})
