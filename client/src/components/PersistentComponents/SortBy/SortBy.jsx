import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NativeSelect } from '@material-ui/core/';
import { useGlobal } from 'reactn';



const SortBy = props => {
  const [filter, updateFilter] = useState('recent');

  const [discussionList, updateDiscussionList] = useGlobal('discussionList');

  // Function that runs on each render and sorts list based on chosen option
  // useEffect(() => {
  //   if (filter === "Recent") {

  //   } else if (filter === "Upvote") {

  //   } else if (filter === "Comments") {
  //     let commentsNumberList = [];
  //     let sortedList = [];
  //     let copyList = [...discussionList];

  //     for (let i = 0; i < discussionList.length; i++) {
  //       commentsNumberList.push(discussionList[i].commentsNumber)
  //     }
  //     commentsNumberList = commentsNumberList.sort((a, b) => b - a)
  //     console.log(commentsNumberList);

  //     for (let n = 0; sortedList.length !== discussionList.length; n++) {
  //       for (let i = 0; i < discussionList.length; i++) {
  //         if (discussionList[i].commentsNumber === commentsNumberList[n]) {
  //           sortedList.push(discussionList[i]);
  //         } else {
  //         }
  //       }
  //     }
  //     console.log(sortedList)
  //   }
  // })

  // useEffect(()=> {
  //   updateDiscussionList(sortedList);
  //   sortedList = [];
  // })

  const handleSortBy = e => {
    const currentSortBy = e.target.value;

    //Condition allows for avoiding redundant updating of state if clicking on the same sort option.
    if (filter !== currentSortBy) {
      async function waitForFilter(){
        await updateFilter(currentSortBy);
      };
      waitForFilter().then( () => {
        if (filter === "Recent") {

        } else if (filter === "Upvote") {
          let upvotesNumberList = [];
          let sortedList = [];
  
          for(let i = 0; i < discussionList.length; i++){
            upvotesNumberList.push(discussionList[i].upvote)
          }
          console.log(`before ${upvotesNumberList}`)
  
          upvotesNumberList = upvotesNumberList.sort((a,b) => b - a)
          console.log(`after ${upvotesNumberList}`)
  
          for( let n = 0; sortedList.length !== discussionList.length; n++){
            for(let i = 0; i < discussionList.length; i++ ){
              if(discussionList[i].upvote === upvotesNumberList[n]){
                sortedList.push(discussionList[i])
              }else{
  
              }
            }
          }
  
          updateDiscussionList(sortedList);
          
        } else if (filter === "Comments") {
          let commentsNumberList = [];
          let sortedList = [];
  
          for (let i = 0; i < discussionList.length; i++) {
            commentsNumberList.push(discussionList[i].commentsNumber)
          }
          commentsNumberList = commentsNumberList.sort((a, b) => b - a)
          console.log(commentsNumberList);
  
          for (let n = 0; sortedList.length !== discussionList.length; n++) {
            for (let i = 0; i < discussionList.length; i++) {
              if (discussionList[i].commentsNumber === commentsNumberList[n]) {
                sortedList.push(discussionList[i]);
              } else {
              }
            }
          }
          console.log(sortedList)
          updateDiscussionList(sortedList);
          console.log(discussionList);
        }
      })



      }
  }

  return (
    <div>
      <NativeSelect className={props.classes.sortBy} onChange={(e) => handleSortBy(e)}>
        <option value="Recent">Recent</option>
        <option value="Upvote">Upvote</option>
        <option value="Comments">Comments</option>
      </NativeSelect>
    </div>
  )
}

export default SortBy;