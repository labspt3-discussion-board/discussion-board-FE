import React from 'react';
import { useGlobal } from 'reactn';
import LazyLoad from 'react-lazyload';
import { Typography, Icon, CircularProgress } from '@material-ui/core'

import HOST from '../../../Host/Host';

const Loading = () => {
  return (
    <div>
      <h5>Loading...</h5>
    </div>
  )
}

export default props => {

  const [discussionList, updateDiscussionList] = useGlobal('discussionList');
  console.log(discussionList)

//Axios call for discussion data from database
  // useEffect(() => {
  //   //List of discussions
  //   // axios.get(`${HOST}api/discussions/`)
  //   //   .then(res => {
  //   //     console.log(res.data)
  //   //     updateDiscussionList(res.data);
  //   //   }).catch(err => {
  //   //     console.log(err);
  //   //   });

  //   axios.get(`${HOST}api/topdiscussions/`)
  //     .then(res => {
  //       console.log(res.data)
  //       updateDiscussionList(res.data)
  //     }).catch(err => {
  //       console.log(err);
  //     })

  //   /* Comments model doesn't currently store any info on number
  //   of comments per discussion. Implement once I can get that
  //   info
  //   axios.get(`${HOST}api/comments/`)
  //   .then(res => {
  //     console.log(res)
  //   }).catch(err => {
  //     console.log(err)
  //   });*/


  //   // //Need to get users and subtopics 
  //   // // by respective ids to get thier info for display

  //   //subtopic
  //   // axios.get(`${HOST}api/subtopics/`)
  //   // .then(res => {
  //   //   console.log(res)
  //   // }).catch(err => {
  //   //   console.log(err)
  //   // })
  // }, [])

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

  return (
    <div className={props.classes.topDiscussions}>
      {discussionList ? discussionList.map((discussion, index) => {
        return (
          <LazyLoad key={index}>
            <div key={index} className={props.classes.discussion}>
              <div className={props.classes.topDiscussionContainer}>
                <Typography className={props.classes.discussionTitle}>{discussion.title}</Typography>
                <Typography className={props.classes.subtopic}>{`/d/${discussion.subtopic}`}</Typography>
                {/* switch back to ownerName */}
                <Typography>{`${discussion.ownerName} - ${discussion.created_at}`}</Typography>
                <Typography>{discussion.description}</Typography>
              </div>
              <div className={props.classes.comments}>
                <Typography>Comments</Typography>
                <Typography className={props.classes.commentsNumber}>{discussion.comment_count}</Typography>
              </div>
              <div className={props.classes.votes}>
                <div>
                  <Icon>arrow_upward</Icon>
                  <Typography>{discussion.upvote}</Typography>
                </div>
                <div>
                  <Icon>arrow_downward</Icon>
                <Typography>Downvote:{discussion.downvote}</Typography>
                </div>
              </div>
            </div>
          </LazyLoad>
        )
      }) : <CircularProgress/>}
      {discussionList.length === 0 ? 
      <div>
        <CircularProgress className={props.classes.failedLoading}color="secondary"/>
        </div> : null}

    </div>
  )
};
